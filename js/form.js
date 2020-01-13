var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

event.preventDefault();

var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;
var imc = form.imc.value;

var pacienteTr = document.createEmelent("tr");

var pesoTd = document.createEmelent("td");
var nomeTd = document.createEmelent("td");
var alturaTd = document.createEmelent("td");
var gorduraTd = document.createEmelent("td");
var imcTd = document.createEmelent("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
imcTd.textContent = calculaImc(peso, altura);
gorduraTd.textContent = gordura;

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("tabela-pacientes");

tabela.appendChild(pacienteTr);

})
