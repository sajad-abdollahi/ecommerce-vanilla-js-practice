export function getDiscountedPrice(product) {
  return (product.price - (product.price * product.discount) / 100).toFixed(2);
}
