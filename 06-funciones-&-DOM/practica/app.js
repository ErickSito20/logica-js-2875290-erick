
const miInput = document.getElementById("boton");

function cambiarValue (){
    console.log(miInput.value)
    miInput.value = 'click exitoso! 😺'
}

miInput.addEventListener('click', cambiarValue)

const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll ('.btnColores');

console.log(cajaColor)
console.log(botonesColores)

function pintarCaja(e){ //e es como el escuchador, reune info del elemento cliqueado, target es el punto que le dio click, get atrribut trae un atributodel target y data color es el atributo que se esta trayendo 
    console.log(e)
    console.log(e.target.getAttribute('data-color'))
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}

//eventos
botonesColores[0].addEventListener('click',pintarCaja);
botonesColores[1].addEventListener('click',pintarCaja);
botonesColores[2].addEventListener('click',pintarCaja);
botonesColores[3].addEventListener('click',pintarCaja);

const pelota = document.getElementById('circulo');
const btnMover = document.querySelector('#btnMover');
let e = 0;


function mover(){

if (e == 0){
    pelota.style.marginLeft = '400px';
    pelota.style.backgroundColor = 'blue';
    pelota.style.transitionDuration = '.6s';
    e=1;
}else{
    pelota.style.marginLeft = '0px';
    pelota.style.backgroundColor = 'black';
    pelota.style.transitionDuration = '.6s';
    e=0 ;
}


 

}

btnMover.addEventListener('click',mover)



const img = document.getElementById('miImagen')

const buttonx = document.getElementById('botton1')
let i = 0
function cambiar(){
 if (i == 0){
    buttonx.setAttribute(src,'imagen2.jpg')
    img.style.transitionDuration = '.4s';

    i=1;
 }
}