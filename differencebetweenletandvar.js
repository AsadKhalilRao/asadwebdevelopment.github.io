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
