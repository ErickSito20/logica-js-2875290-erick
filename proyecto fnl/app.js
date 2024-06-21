const imagen = document.getElementById('img_cont');[0]
const button = document.getElementsByClassName('btn1');
var titulo = document.getElementById('title');

function cambiarImagen1() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-01.jpg';
    titulo.textContent = 'Introducción';
}
function cambiarImagen2() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-02.jpg';
    titulo.textContent = "contenido";
}
function cambiarImagen3() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-03.jpg';
    titulo.textContent = 'Evidencias';
}
function cambiarImagen4() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-04.jpg';
    titulo.textContent = 'Evaluaciones';
}
function cambiarImagen5() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-05.jpg';
    titulo.textContent = 'Certificaciones1';
}
function cambiarImagen6() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-06.jpg';
    titulo.textContent = 'Certificaciones2';
}
function cambiarImagen7() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-07.jpg';
    titulo.textContent = 'Certificaciones3';
}
function cambiarImagen8() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-08.jpg';
    titulo.textContent = 'Chat';
}
function cambiarImagen9() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-09.jpg';
    titulo.textContent = 'Iniciar sesión';
}
function cambiarImagen10() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-10.jpg';
    titulo.textContent = 'Enviar sugerencias';
}
function cambiarImagen11() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-11.jpg';
    titulo.textContent = 'Alerta 1';
}
function cambiarImagen12() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-12.jpg';
    titulo.textContent = 'Alerta2';
}
function cambiarImagen13() {
    imagen.src = '/proyecto fnl/img/imagenes mooc/COPIA01-13.jpg';
    titulo.textContent = 'Registrarse';
}


button[0].addEventListener('click',cambiarImagen1)
button[1].addEventListener('click',cambiarImagen2)
button[2].addEventListener('click',cambiarImagen3)
button[3].addEventListener('click',cambiarImagen4)
button[4].addEventListener('click',cambiarImagen5)
button[5].addEventListener('click',cambiarImagen6)
button[6].addEventListener('click',cambiarImagen7)
button[7].addEventListener('click',cambiarImagen8)
button[8].addEventListener('click',cambiarImagen9)
button[9].addEventListener('click',cambiarImagen10)
button[10].addEventListener('click',cambiarImagen11)
button[11].addEventListener('click',cambiarImagen12)
button[12].addEventListener('click',cambiarImagen13)
