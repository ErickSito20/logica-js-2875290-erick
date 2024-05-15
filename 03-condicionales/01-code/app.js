// Condicional, programa que pregunte la edad al usuario (prompt) y depende del valor, decirle si es mayor o menor de edad.

//let edadUsuario = prompt('cuál es tu edad?');

/*if( edadUsuario >= 18){
console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}*/


/*let semaforo = prompt('¿de qué color es el semaforo?').toLowerCase();

if( semaforo === 'rojo'){
    console.log('Detente')
}else if ( semaforo === 'amarillo'){
    console.log('Preparese')
}else if ( semaforo === 'verde'){
    console.log('Siga')
}else{
    console.log('No se que hacer')
}*/
/* 
let nombre = prompt ('¿cuál es tu nombre?').toLowerCase();
let edad = prompt('¿qué edad tienes?');
if( nombre === 'carlos'|| nombre === 'mario'& edad >= 18){
    console.log('puede ingresar a VIP')
}else if (edad >= 18 ){
    console.log('Puede ingresar a la discoteca')
}else{
    console.log('No puede ingresar a la discoteca')
}
*/

let usuario1 = prompt('Usuario 1 ¿cúal eliges? piedra, papel o tijeras?');
let usuario2 = prompt('Usuario 2 ¿cúal eliges? piedra, papel o tijeras?');

if (usuario1 === 'piedra' & usuario2 === 'papel'){
    console.log ('papel vence a piedra, Usuario 2 gana')
}else if (usuario1 === 'tijeras' & usuario2 === 'piedra'){
    console.log ('piedra vence a tijeras, Usuario 2 gana')
}else if (usuario1 === 'papel' & usuario2 === 'tijeras'){
    console.log ('tijeras vence a papel, Usuario 2 gana')
}else if (usuario2 === 'tijeras' & usuario1 === 'piedra'){
    console.log ('piedra vence a tijeras, Usuario 1 gana')
}else if (usuario2 === 'papel' & usuario1 === 'tijeras'){
    console.log ('tijeras vence a papel, Usuario 1 gana')
}else if (usuario2 === 'piedra' & usuario1 === 'papel'){
    console.log ('papel vence a piedra, Usuario 1 gana')
}