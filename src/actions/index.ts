import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
      email: z.string().email('Please enter a valid email address'),
      phone: z.string().optional(),
      service: z
        .enum([
          'general',
          'career-guidance',
          'qualification-recognition',
          'mentorship-mentee',
          'mentorship-mentor',
          'networking-events',
          'partnership',
          'other',
        ])
        .default('general'),
      subject: z.string().max(150, 'Subject is too long').optional().default(''),
      message: z.string().min(10, 'Message must be at least 10 characters').max(3000, 'Message is too long'),
      botField: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
    }),
    handler: async (input) => {
      // Spam honeypot detection
      if (input.botField && input.botField.length > 0) {
        return { success: true, simulated: true };
      }

      const procEnv = typeof process !== 'undefined' ? process.env : {};
      const resendApiKey = import.meta.env.RESEND_API_KEY || procEnv['RESEND_API_KEY'];
      const contactToEmail =
        import.meta.env.CONTACT_TO_EMAIL || procEnv['CONTACT_TO_EMAIL'] || 'info@interprofinland.fi';
      const fromEmail =
        import.meta.env.CONTACT_FROM_EMAIL ||
        procEnv['CONTACT_FROM_EMAIL'] ||
        'InterProFinland Contact <onboarding@resend.dev>';

      // If no valid key is provided in development/staging, log safely
      if (
        !resendApiKey ||
        resendApiKey.includes('your_resend_api_key_here') ||
        resendApiKey.startsWith('re_your_')
      ) {
        console.warn(
          '[Contact Action] RESEND_API_KEY is not set or is a placeholder. Form submission logged safely:',
          {
            from: `${input.name} <${input.email}>`,
            service: input.service,
            subject: input.subject,
            to: contactToEmail,
            date: new Date().toISOString(),
          }
        );
        return {
          success: true,
          simulated: true,
          message: 'Message processed (development mode: RESEND_API_KEY not configured).',
          data: {
            name: input.name,
            email: input.email,
            service: input.service,
            subject: input.subject,
          },
        };
      }

      try {
        const resend = new Resend(resendApiKey);

        const emailSubject = input.subject && input.subject.trim().length > 0 
          ? input.subject 
          : `Inquiry: ${input.service}`;

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
              ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
              <p><strong>Service / Interest:</strong> ${input.service}</p>
              <p><strong>Subject:</strong> ${input.subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #1E3A8A; border-radius: 4px;">
                <p style="margin-top: 0;"><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; margin-bottom: 0;">${input.message}</p>
              </div>
              <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                Sent from InterProFinland website contact form on ${new Date().toLocaleString('en-FI', { timeZone: 'Europe/Helsinki' })} (Helsinki Time).
              </p>
            </div>
          `,
        });

        if (error) {
          console.error('[Resend Error]', error);
          throw new Error(error.message || 'Failed to send email via Resend.');
        }

        return {
          success: true,
          id: data?.id,
          message: 'Thank you! Your message has been sent successfully.',
        };
      } catch (err: any) {
        console.error('[Contact Action Error]', err);
        throw new Error(err.message || 'An unexpected error occurred while sending your message.');
      }
    },
  }),
};
