import { sum, sub, mult, div } from '../src/simpleMath';

describe('Smoke tests', () => {
  test('calc exist', () => {
    expect(sum).toBeDefined();
  });

  test('sub exists', () => {
    expect(sub).toBeDefined();
  });

  test('mult exists', () => {
    expect(mult).toBeDefined();
  });

  test('div exists', () => {
    expect(div).toBeDefined();
  });

  test('sum 2,2 to be 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('sub 1,2 to be -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });

  test('mult 3,6 to be 18', () => {
    expect(mult(3, 6)).toBe(18);
  });

  test('should error when div by 0', () => {
    expect(div(1, 0)).toEqual('Não pode dividir por zero');
  });

  test('should return 2 when 4,2', () => {
    expect(div(4, 2)).toEqual(2);
  });
});
