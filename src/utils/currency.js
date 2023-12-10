export function formatCurrency(amount, options) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
}
