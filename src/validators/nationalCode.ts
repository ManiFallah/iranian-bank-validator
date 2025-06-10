export function isValidIranianNationalCode(input: string): boolean {
  // 1. ابتدا باید ورودی دقیقاً ۱۰ رقم باشه
  if (!/^\d{10}$/.test(input)) return false;

  const digits = input.split('').map(Number);
  const checkDigit = digits[9];

  // 2. کدهای جعلی مثل 1111111111 یا 0000000000 رو رد می‌کنیم
  const allEqual = digits.every(d => d === digits[0]);
  if (allEqual) return false;

  // 3. محاسبه جمع ضرایب طبق فرمول رسمی
  const sum = digits
    .slice(0, 9)
    .reduce((acc, digit, index) => acc + digit * (10 - index), 0);

  const remainder = sum % 11;

  // 4. بررسی رقم کنترل
  return (remainder < 2 && checkDigit === remainder) ||
         (remainder >= 2 && checkDigit === 11 - remainder);
}
