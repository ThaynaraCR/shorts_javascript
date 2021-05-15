const f1 = (resolver = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                reject("Deu erro");
            }
            resolve("Promise resolvida");
        }, 5000);
    });
}


f1(true) //coloco um valor qualquer do parametro aqui
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });




const f2 = (resolver = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                reject("Deu erro");
            }
            resolve("Promise resolvida");
        }, 5000);
    });
}


f2(true)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });





const f3 = (resolver = true) => { //configurando a Promise
    return new Promise((resolve, reject) => {//instanciando a classe Promise
        setTimeout(() => {
            if (!resolver) {
                reject("Deu erro"); 
            }
            resolve("Promise resolvida");
        }, 5000);
    });
}


f3(true)//chamando a promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });



Promise.all([f1, f2, f3]).then((values) => {
    console.log(values); //resposta de um array de promisses
});
//Promise.allé rejeitada se qualquer uma das promises do array for rejeitada