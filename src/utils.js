const fs = require('node:fs');
const path = require('node:path');

/** @param {(filePath: string) => void} callback */
/** @param {import('readline').Interface} rl */
const promptFilePath = (callback, rl) => {
  rl.question('Enter path to the file:\n> ', (filePath) => {
    const resolvedPath = path.resolve(filePath.trim());

    if (!fs.existsSync(resolvedPath)) {
      console.error('File does not exist:', resolvedPath, '\n');
      promptFilePath(callback, rl);
      return;
    }

    callback(filePath);
  });
};

module.exports = {
  LINE_REGEX: /^.+ [-–—] .+$/,

  /** @param {import('readline').Interface} rl */
  exit: (rl) => {
    rl.question('Press Enter to exit...\n', () => {
      rl.close();
    });
  },

  promptFilePath
};
