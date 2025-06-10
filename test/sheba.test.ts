import { isValidSheba } from '../src/validators/sheba';

describe('isValidSheba', () => {
  it('should return false for now', () => {
    expect(isValidSheba('IR820540102680020817909002')).toBe(false);
  });
});
