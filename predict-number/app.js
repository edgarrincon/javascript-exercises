/** @format */

function predecir() {
  let nombre = document.getElementById("nombre").value;

  let numeros = document.getElementById("numero").value;

  let numeroAleatorio = Math.ceil(Math.random() * 10) / 3;

  let numeroGanador = Math.ceil(numeroAleatorio);

  if (numeros == numeroGanador) {
    document.getElementById(
      "salidas"
    ).innerHTML = `¡Hola! ${nombre} 🎉 🚀🎉💯 ¡FELICIDADES! 🎉 🚀🎉💯 tu número seleccionado predijo el ${numeroGanador} que escogió la computadora.`;
  } else {
    document.getElementById(
      "salidas"
    ).innerHTML = `¡Hola! ${nombre} lo siento... 😳😳😳 tu número seleccionado NO predijo el ${numeroGanador} que escogió la computadora.`;
  }
}

function borrar() {
  document.getElementById("salidas").remove();
  location.reload();
}
