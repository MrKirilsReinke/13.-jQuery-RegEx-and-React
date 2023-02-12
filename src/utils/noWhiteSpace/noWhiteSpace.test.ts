import noWhiteSpace from './noWhiteSpace';

describe('noWhiteSpace', () => {
  it('should return true if no white spaces used', () => {
    const value = '1ppp pppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = noWhiteSpace.call(mockThis, value, element);
    expect(result).toBe(false);
  });
});

describe('noWhiteSpace', () => {
  it('should return true if no white spaces used', () => {
    const value = 'sgh34pppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = noWhiteSpace.call(mockThis, value, element);
    expect(result).toBe(true);
  });
});
