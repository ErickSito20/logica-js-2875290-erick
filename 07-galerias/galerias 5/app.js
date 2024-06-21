const imagen = document.getElementById('pantalla')
const texto = document.getElementsByTagName('h1')[0]
const boton = document.getElementsByClassName('btn')
const parrafo =document.getElementsByTagName('p')[0]
function cambiarimg1(){
    imagen.src = 'img1.jpg';
    texto.textContent = 'imagen 1';
    parrafo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
function cambiarimg2(){
    imagen.src = 'img2.jpg';
    texto.textContent = 'imagen 2';
    parrafo.textContent ='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
}
function cambiarimg3(){
    imagen.src = 'img3.jpg';
    texto.textContent = 'imagen 3';
    parrafo.textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

}

boton[0].addEventListener('click', cambiarimg1)
boton[1].addEventListener('click', cambiarimg2)
boton[2].addEventListener('click', cambiarimg3)