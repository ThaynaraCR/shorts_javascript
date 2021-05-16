function myFunction() {
    var textnode = document.createTextNode("Water");
    var item = document.getElementById("myList").childNodes[0];
    item.replaceChild(textnode, item.childNodes[0]);
  }