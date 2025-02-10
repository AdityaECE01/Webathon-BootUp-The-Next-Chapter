How many loops in JavaScript, and how do they work?

                         1. for Loop 

Runs a set number of times.
Consists of:
Initialization (let i = 0): 
Condition (i < 5): Runs while this is true.
Increment/Decrement (i++): 
Example:
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

                      2. while Loop 

Runs as long as the condition is true.
Used when the number of iterations is unknown.
Example:
let i = 1;
while (i <= 5) {
    console.log("Iteration:", i);
    i++;
}

                       3. do...while Loop

Runs once, then checks the condition.
If the condition is true, it continues looping.
Example:
let i = 1;
do {
    console.log("Iteration:", i);
    i++;
} while (i <= 5);


                       4. for...in Loop 

Used for objects to loop over keys.
Example:
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}


                     5. for...of Loop 

Used for arrays, strings, Maps, Sets.
Example:
let numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}

                      6. break & continue 

    break: Stops the loop immediately
for (let i = 1; i <= 5; i++) {
    if (i === 3) break; 
    console.log(i);
}
    continue: Skips to the next iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; 
    console.log(i);
}
