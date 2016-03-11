var lcd = require('../main/main.js');

describe('get digits patterns', function() {
  it('should return a patterns array', function() {
    expect(lcd.getPatterns([1,0], lcd.dictionary)).toEqual([['...', '..|', '..|'], ['._.', '|.|', '|_|']]);
  })
});
