const exprEl = document.getElementById('expr');
const resultEl = document.getElementById('result');
let expr = '';

function update() {
  exprEl.textContent = expr;
}

function calculate() {
  try {
    const val = Function('"use strict";return (' + expr + ')')();
    resultEl.textContent = val;
    expr = val.toString(); // permite seguir operando con el resultado
  } catch {
    resultEl.textContent = "Error";
  }
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');

    if (value) {
      expr += value;
      update();
    } else if (action === 'clear') {
      expr = '';
      resultEl.textContent = '0';
      update();
    } else if (action === 'back') {
      expr = expr.slice(0, -1);
      update();
    } else if (action === 'equal') {
      calculate();
    }
  });
});
