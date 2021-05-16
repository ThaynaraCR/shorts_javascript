
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";//nao vem como paramentro
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  document.getElementById("demo").innerHTML =
  "The nationality of my father is " + myFather.nationality + ". The nationality of my mother is " + myMother.nationality;