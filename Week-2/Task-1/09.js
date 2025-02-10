Write a JavaScript function that checks whether a number is prime.

  function isPrime(num)
  {
    if (num < 2) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 29;
console.log(number + " is prime? " + isPrime(number));
