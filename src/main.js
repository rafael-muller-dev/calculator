import ceil from 'math-ceil';
import { add } from 'math-array';
import { sum, sub, mult, div } from './simpleMath';

class Calc {
  constructor() {
    this.somar = sum;
    this.subtrair = sub;
    this.multiplicar = mult;
    this.dividir = div;
    this.arredondar = number => ceil(number);
    this.arraySum = add;
  }
}

export default Calc;
