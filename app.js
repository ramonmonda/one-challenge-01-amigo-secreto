var listaDeAmigos = [];

// Função responsável por adicionar nomes a lista
function adicionarAmigo() {
    let amigoParaAdicionar = document.getElementById("amigo");

    if (amigoParaAdicionar == null || amigoParaAdicionar.value == "") {
        alert("Digite um nome no campo para adicionar.");
    } else {
        listaDeAmigos.push(amigoParaAdicionar.value);
        amigoParaAdicionar.value = "";
        console.log(listaDeAmigos);
    }
}












