/**
 * Processes an order based on its payment and shipping status.
 *
 * @param {{isPaid: boolean, isShipped?: boolean, isCanceled?: boolean}} order - An object representing the order, with boolean properties 'isPaid', 'isShipped', and 'isCanceled'.
 * @return {string} A message describing the order's status.
 */
export function processOrder(order) {
  let result;

  if (order.isPaid) {
    if (order.isShipped) {
      result = 'Order is shipped.';
    } else {
      if (order.isCanceled) {
        result = 'Order is canceled.';
      } else {
        result = 'Order is paid but not shipped.';
      }
    }
  } else {
    result = 'Order is not paid.';
  }
  return result;
}
