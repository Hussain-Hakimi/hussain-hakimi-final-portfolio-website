export const readingTime = (text: string) => `${Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200))} min read`;
