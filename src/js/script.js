// Adiciona o evento de submit para o formulário
document
  .getElementById("formFinan")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Para não atualizar a página

    // Obtendo os valores e inserindo em uma lista (array)
    const formFinan = [
      parseFloat(document.getElementById("valorFinan").value),  // Valor do Financiamento
      parseFloat(document.getElementById("valorEntra").value),  // Valor da Entrada
      parseInt(document.getElementById("qtdParcelas").value),   // Número de Parcelas
      parseFloat(document.getElementById("taxaJuros").value) / 100,  // Taxa de Juros (convertida para decimal)
    ];

    // Fazendo a desestruturação para facilitar o uso
    const [valorFinan, valorEntra, meses, juros] = formFinan;

    // Calculando o valor financiado após subtrair a entrada
    const valorFinanciado = valorFinan - valorEntra;

    // Cálculo de financiamento com juros simples
    const valorTotalFinan = valorFinanciado * (1 + (meses * juros));
    const valorParcelasMaisJuros = valorTotalFinan / meses;
    const valorParcelaMenosJuros = valorFinanciado - juros;

    // Inserindo os dados na tela
    document.getElementById('totalAmount').textContent = `R$ ${valorTotalFinan.toFixed(2)}`;
    document.getElementById('installmentValue').textContent = `R$ ${valorParcelasMaisJuros.toFixed(2)} por ${meses} meses`;
    document.getElementById('valor_sem_juros').textContent = `R$ ${valorParcelaMenosJuros.toFixed(2)} por ${meses} meses`;

  });
