function adicionarTarefa(){   // Declaração da função adicionarTarefa, que será chamada quando o botão for clicado.
    let tarefa = document.getElementById('inputTarefa').value;  // Captura o valor do campo de texto (input) e armazena na variável "tarefa".
    if (tarefa !== ""){// Verifica se a tarefa não está vazia. Se o campo não estiver em branco, o código dentro do "if" será executado.
        let div = document.getElementById('tarefas');  // Seleciona a div com o ID "tarefas", onde as novas tarefas serão exibidas.
        div.innerHTML += `<li>${tarefa}</li>`;// Adiciona o conteúdo da tarefa à div, inserindo a tarefa dentro de um elemento <li> .Utiliza template strings para incluir o valor da variável "tarefa" dentro do HTML.
        document.getElementById('inputTarefa').value = ''; //Limpar o campo para digitar uma nova tarefa.

        //Usando getElementsByTagName para contar a quantidade de LIs
        let divCount = document.getElementsByTagName('li');
        let contador = parseFloat(divCount.length)

        console.log(`Quantidade de Tarefas: ${contador}`) //Contador de Tarefas
        
        if (contador>=5){
        console.log('Você atingiu o Limite de Tarefas')
        document.getElementById('adicionarBtn').style.display = 'none'; //Desativa o Botão
        return;
    }
}
}
