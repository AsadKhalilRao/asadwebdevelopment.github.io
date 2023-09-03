// setting my_object variable to an Object
let my_object = {
  first_Name: 'John',
  second_Name: 'Doe',
};
// breath function is a stand alone function and will be called by global object(window object)
// In that global object (window object) there is not first_Name and there is no second_Name propertie
// inside the global object
// It is not a method that belongs to an object
function breath() {
  console.log(
    this.first_Name,
    '',
    this.second_Name,
    'just inhaled and exhaled'
  );
}
// Name of the function.call()
// call method is going to call and execute breath function and allows us to control this key word
// Whatever we place inside () of the call method , call will make this keyword point towards  that
// whatever.
// So if we want "this" keyword point towards my_object inside breath function , then we pass my_object
// inside () of the call method
breath.call(my_object);
