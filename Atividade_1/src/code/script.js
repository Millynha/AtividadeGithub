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
  