'use-strict';
const class01 = require('../class-01.js')



describe('class-01.js', function() {
  //specific to jest === test()
  describe('default properties', () => {
  test('should have a default name of xxx', () => {
    expect(class01.name).toEqual('Katherine')
    expect(true).toBeFalsy();
  })
)};
});
