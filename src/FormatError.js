class FormatError extends Error {
  constructor(line, index) {
    const message =
      `❌ Dictionary format error!\n\nLine ${index + 1} is invalid:\n` +
      '\n' +
      line +
      '\n\n' +
      'Fix the format:\nword - translation (spaces around the dash are required)\n';

    super(message);

    this.name = 'FormatError';
  }
}

module.exports = FormatError;
