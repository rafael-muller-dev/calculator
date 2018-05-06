import Calc from '../src/main';

describe('Calculadora', () => {
  let calculadora;

  beforeAll(() => {
    calculadora = new Calc();
    console.log(calculadora.arredondar(2));
  });

  test('should be an instance of Calc', () => {
    expect(calculadora).toBeInstanceOf(Calc);
  });

  test('should have somar method', () => {
    expect(calculadora.somar).toBeDefined();
  });

  test('should have subtrair method', () => {
    expect(calculadora.subtrair).toBeDefined();
  });

  test('shoud have multiplicar method', () => {
    expect(calculadora.multiplicar).toBeDefined();
  });

  test('sould have dividir method', () => {
    expect(calculadora.dividir).toBeDefined();
  });

  test('should have arredondar method', () => {
    expect(calculadora.arredondar).toBeDefined();
  });

  test('sould round -4.2 to -4', () => {
    expect(calculadora.arredondar(-4.2)).toBe(-4);
  });

  test('should have arraySum method', () => {
    expect(calculadora.arraySum).toBeDefined();
  });

  test('should return [3,6] when arraySum [1,2],[2,4]', () => {
    expect(calculadora.arraySum([1, 2], [2, 4])).toEqual([3, 6]);
  });
});
