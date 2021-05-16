var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var x = person.fullName.apply(person1, ["Oslo", "Norway"]); 
  document.getElementById("demo2").innerHTML = x; 


//modos diferentes de fazer a mesma coisa

  var person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person4 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var x = person2.fullName.call(person3, "Oslo", "Norway"); 
  document.getElementById("demo").innerHTML = x; 



