let cuad1 = document.getElementById("cuadrante1");
let cuad2 = document.getElementById("cuadrante2");
let cuad3 = document.getElementById("cuadrante3");
let cuad4 = document.getElementById("cuadrante4");
let cuad5 = document.getElementById("cuadrante5");
let cuad6 = document.getElementById("cuadrante6");
let cuad7 = document.getElementById("cuadrante7");
let cuad8 = document.getElementById("cuadrante8");
let cuad9 = document.getElementById("cuadrante9");


let botonVolver = document.querySelector(".volver");

let resultado = document.querySelector(".resultado");


let final = document.getElementById("final");

let rondas = 0;

let botonAceptar = document.querySelector(".botonAceptar");
let input = document.querySelector("#numRondas");
let rondasRestantes = document.querySelector(".rondasRestantes");





let imagen1 = document.getElementById("1");
let imagen2 = document.getElementById("2");
let imagen3 = document.getElementById("3");
let imagen4 = document.getElementById("4");
let imagen5 = document.getElementById("5");
let imagen6 = document.getElementById("6");
let imagen7 = document.getElementById("7");
let imagen8 = document.getElementById("8");
let imagen9 = document.getElementById("9");

let dialogo = document.getElementById("dialogo");




let azulAnimacion = document.getElementById("azul");
let naranjaAnimacion = document.getElementById("naranja");


let botonReset = document.querySelector(".boton");




let imagenTurno = document.querySelector(".gris");

let imagenes = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9];

let cuadrantes = [cuad1,cuad2,cuad3,cuad4,cuad5,cuad6,cuad7,cuad8,cuad9]




let contadorX = 0;
let contadorO = 0;

let ptosX = document.querySelector(".ptosX");
let ptosO = document.querySelector(".ptosO");


let turno = 1;
let lugar = 0;
let jugador = 4;

let imagenIz = document.getElementById("imagenIz");
let imagenDe = document.getElementById("imagenDe");
let izq = document.querySelector(".izquierda");
let der = document.querySelector(".derecha");



function generate(min,max) {
let hola = parseInt(Math.random() * (max - min) + min);
    return hola;
     
}



function dialogar() {
	dialogo.showModal();
}

dialogar();









botonReset.addEventListener("click", function(){
	limpiar();
	contadorX = 0;
	contadorO = 0;
	ptosX.innerText = contadorX;
	ptosO.innerText = contadorO;
});

imagenIz.addEventListener("click",function() {
	jugador = 1;
	turno = 1;
	
	if (der.style.backgroundColor != "#183544")
	{
		izq.style.backgroundColor = "#183544";
	izq.style.border = "solid 1px white";
	der.style.backgroundColor = "";
	der.style.border = "";
	}
	
});

imagenDe.addEventListener("click",function() {
	
	jugador = 2;
	turno = 0;
	der.style.backgroundColor = "#183544";
	der.style.border = "solid 1px white";
	izq.style.backgroundColor = "";
	izq.style.border = "";
});



logoTurno();
function saberXO(lugar) {


	if (turno == 1) {

	
	if(imagenes[lugar].getAttribute("src") == "")
	{


	let imagenSrc = "";
	
	if (turno == 1){
		imagenSrc = "X.png";
		imagenes[lugar].setAttribute("src",imagenSrc);
		turno = 0;
		setTimeout(function() {
			
			let hi = generate(0,8);
			while(imagenes[hi].getAttribute("src") != ""){
				hi = generate(0,8);
			}

			imagenSrc = "O.png";
			imagenes[hi].setAttribute("src",imagenSrc); 
			turno = 1;
			logoTurno();
		},1000)
	}

	

	// else 
	// {
	// 	imagenSrc = "O.png";
	// 	turno = 1;
	// }

	imagenes[lugar].setAttribute("src",imagenSrc);
	}
	logoTurno();
	detectorTateti();

} else if (turno == 0) {

if(imagenes[lugar].getAttribute("src") == "")
	{


	let imagenSrc = "";
	
	if (turno == 0){
		imagenSrc = "O.png";
		imagenes[lugar].setAttribute("src",imagenSrc);
		turno = 1;
		setTimeout(function() {
			
			let hi = generate(0,8);
			while(imagenes[hi].getAttribute("src") != ""){
				hi = generate(0,8);
			}

			imagenSrc = "X.png";
			imagenes[hi].setAttribute("src",imagenSrc); 
			turno = 0;
			logoTurno();
		},1000)
	}

	

	// else 
	// {
	// 	imagenSrc = "O.png";
	// 	turno = 1;
	// }

	imagenes[lugar].setAttribute("src",imagenSrc);
	}
	logoTurno();
	detectorTateti();


}



}



function logoTurno() {

	if (turno == 1) {
		imagenTurno.setAttribute("src","XGRIS.png");
	}
	else {
		imagenTurno.setAttribute("src","OGRIS.png");

	}
}

let ganador = " ";
function finDeRonda() {
	rondasRestantes.innerText = rondas;
	if((rondas == 0) && (jugador == 1) && (contadorX > contadorO)){
		ganador = "Ganaste";
		limpiarTodo();
		dialogo.showModal();
		volverJugar();
	}
	else if((rondas == 0) && (jugador == 2) && (contadorO > contadorX)){
		ganador = "Ganaste";
		limpiarTodo();
		dialogo.showModal();
		volverJugar();

	}
	else if ((rondas == 0) && (jugador == 1) && (contadorO > contadorX)){
		ganador = "Perdiste";
		limpiarTodo();
		dialogo.showModal();
		volverJugar();
	}
	else if ((rondas == 0) && (jugador == 2) && (contadorX > contadorO)){
		ganador = "Perdiste";
		limpiarTodo();
		dialogo.showModal();
		volverJugar();
	}
	else if ((rondas == 0) && (jugador == 2 || jugador ==1) && (contadorX == contadorO)){
		ganador = "Empate";
		limpiarTodo();
		dialogo.showModal();
		volverJugar();
	}


}


