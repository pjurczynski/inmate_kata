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

  it('should return a result of a plus binary operation', () => {
    expect(reversePolishNotation('9 9 +')).toEqual(18);
  });

  it('should return a result of a multiply binary operation', () => {
    expect(reversePolishNotation('9 9 *')).toEqual(81);
  });

  it('should return a result of a minus binary operation', () => {
    expect(reversePolishNotation('8 9 -')).toEqual(-1);
  });

  it('should return a result of a division binary operation', () => {
    expect(reversePolishNotation('16 8 /')).toEqual(2);
  });

  it('should return a result of multiple binary operations', () => {
    expect(reversePolishNotation('1 1 + 1 +')).toEqual(3);
  });
});
