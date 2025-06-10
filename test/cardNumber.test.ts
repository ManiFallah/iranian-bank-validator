import { isValidCardNumber } from '../src/validators/cardNumber';

describe('isValidCardNumber', () => {
  it('should return true for valid card numbers', () => {
    expect(isValidCardNumber('6037997512345670')).toBe(true); // ملی
    expect(isValidCardNumber('6104337923456789')).toBe(true); // ملت
    expect(isValidCardNumber('6274129005473742')).toBe(true); // اقتصاد نوین
  });

  it('should return false for card numbers with invalid checksum', () => {
    expect(isValidCardNumber('6037997512345671')).toBe(false);
    expect(isValidCardNumber('6104337923456788')).toBe(false);
  });

  it('should return false for card numbers with wrong length', () => {
    expect(isValidCardNumber('603799751234567')).toBe(false);   // 15 digits
    expect(isValidCardNumber('60379975123456700')).toBe(false); // 17 digits
    expect(isValidCardNumber('')).toBe(false);                  // empty string
  });

  it('should return false for non-digit characters', () => {
    expect(isValidCardNumber('60379975abcd5670')).toBe(false);
    expect(isValidCardNumber('6274-1290-0547-3742')).toBe(false); // dashes should be normalized
    expect(isValidCardNumber('۶۰۳۷۹۹۷۵۱۲۳۴۵۶۷۰')).toBe(false); // Persian digits
  });

  it('should accept card numbers with spaces or dashes (normalized)', () => {
    expect(isValidCardNumber('6037 9975 1234 5670')).toBe(true);
    expect(isValidCardNumber('6037-9975-1234-5670')).toBe(true);
  });

  it('should return false for all repeated digits', () => {
    expect(isValidCardNumber('1111111111111111')).toBe(false);
    expect(isValidCardNumber('0000000000000000')).toBe(false);
    expect(isValidCardNumber('9999999999999999')).toBe(false);
  });
});
