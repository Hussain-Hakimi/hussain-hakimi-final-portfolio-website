export const formatDate = (value: string) => new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value));
