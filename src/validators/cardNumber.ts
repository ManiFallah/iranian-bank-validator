export function isValidCardNumber(card: string): boolean {
  // حذف فاصله و خط‌فاصله
  const normalized = card.replace(/[\s-]/g, '');

  // بررسی طول و فرمت فقط عددی ۱۶ رقمی
  if (!/^\d{16}$/.test(normalized)) return false;

  // رد کردن ارقام تکراری مثل 0000000000000000 یا 1111111111111111
  if (/^(\d)\1{15}$/.test(normalized)) return false;

  const digits = normalized.split('').map(Number);
  let sum = 0;

  for (let i = 0; i < 16; i++) {
    let num = digits[i];
    if (i % 2 === 0) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    sum += num;
  }

  return sum % 10 === 0;
}
