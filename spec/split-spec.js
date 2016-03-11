var lcd = require('../main/main.js');

describe('split a number by digit', function() {
  it('should split a number to an array', function() {
    expect(lcd.split(910)).toEqual([9, 1, 0])
  })
});
