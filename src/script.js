const button = document.getElementById("addTask");
const inputNovaTarefas = document.getElementById("adicionarTaskInput");

let tarefas = [];

function criarNovaTarefa() {
    let aux = inputNovaTarefas.value;
    inputNovaTarefas.value = "";
    tarefas.push(aux);
    console.log(tarefas);
}

button.addEventListener('click', criarNovaTarefa);
