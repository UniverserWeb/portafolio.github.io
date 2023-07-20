let inputt = document.getElementById("mail");

let boton = document.querySelector(".boton");

let emailIncorrecto = document.querySelector(".error");



boton.addEventListener('click', function(event) {
	event.preventDefault();
	if(inputt.value.indexOf("@",0) == -1 || inputt.value.indexOf(".com",0) == -1) {
		inputt.style.borderColor = "red";
		emailIncorrecto.style.visibility ="inherit";
	}
	else
	{
		localStorage.setItem("sucorreo", inputt.value);
		location.href = "gracias.html"

	}
	

})



inputt.addEventListener('keydown', function() {
	if(inputt.value.indexOf("@",0) != -1 && inputt.value.indexOf(".co",0) != -1) {
		boton.style.backgroundColor = "#FF634A";
	}
})





