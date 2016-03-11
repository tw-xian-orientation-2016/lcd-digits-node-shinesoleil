var lcd = require('../main/main.js');

describe('concatenate the string at the same level', function () {
  var patterns = [['...', '..|', '..|'], ['._.', '|.|', '|_|']];
  var result = ['... ._.', '..| |.|', '..| |_|'];

  it('should concatenate the string with the same index', function () {
    expect(lcd.concat(patterns)).toEqual(result);
  })
});
