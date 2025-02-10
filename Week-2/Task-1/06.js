                       What is the difference between var, let, and const in JavaScript?



                                1.var (Function-Scoped)


Function-scoped: Accessible throughout the function in which it is declared.

Can be redeclared and reassigned.

Hoisted with an undefined value.

No block scope: Variables declared inside {} are still accessible outside.

  Example:
var x = 10;
if (true) {
    var x = 20; 
}
console.log(x); 

                                 2. let (Block-Scoped)



Block-scoped: Only accessible within {} where it is defined.

Cannot be redeclared in the same scope but can be reassigned.

Hoisted but not initialized (causes ReferenceError if accessed before declaration).

Example:
let y = 10;
if (true) {
    let y = 20; 
    console.log(y); 
}
console.log(y); 

                               3. const (Block-Scoped & Immutable)



Block-scoped: Like let, it is only accessible within {}.

Cannot be redeclared or reassigned (must be initialized at declaration).

Hoisted but not initialized (causes ReferenceError if accessed before declaration).

Example:
const z = 30;
z = 40; 
However, objects declared with const can have their properties changed:
const person = { name: "John" };
person.name = "Alice";
console.log(person.name); 
