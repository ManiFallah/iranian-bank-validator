export function isValidSheba(input: string): boolean {
  if (!input) return false;

  // حذف فاصله‌ها و حروف کوچک به بزرگ
  const sheba = input.replace(/\s+/g, '').toUpperCase();

  // بررسی طول و شروع با IR
  if (!/^IR\d{24}$/.test(sheba)) return false;

  // جابجایی چهار کاراکتر اول به انتها
  const rearranged = sheba.slice(4) + sheba.slice(0, 4);

  // تبدیل حروف به عدد (A=10, B=11, ..., Z=35)
  const converted = rearranged.replace(/[A-Z]/g, char => (char.charCodeAt(0) - 55).toString());

  // محاسبه mod 97
  let remainder = converted;
  while (remainder.length > 2) {
    const chunk = remainder.slice(0, 9); // چون JS با اعداد بزرگ مشکل داره، chunk 9 رقمی
    remainder = (parseInt(chunk, 10) % 97).toString() + remainder.slice(chunk.length);
  }

  return parseInt(remainder, 10) % 97 === 1;
}
