var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    this.value

    var pacientes = document.querySelectorAll(".paciente");

    //Condição para os valores da tabela com o tamanho maior que zero
   if (this.value.length > 0) {
     //Laço para passar por todos os pacientes através do nome
     for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      //Expressão para que a busca seja feita por cada letra do this.value
      //Condição para deixar invisível os casos que não foram informados na busca.
      var expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      }
      else {
        paciente.classList.remove("invisivel");
      }

     }
   }
   else {
     //Caso não seja digitado nenhum, ele retira a classe que esconde os pacientes da tabela
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
      }
   }


});
