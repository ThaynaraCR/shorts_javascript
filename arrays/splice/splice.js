var fruits = ["Banana", "Laranja", "Maçã", "Manga"];
document.getElementById("demo1").innerHTML = "Array inicial:<br> " + fruits;

function myFunction() {
  var removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
  //remove 2 itens a partir da posicao 2  onde  "Lemon", "Kiwi" são adicionados no lugar destes
  document.getElementById("demo2").innerHTML = "Novo array:<br>" + fruits;
  document.getElementById("demo3").innerHTML = "itens Removidos:<br> " + removed; 
}
