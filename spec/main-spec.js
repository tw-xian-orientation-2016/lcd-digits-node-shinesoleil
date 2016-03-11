var lcd = require('../main/main.js');

describe('integration test', function() {

  var pattern = '... ._. ._. ...\n' +
      '..| ._| ._| |_|\n' +
      '..| |_. ._| ..|\n';

  it('should display lcd for a number', function() {
    expect(lcd(1234)).toEqual(pattern);
  })
});
