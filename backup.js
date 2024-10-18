function adicionarTarefa(){   // Declaração da função adicionarTarefa, que será chamada quando o botão for clicado.
    let tarefa = document.getElementById('inputTarefa').value;  // Captura o valor do campo de texto (input) e armazena na variável "tarefa".
    if (tarefa !== ""){// Verifica se a tarefa não está vazia. Se o campo não estiver em branco, o código dentro do "if" será executado.
        let div = document.getElementById('tarefas');  // Seleciona a div com o ID "tarefas", onde as novas tarefas serão exibidas.
        div.innerHTML += `<li>${tarefa}</li>`;// Adiciona o conteúdo da tarefa à div, inserindo a tarefa dentro de um elemento <li> .Utiliza template strings para incluir o valor da variável "tarefa" dentro do HTML.
        document.getElementById('inputTarefa').value = ''; //Limpar o campo para digitar uma nova tarefa.

        //Usando getElementsByTagName para contar a quantidade de LIs
        let divCount = document.getElementsByTagName('li');
        let contador = parseFloat(divCount.length);
        console.log(`Quantidade de Tarefas: ${contador}`) //Contador de Tarefas
        
        if (contador>=5){
            console.log('Você atingiu o Limite de Tarefas')
            document.getElementById('adicionarBtn').style.display = 'none'; //Desativa o Botão
            
            console.log(`Quantidade de Tarefas: ${contador}`) //Contador de Tarefas {remover depois}
        if (contador <5) {console.log('Agora você pode voltar a escrever')
            document.getElementById('adicionarBtn').style.display = 'block'; //Tenta fazer o botão voltar
        return; 
        }
    }
}
}
//Limpa a lista
function limparLista(){
    document.getElementById('tarefas').innerHTML = '';
    document.getElementById('tarefas').style.display = 'none'
    document.getElementById('tarefas').style.display = 'block';
}

//============================================================================================




//Funcionou :

function adicionarTarefa(){   // Declaração da função adicionarTarefa, que será chamada quando o botão for clicado.
    let tarefa = document.getElementById('inputTarefa').value;  // Captura o valor do campo de texto (input) e armazena na variável "tarefa".
    if (tarefa !== ""){// Verifica se a tarefa não está vazia. Se o campo não estiver em branco, o código dentro do "if" será executado.
        let div = document.getElementById('tarefas');  // Seleciona a div com o ID "tarefas", onde as novas tarefas serão exibidas.
        div.innerHTML += `<li>${tarefa}</li>`;// Adiciona o conteúdo da tarefa à div, inserindo a tarefa dentro de um elemento <li> .Utiliza template strings para incluir o valor da variável "tarefa" dentro do HTML.
        document.getElementById('inputTarefa').value = ''; //Limpar o campo para digitar uma nova tarefa.

        //Usando getElementsByTagName para contar a quantidade de LIs
        let divCount = document.getElementsByTagName('li');
        let contador = parseFloat(divCount.length);
        console.log(`Quantidade de Tarefas: ${contador}`) //Contador de Tarefas
        
        if (contador>=5){
            console.log('Você atingiu o Limite de Tarefas')
            document.getElementById('adicionarBtn').style.display = 'none'; //Desativa o Botão
    }
}
}
//Limpa a lista
function limparLista(){
    document.getElementById('tarefas').innerHTML = ''; //Essa linha seleciona o elemento HTML com o ID tarefas e redefine seu conteúdo interno (o que está entre as tags) para uma string vazia.
    document.getElementById('tarefas').style.display = 'none' //Essa linha faz com que o elemento tarefas não seja exibido na página.
    document.getElementById('tarefas').style.display = 'block'; //faz com que o elemento se torne visível novamente
    document.getElementById('adicionarBtn').style.display='block';//Retorna o Botão de inserir tarefa
}

//============================================================================================


//Update:
function adicionarTarefa(){   // Declaração da função adicionarTarefa, que será chamada quando o botão for clicado.
    let tarefa = document.getElementById('inputTarefa').value;  // Captura o valor do campo de texto (input) e armazena na variável "tarefa".
    if (tarefa !== ""){// Verifica se a tarefa não está vazia. Se o campo não estiver em branco, o código dentro do "if" será executado.
        let div = document.getElementById('tarefas');  // Seleciona a div com o ID "tarefas", onde as novas tarefas serão exibidas.
        div.innerHTML += `<li id='task1'>${tarefa}</li>`;// Adiciona o conteúdo da tarefa à div, inserindo a tarefa dentro de um elemento <li> .Utiliza template strings para incluir o valor da variável "tarefa" dentro do HTML.
        document.getElementById('inputTarefa').value = ''; //Limpar o campo para digitar uma nova tarefa.

        //Usando getElementsByTagName para contar a quantidade de LIs
        let divCount = document.getElementsByTagName('li');
        let contador = parseFloat(divCount.length);
        console.log(`Quantidade de Tarefas: ${contador}`) //Contador de Tarefas
        
        if (contador>=5){
            console.log('Você atingiu o Limite de Tarefas')
            document.getElementById('adicionarBtn').style.display = 'none'; //Desativa o Botão
    }
}
}
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


//============================================================================================

//Tentativa Fracassada de mudar para uma lista 01:

function  adicionarTarefa(){
    let tarefa = document.getElementById('inputTarefa').value;
    if (tarefa !== ""){
        let div = document.getElementById('tarefas')
        var arrayLista = [];
        var inserir = arrayLista.push(tarefa);
        console.log(arrayLista);
        document.getElementById('inputTarefa').value = '';
}
}

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



