import strongPassword from './strongPassword';

describe('strongPassword', () => {
  it('should return true if the password is at least 8 characters long', () => {
    const value = '1ppppppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = strongPassword.call(mockThis, value, element);
    expect(result).toBe(true);
  });

  it('should return false if the password is not at least 8 characters long', () => {
    const value = 'ppppppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = strongPassword.call(mockThis, value, element);
    expect(result).toBe(false);
  });

  it('should return false if the password does not contain at least one number', () => {
    const value = 'pppppppp';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = strongPassword.call(mockThis, value, element);
    expect(result).toBe(false);
  });

  it('should return true if the password contain at least one number', () => {
    const value = 'pppppppp1';
    const element = {} as HTMLElement;
    const mockThis = {
      optional: () => false,
    };
    const result = strongPassword.call(mockThis, value, element);
    expect(result).toBe(true);
  });
});
