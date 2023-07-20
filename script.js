let imagenes = ["formulario.png","grafico.png","tateti.png","zapatillas.png"];

let imgDiv = document.querySelector(".contImagen");

let img = document.querySelector(".laImg");

let contador = 0;


function derecha()
{	
	if(contador !=3)
	{
		contador++;
	img.setAttribute("src","imagenesSlider/" + imagenes[contador]);
	}
	

}



function izquierda()
{	
	if(contador !=0)
	{
		contador--;
	img.setAttribute("src","imagenesSlider/" + imagenes[contador]);
	}
	

}


function redireccion()
{

	if(img.getAttribute("src") == "imagenesSlider/" + imagenes[0])
	{
		location.href = "Proyectos web/Formulario/index.html";

	} else if(img.getAttribute("src") == "imagenesSlider/" + imagenes[1]) {
		location.href = "Proyectos web/GRAFICO/index.html";
	}
	else if(img.getAttribute("src") == "imagenesSlider/" + imagenes[2]) {
		location.href = "Proyectos web/TATETI/index.html";
	}
	else if(img.getAttribute("src") == "imagenesSlider/" + imagenes[3]) {
		location.href = "Proyectos web/ZAPATILLAS COMPRA/index.html";
	}

	
}