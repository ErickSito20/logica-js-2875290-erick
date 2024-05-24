/*event hamblet: */ 

// formulas para capturar variables o elementos, la constante es una variable se pone asdi porque nunc va a cambiar 

const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');



//crear el evento 
miBtn.addEventListener('click',function (){
    pantalla.style.color = 'blueviolet';

    pantalla.innerText = "Ejecutando script 😒"; //cambia texto 
    
    miBtn.style.color = 'white';
    miBtn.style.backgroundColor= 'blue';

});//metodo para pasar un evento y una funcion(evento click o doble click o zoom ) eso es una funcion que no necesita nombre 