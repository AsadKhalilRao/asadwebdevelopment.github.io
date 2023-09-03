let my_array = [1, 2, 3, 4];
// map method is a higher order function so it expects a function inside ()
// We are adding anonymous function to the () of map method
// map method will loop through the elements of my_array array
// map method returns a new array
// Including anonymous function inside the () of map method
//x represnts the current element of my_array corresponding to current call.
console.log(
  my_array.map(function (x) {
    // Returning 2*x inside the body of the function
    return 2 * x;
  })
);
// Converting anonymous function into arrow function
console.log(
  my_array.map((x) => {
    return 2 * x;
  })
);
// Making the body of the anonymous sit on same line, so we remove reurn {} of the body
// of arrow function and return key word of the arrow function and anonymous function
// For single parameter we donot need () around x, if we have multiple parameters or zero parameters then we would need ()
console.log(my_array.map((x) => 2 * x));
