const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN ab, cd WHEN logic THEN returns abcd', () => {
    const kata = new Kata();
    expect(kata.longest('ab', 'cd')).toStrictEqual('abcd');
  });
});




