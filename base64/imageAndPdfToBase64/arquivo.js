 
 
 const toBase64 = (url,callback) =>{

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let reader = new FileReader();
        reader.onloadend = function() {
        callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url); 
    xhr.responseType = 'blob';
    xhr.send();
}


//********CHAMADA DA FUNÇÃO*************** */

var urlExemplo = "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg"

toBase64(urlExemplo, function (dataUrl) {
console.log(dataUrl)
    })