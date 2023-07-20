//FUNCION QUE DESDE LAS IMAGENES MINIATURAS CAMBIA LA MAIN

function cambiarImagenMain(imagen){
	imagenMain.setAttribute("src",imagen);
}

function mostrarModal(){
	dialogo.showModal();
}

function cerrarModal(){
	dialogo.close();
}

function recorrerImagenes(){
	if(contador<3){
	contador +=1;
	imagenMainDialog.setAttribute("src",imagenesArray[contador]);
	}
	
	
	
}



function recorrerImagenesAtras(){
		// if(contador == 0){
		// 	contador = 4;
		// }
		// contador -=1;
	
		if(contador > 0){
			contador -=1;
		}
		


	imagenMainDialog.setAttribute("src",imagenesArray[contador]);
	
	
	
}


function animarNav(lista){
lista.style.borderBottom = "solid 3px #BF4904";
}



function aumentarCantidad()
{
	cantidad +=1;
	cantidadVisual.innerText = cantidad;
}

function disminuirCantidad()
{
	if(cantidad != 1)
	{
		cantidad -=1;
	cantidadVisual.innerText = cantidad;
	}
	
}

function dibujoCarritoFuncion()
{	
	dibujoCarrito.innerText = cantidad;
	dibujoCarrito.style.visibility = "initial";
}









let imagenes = document.querySelectorAll(".imagenMiniatura");  //4 ELEMENTOS EN TOTAL
let imagenMain = document.querySelector(".imagenMain");
let imagenMainDialog = document.getElementById("imagenMainDialog");
let dialogo = document.getElementById("dialogo");
let imagenesArray = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let contador = 0;

let cantidad = 1;
let cantidadVisual = document.querySelector(".botoncant");

let dibujoCarrito = document.querySelector(".carritoCantidad");

let carritoLogo = document.querySelector(".carritologo");

let desplegable =  document.querySelector(".contenedor-desplegable");




imagenMain.addEventListener("click",mostrarModal);




