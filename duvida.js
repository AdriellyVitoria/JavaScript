// Solicitação do Nome
var nome = window.prompt("Qual é seu nome?");

// Solicitação do Número Favorito
var numFavorito = window.prompt("Digite seu número favorito:");

// Cotação do Euro
var euroCotação = 5.55

var conversãoMoeda = numFavorito * euroCotação;

conversãoMoeda = conversãoMoeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});;

// Calcular Anos Luz em Metros
var anosLuzMetros = 9.460536207068015;

qtdAnosLuz = numFavorito * anosLuzMetros;

// Cotação em BTC
var cotaçãoBTC = 116500.71;
var valorBTC = numFavorito * cotaçãoBTC;

valorBTC = valorBTC.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

// Temperatura
var tempFahrenheit = (numFavorito * 9) / 5 + 32;
var tempKelvin = numFavorito + 273.15;

document.write(`Seja muito bem-vindo <b>${nome}</b>, o seu número favorito é <b>${numFavorito}</b>.<br><br>Olha que incrível, o seu número favorito em <b>Euros</b> equivale à <b>${conversãoMoeda}</b> e a conversão de <b>${numFavorito} BTC</b> para <b>Reais</b> é de <b>${valorBTC}</b>.<br><br>Aproveitando a situação, sabia que <b>${numFavorito} Celsius</b> é igual a <b>${tempFahrenheit} Fahrenheit</b> e <b>${tempKelvin} Kelvin</b>.<br><br>Em relação à Astronomia o seu número favorito é equivalente a <b>${qtdAnosLuz}</b> metros de <b>Anos Luz</b>.`)
