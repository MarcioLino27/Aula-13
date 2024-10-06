function cadastrarLoja() {
    const nomeLoja = document.getElementById('nomeLoja').value;
    const cidade = document.getElementById('cidade').value;
    const valorTotal = document.getElementById('valorTotal').value;
    const mensagem = document.getElementById('mensagem');
    const reloadButton = document.getElementById('reloadButton');

    try {
      mensagem.innerHTML = "";
      reloadButton.style.display = "none"; 

      if (!nomeLoja || !cidade || valorTotal === "") {
        throw "Todos os campos devem estar preenchidos.";
      }

      if (valorTotal < 0) {
        throw "O valor total vendido deve ser maior ou igual a zero.";
      }

      mensagem.innerHTML = `<p class="success">Cadastro da loja "${nomeLoja}" realizado com sucesso!</p>`;

    } catch (erro) {
      mensagem.innerHTML = `<p class="error">Erro no cadastro: ${erro}</p>`;

    } finally {
      console.log("Processo de cadastro finalizado.");
      reloadButton.style.display = "inline-block";
    }
  }

  function recarregarPagina() {
    window.location.reload(); 
  }