function detectorTateti() {

	if((imagenes[0].getAttribute("src") == "X.png" && imagenes[1].getAttribute("src") == "X.png" && imagenes[2].getAttribute("src") == "X.png") || (imagenes[3].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[5].getAttribute("src") == "X.png") || (imagenes[6].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[0].getAttribute("src") == "X.png" && imagenes[3].getAttribute("src") == "X.png" && imagenes[6].getAttribute("src") == "X.png") || (imagenes[1].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png") || (imagenes[2].getAttribute("src") == "X.png" && imagenes[5].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[3].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[5].getAttribute("src") == "X.png") || (imagenes[6].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[0].getAttribute("src") == "X.png" && imagenes[3].getAttribute("src") == "X.png" && imagenes[6].getAttribute("src") == "X.png") || (imagenes[1].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png") || (imagenes[0].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[3].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[5].getAttribute("src") == "X.png") || (imagenes[6].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[0].getAttribute("src") == "X.png" && imagenes[3].getAttribute("src") == "X.png" && imagenes[6].getAttribute("src") == "X.png") || (imagenes[1].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png") || (imagenes[2].getAttribute("src") == "X.png" && imagenes[4].getAttribute("src") == "X.png" && imagenes[6].getAttribute("src") == "X.png")) {
		azulAnimacion.style.animationName = "movimiento";
		contadorX++;
		ptosX.innerText = contadorX;

		for (let i = 0;i<9;i++) {
			cuadrantes[i].style.pointerEvents = "none";
		}

		
		setTimeout(function() {
			limpiar();
			rondas--;
			finDeRonda();
		},1000)

		setTimeout(function() {
			azulAnimacion.style.animationName = "";
			for (let i = 0;i<9;i++) {
			cuadrantes[i].style.pointerEvents = "inherit";
		}
			
		},2000)

		
	}

	else if((imagenes[0].getAttribute("src") == "O.png" && imagenes[1].getAttribute("src") == "O.png" && imagenes[2].getAttribute("src") == "O.png") || (imagenes[3].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[5].getAttribute("src") == "O.png") || (imagenes[6].getAttribute("src") == "O.png" && imagenes[7].getAttribute("src") == "O.png" && imagenes[8].getAttribute("src") == "O.png") || (imagenes[0].getAttribute("src") == "O.png" && imagenes[3].getAttribute("src") == "O.png" && imagenes[6].getAttribute("src") == "O.png") || (imagenes[1].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[7].getAttribute("src") == "O.png") || (imagenes[2].getAttribute("src") == "O.png" && imagenes[5].getAttribute("src") == "O.png" && imagenes[8].getAttribute("src") == "O.png") || (imagenes[3].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[5].getAttribute("src") == "O.png") || (imagenes[6].getAttribute("src") == "X.png" && imagenes[7].getAttribute("src") == "X.png" && imagenes[8].getAttribute("src") == "X.png") || (imagenes[0].getAttribute("src") == "O.png" && imagenes[3].getAttribute("src") == "O.png" && imagenes[6].getAttribute("src") == "O.png") || (imagenes[1].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[7].getAttribute("src") == "O.png") || (imagenes[0].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[8].getAttribute("src") == "O.png") || (imagenes[3].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[5].getAttribute("src") == "O.png") || (imagenes[6].getAttribute("src") == "O.png" && imagenes[7].getAttribute("src") == "O.png" && imagenes[8].getAttribute("src") == "O.png") || (imagenes[0].getAttribute("src") == "O.png" && imagenes[3].getAttribute("src") == "O.png" && imagenes[6].getAttribute("src") == "O.png") || (imagenes[1].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[7].getAttribute("src") == "O.png") || (imagenes[2].getAttribute("src") == "O.png" && imagenes[4].getAttribute("src") == "O.png" && imagenes[6].getAttribute("src") == "O.png")) {
		naranjaAnimacion.style.animationName = "movimiento";
		contadorO++;
		ptosO.innerText = contadorO;

		for (let i = 0;i<9;i++) {
			cuadrantes[i].style.pointerEvents = "none";
		}

		setTimeout(function() {
			limpiar();
			rondas--;
			finDeRonda();
		},1000)
		
		setTimeout(function() {
			naranjaAnimacion.style.animationName = "";
			for (let i = 0;i<9;i++) {
			cuadrantes[i].style.pointerEvents = "inherit";
		}
			
		},2000)

		

	}


}



function limpiar() {

	for (let i = 0;i<9;i++) {
		imagenes[i].setAttribute("src","");
	}
}







function limpiarTodo() {
	limpiar();
	contadorX = 0;
	contadorO = 0;
	ptosX.innerText = contadorX;
	jugador=5;
	ptosO.innerText = contadorO;
}

function volverJugar() {
	resultado.innerText = "Resultado= " + ganador;
	final.showModal();

}


botonVolver.addEventListener("click", function() {
		final.close();
		der.style.backgroundColor = "";
	der.style.border = "";
	izq.style.backgroundColor = "";
	izq.style.border = "";

});

botonAceptar.addEventListener("click", function() {
	if((turno == 1 || turno == 0) && input.value != ""){
		dialogo.close();
		rondas = Number(input.value);
		rondasRestantes.innerText = rondas;
	}
	
});