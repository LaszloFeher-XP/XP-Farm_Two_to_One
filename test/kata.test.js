const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN ab, cd WHEN logic THEN returns abcd', () => {
    const kata = new Kata();
    expect(kata.longest('ab', 'cd')).toStrictEqual('abcd');
  });

  test('GIVEN abade, cdc WHEN logic THEN returns abcde', () => {
    const kata = new Kata();
    expect(kata.longest('abade', 'cdc')).toStrictEqual('abcde');
  });
});




