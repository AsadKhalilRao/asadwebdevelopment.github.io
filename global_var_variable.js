// Var is global variable and can be accessed anywhere inside the program
var my_new_variable = 'Global Variable';
function my_new_amazingfunction() {
  if (true) {
    console.log(my_new_variable);
  }
  console.log(my_new_variable);
}
my_new_amazingfunction();
console.log(my_new_variable);
