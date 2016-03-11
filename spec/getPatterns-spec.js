describe('get digits patterns', function() {
  it('should return a patterns array', function() {
    expect(getPatterns([1,0], dictionary)).toEqual([['...', '..|', '..|'], ['._.', '|.|', '|_|']]);
  })
});
