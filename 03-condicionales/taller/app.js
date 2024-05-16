/* let altura = prompt ('¿cuál su altura en cm?');

if ( altura <= 150 ) {
    console.log('Persona de altura baja')
}else if ( altura >=151 & altura <=170) {
    console.log('persona de altura media')
} else if ( altura > 171){
    console.log('Persona alta')
} */

/*segundo*/ 

/* let nota1 = prompt ('¿cual es su nota de matematicas? ');
let nota2 = prompt ('¿cual es su nota de español?');
let nota3 = prompt ('¿cual es su nota de sociales?');

let pro = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;


console.log( 'el promedio de sus notas es ' + pro);

if (pro === 10.0){
    console.log('excelente')
}else if (pro >=7.0 & pro <=9.9){
    console.log('bueno')
}else {
    console.log('insuficiente')
}

let estatura = 170
let velocidad = 20
let edad = 25

if (estatura === 170 & velocidad === 20 & edad >15 ){
    console.log('puede ingresar al equipo profesional de mayores')
}else if (estatura === 170 & velocidad === 20 & edad <15){
    console.log('puede ingresar al equipo profesional de menores')
}else{
    console.log('no puede ingresar al equipo')
} */

/*tercero*/ 
/* let total = prompt ('Ingrese el total de escritorios compradas')

let escritorio = 200

function calcularPorcentaje( escritorio ,porcentaje){
    return (numero / 100) * porcentaje;
}

 */

let total = prompt ('Ingrese el total de escritorios compradas');

precioEscri= 200;

function calc(precioEscri,total){
    return (precioEscri * total) - (precioEscri)
}

console.log('el total es' + calc)


if (total <5){

}


/*
escritorio vale 200 
-5 unidades compradas da el 10 % de descuento
>=5 & <10 10  compradas da el 20%

*/ 