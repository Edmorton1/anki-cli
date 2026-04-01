const fs = require('node:fs');

module.exports = {
  saveWord: (original, translate, filePath) => {
    const line = `${original};${translate}\n`;

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, line, 'utf-8');
    } else {
      fs.appendFileSync(filePath, line, 'utf-8');
    }
  }
};