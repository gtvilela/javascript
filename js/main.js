console.log("Fui carregado de um arquivbo externo");

var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Peso inválido!";

  }

  if (altura <= 0 || altura >= 3.00) {
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
  else {
  var imc = calculaImc(peso, altura);
  tdImc.textContent = imc;
  }
}


function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
