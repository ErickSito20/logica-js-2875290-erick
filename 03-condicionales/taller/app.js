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
let total = prompt ('Ingrese el total de escritorios compradas');
let totalEscri = (parseFloat(total)) *200;
let precioEscri= 200;

let diez = (parseFloat(totalEscri)) *0.1 ;
let veinte = (parseFloat(totalEscri)) *0.2;
let cuarenta = (parseFloat(totalEscri)) *0.4;
let menos5 = (parseFloat(totalEscri)) - (parseFloat(diez)) ;
let menos10 = (parseFloat(totalEscri)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalEscri)) - (parseFloat(cuarenta));
if (total>=5 && total<10){
    console.log('el precio total normalmente seria ' + totalEscri + ' pero con descuento queda en ' + menos10)
}else if (total > 10){
    console.log('el precio total normalmente seria ' + totalEscri + ' pero con descuento queda en ' + mas10)
}else{
    console.log('el precio total normalmente seria ' + totalEscri + ' pero con descuento queda en ' + menos5)
}
/*
escritorio vale 200 
-5 unidades compradas da el 10 % de descuento
>=5 & <10 unidades  compradas da el 20%
>=10 unidades  compradas da el 40%
cuANTO DEBE PAGAR * ESCRITORIO Y CUANTO * DESCUENTO
*/ 