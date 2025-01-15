
const btn = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
let currentExpression = '';

btn.forEach(button => {
  button.addEventListener('click', function() {
    const buttonValue = button.getAttribute('data-value');

    if (buttonValue) {
          currentExpression += buttonValue;
      display.value = currentExpression;  
    }
  });
});
clearButton.addEventListener("click",function(){
    currentExpression = '';
      display.value = '';
});
equalsButton.addEventListener("click",function(){
    currentExpression = eval(currentExpression).toString();
          display.value = currentExpression; 
})