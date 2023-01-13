function calculate(firstOperand, operator, secondOperand) {
  let display = '0';
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return 'Invalid operator';

      const numberButtons = document.querySelectorAll('.number');
      numberButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          display = event.target.textContent;
          updateDisplay();
        });
      });

      let firstOperand = null;
      let operator = null;

      const operatorButtons = document.querySelectorAll('.operator');
      operatorButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          operator = event.target.textContent;
          firstOperand = parseFloat(display);
          display = '0';
          updateDisplay();
        });
      });

      const equalButton = document.querySelector('.equal');
      equalButton.addEventListener('click', () => {
        display = calculate(firstOperand, operator, parseFloat(display));
        updateDisplay();
      });
  }

  function updateDisplay() {
    const displayElement = document.querySelector('#display');
    displayElement.textContent = display;
  }
}
