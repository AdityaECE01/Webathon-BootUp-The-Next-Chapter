Write a function that prints the multiplication table of a number using a while loop.


  
function printMultiplicationTable(num) 
{
    let i = 1;
    while (i <= 10) 
    {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}

let number = 5;
printMultiplicationTable(number);
