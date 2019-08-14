export function reversePolishNotation(_x: string): number {
  if (!isValid(_x)) {
    throw new Error('no operator');
  }

  return parseInt(_x || '0');
}

function isValid(_x: string) {
  return _x.split(' ').length !== 2;
}
