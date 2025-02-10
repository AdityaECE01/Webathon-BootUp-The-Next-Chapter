Write a function that takes an input of item prices and returns the total bill.

function calculateTotal(prices) 
{
    
    return prices.reduce((total, price) => total + price, 0);
}
let itemPrices = [10.50, 20.99, 5.75, 12.30]; 
let totalBill = calculateTotal(itemPrices);

console.log("Total Bill: $" + totalBill.toFixed(2));

  
