import { loadFeature, defineFeature } from 'jest-cucumber-fusion';
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const feature = loadFeature('../two-to-one.feature');
const { Kata } = require('../../src/kata');

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

Given('today is Friday', function () {
  this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});