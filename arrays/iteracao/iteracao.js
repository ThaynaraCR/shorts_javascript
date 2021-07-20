
  

  /** *********USANDO FOREACH**************** */

// var txtMostrar = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//   txtMostrar = txtMostrar + value + "<br>"; 
// }


  /** *********USANDO MAP**************** */
// var txtMostrar = "";
// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;
// function myFunction(value, index, array) {
//   txtMostrar = txtMostrar + value * 2 + "<br>";
 // return value * 2;
//}


/** *********USANDO FILTER**************** */

// Percorre cada item do array e retorna verdadeiro ou falso de acordo com a condição 

// var txtMostrar = "";
// var numbers5 = [45, 4, 9, 16, 25];
// var over18 = numbers5.filter(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//   txtMostrar = txtMostrar + (value > 18) + "<br>";
//  // return value > 18;
// }



/** *********USANDO REDUCE**************** */

// var txtMostrar = "";
// var numbers6 = [45, 4, 9, 16, 25];
// var sum = numbers6.reduce(myFunction); //começa pelo index 1 e não 0
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(total, value, index, array) {
//   txtMostrar = txtMostrar + value  + "<br>";
//   // return total + value;
// }


/** *********USANDO EVERY**************** */
// var txtMostrar = "";
// var numbers7 = [100,  33, 16, 40];
// var allOver18 = numbers7.every(myFunction); 
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//   txtMostrar= value > 18;
//   //return value > 18;
// }


/** *********USANDO SOME**************** */
// var txtMostrar = "";
// var numbers8 = [45, 4, 9, 16, 25];
// var someOver18 = numbers8.some(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//   txtMostrar= value > 18;
//   return value > 18;
// }


/** *********USANDO FIND**************** */
// var txtMostrar = "";
// var numbers9 = [4, 9, 16, 25, 29];
// var first = numbers9.find(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//   txtMostrar= value > 18;
//   return value > 18;
// }


/** *********USANDO FINDINDEX**************** */
// var txtMostrar = "";
// var numbers10 = [4, 9, 16, 25, 29];
// var first = numbers10.findIndex(myFunction);
// document.getElementById("demo").innerHTML = txtMostrar;

// function myFunction(value, index, array) {
//     txtMostrar= value > 18;
//   return value > 18; //retorna o primeiro index
// }

