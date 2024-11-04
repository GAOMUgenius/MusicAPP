function judgeSquareSum(c: number): boolean {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === parseInt(b.toString())) {
      return true;
    }
  }
  return false;
};