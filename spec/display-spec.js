describe('display the text', function () {

  var patternsInOrder = ["... ._.", "..| |.|", "..| |_|"];

  var text = '... ._.\n' +
    '..| |.|\n' +
    '..| |_|\n';

  beforeEach(function() {
    spyOn(console, 'log');
  });

  it('should display the LCD patterns', function () {
    display(patternsInOrder);
    expect(console.log).toHaveBeenCalledWith(text);
  })
});
