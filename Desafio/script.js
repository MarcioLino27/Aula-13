function adivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;

    while (true) {
        tentativas++;
        const palpite = prompt("Adivinhe o número entre 1 e 10:");

        try {
            const numero = parseInt(palpite);
            if (isNaN(numero)) {
                throw new Error("Apenas números são aceitos.");
            }
            if (numero < 1 || numero > 10) {
                alert("Por favor, insira um número entre 1 e 10.");
                continue;
            }

            if (numero === numeroAleatorio) {
                alert(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
                break;
            } else if (numero < numeroAleatorio) {
                alert("O número escolhido é maior.");
            } else {
                alert("O número escolhido é menor.");
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

adivinhacao();
