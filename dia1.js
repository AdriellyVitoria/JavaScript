let opcao = 0
function verificar() {
    
}
while (opcao <= 5) {
    opcao = window.prompt("Gostaria da conversão para: \n1-> Converso de moedas\n2-> Quilômetros para anos luz \n3-> Conversor de temperaturas\n4-> Valor em bitcoin\n5-> Sair ");

    if (opcao == 1) {
        let valorParaTransformar = window.prompt('Qual o valor desejando para a conversao');

        let cotacaoDoDolar = 5.32;
        let valorEmDolar = valorParaTransformar * cotacaoDoDolar;
        valorEmDolar = valorEmDolar.toFixed(2)

        let euroCotacao = 5.55;
        let conversãoMoeda = valorParaTransformar * euroCotacao;
        conversãoMoeda = conversãoMoeda.toLocaleString('pt-BR');
    
        alert('O valor ' + valorParaTransformar + ' em dolar é ' + valorEmDolar + '\nE em euro é € ' + conversãoMoeda);
    }

    else if (opcao == 2) {
        let valorQuilometroEmNumero = prompt("Qual o valor em  km que vc quer transformar em anos luz?")

       let anosLuz = 9.460536207068015;
       resultando = valorQuilometroEmNumero * anosLuz;
       resultando = resultando.toFixed(4)

        
        alert( 'Este valor ' + valorQuilometroEmNumero + ' E equivalente a ' + resultando + 'anos luz\nA cada 1 ano luz e equivalente a 10 TRILHÕES de km'); 
    }

    else if (opcao == 3) {
        let temperatura = prompt("Qual a temperatura em Celson, vc desejar mudar ?");
        let tempFahrenheit = (temperatura * 9) / 5 + 32;
        let tempKelvin = temperatura + 273.15;

        alert('A temperatura em fahrenheit é ' + tempFahrenheit + '\nA temperatura em Kelvin é ' + tempKelvin);
    }

    else if (opcao == 4) {
        let numeroParaTransformar = prompt("Qual o numero que vc deseja converte para bitcoin: ");
        let cotacaoBTC = 116500.71;
        let valorBTC = numeroParaTransformar * cotacaoBTC;

        valorBTC = valorBTC.toLocaleString('pt-BR');

        alert('O valor ' + numeroParaTransformar + ' em bitcoin é ' + valorBTC)
    }
    else if (opcao == 5) {
        alert('Obrigada por usar nossos serviços. Volte sempre')
        break
    }
    else {
        alert('O número informando é inválido, tente novamente')
    }

}


