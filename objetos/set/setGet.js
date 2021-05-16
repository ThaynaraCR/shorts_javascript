// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };
  // Set a property using set:
  person.lang = "en";
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.lang;