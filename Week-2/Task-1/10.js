            Wite a program to print pattern.
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5  

Code. 
  
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        console.log(pattern.trim());
    }
}
printPattern(5);
