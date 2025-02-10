                        1.What are functions in JavaScript?

A function in JavaScript is a block of reusable code that performs a specific task.
 Functions reduce redundancy, improve code organization, and increase reusability.

                         2.How to Declare a Function in JavaScript?

There are three main ways to declare functions in JavaScript:

                         1. Function Declaration (Named Function)

Uses the function keyword.
Can be called before its declaration due to hoisting.

  Syntax:
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

                          2. Function Expression (Anonymous Function)

A function is stored inside a variable.
Cannot be called before its declaration (not hoisted).

  Syntax:
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Bob")); 

                            3. Arrow Function (ES6)

A shorter syntax for writing functions.
Uses => instead of function keyword.

Syntax:
const greet = (name) => "Hello, " + name + "!";
console.log(greet("Charlie"));
If only one parameter, parentheses can be omitted:
const square = num => num * num;
If multiple lines, use {} and return:
const add = (a, b) => { return a + b; };

                               Function Parameters & Default Values

Functions can take multiple parameters and have default values.
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet());      
console.log(greet("David")); 


                              Function with Return vs. Void Function

Function that Returns a Value

function add(a, b) {
    return a + b;
}
console.log(add(3, 4));

                             Function Without return (Void Function)

function printMessage() {
    console.log("This is a message.");
}
printMessage();
A function without return returns undefined by default.


  
