import { isValidIranianNationalCode } from '../src/validators/nationalCode';

describe('isValidIranianNationalCode', () => {
  it('should return true for valid national codes', () => {
    expect(isValidIranianNationalCode('0010853659')).toBe(true);
    expect(isValidIranianNationalCode('0084575943')).toBe(true);
    expect(isValidIranianNationalCode('0440446214')).toBe(true);
    expect(isValidIranianNationalCode('1111113411')).toBe(true); // valid with repeated digits
  });

  it('should return false for incorrect checksum', () => {
    expect(isValidIranianNationalCode('0010853658')).toBe(false); // last digit changed
    expect(isValidIranianNationalCode('0084575940')).toBe(false);
  });

  it('should return false for all repeated digits', () => {
    expect(isValidIranianNationalCode('0000000000')).toBe(false);
    expect(isValidIranianNationalCode('1111111111')).toBe(false);
    expect(isValidIranianNationalCode('2222222222')).toBe(false);
    expect(isValidIranianNationalCode('9999999999')).toBe(false);
  });

  it('should return false for codes with wrong length', () => {
    expect(isValidIranianNationalCode('123456789')).toBe(false);    // 9 digits
    expect(isValidIranianNationalCode('12345678901')).toBe(false);  // 11 digits
    expect(isValidIranianNationalCode('')).toBe(false);             // empty
  });

  it('should return false for non-numeric strings', () => {
    expect(isValidIranianNationalCode('abcdefghij')).toBe(false);
    expect(isValidIranianNationalCode('۱۲۳۴۵۶۷۸۹۰')).toBe(false);  // Persian digits
    expect(isValidIranianNationalCode('12345abcde')).toBe(false);
    expect(isValidIranianNationalCode('1234-56789')).toBe(false);
  });
});
