export function isValidCardNumber(card: string): boolean {
  // حذف فاصله‌ها یا dashها
  const normalized = card.replace(/[\s-]/g, '');

  // بررسی اینکه فقط ۱۶ رقم هست
  if (!/^\d{16}$/.test(normalized)) return false;

  const digits = normalized.split('').map(Number);
  let sum = 0;

  for (let i = 0; i < 16; i++) {
    let num = digits[i];
    // اعداد در ایندکس‌های زوج (از سمت چپ، چون 0-based) باید دو برابر شوند
    if (i % 2 === 0) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    sum += num;
  }

  return sum % 10 === 0;
}
