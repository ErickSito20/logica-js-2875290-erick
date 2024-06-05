const btnNumeros= document.querySelectorAll('.min')
const flotante = document.getElementById('flotante')

const cuadroPpal = document.getElementById('cuadro')
const cuadroSec = document.getElementById('main')
const  x= document.getElementById('equis')
const siguiente = document.getElementById('sig')
const anterior = document.getElementById('ant')
const iPpal = document.getElementById('imgprincipal')

function ligthbox (e){
    let currentImg= e.target.src;
 flotante.style.top = '0vh';
 flotante.style.transitionDuration = '0.5s';
 iPpal.setAttribute('src',currentImg)
}
function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '0.5s';
}


btnNumeros [0].addEventListener('click', ligthbox)
btnNumeros [1].addEventListener('click', ligthbox)
cuadroPpal.addEventListener('click', cerrar)
x.addEventListener('click',cerrar)