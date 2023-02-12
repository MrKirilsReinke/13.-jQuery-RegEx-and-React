import lettersOnly from './lettersOnly';

describe('lettersOnly', () => {
  it('should return true if only letters used', () => {
    const value = 'ppppppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = lettersOnly.call(mockThis, value, element);
    expect(result).toBe(true);
  });

  it('should return false if not only letters used', () => {
    const value = 'ppp%$#pppp!-';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = lettersOnly.call(mockThis, value, element);
    expect(result).toBe(false);
  });
});
