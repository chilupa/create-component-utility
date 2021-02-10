#!/usr/bin/env node
const fs = require('fs');

const folderName = process.argv[2];
const fileExtension = process.argv[3];

const createDir = (folderName) => {
  fs.mkdirSync(
    process.cwd() + `/${folderName}`,
    { recursive: true },
    (error) => {
      if (error) {
        console.error('❌  Oops! Something went wrong', error);
      }
    }
  );
};

const createFile = (folderName) => {
  if (fileExtension) {
    fs.appendFile(`${folderName}/${folderName}.${fileExtension}`, '', (err) => {
      if (err) {
        console.log(`❌ ${err}`);
      } else {
        console.log('\x1b[36m%s\x1b[0m', `✅ ${folderName} component created.`);
      }
    });
  } else {
    console.log(`\u001b[1;31m⚠️  File extention must be specified.`);
  }
};

createDir(folderName);
createFile(folderName);

module.exports = { createDir, createFile };
