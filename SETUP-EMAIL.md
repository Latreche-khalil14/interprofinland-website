# 📧 Setup Contact Form Email

## Current Status
✅ Contact form page exists (`/src/pages/contact.astro`)  
✅ Astro Actions configured (`/src/actions/index.ts`)  
✅ Resend package installed (`resend@6.25.0`)  
❌ Need to configure Resend API Key

---

## Step-by-Step Setup

### 1. Get Resend API Key (FREE)

1. Go to: **https://resend.com**
2. Sign up for free account (100 emails/day free tier)
3. Click **"API Keys"** in sidebar
4. Click **"Create API Key"**
5. Copy the key (starts with `re_...`)

### 2. Add API Key to `.env`

Open `.env` file and replace this line:

```env
RESEND_API_KEY=re_your_resend_api_key_here
```

With your actual key:

```env
RESEND_API_KEY=re_AbCdEf123456789_YOUR_ACTUAL_KEY_HERE
```

### 3. Configure Email Addresses

In `.env`, you can customize these:

```env
# Where emails will be sent TO
CONTACT_TO_EMAIL=info@interprofinland.fi

# Who the email appears FROM (for testing use Resend's default)
CONTACT_FROM_EMAIL=InterProFinland Contact <onboarding@resend.dev>
```

**Note:** For production, you need to verify your domain in Resend to use `@interprofinland.fi` as sender.

### 4. Restart Development Server

After changing `.env`:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

### 5. Test the Form

1. Go to: http://localhost:4321/contact
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox at `info@interprofinland.fi`

---

## Production Deployment (Vercel)

### On Vercel Dashboard:

1. Go to your project **Settings** → **Environment Variables**
2. Add these variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_YourProductionKey` |
| `CONTACT_TO_EMAIL` | `info@interprofinland.fi` |
| `CONTACT_FROM_EMAIL` | `InterProFinland <noreply@interprofinland.fi>` |
| `PUBLIC_SITE_URL` | `https://www.interprofinland.fi` |

3. **Redeploy** your site

### Verify Domain in Resend (Production):

To use `@interprofinland.fi` as sender email:

1. In Resend Dashboard → **Domains**
2. Click **"Add Domain"**
3. Enter: `interprofinland.fi`
4. Add the DNS records to your domain registrar:
   - MX records
   - DKIM record
   - SPF record
5. Wait for verification (usually 5-10 minutes)

---

## How It Works

### Development Mode (Testing)
- Uses `onboarding@resend.dev` as sender (no domain verification needed)
- Sends to any email address
- Free: 100 emails/day

### Production Mode
- Uses your verified domain: `noreply@interprofinland.fi`
- Professional appearance
- Reply-To automatically set to user's email

---

## Troubleshooting

### ❌ "RESEND_API_KEY not configured"
**Solution:** Add valid API key to `.env` and restart dev server

### ❌ Email not arriving
**Checks:**
1. Check spam folder
2. Verify API key is correct
3. Check Resend dashboard → **Logs** for errors
4. Ensure `CONTACT_TO_EMAIL` is correct

### ❌ "Domain not verified" error
**Solution (Production only):**
- Use `onboarding@resend.dev` temporarily
- OR verify domain in Resend dashboard

---

## Form Features

✅ **Server-side validation** with Zod  
✅ **Spam protection** (honeypot field)  
✅ **Client-side validation** (real-time)  
✅ **Professional email template** (HTML)  
✅ **Reply-To** set to sender's email  
✅ **Mobile responsive**  
✅ **Accessible** (WCAG 2.2 AA)  
✅ **Success/Error messages**  

---

## Email Template Preview

When someone submits the form, you'll receive:

**Subject:** `[InterProFinland Contact] [CAREER-GUIDANCE] My Question`

**Body:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New Contact Form Message
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: John Smith
Email: john@example.com
Phone: +358 40 123 4567
Service / Interest: career-guidance
Subject: I need help with my CV

Message:
─────────────────────────────────
Hello, I'm an international professional 
looking for career guidance. Can you help me 
review my CV?
─────────────────────────────────

Sent from InterProFinland website contact form
on 2/9/2026, 3:45:00 PM (Helsinki Time)
```

---

## Security Notes

🔒 **RESEND_API_KEY is server-only** (never exposed to client)  
🔒 **Honeypot spam protection** (bots caught automatically)  
🔒 **Rate limiting** (add if needed via Vercel Edge Config)  
🔒 **Input validation** (Zod schema + client-side)  
🔒 **No stored data** (emails sent immediately)  

---

## Need Help?

- **Resend Docs:** https://resend.com/docs
- **Astro Actions:** https://docs.astro.build/en/guides/actions/
- **Check logs:** Look at terminal output when submitting form

---

**Ready!** Once you add your Resend API key, the contact form will work immediately! 🚀
