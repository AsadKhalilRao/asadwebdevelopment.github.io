// Calling the function before declaration of the function
cool();
// function declaration
function cool() {
  console.log('This is super cool function');
}

// Accessing variable_x before its been created
// console.log(variable_x);
// let variable_x = 100;

// Creating an anonymous function and setting it to variable
// Anonymous function are not hoisted, hence we should call the function after
// function declaration
let variable_y = function () {
  console.log('Anonymous Function');
};
// Calling the function after the declaration of the function
variable_y();

//****************************Template Literals******************************************//
// Use two back ticks ``(left to 1) also known as template literal.
// To create template literal where we can add dynamic text /value, wrap text within back ticks `` , instead of regular quotes.
// We can add dynamic text/value inside the two back ticks using ${}.
// Inside {} you can include an expression, dynamic value, dynamic text.
let variable_a = 'Asad Rao';
console.log(`Hello my name is ${variable_a}`);
