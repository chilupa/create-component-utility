const { createDir, createFile } = require('./index');
const fs = require('fs');
jest.mock('fs');

describe('File App', () => {
  it('should create folder', () => {
    createDir('App');
    expect(fs.mkdirSync).toHaveBeenCalled();
  });

  it('should create file', () => {
    createFile('App');
    expect(fs.appendFile).toHaveBeenCalled();
  });
});
