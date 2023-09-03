// setting my_object variable to an Object
let my_object = {
  first_Name: 'John',
  second_Name: 'Doe',
  // Giving method to the object
  driveCar() {
    // Calling the function and () to call function
    // When we are calling a regular old function,JavaScript assumes that regular function is being called
    // by the global object(window object), hence this key word inside regular function function_nested_method will point towards global object
    function_nested_method();
    function function_nested_method() {
      //  In the following code this key word is pointing towards global object(window object)
      console.log(this);
    }
    // In the following example this keyword is pointing towards
    // as diveCar  is being called by my_object
    console.log(this.first_Name, ' ', this.second_Name, 'is driving a car');
  },
};
// Accessing driveCar method from the my_object
// Calling driveCar method by (),() parenthesis is used to call the method
//my_object is calling or executing the driveCar function
// Hence this key word points towards the my_object
my_object.driveCar();
