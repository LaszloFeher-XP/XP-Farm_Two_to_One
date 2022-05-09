const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')
const { Kata } = require('../../src/kata')
let kata;

Given('the logic', () => {
  kata = new Kata();
});

When('ab, cd', () => {
  this.response = kata.longest('ab', 'cd');
});

When('abade, cdc', () => {
  this.response = kata.longest('abade', 'cdc');
});

Then('returns abcd', () => {
  expect(this.response).toStrictEqual('abcd');
});

Then('returns abcde', () => {
  expect(this.response).toStrictEqual('abcde');
});

Fusion('../two_to_one.feature')