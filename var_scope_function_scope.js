var mynewName = 'Global Scoped Variable';
function myfunction() {
  if (2 + 2 == 4) {
    // if we use let key word here
    // let is going to create brand new variable
    // the brand new variable is going to be scoped till {} of the if    statement
    // myName variable is only accessible within the nearest enclosing block
    // myName varible will not be accessed outside the if statement
    var myName = 'Inside if statement';
    console.log(myName);
  }
  // console.log(myName) will not give error outside if statement as we
  // are using var
  console.log(myName);
}
myfunction();
console.log(mynewName);

function example() {
  var x = 10;
  if (true) {
    var x = 20; // This will override the value of x declared outside the block
    //brand new variable is not created
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

function example2() {
  // let creates a new variable y that is only accessible within the block(curly brackets {} of the function example2).
  let y = 10;
  if (true) {
    let y = 20; // let creates a new variable y that is only accessible within the block(curly brackets {} of the if).
    console.log('The value of y in if statement is' + y); // Output: 20
  }
  console.log('The value of y in the example2 function is', y); // Output: 10
}
