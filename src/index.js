#!/usr/bin/env node

const readline = require('node:readline');
const execute = require('./execute');
const FormatError = require('./FormatError');
const {exit, promptFilePath} = require('./utils');

console.log('Script started...\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('If list.txt exists in this directory, it will be used\n');

try {
  console.log('list.txt found, start operation\n');
  execute('./list.txt');
  exit(rl);
} catch (err) {
  if (err instanceof FormatError) {
    console.error(err);
    exit(rl);
  } else {
    console.log('list.txt not found\n');

    promptFilePath((filePath) => {
      try {
        execute(filePath);
        exit(rl);
      } catch (err) {
        console.error(err.message);
        exit(rl);
      }
    }, rl);
  }
}
