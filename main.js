// Função responsável por executar o Audio do elemento Audio
// Por meio do parametro passado o Seletor executa o Audio
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado!");
  }
}

// Selecionando todos os elementos Button em uma Const listaDeTeclas
const listaDeTeclas = document.querySelectorAll(".tecla");

/*
    Loop referente a inclusão dos elementos Buttons 
    junto com os elementos Audios
*/
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  /*
    Const tecla para armazenar as Teclas da Lista
    Const instrumento para armazenar a segunda Classe do elemento Button
    Const IdAudio com concatenação para armazenar o id do Audio
    com o auxilio da Contante instrumentos
  */
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  /*
    Função anonima com a Constante tecla recebendo o valor de cada uma,
    ao clicar na tecla a função anonima chama a função tocaSom e 
    recebe o parametro do idAudio
  */
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  /*
    Eventos pelo teclado
    Criada funções anonimas que identificam qual teclas estão sendo clicadas
    assim reproduzindo o som
  */
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
