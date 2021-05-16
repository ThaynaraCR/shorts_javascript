
    
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}




var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}






var numbers3 = [45, 4, 9, 36, 25];
var numbers4 = numbers3.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}





var numbers5 = [45, 4, 9, 16, 25];
var over18 = numbers5.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}




var numbers6 = [45, 4, 9, 16, 25];
var sum = numbers6.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}



var numbers7 = [45, 4, 9, 16, 25];
var allOver18 = numbers7.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}



var numbers8 = [45, 4, 9, 16, 25];
var someOver18 = numbers8.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}



var numbers9 = [4, 9, 16, 25, 29];
var first = numbers9.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}



var numbers10 = [4, 9, 16, 25, 29];
var first = numbers10.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18; //retorna o primeiro index
}

