export const uniqueId = () => Math.random().toString(36).substr(2, 9);

export const formatDate = (date) => new Date(date).toLocaleDateString("ru-RU");

