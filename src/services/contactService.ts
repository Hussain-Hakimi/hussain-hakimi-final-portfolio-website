export interface ContactPayload { name: string; email: string; message: string; }

export async function submitContactForm(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.message) throw new Error('Please complete all contact fields.');
  // Replace this endpoint when a backend/contact provider is connected.
  return { accepted: true };
}
