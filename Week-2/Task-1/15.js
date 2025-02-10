Write a function that checks if a given number is a perfect square?


function isPerfectSquare(num) {
    if (num < 0) return false; 

    let sqrt = Math.sqrt(num); 
    return sqrt === Math.floor(sqrt); 
}

let number = 25;
console.log(number + " is a perfect square? " + isPerfectSquare(number));
number = 26;
console.log(number + " is a perfect square? " + isPerfectSquare(number));
