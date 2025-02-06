var listaDeAmigos = [];

// Função responsável por adicionar nomes a lista
function adicionarAmigo() {
    let campoResultado = document.getElementById("resultado");
    let amigoParaAdicionar = document.getElementById("amigo");

    if (amigoParaAdicionar == null || amigoParaAdicionar.value == "") {
        alert("Por favor, insira um nome.");
    } else {
        campoResultado.innerHTML = "";
        listaDeAmigos.push(amigoParaAdicionar.value);
        amigoParaAdicionar.value = "";
        console.log(listaDeAmigos);
        adicionarListaAoHtml();
    }
}

// Função responsável por adicionar os nomes da lista à tela
function adicionarListaAoHtml() {
    let listaDeExibicao = document.getElementById("listaAmigos");
    listaDeExibicao.innerHTML = "";

    for (let index = 0; index < listaDeAmigos.length; index++) {
        let novoItem = document.createElement("li");
        novoItem.textContent = listaDeAmigos[index];
        listaDeExibicao.appendChild(novoItem);
    }        
}

// Função responsável por sortear um amigo na lista atual
function sortearAmigo() {
    let listaDeExibicao = document.getElementById("listaAmigos");
    let campoResultado = document.getElementById("resultado");

    if (listaDeAmigos == null || listaDeAmigos.length == 0) {
        alert("Lista de amigos vázia, adicione nomes para sortear.");
    } else {
        let numeroEscolhido = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[numeroEscolhido];
        let novoItem = document.createElement("li");

        listaDeExibicao.innerHTML = "";
        campoResultado.innerHTML = "";        
        novoItem.textContent = `O amigo sorteado foi "${amigoSorteado}".`;
        campoResultado.appendChild(novoItem);
        console.log(`O amigo sorteado foi "${amigoSorteado}".`);
        listaDeAmigos = [];
    }
}

