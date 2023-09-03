// let my_variable is global variable and can be accessed anywhere inside the program
let my_variable = 'Global Variable';
function myamazingfunction() {
  console.log(my_variable);
}
myamazingfunction();
console.log(my_variable);
/*************************************************************************/
function myamazingfunction() {
  // let my_variable is declared locally and it is blocked scoped ,
  // hence my_variable can only be inside myamazingfunction not outside
  let my_variable = 'Inside function Variable';
  console.log(my_variable);
}
myamazingfunction();
// Attempting to access the local block scoped variable ouside the block
// ({} of myamazingfunction will give errro
console.log(my_variable);
