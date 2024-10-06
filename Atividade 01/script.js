function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagemErro = document.getElementById('mensagemErro');
    
    try {
        if (nome === "") {
            throw "O campo nome não pode estar vazio!";
        }
        
        if (!email.includes('@')) {
            throw "O e-mail inserido é inválido!";
        }
        
        mensagemErro.textContent = "Formulário enviado com sucesso!";
        
    } catch (erro) {
        mensagemErro.textContent = erro;
    }
}