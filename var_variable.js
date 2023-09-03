// Var is global variable and can be accessed anywhere inside the program
var my_variable = 'Global Variable';
function myamazingfunction() {
  console.log(my_variable);
}
myamazingfunction();
console.log(my_variable);

// Var is global variable and can be accessed anywhere inside the program
var my_new_variable = 'Global Variable';
function my_new_amazingfunction() {
  if (true) {
    // since var uses function scope , not block scope, hence
    // by using var key word we can access the variable anywhere inside the
    // myamazingfunction  function
    var my_new_variable = 'Inside if condition';
  }
  console.log(my_new_variable);
}
my_new_amazingfunction();
console.log(my_new_variable);
