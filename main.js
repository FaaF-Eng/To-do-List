function adicionarTarefa(){   // Declaração da função adicionarTarefa, que será chamada quando o botão for clicado.
    let tarefa = document.getElementById('inputTarefa').value;  // Captura o valor do campo de texto (input) e armazena na variável "tarefa".
    if (tarefa !== ""){// Verifica se a tarefa não está vazia. Se o campo não estiver em branco, o código dentro do "if" será executado.
        let div = document.getElementById('tarefas');  // Seleciona a div com o ID "tarefas", onde as novas tarefas serão exibidas.
        div.innerHTML += `<p>${tarefa}</p>`;// Adiciona o conteúdo da tarefa à div, inserindo a tarefa dentro de um elemento <p> (parágrafo). Utiliza template strings para incluir o valor da variável "tarefa" dentro do HTML.
        document.getElementById('inputTarefa').value = ''; //Limpar o campo para digitar uma nova tarefa.
    }
}
//Teste
