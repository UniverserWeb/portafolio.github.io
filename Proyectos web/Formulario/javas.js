let textoEmail = document.querySelector(".textito");
textoEmail.innerText = "De ahora en más todas nuestras actualizaciones seran enviadas a " + localStorage.getItem("sucorreo") + " donde recibiras emails semanalmente";

let botonsitoXD = document.querySelector(".newEmail");

botonsitoXD.addEventListener('click', function() {
	location.href = "index.html";
})