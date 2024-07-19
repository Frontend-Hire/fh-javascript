/**
 * Calculates the total sales from an array of sales data.
 *
 * @param {Array<{amount: number}>} salesData - An array of objects representing sales data. Each object should have an 'amount' property.
 * @return {number} The total sales calculated from the input array.
 */
export const processSalesData = (salesData) => {
  let validSales = [];
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].amount > 0) {
      validSales.push(salesData[i]);
    }
  }

  let totalSales = 0;
  for (let i = 0; i < validSales.length; i++) {
    totalSales += validSales[i].amount;
  }

  return totalSales;
};
