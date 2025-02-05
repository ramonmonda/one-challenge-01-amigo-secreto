var listaDeAmigos = [];

// Função responsável por adicionar nomes a lista
function adicionarAmigo() {
    let amigoParaAdicionar = document.getElementById("amigo");

    if (amigoParaAdicionar == null || amigoParaAdicionar.value == "") {
        alert("Por favor, insira um nome.");
    } else {
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










