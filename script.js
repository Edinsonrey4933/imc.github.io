function sumar() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let resultado = valor1 / Math.pow (valor2,2);
  resultado = resultado.toFixed(2);
  document.getElementById("resultado").innerHTML = "El Indice de masa corporal segun los datos es de : " + resultado;
}
