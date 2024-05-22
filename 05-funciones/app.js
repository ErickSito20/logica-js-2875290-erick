/* //funciones: recibe un elemento y entrega una salida
///       (nombre de la funcion)
1 /// function myFuction(){}

function Suma (num1, num2){
    instrucciones
}

//crear funcion que salude al usuario 

let nombreUsuario =prompt ('dime tu nombre')


/// declaración de una función
function saludo( nombre = 'desconocido'){

    return `Bienvenido ${nombre}`//el retorno finaliza la funcion 
}

//llamado de una función

console.log(saludo (nombreUsuario)) */

/* 
let n1 = prompt ('primer numero a multiplicar');
let n2 = prompt ('segundo numero a multiplicar');

function multiplicar( num1, num2){

    let resultado = (parseFloat(num1)) * (parseFloat(num2));
    return `el resultado es ${resultado}`
}

console.log(multiplicar(n1,n2)) */

// funcion que le diga cuanto debe ahorrar al mes segun sus ingresos. sacarle el 10% a lo que usted gana 

let ingresos= prompt ('cuales son sus ingresos?');

function calcularAhorro( ahorrar, ingreso) 
{
    let ahorrar=(parseFloat(ingreso)) * 0.1;
    return `Debes de ahorrar ${ahorrar}`
}

console.log(calcularAhorro(ingresos))