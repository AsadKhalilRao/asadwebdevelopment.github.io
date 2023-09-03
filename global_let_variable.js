// let my_new_variable is global variable and can be accessed anywhere inside the program
let my_new_variable = 'Global Variable';
function my_new_amazingfunction() {
  if (true) {
    // let my_new_variable is block scoped variable and can be accessed only inside the if
    let my_new_variable = 'variable inside If';
    console.log(my_new_variable);
  }
  // let my_new_variable is block scoped variable and can be accessed only inside the my_new_amazingfunction function
  let my_new_variable = 'variable inside my_new_amazingfunction';
  console.log(my_new_variable);
}
my_new_amazingfunction();
console.log(my_new_variable);
/***************************************************************************/
// let my_new_variable is global variable and can be accessed anywhere inside the program
let my_new_amazing_variable = 'My Amazing Global Variable';
function my_new_amazing_function() {
  if (true) {
    console.log(my_new_amazing_variable);
  }

  console.log(my_new_amazing_variable);
}
my_new_amazing_function();
console.log(my_new_amazing_variable);
