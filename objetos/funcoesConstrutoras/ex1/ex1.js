// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "English";
  
  // Display nationality 
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.nationality; //posso incluir um atributo que ainda não existe