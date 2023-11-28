function calcular() {
    // Obter os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operador = document.getElementById('operator').value;
  
    // Verificar se os valores são numéricos
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, insira números válidos.');
      return;
    }
    // Realizar a operação selecionada
    var resultado;
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          alert('Não é possível dividir por zero.');
          return;
        }
        break;
      default:
        alert('Operação inválida.');
        return;
    }

    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
  }