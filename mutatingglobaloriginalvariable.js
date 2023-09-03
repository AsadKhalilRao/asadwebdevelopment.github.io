// Scope is realted to from where we can access the variables
// is scoped globally
// let keyword creates an independent variable and new variable
// myName is a global scoped variable
let myName = 'Inside the global scope';
// Accessing the variable with in a function
function myfuntion() {
  // Mutating global scoped myName variabel inside the myfunction:
  // JavaScripe will see the myName variable and see whether myName variable exists inside myfuntion(current local scope) ,if myName variable does not then it will look one level up inside global scope,in the global scope myName exists hence the myName variable will be updated inside myfunction
  // Accessing global scoped myName variabel and setting its value to a string.
  myName = 'Inside myfunction';
  if (2 + 2 === 4) {
    // Mutating  global scoped myName variable inside the if condition:
    // JavaScripe will see the myName variable and see whether myName variable already exists inside if{}(current local scope) ,if myName variable does not then it will look one level up inside myfunction ,if it does not exits inside the myfunction then JavaScript will check one level up inside the global scope , in the global scope myName exists hence the myName variable will be updated inside if {}.
    // Accessing global scoped myName variabel and setting its value to a string.
    myName = 'Inside if Statement';
    console.log(myName);
  }
  // Accessing my myName variable outside the if {} parenthesis
  console.log(myName);
} // Calling myfunction that would create a myName variable
myfuntion();
console.log(myName);
