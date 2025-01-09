function calcularImposto(valor, porcentagem) {
    return (valor * porcentagem) / 100; // Calcula o valor do imposto
}

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert('Por favor, insira um valor válido para a venda.');
        return;
    }

    const impostos = {
        IRPF: calcularImposto(valorVenda, irpf),
        PIS: calcularImposto(valorVenda, pis),
        COFINS: calcularImposto(valorVenda, cofins),
        INSS: calcularImposto(valorVenda, inss),
        ISSQN: calcularImposto(valorVenda, issqn)
    };

    const totalImpostos = Object.values(impostos).reduce((acc, curr) => acc + curr, 0);
    const valorLiquido = valorVenda - totalImpostos;

    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';

    resultado.innerHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <h3>Impostos:</h3>
        <ul>
            <li><strong>IRPF:</strong> R$ ${impostos.IRPF.toFixed(2)}</li>
            <li><strong>PIS:</strong> R$ ${impostos.PIS.toFixed(2)}</li>
            <li><strong>COFINS:</strong> R$ ${impostos.COFINS.toFixed(2)}</li>
            <li><strong>INSS:</strong> R$ ${impostos.INSS.toFixed(2)}</li>
            <li><strong>ISSQN:</strong> R$ ${impostos.ISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;

}
