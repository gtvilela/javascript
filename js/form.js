
//Selecionando o id do botão e colocando-o dentro da variável.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//Criando um evento quando o botão for clicado.
//Esse evento possui uma função anônima que faz adicionar uma linha na tabela.
botaoAdicionar.addEventListener("click", function(event) {

//Limpa a ação default do evento.
event.preventDefault();

// Seleciona o pedaço do HTML que
// contenha o id form-adiciona e coloca dentro da variável.
var form = document.querySelector("#form-adiciona");

//Extraindo as informações do paciente do form
var paciente = obtemPacienteDoFormulario(form);
//cria a a linha e as células dos pacientes na tabela
var pacienteTr = montaTr(paciente);

// Seleciona o pedaço do HTML que
// contenha o id tabela-pacientes e coloca dentro da variável.
var tabela = document.querySelector("#tabela-pacientes");

// Importa as informações da tabela (td) para dentro do tr.
tabela.appendChild(pacienteTr);

//Limpar o from depois que incluir um paciente.
form.reset();

})


function obtemPacienteDoFormulario(form) {

//Criação do objeto paciente com seus atributos.
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    //Utilizando o resultado da função de calcular IMC para a definição do parâmetro.
    imc: calculaImc(form.peso.value, form.altura.value)
  }

return paciente;

}

function montaTr(paciente) {

//criando o elemento td e colocando dentro da variável
  var pacienteTr = document.createElement("tr");
  //Adicionando a classe paciente na linha da tabela (tr)
  pacienteTr.classList.add("paciente");

//Incluindo os tds dentro da tr e montando ode acordo com as informações do objeto criado.
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

//Retorna a linha do paciente
return pacienteTr;
}


function montaTd(dado, classe) {
  //criando o elemento td e colocando dentro da variável
  var td = document.createElement("td");
  //pegando a informação dentro da tag
  td.textContent = dado;
  //Adicionando uma classe
  td.classList.add(classe);
  //Retorna o elemento criado
  return td;
}
