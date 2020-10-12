/** @format */

// ---------Calcular Consumo promedio por persona/vida-----------

function calcular() {
  let nombres = document.getElementById("nombre").value;

  let anios = document.getElementById("anio").value;

  let dias = anios * 365;

  let agua = dias * 120;

  let comida = dias * 2;

  let dormir = anios / 8;

  var formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ",", // separador para los decimales
    formatear: function (num) {
      num += "";
      var splitStr = num.split(".");
      var splitLeft = splitStr[0];
      var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : "";
      var regx = /(\d+)(\d{3})/;
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2");
      }
      return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
      this.simbol = simbol || "";
      return this.formatear(num);
    },
  };

  var diaFormat = formatNumber.new(dias);
  var aguaFormat = formatNumber.new(agua);
  var comidaFormat = formatNumber.new(comida);
  var dormirFormat = formatNumber.new(dormir);

  document.getElementById(
    "salidas"
  ).innerHTML = `¡Hola! ${nombres} felicidades por tus ${diaFormat} días de vida.`;

  document.getElementById(
    "agua"
  ).innerHTML = `Sabías ${nombres} que has usado aproximadamente ${aguaFormat} litros de agua...`;
  document.getElementById(
    "comida"
  ).innerHTML = `... y además,  comiste aproximadamente ${comidaFormat} kilos de alimentos...`;
  document.getElementById(
    "dormir"
  ).innerHTML = `... y que de los ${anios} años de vida, has dormido una media de ${dormirFormat} años  ¿Increíble no?`;
}

function borrar() {
  document.getElementById("salidas").remove();
  location.reload();
}
