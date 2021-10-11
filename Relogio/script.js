const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function timer(){
  setInterval(function(){
    for(let i = 0; i<1; i++){
      sec += 1;
    }
    segundos.innerHTML = sec;
    minutos.innerHTML = min;
    horas.innerHTML = hr;
// Condição
    if(sec == 60){
      sec = 0;
      min +=1;
    }
    if(min == 60){
      hr +=1;
    }

  }, 1000);
}

timer();
