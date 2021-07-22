var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.unshift("Limão");
  document.getElementById("demo").innerHTML = fruits;
}  //adiciona no inicio do array