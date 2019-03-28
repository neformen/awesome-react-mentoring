function nonEmptyString (string: string): boolean {
  return typeof string === 'string' && string !== ''
}

export { nonEmptyString }
