// setting my_object variable to an Object
let my_object = {
  first_Name: 'John',
  second_Name: 'Doe',
  driveCar() {
    // breath function is a stand alone function and will be called by global object(window object)
    // In that global object (window object) there is not first_Name and there is no second_Name propertie
    // inside the global object
    // It is not a method that belongs to an object
    breath();
    function breath() {
      // this key word will point towards the global object(window object)
      console.log(this);
    }
    // Converting breath standalone regular function into an arrow function
    // setting arrow function to a variable like breating  and using name of that variable and () like breating() to call the arrow function
    let breathing = () => {
      // // If we use arrow function instead of regular function inside object's method
      // then this key word will point towards the object
      console.log(this);
    };
    breathing();
  },
};
my_object.driveCar();
