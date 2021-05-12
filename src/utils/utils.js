export const uniqueId = () => `id-${Math.random().toString(36).substr(2, 9)}`;

export const formatDate = (date) => new Date(date).toLocaleDateString("ru-RU");

export const fixedNumber = (value) =>
  value % 1 === 0 ? value : value.toFixed(2);
