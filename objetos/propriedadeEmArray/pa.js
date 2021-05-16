var person = {name:"John", age:50, city:"New York"};
var myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
console.log(typeof(myArray));//mostrado em forma de Array