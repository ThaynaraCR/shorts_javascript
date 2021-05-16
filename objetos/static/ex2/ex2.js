class Car2 {
    constructor(name) {
      this.name = name;
    }
    static hello2(x) {
      return "Hello " + x.name;
    }
  }
  
  let myCar = new Car2("Ford");
  document.getElementById("demo2").innerHTML = Car2.hello2(myCar);