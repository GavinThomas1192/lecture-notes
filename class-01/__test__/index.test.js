'use-strict';
const class01 = require('../class-01.js')



describe('class-01.js', function() {
  //specific to jest === test()
  test('default properties', () => {
    expect(class01.name).toEqual('Katherine')
  })
});
