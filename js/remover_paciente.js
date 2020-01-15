
//Pega todas as tags que contenham a classe paciente
var pacientes = document.querySelectorAll(".paciente");

//Pega a tabela inteira
var tabela = document.querySelector("#tabela-pacientes");

//Dentro da tabela, ao dar duplo clique em alguma célula, a tabela escutará o evento
//ver quem é o alvo do evento (td) e remover o pai dele (tr)
tabela.addEventListener("dblclick", function(event) {
  //Insere uma classe criada no css e seu comportamento
  event.target.parentNode.classList.add("fadeOut");
  //Função para aguardar 500 ms a remoção da linha do paciente.
  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);

});
