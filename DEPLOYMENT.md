# Deployment checklist

This project is a Vite + React application deployed on Vercel. The contact form uses the Vercel function at `/api/contact` and Resend to deliver messages.

## Configure contact delivery

In Vercel, open **Project Settings → Environment Variables** and add these for Production (and Preview if desired):

- `RESEND_API_KEY`: a secret API key from Resend.
- `CONTACT_TO_EMAIL`: the inbox that should receive messages.
- `CONTACT_FROM_EMAIL`: a sender address/domain verified in your Resend account.

Optionally add `VITE_CONTACT_EMAIL` if you want a public email link displayed on the site. Do not expose `RESEND_API_KEY` in a `VITE_*` variable or commit it to Git.

After adding variables, redeploy and send a test message through the live contact page. The form must not be considered production-ready until this test succeeds.

## Before publishing

- [ ] Confirm project descriptions, dates, technologies, and role claims.
- [ ] Replace the resume PDF with the latest approved version if needed.
- [ ] Add real repository/demo URLs when available.
- [ ] Add lesson videos, notes, and code links only after each resource is published.
- [ ] Run `npm ci`, `npm run typecheck`, `npm run build`, and `npm audit --audit-level=high`.
- [ ] Test navigation, contact form, and resource pages on desktop and mobile.
- [ ] Confirm Vercel deploys the intended branch before promoting it to production.
