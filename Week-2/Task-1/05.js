Explain the difference between null and undefined in JavaScript.

                            Null

1.Null is an explicit assignment of "no value."

2.It is used when a developer wants to intentionally indicate that a variable has no value.

3.The type of null is "object" (this is a known JavaScript bug).

Example:
let myVar = null;
console.log(myVar);        
console.log(typeof myVar); 


                              Undefined

1.Undefined means a variable has been declared but not assigned a value.

2.It is the default value of uninitialized variables or function parameters that were not provided.

3.The type of undefined is "undefined".

  Example:
let myVar;
console.log(myVar);        
console.log(typeof myVar); 
