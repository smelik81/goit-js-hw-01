// Task-2 first option
function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"




/*const result = getShippingMessage('Australia', 120, 50);
console.log(result);
const result2 = getShippingMessage('Germany', 80, 20);
console.log(result2);
const result3 = getShippingMessage('Sweden', 100, 20);
console.log(result3);

// Task-2 second option
 function getShippingMessage(country, price, deliveryFee) {
   let totalPrice = price + deliveryFee;
   console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
 
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);*/
