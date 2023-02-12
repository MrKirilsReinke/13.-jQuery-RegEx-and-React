function lettersOnly(value: string, element: HTMLElement): boolean {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}

export default lettersOnly;
