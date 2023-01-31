let opção = 0
while (opção <= 5) {
    opção = window.prompt("Gostaria da conversão para: \n1-> Converso de moedas\n2-> Quilômetros para anos luz \n3-> Conversor de temperaturas\n4-> Valor em bitcoin\n5-> Sair ");

    if (opção == 1) {
        let valorParaTransformar = window.prompt('Qual o valor desejando para a conversao');
        
        let cotacaoDoDolar = 5.32;
        let valorEmDolar = valorParaTransformar * cotacaoDoDolar;
        valorEmDolar = valorEmDolar.toFixed(2)

        let euroCotação = 5.55;
        let conversãoMoeda = valorParaTransformar * euroCotação;
        conversãoMoeda = conversãoMoeda.toLocaleString('pt-BR');
    
        alert('O valor ' + valorParaTransformar + ' em dolar é ' + valorEmDolar + '\nE em euro é € ' + conversãoMoeda);
    }

    else if (opção == 2) {
        let valorAnosLuz = prompt("Qual valor em Anos-Luz você quer converter para quilômetros?")

        parseFloat(valorAnosLuz);
        
        let valorEmKm = valorAnosLuz * 9.460536207068015
        
        alert(valorEmKm); //colocar uma descrição
    }

    else if (opção == 3) {
        let temperatura = prompt("Qual a temperatura em Celson, vc desejar mudar ?");
        let tempFahrenheit = (temperatura * 9) / 5 + 32;
        let tempKelvin = temperatura + 273.15;

        alert('A temperatura em fahrenheit é ' + tempFahrenheit + '\nA temperatura em Kelvin é ' + tempKelvin);
    }

    else if (opção == 4) {
        let numeroParaTransformar = prompt("Qual o numero que vc deseja converte: ");
        let cotaçãoBTC = 116500.71;
        let valorBTC = numeroParaTransformar * cotaçãoBTC;

        valorBTC = valorBTC.toLocaleString('pt-BR');

        alert(valorBTC)
    }
    else {
        alert('O número informando é inválido, tente novamente')
    }

}

alert('Obrigada por usar nosso serviços. Volte sempre')
