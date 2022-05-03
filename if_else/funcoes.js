function mostrarExemploDois(nomeProdutoUm, nomeProdutoDois)

{

    valorProdutoUm = 7;

    ValorProdutoDois = 8;

    //soma = 0;

    soma = valorProdutoUm + ValorProdutoDois





    if(soma =>10)//Valores a contar de 81 irão projetar o primeiro alert

    {

        alert("O valor da compra foi maior ou igual a dez");
		alert("O nome do produto 1 é: " + nomeProdutoUm + 
		" e o nome do produto dois é: " + nomeProdutoDois);

        
    }

    else//Qualquer número menor ou igual a 80 irá projetar o alert abaixo

    {

        alert("Você comprou o produto " + nomeProdutoUm + " e " +  nomeProdutoDois +
		" e o valor ficou abaixo de 10 reais, está autorizado comprar mais.");

    }

}