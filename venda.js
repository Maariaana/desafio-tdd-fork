function calcularVenda(venda) {
  let subtotal = 0;

  venda.itens.forEach(item => {
    const valor = item.valorItem || 0;

    const descontoPercentual = item.descontoPercentual
      ? (valor * item.descontoPercentual) / 100
      : 0;

    const descontoReal = item.descontoReal || 0;

    const descontoAplicado = Math.max(descontoPercentual, descontoReal);

    subtotal += valor - descontoAplicado;
  });

  const descontoPorPercentual = venda.descontoTotalPercentual
    ? (subtotal * venda.descontoTotalPercentual) / 100
    : 0;

  const descontoPorReal = venda.descontoTotalReal || 0;

  const descontoFinal = Math.max(descontoPorPercentual, descontoPorReal);

  const totalFinal = subtotal - descontoFinal;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    descontoTotalPercentual: venda.descontoTotalPercentual,
    descontoTotalReal: venda.descontoTotalReal,
    totalFinal: Number(totalFinal.toFixed(2)),
  };
}

module.exports = calcularVenda;