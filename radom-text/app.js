/** @format */

var frasesRk = [
    "Los ganadores no tienen miedo de perder. Los perdedores sí. El fracaso forma parte del proceso de éxito. La gente que evita el fracaso también evita el éxito.",

    "La razón principal por la que las personas tienen dificultades financieras es porque aceptan consejos financieros de personas pobres o de vendedores.",

    "Las oportunidades se repiten porque la gente repite los mismos errores.",

    "En mi opinión, una de las razones por las que millones de personas pierden billones de dólares es que invirtieron su dinero pero no estuvieron dispuestos a invertir su tiempo.",

    "La comida de baja calidad afecta a nuestra salud, y la información de baja calidad, a nuestra riqueza.",

    "La principal diferencia entre una persona rica y una persona pobre es la manera en que manejan el miedo.",

    "La emoción de ganar deber ser mayor al miedo de perder.",
  ],
  frase = 0;

setInterval(mostrarFrase, 7000);

function mostrarFrase() {
  frase++;

  if (frase > frasesRk.length - 1) {
    frase = 0;
  }
  document.getElementById("frases").innerHTML = frasesRk[frase];
}
