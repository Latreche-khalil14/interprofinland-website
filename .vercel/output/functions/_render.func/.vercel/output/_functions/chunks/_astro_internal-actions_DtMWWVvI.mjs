import './_astro_actions_BInojOpZ.mjs';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { Resend } from 'resend';
import { A as AstroError, h as ActionCalledFromServerError } from './astro/assets-service_DfW5Etn1.mjs';
import { i as isActionAPIContext } from './utils_Cwo9_uli.mjs';
import { c as callSafely, b as ActionError, d as ActionInputError } from './shared_C19WoV-B.mjs';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = getFormServerHandler(handler, inputSchema) ;
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function" || !isActionAPIContext(this)) {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
      email: z.string().email("Please enter a valid email address"),
      phone: z.string().optional(),
      service: z.enum([
        "general",
        "career-guidance",
        "qualification-recognition",
        "mentorship-mentee",
        "mentorship-mentor",
        "networking-events",
        "partnership",
        "other"
      ]).default("general"),
      subject: z.string().max(150, "Subject is too long").optional().default(""),
      message: z.string().min(10, "Message must be at least 10 characters").max(3e3, "Message is too long"),
      botField: z.string().max(0, "Spam detected").optional().or(z.literal(""))
    }),
    handler: async (input) => {
      if (input.botField && input.botField.length > 0) {
        return { success: true, simulated: true };
      }
      typeof process !== "undefined" ? process.env : {};
      const resendApiKey = "re_your_resend_api_key_here";
      const contactToEmail = "info@interprofinland.fi";
      const fromEmail = "InterProFinland Contact <onboarding@resend.dev>";
      if (resendApiKey.includes("your_resend_api_key_here") || resendApiKey.startsWith("re_your_")) {
        console.warn(
          "[Contact Action] RESEND_API_KEY is not set or is a placeholder. Form submission logged safely:",
          {
            from: `${input.name} <${input.email}>`,
            service: input.service,
            subject: input.subject,
            to: contactToEmail,
            date: (/* @__PURE__ */ new Date()).toISOString()
          }
        );
        return {
          success: true,
          simulated: true,
          message: "Message processed (development mode: RESEND_API_KEY not configured).",
          data: {
            name: input.name,
            email: input.email,
            service: input.service,
            subject: input.subject
          }
        };
      }
      try {
        const resend = new Resend(resendApiKey);
        const emailSubject = input.subject && input.subject.trim().length > 0 ? input.subject : `Inquiry: ${input.service}`;
        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: [contactToEmail],
          replyTo: input.email,
          subject: `[InterProFinland Contact] [${input.service.toUpperCase()}] ${emailSubject}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #131F5B; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #131F5B; border-bottom: 2px solid #FFD26F; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
              ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
              <p><strong>Service / Interest:</strong> ${input.service}</p>
              <p><strong>Subject:</strong> ${input.subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #1E3A8A; border-radius: 4px;">
                <p style="margin-top: 0;"><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; margin-bottom: 0;">${input.message}</p>
              </div>
              <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                Sent from InterProFinland website contact form on ${(/* @__PURE__ */ new Date()).toLocaleString("en-FI", { timeZone: "Europe/Helsinki" })} (Helsinki Time).
              </p>
            </div>
          `
        });
        if (error) {
          console.error("[Resend Error]", error);
          throw new Error(error.message || "Failed to send email via Resend.");
        }
        return {
          success: true,
          id: data?.id,
          message: "Thank you! Your message has been sent successfully."
        };
      } catch (err) {
        console.error("[Contact Action Error]", err);
        throw new Error(err.message || "An unexpected error occurred while sending your message.");
      }
    }
  })
};

export { server };
