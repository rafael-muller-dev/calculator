const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) {
    return 'Não pode dividir por zero';
  }
  return a / b;
};

export { sum, sub, mult, div };
