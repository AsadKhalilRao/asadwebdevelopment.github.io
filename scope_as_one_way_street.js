// Followong my_variable is  new global variable is accessible anywhere
let my_variable = 'Global Variable';
function myamazingfunction() {
  // Following my_variable is a new variable and is only accessible anywhere inside myamazingfunction
  let my_variable = 'I am a brand new varible inside myamazingfunction';
  console.log(my_variable);
  if (true) {
    // Following my_variable is a new variable and is accessible anywhere inside the myamazingfunction
    let my_variable = 'I am a brand new variable inside if';
    console.log(my_variable);
  }
}
myamazingfunction();
console.log(my_variable);
