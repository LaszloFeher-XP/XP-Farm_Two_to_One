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

  test('GIVEN aretheyhere, yestheyarehere WHEN logic THEN returns aehrsty', () => {
    const kata = new Kata();
    expect(kata.longest('aretheyhere', 'yestheyarehere')).toStrictEqual('aehrsty');
  });

  test('GIVEN loopingisfunbutdangerous, lessdangerousthancoding WHEN logic THEN returns abcdefghilnoprstu', () => {
    const kata = new Kata();
    expect(kata.longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toStrictEqual('abcdefghilnoprstu');
  });
});




