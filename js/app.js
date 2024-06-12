let totalGeral;
limpar();

function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if (isNaN(quantidade) || quantidade === 0)  {
        alert('Coloque uma quantidade válida!');
        document.getElementById("lista-produtos") = "";
    }
    
    let produto = document.getElementById('produto').value;
    
    let nomeProduto = produto.split('-')[0];
    let precoProduto = parseFloat(produto.split('R$')[1]);
    let valor = quantidade * precoProduto;

    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade} x</span> ${nomeProduto} <span class="texto-azul"> R$ ${ precoProduto}</span>
    </section>`;

    totalGeral = totalGeral + valor;

    let valorTotal = document.getElementById("valor-total");   
    valorTotal.innerHTML = `R$${totalGeral}`;

    document.getElementById('quantidade').value = "";
}

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";

}
