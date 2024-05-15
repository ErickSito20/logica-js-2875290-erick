/* declarar variables con var,let,const*/

var fruta= 'manzana'; /*común*/ //redeclarar y sobreescribir o reasignar
var fruta= 'pera';
fruta = 'piña';

let pais='perú'; /*seguro*/ //no se redeclara si se sobre escribe
//let pais='perú'; no se puede
pais = 'francia';

const comida = 'helado'; // no se puede redeclarar ni sobreescribir 


/*Formas correcrtas de declarqar variables*/ 

let nombre= 'pepe';
let nombreMascota= 'pedro';
let nombrePerro= 'bethoveen';
const $caja = 'cosas'

/*formas incorrectas */ 

//let 1dia = 'domingo';
//let dia uno = 'domingo';
//let dia-uno = 'domingo';



// booleans son las condicionales 
let entra = confirm ('quieres entrar?'); //da true o false

//let entra = prompt ('entrada de datos');
alert('entra')

console.log(entra)

/*el mas tiene dos funciones o suma o une (concatenar)*/
/*tipo de datos, hay tres, typeof dice el tipo de dato, string texto que va entre comilla,variable, mumerico y booleano*/
let num3 =4;
let num4 = '6';
let resultado = num3+num4;//resultado 46
console.log(resultado);//46
console.log(typeof resultado); //string


console.log('la suma de 4 + 6 es' + resultado);

//incremento o decrimento
//crear una variable que se llame "texto" y va a guardar el resultado de 3 + "2" + 5 + "ocho"
//al final imprima el resultado en la consola

let n1= 3;
let n2 = "2";
let n3 = 5;
let n4 = "ocho";
let texto = n1 + n2 + n3 + n4;

console.log(texto);
console.log(typeof texto); //typeof 
console.log( 'la suma de 3 + "2" + 5 + "ocho" es' + texto);


/* Tipo de datos y operadores: nombre, string, boolean*/

// ejemplo de incremento duo

let vidas =5;

vidas++ // suma uno al valor de vidas 
vidas--//resta de a uno 
console.log( 'vidas:' + vidas)
let puntuacion = 0;

puntuacion += 3; //le suma y le asigna el valor especificado a la variable. se suma 3 a 0

console.log('Puntuación: ' + puntuacion)

Boolean(5>2) // dice si es true o false

Boolean("pedro" == "jose") //== comparación si es igual a valor, = asignación , === compara valor y tipo de dato

Boolean( 3 === "3") // false porque son iguales con tipo de dato distinto 

Boolean( 3 == "3") // trueb porque compara solo valor 

// != compara si es diferente a solo valor 
// !== compara  si es diferente a valor y tipo de dato


//operadores logicos: && (significa y)cumplir 2 condiciones y || (significa o) cumplir una de las dos


//operadores logicos

let estatura = 170;
let velocidad = 30; 

let velocidadUsuario = 36
let alturaUsuario = 169

// &&

Boolean ( alturaUsuario >= altura && velocidadUsuario >= velocidad ) // false  

 velocidadUsuario = 50
 alturaUsuario = 190

// &&

Boolean ( alturaUsuario >= altura && velocidadUsuario >= velocidad ) // true 


// || una de las condiciones es verdadera


 velocidadUsuario = 25
 alturaUsuario = 130

// &&

Boolean ( alturaUsuario >= altura || velocidadUsuario >= velocidad ) // false

// cohersion, transformar un tipo de dato a otro 


