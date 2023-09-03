// Followong my_variable is  new global variable is accessible anywhere
let my_variable = 'Global Variable';
function myamazingfunction() {
  // Updating and mutating global variable inside myamazingfunction
  // Accessing my_variable global variable
  my_variable = 'I am a mutated varible inside myamazingfunction';
  console.log(my_variable);
  if (true) {
    // Updating and mutating global variable inside if
    my_variable = 'I am a mutated  variable inside if';
    console.log(my_variable);
  }
}
myamazingfunction();
console.log(my_variable);
