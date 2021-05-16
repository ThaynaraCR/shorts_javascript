async function getUser(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`); //espera a resposta de um sistema externo
    let userData = await response.json(); //espera transformar o resultado em json
    return userData.name; // não é necessário o await no return
   }