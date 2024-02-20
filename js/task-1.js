// Task-1
function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

const resultFn_1 = makeTransaction(5, 3000);
console.log(resultFn_1);
const resultFn_2 = makeTransaction(3, 1000);
console.log(resultFn_2);
const resultFn_3 = makeTransaction(10, 500);
console.log(resultFn_3);

