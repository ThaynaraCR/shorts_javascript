function myDisplayer(some) { //
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) { //posso chamar uma funcao no terceiro parametro isso é um callback
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);