      //  Verificando se um objeto contém determinadas propriedades
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false


//Retornando as próprias chaves do objeto
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]




//Adicionando uma nova propriedade ao objeto
Reflect.set(duck, 'eyes', 'black');
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"