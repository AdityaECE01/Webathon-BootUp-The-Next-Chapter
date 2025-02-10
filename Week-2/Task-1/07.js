1. What is a callback function ?

  A callback function is a function that is passed as an argument to another 
  function and executed later.

2. Why are Callback Functions Important?
  
1. Asynchronous Operations: Callbacks allow JavaScript to handle tasks like API calls, 
  file reading, or timers without blocking execution.
2. Modularity & Reusability: They help write modular, reusable code by allowing dynamic behavior.
3. Event Handling: Used in event listeners like onclick, onmouseover, etc.
4. Higher-Order Functions: Many built-in functions like map(), filter(), and setTimeout() 
  use callbacks.

Example 1: Basic Callback Function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); 
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);
