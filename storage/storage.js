

localStorage.setItem("name", "John Doe : localstorage");
var nome  =localStorage.getItem("name");
alert(nome)


sessionStorage.setItem("name", "John Doe : session storage");
var nome2  = sessionStorage.getItem("name");
alert(nome2)

/**
 * DIFERENÇA ENTRE SESSION STORAGE E LOCAL STORAGE:
 * 
 *  A única diferença é que enquanto os dados armazenados no localStorage não expiram, 
 * os dados no sessionStorage tem os seus dados limpos ao expirar a sessão da página 
 * - ou seja, quando a página (aba ou janela) é fechada.
 * 
 */

