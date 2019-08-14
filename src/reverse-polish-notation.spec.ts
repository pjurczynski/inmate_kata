import { reversePolishNotation } from './reverse-polish-notation';

describe('ReversePolishNotation', () => {
  it('should return 0 on empty string', () => {
    expect(reversePolishNotation('')).toEqual(0);
  });

  it('should return a number if only one number is in a string', () => {
    expect(reversePolishNotation('9')).toEqual(9);
  });

  it('should throw error if we do not have operator for two numbers', () => {
    expect(() => reversePolishNotation('9 9')).toThrowError();
  });

  it.skip('should return a result of a valid binary operation', () => {
    expect(reversePolishNotation('9 9 +')).toEqual(18);
  });
});
