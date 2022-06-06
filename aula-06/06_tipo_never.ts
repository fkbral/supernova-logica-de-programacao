function permissionError(userName: string): never {
  throw new Error(`The user ${userName} is not allowed to perform the requested operation`)
}

permissionError('test123')