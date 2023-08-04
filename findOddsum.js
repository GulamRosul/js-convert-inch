// function getSum(numbers) {
//     console.log(numbers)
// }

// const myNumbers = [12, 65, 78, 87, 95, 93];
// getSum(myNumbers);


function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        // console.log(index, element, sum);
    }
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 === 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        
    }
    return oddNumbers;
}
const myNumbers = [12, 65, 26, 53, 54, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('odd number sum', oddNumberSum);
