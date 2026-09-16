export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload) {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (!name || !email || !message) {
    throw new Error('Please complete all contact fields.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  if (!endpoint) {
    throw new Error('The contact form is not configured yet. Please use the direct email link instead.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error('Unable to send your message right now. Please try again or use the direct email link.');
  }

  return { accepted: true };
}
