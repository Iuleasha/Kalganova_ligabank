export const CURRENCIES = ["RUB", "USD", "EUR", "GBR", "CNY"];

export const CURRENT_ISO_DATE = new Date().toISOString().split("T")[0];

export const getMinDateFromCurrent = (date) =>
  new Date(new Date().setDate(new Date().getDate() - date))
    .toISOString()
    .split("T")[0];
