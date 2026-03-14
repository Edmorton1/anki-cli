const fs = require('node:fs');
const path = require('node:path');

const FILE_PATH = path.resolve('newAnki.txt');

// TODO: Убрать дублирование
module.exports = {
  saveWord: (original, translate) => {
    const line = `${original};${translate}\n`;

    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, line, 'utf-8');
    } else {
      fs.appendFileSync(FILE_PATH, line, 'utf-8');
    }
  }
};