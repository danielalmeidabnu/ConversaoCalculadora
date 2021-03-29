function operacaoBinaria(operacao) {
  document.getElementById('resultadoBinario').value =
    CalcularBinario(
      document.getElementById('operadorBinario1').value,
      document.getElementById('operadorBinario2').value,
      operacao
    );
}

//Novo ---
function operacaoBinariaHexadecimal(operacao) {
  document.getElementById('ResultadoBinarioHexa').value =
    CalcularBinarioeHexadecimal(
      document.getElementById('OperadorBinario').value,
      document.getElementById('Operadorhexadecimal').value,
      operacao
    );
}

function operacaoHexadecimalBinaria(operacao) {
  document.getElementById('ResultadoHexaBinario').value =
    CalcularHexadecimalBinario(
      document.getElementById('Operadorhexa').value,
      document.getElementById('Operadorhexabinario').value,
      operacao
    );
}

//Novo ---

function operacaoHexadecimal(operacao) {
  document.getElementById('resultadoHexadecimal').value =
    CalcularHexadecimal(
      document.getElementById('operadorHexadecimal1').value,
      document.getElementById('operadorHexadecimal2').value,
      operacao
    );
}

function operacaoDecimal(operacao) {
  document.getElementById('resultadoDecimal').value =
    CalcularDecimal(
      parseInt(document.getElementById('operadorDecimal1').value),
      parseInt(document.getElementById('operadorDecimal2').value),
      operacao
    );
}

function converterHexToDec() {
  document.getElementById('decimal').value = hexToDecimal(document.getElementById('hexa').value);
}

function converterDecToHex() {
  document.getElementById('hexa').value = DecimalparaHexa(document.getElementById('decimal').value);
}

function converterDecToBin() {
  document.getElementById('binario').value = decimalToBinario(document.getElementById('decimal').value);
}

function converterBinToDec() {
  document.getElementById('decimal').value = binarioToDecimal(document.getElementById('binario').value);
}
//--------------------------------------------------------------------------------------------------
//funções de conversão 
//--------------------------------------------------------------------------------------------------
function decimalToBinario(decimal) {
  var binario = "";
  if (decimal == 0) {
    return "0";
  } while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = parseInt(decimal / 2);
  }
  return binario;
}

function binarioToDecimal(binario) {
  var soma = 0;
  var binarioInvertido = binario.split("").reverse().join("");
  for (var i = 0; i < binario.length; i++) {
    if (binarioInvertido.charAt(i) == '1') {
      soma = soma + Math.pow(2, i);
    }
  }
  return soma;
}

function hexToDecimal(hexa) {
  var soma = 0;
  var hexadecimalInvertido = hexa
    .toUpperCase()
    .split("")
    .reverse()
    .map(s => s >= '0' && s <= '9' ? parseInt(s) : s.codePointAt() - 55);

  for (var i = 0; i < hexadecimalInvertido.length; i++) {
    soma = soma + hexadecimalInvertido[i] * Math.pow(16, i);
  }
  return soma;
}

function DecimalparaHexa(input) {
  var result = [], i;
  for (i = input; i > 0; i = parseInt(i / 16)) {
    result.push(i % 16);
  }

  for (i = 0; i < result.length; i++) {
    switch (result[i]) {
      case 10:
        result[i] = "A";
        break;

      case 11:
        result[i] = "B";
        break;

      case 12:
        result[i] = "C";
        break;

      case 13:
        result[i] = "D";
        break;

      case 14:
        result[i] = "E";
        break;

      case 15:
        result[i] = "F";
        break;
    }
  }
  return result.reverse().join("");
}
//--------------------------------------------------------------------------------------------------
//funções de cálculo
//--------------------------------------------------------------------------------------------------

function CalcularHexadecimal(operador1, operador2, operacao) {

  var decimal1 = hexToDecimal(operador1);
  var decimal2 = hexToDecimal(operador2);
  var resultado = CalcularDecimal(decimal1, decimal2, operacao);
  return DecimalparaHexa(resultado);

}

function CalcularBinario(operador1, operador2, operacao) {

  var decimal1 = binarioToDecimal(operador1);
  var decimal2 = binarioToDecimal(operador2);
  var resultado = CalcularDecimal(decimal1, decimal2, operacao);
  return decimalToBinario(resultado);

}

//Nova funtion pra calculadora -----

function CalcularBinarioeHexadecimal(operador1, operador2, operacao) {
  var operado1 = binarioToDecimal(operador1);
  var operado2 = hexToDecimal(operador2);
  var resultado = CalcularDecimal(operado1, operado2, operacao);
  return decimalToBinario(resultado);
}

function CalcularHexadecimalBinario(operador1, operador2, operacao) {
  var operado1 = hexToDecimal(operador1);
  var operado2 = binarioToDecimal(operador2);
  var resultado = CalcularDecimal(operado1, operado2, operacao);
  return DecimalparaHexa(resultado);
}

//Nova funtion pra calculadora -----

function CalcularDecimal(operador1, operador2, operacao) {

  var resultado = 0;

  switch (operacao) {
    case '+':
      resultado = operador1 + operador2;
      break;
    case '-':
      resultado = operador1 - operador2;
      break;
    case '*':
      resultado = operador1 * operador2;
      break;
  }
  return resultado;
}