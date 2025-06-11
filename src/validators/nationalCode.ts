export function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;

  if (/^(\d)\1{9}$/.test(input)) return false;

  const check = parseInt(input[9], 10);
  const sum = input
    .split('')
    .slice(0, 9)
    .reduce((acc, digit, i) => acc + parseInt(digit, 10) * (10 - i), 0);

  const remainder = sum % 11;

  return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
}
