// Accessing document object of the web browser Js environment
// Looking inside document object using .
// Calling the addEventListener method
// Giving two arguments to the addEventListener method
// First is the event we want to look out for like click
// Second argument is the function that addEventListener will call on happening of the event
// Second argument is a function which has no name and is an anonymous function
document.addEventListener('click', function () {
  alert('Click Event Happened');
});
