/**
 * Processes an order based on its payment and shipping status.
 *
 * @param {{isPaid: boolean, isShipped: boolean, isCancelled: boolean}} order - An object representing the order, with boolean properties 'isPaid', 'isShipped', and 'isCancelled'.
 * @return {string} A message describing the order's status.
 */
export function processOrder(order) {
  let result;

  if (order.isPaid) {
    if (order.isShipped) {
      result = 'Order is already shipped.';
    } else {
      if (order.isCancelled) {
        result = 'Order is cancelled.';
      } else {
        result = 'Order is paid but not shipped.';
      }
    }
  } else {
    result = 'Order is not paid.';
  }
  return result;
}
