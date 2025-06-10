import { isValidCardNumber } from '../src/validators/cardNumber';

describe('isValidCardNumber', () => {
  it('should return false for now', () => {
    expect(isValidCardNumber('6037991234567890')).toBe(false);
  });
});
