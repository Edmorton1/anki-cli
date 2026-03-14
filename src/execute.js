const fs = require('node:fs');
const FormatError = require('./FormatError');
const {LINE_REGEX, formatError} = require('./utils');

/** @param {string} filePath */
module.exports = (filePath) => {
  const text = fs.readFileSync(filePath, 'utf-8');

  const wordsMap = text.split('\n').reduce((acc, str, i) => {
    const line = str.trim();
    if (!line) return acc;

    if (!LINE_REGEX.test(line)) {
      throw new FormatError(line, i);
    }

    const parts = line.split(' - ');
    if (!parts[0] || !parts[1]) {
      throw new Error(formatError(line, i));
    }

    acc.set(parts[0].trim(), parts[1].trim());

    return acc;
  }, new Map());

  const words = [...wordsMap.entries()]
    .map(([original, translate]) => {
      return `${original};${translate}`;
    })
    .join('\n');

  fs.writeFileSync('newAnki.txt', words, 'utf-8');
  console.log('Operation successful — words formatted in newAnki.txt\n');
};
