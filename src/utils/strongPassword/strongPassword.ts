function strongPassword(value: string, element: HTMLElement): boolean {
  return this.optional(element)
  || value.length >= 8
  && /\d/.test(value)
  && /[a-z]/i.test(value);
}

export default strongPassword;
