// Caixa para guardar números
let numeros = [];

// Quando o botão "Adicionar" é clicado, executa a função adicionarNumero
document.getElementById("adicionarBtn").addEventListener("click", function() {
    adicionarNumero();
});

// Quando o botão "Finalizar" é clicado, executa a função finalizar
document.getElementById("finalizarBtn").addEventListener("click", function() {
    finalizar();
});

// Função para adicionar número
function adicionarNumero() {
    // Pega o valor digitado pelo usuário
    let input = document.getElementById("numeroInput").value;
    // Converte o valor para número
    let numero = Number(input);

    // Verifica se o número está entre 1 e 100
    if (numero >= 1 && numero <= 100) {
        // Adiciona o número à lista
        numeros.push(numero);
        // Atualiza a lista de números na tela
        atualizarNumerosAdicionados();
        // Limpa o campo de entrada
        document.getElementById("numeroInput").value = "";
    } else if (input !== "") {
        // Se o número não estiver entre 1 e 100, mostra uma mensagem de alerta
        alert("O número deve estar entre 1 e 100.");
        // Limpa o campo de entrada
        document.getElementById("numeroInput").value = "";
    }
}

// Função para atualizar a lista de números na tela
function atualizarNumerosAdicionados() {
    // Junta os números da lista em uma string separada por vírgulas
    let numerosAdd = numeros.join(", ");
    // Mostra a lista de números na tela
    document.getElementById("numerosAdicionados").innerHTML = `Números adicionados: ${numerosAdd}`;
}

// Função para finalizar e fazer contas com os números
function finalizar() {
    // Verifica se a lista de números está vazia
    if (numeros.length == 0) {
        alert("Nenhum número foi adicionado.");
        return;
    }

    // Calcula a soma dos números
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    // Encontra o maior e o menor número
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    // Calcula a média dos números
    let media = soma / numeros.length;

    // Cria uma string com os resultados
    let resultado = `
        <p>Soma dos números: ${soma}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Média dos números: ${media.toFixed(2)}</p>
    `;

    // Mostra os resultados na tela
    document.getElementById("resultado").innerHTML = resultado;
}
