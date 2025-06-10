import { isValidSheba } from '../src/validators/sheba';

describe('isValidSheba', () => {
  it('should return true for valid Iranian sheba numbers', () => {
    expect(isValidSheba('IR820540102680020817909002')).toBe(true);
    expect(isValidSheba('IR062960000000100324200001')).toBe(true);
    expect(isValidSheba('IR580170000000301400301001')).toBe(true);
  });

  it('should return true for valid sheba numbers with lowercase or spaces', () => {
    expect(isValidSheba('ir820540102680020817909002')).toBe(true);
    expect(isValidSheba('IR82 0540 1026 8002 0817 9090 02')).toBe(true);
  });

  it('should return false for invalid checksum', () => {
    expect(isValidSheba('IR820540102680020817909003')).toBe(false); // last digit changed
    expect(isValidSheba('IR062960000000100324200002')).toBe(false);
  });

  it('should return false for incorrect format', () => {
    expect(isValidSheba('820540102680020817909002')).toBe(false); // missing IR
    expect(isValidSheba('IRX20540102680020817909002')).toBe(false); // invalid character
    expect(isValidSheba('IR82054010268A020817909002')).toBe(false); // letter in number part
  });

  it('should return false for incorrect length', () => {
    expect(isValidSheba('IR8205401026800208179090')).toBe(false); // too short
    expect(isValidSheba('IR82054010268002081790900200')).toBe(false); // too long
  });

  it('should return false for empty or non-string inputs', () => {
    expect(isValidSheba('')).toBe(false);
    expect(isValidSheba('     ')).toBe(false);
    expect(isValidSheba(null as any)).toBe(false);
    expect(isValidSheba(undefined as any)).toBe(false);
  });

  it('should return false for non-Iranian IBANs', () => {
    expect(isValidSheba('DE89370400440532013000')).toBe(false); // Germany
    expect(isValidSheba('GB29NWBK60161331926819')).toBe(false); // UK
  });
});
