//FUNCION QUE CALCULA EL PORCENTAJE OBTENIDO HASTA EL MOMENTO CON RESPECTO AL SALDO FINAL
function porcentaje(saldo,saldoFinal) {



	saldo = Number(saldo);
	saldoFinal = Number(saldoFinal);

	let porcentaje = (saldo / saldoFinal) * 100;
	
	if(porcentaje > 0 && porcentaje <= 25){
		contorno.style.animationName = "primero";

	} else if (porcentaje > 25 && porcentaje <= 50){
		contorno.style.animationName = "segundo";
		circulo.style.backgroundColor = "#a3f88c";

	} else if (porcentaje > 50 && porcentaje <= 99){

		contorno.style.animationName = "tercero";
		circulo.style.backgroundColor = "#84da70";
	} else if (porcentaje > 99){
		contorno.style.animationName = "cuarto";
		contorno.style.transition = "1s";

		circulo.style.backgroundColor = "#64bb53";
		setTimeout(function(){
		check.style.visibility = "inherit";
		contorno.style.transform = "scale(1.3)";
		circulo.style.transform = "scale(1.3)";
	},1000)
	}



}


//FUNCION QUE ABRE O CIERRA LOS DIALOGOS 
function abrirDialog(dialogo){
	dialogo.showModal();
}

function cerrarDialog(dialogo){
	dialogo.close();
}


//FUNCION QUE TOMA EL OBJETIVO DEL MES Y DEL DIA

function objetivoDia() {

	objetivoDiaVar = Number(inputHoy.value);
	let time = new Date;

	if(time.getDay() == 1){
		localStorage.setItem("lunes",objetivoDiaVar);
	}
	else if(time.getDay() == 2){
		localStorage.setItem("martes",objetivoDiaVar);
	}
	else if(time.getDay() == 3){
		localStorage.setItem("miercoles",objetivoDiaVar);
	}
	else if(time.getDay() == 4){
		localStorage.setItem("jueves",objetivoDiaVar);
	}
	else if(time.getDay() == 5){
		localStorage.setItem("viernes",objetivoDiaVar);
	}
	else if(time.getDay() == 6){
		localStorage.setItem("sabado",objetivoDiaVar);
	}
	else if(time.getDay() == 7){
		localStorage.setItem("domingo",objetivoDiaVar);
	}




	
	totall += objetivoDiaVar;
	localStorage.setItem("total",totall);





	totalNumero.innerText = "$" + totall;
	inputHoy.value = null;
	porcentaje(totall,objetivoMesVar);
}


function objetivoMes() {
		localStorage.setItem("ObjetivoMes",inputMes.value);
		objetivoMesVar = Number(localStorage.getItem("ObjetivoMes"));
		objetivoNumero.innerText = "$" + objetivoMesVar;
		inputMes.value = null;
		porcentaje(totall,objetivoMesVar);

}


//FUNCION QUE RECARGA LOS DATOS AL INICIARSE LA WEB

function recargar() {
	objetivoMesVar = Number(localStorage.getItem("ObjetivoMes"));
		objetivoNumero.innerText = "$" + objetivoMesVar;
		totalNumero.innerText = "$" + totall;
}


//FUNCION QUE COMPARA LOS DIAS PARA EN BASE A ESO OBTENER GRAFICO

function determinarTamañoGrafico(){

	averiguarDia();


	 dias = [Number(localStorage.getItem("lunes")),Number(localStorage.getItem("martes")),Number(localStorage.getItem("miercoles")),Number(localStorage.getItem("jueves")),Number(localStorage.getItem("viernes")),Number(localStorage.getItem("sabado")),Number(localStorage.getItem("domingo"))]
	 porcentajes = [];

	mayor = dias[0];
	for(let i=0;i<7;i++){
		 

		if(dias[i] > mayor){
			mayor = dias[i];
		}

	}

	for(let i=0;i<7;i++){
		calculo = (dias[i] / mayor) * 100;
		porcentajes[i] = calculo;
	}

	for(let i=0;i<7;i++){
		graficos[i].style.height = porcentajes[i] + "%";
	}



// 	if(calculo > 0 && calculo <=14.28){
// 		modificado.style.height = "14.28%";
// 	}
// 	else if(calculo > 14.28 && calculo <=28.56){
// 	modificado.style.height = "28.56%";		
// 	}
// 	else if(calculo > 28.56 && calculo <=43.36){
// 	modificado.style.height = "43.36%";
// 	}
// else if(calculo > 43.36 && calculo <=57.64){
// 	modificado.style.height = "57.64%";
// 	}
// else if(calculo > 57.64 && calculo <=71.92){
// 	modificado.style.height = "71.92%";
// 	}
// else if(calculo > 71.92 && calculo <=86.2){
// 	modificado.style.height = "86.2%";
// 	}
// else if(calculo > 86.2 && calculo <=100){
// 	modificado.style.height = "100%";
// 	}



}


//FUNCION QUE AVERIGUA EL DIA, ALTERA LA VARIABLE MODIFICADO PRESENTE EN LA MAIN

function averiguarDia(){
	let date = new Date;

	if(date.getDay() == 1){
		modificado = graficos[0];
	} 
	else if(date.getDay() == 2){
		modificado = graficos[1];

	}
	else if(date.getDay() == 3){
		modificado = graficos[2];

	}
	else if(date.getDay() == 4){
		modificado = graficos[3];

	}
	else if(date.getDay() == 5){
		modificado = graficos[4];

	}
	else if(date.getDay() == 6){
		modificado = graficos[5];

	}
	else if(date.getDay() == 7){
		modificado = graficos[6];

	}
}



let contorno = document.querySelector(".contorno");
let circulo = document.querySelector(".circulo");
let check = document.querySelector(".check");

let dialogoHoy = document.getElementById("dialogoHoy");
let dialogoMes = document.getElementById("dialogoMes");

let inputHoy = document.getElementById("inputHoy");
let inputMes = document.getElementById("inputMes");

let botonAceptarHoy = document.getElementById("botonAceptarHoy");
let botonAceptarMes = document.getElementById("botonAceptarMes");

let objetivoNumero = document.querySelector(".objetivo");
let totalNumero = document.querySelector(".total");

let porcentajes = [];
let calculo = 0;

let objetivoDiaVar;
let objetivoMesVar;
let totall = Number(localStorage.getItem("total"));

let modificado;

let graficos = document.querySelectorAll(".dia");


recargar();
determinarTamañoGrafico()

botonAceptarHoy.addEventListener("click",objetivoDia);
botonAceptarMes.addEventListener("click",objetivoMes);

porcentaje(totall,objetivoMesVar);












