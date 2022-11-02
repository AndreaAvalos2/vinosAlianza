const menuIcono=document.getElementById("toggle-menu");
const menudesplegable=document.getElementById("main-desplegable");

menuIcono.addEventListener('click', ()=> {
    menudesplegable.classList.toggle("ocultar-menu")
});

function mostrar_mensaje (){
    alert("Diste click en el menu hamburguesa");
}