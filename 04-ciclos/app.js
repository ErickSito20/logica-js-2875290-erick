let index = 0;

while ( index < 11){

    console.log(index )
}

/*length para contar cuantos elementos contables, destructuri es lo que hace una copia del array,*/ 

let materias = ['matematicas','sociales','español','fisica']
console.log(``)


// quiero añadir un elemento al final del array com length (siempre se hace en la ultima posicion)
materias[materias.length] = 'ciencias';
materias[materias.length] = 'pinturas';


//para agregar elementos se usa push

materias.push('lo que sea');
//para eliminar la ultima posicion entre todos se usa pop

materias.pop()



/// Ciclos y arrays

//primera practica: imprimir en una lista numerada todos los elementos de un array 'peliculas' con ayuda del ciclo for 


let peliculas = ['Harry Potter','¿Back to the future', 'los cuatro fantasticos','rapidos y furiosos', 'Batman','el chavo','el chapulin','Avatar'];

for(let i = 0; i < peliculas.length; i++) {
 console.log(`${i+1}.${peliculas[i]}`)
}


/// realizar un programa que le pida artistas o bandas musicales al usuario. con ayuda del ciclo while cuando el usuario escriba "salir" se debe imprimir la lista de artistas que el usuario ingresó. cada artista añadido se debe guardar en un array 

let artistas = [];

let inputUsuario = prompt ('Escribe un artista o escribe "salir" para terminar');

while(inputUsuario != 'salir'){
    artistas.push(inputUsuario)
    inputUsuario = prompt ('Escribe un artista o escribe "salir" para terminar')
    
}
for(let uno = 0; uno < artistas.length; uno++) {
    console.log(`${uno+1}.${artistas[uno]}`)
}

