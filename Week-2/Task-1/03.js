Find the Largest Number in an Array.

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty"; 
    }
    return Math.max(...arr); 
}
let numbers = [12, 45, 67, 89, 23, 56];
let largestNumber = findLargestNumber(numbers);

console.log("The largest number is:", largestNumber);
