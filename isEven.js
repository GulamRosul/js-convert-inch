// console.log(10 / 2);
// console.log(98 / 2);
// console.log(144 / 2);
// console.log(1286/ 2);

// console.log(11 / 2);
// console.log(99 / 2);
// console.log(147 / 2);
// console.log(1287/ 2);

// console.log(98 % 2);
// console.log(144 % 2);
// console.log(1286% 2);

// console.log(11 % 2);
// console.log(99 % 2);
// console.log(147 % 2);
// console.log(1287% 2);

function isEven(number) {
    const reaminder = number % 2;
    if (reaminder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumberIsEven = isEven(909);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(9090);
console.log(herNumberIsEven);