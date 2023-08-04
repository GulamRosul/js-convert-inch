// const myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;
// console.log('dada feet', dadaFeet);

// const dadiInch = 60;
// const dadiFeet = dadiInch / 12;
// console.log('dadiFeet', dadiFeet)


function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);
