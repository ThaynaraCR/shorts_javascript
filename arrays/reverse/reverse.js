


const ordemCrescente = () => {
    var fruits = ["Uva", "Pêra", "Maçã", "Banana", "Jabuticaba"]; 
    var crescente = fruits.sort()
    return crescente

}

const ordemDecrescente = () => {
    var fruits = ["Banana",  "Maçã",  "Pêra", "Uva"]; 
    //funciona quando o array já est´an aordem crecente
    var decrescente = fruits.reverse()
    return decrescente

}


console.log(ordemCrescente()) //coloca os elementos em ordem crescente
console.log(ordemDecrescente()) //coloca os elementos em ordem decrescente