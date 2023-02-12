function noWhiteSpace(value: string, element: HTMLElement) {
  return this.optional(element) || /^\S+$/i.test(value);
}

export default noWhiteSpace;
