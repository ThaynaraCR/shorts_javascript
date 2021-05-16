var handler = {  //comportamento , onde dentro contém traps(armadilhas)
    get: function(target, name){
    return name in target ? target[name] : 42;// o valor foi setado? se sim retorna o valor senao retorna 42
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42 