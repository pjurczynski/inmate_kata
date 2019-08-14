export function reversePolishNotation(_x: string): number {
  const parts: string[] = _x.split(' ');
  if (parts.length === 2) {
    throw new Error('no operator');
  }

  return parseInt(_x || '0');
}
