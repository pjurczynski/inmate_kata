export function reversePolishNotation(x: string): number {
  if (!isValid(x)) {
    throw new Error('no operator');
  }

  const [a, b, operator] = x.split(' ');

  if (operator === '+') {
    return parseInt(a) + parseInt(b);
  }

  return parseInt(x || '0');
}

function isValid(x: string) {
  return x.split(' ').length !== 2;
}
