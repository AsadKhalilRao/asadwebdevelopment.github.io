// Scope is realted to from where we can access the variables
// is scoped globally
// let keyword creates an independent variable and new variable
let myName = 'Inside the global scope';
// Accessing the variable with in a function
function myfuntion() {
  // below let key word creates an independent and new variable that is scope to {} of the mfunction original variable is  not the updated or
  // overwritten
  let myName = 'Inside myfunction';
  if (2 + 2 === 4) {
    // Accessing the myName variable
    // When the if condition is true and following line of code runs, JavaScrips first sees
    // if there is myName variable with in the curly brackets {} of the if statement
    // let keyword creates an independent new variable that is scoped to {} of if statement, original variable is not the updated or overwritten
    let myName = 'Inside if Statement';
    // The updated name is printed but only when myName variable is
    // accessed with in the {} of if statement
    console.log(myName);
  }
  // Accessing my myName variable outside the if {} parenthesis
  console.log(myName);
} // Calling myfunction that would create a myName variable
myfuntion();
console.log(myName);
