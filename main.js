// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    let contador = 0; // Inicializa um contador para gerar IDs únicos para as tarefas

    // Define uma ação ao clicar no botão "Adicionar Tarefa"
    document.getElementById('adicionarBtn').onclick = function() {
        // Captura o valor inserido no campo de texto
        let tarefa = document.getElementById('inputTarefa').value;

        // Verifica se a tarefa não está vazia
        if (tarefa !== "") {
            contador++; // Incrementa o contador para o próximo ID único
            let divTarefas = document.getElementById('tarefas'); // Seleciona a DIV onde as tarefas serão exibidas

            // Cria um novo elemento <div> para a nova tarefa
            let novaTarefa = document.createElement('div');
            novaTarefa.innerText = tarefa; // Define o texto da nova tarefa como o valor inserido
            novaTarefa.id = 'tarefa-' + contador; // Atribui um ID exclusivo à nova tarefa
 
            // Adiciona uma ação ao clicar na tarefa, permitindo edição
            novaTarefa.onclick = function() {
                // Exibe um prompt para editar o texto da tarefa
                let novoTexto = prompt("Edite sua tarefa:", novaTarefa.innerText);
                // Se um novo texto for fornecido (não é null)
                if (novoTexto !== null) {
                    novaTarefa.innerText = novoTexto; // Atualiza o texto da tarefa com o novo valor
                }
            };

            // Adiciona a nova tarefa à DIV de tarefas
            divTarefas.appendChild(novaTarefa);
            // Limpa o campo de entrada após adicionar a tarefa
            document.getElementById('inputTarefa').value = '';
        }
    };
});




//Limpa a lista
function limparLista(){
    document.getElementById('tarefas').innerHTML = ''; //Essa linha seleciona o elemento HTML com o ID tarefas e redefine seu conteúdo interno (o que está entre as tags) para uma string vazia.
    document.getElementById('tarefas').style.display = 'none' //Essa linha faz com que o elemento tarefas não seja exibido na página.
    document.getElementById('tarefas').style.display = 'block'; //faz com que o elemento se torne visível novamente
    document.getElementById('adicionarBtn').style.display='block';//Retorna o Botão de inserir tarefa
}

//Botão que risca tarefa
function riscarTarefa(){
    const div = document.getElementById('task1');
    div.classList.toggle('riscado');
}
