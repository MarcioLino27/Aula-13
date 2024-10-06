document.getElementById("botao").addEventListener("click", function() {
    try {
        alert("Botão foi clicado!");
        
        let erro = naoDefinido;
        
    } catch (erro) {
        console.error("Ocorreu um erro: ", erro);
        alert("Ocorreu um erro. Por favor, tente novamente.");
    }
});