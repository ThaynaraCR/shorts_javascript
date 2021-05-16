var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {//percorre cada propriedade de um objeto
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;