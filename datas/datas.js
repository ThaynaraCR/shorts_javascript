const data = new Date();
let dia = data.getDate();
let dia_sem = data.getDay();
let mes= data.getMonth();  
let ano4 = data.getFullYear(); 
let hora = data.getHours();
let min = data.getMinutes(); 
let seg = data.getSeconds(); 
let dia_hoje = dia + '/' + (mes+1) + '/' + ano4;
let hora_agora = hora + ':' + min + ':' + seg;

const dataHora = {
   hoje : dia_hoje,
   agora : hora_agora
  };

  const mostrarData = () =>{
    alert("data de hoje :  "+dataHora.hoje+ "  Hora agora : "+ dataHora.agora)
  }

  mostrarData()
 