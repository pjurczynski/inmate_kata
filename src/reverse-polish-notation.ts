export function reversePolishNotation(x: string): number {
  if (!isValid(x)) {
    throw new Error('no operator');
  }

  return parseInt(x || '0');
}

function isValid(x: string) {
  return x.split(' ').length !== 2;
}
