Write a JavaScript function to check if a number is a palindrome.
  

  function isPalindrome(num) 
{
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0)
    {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit; 
        num = Math.floor(num / 10); 
    }

    return originalNum === reversedNum;
}
let number = 121;
console.log(number + " is a palindrome? " + isPalindrome(number));
