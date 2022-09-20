const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret_recipe.txt');

//  Caesar encoding, for use with decoding below
const ENCODING = {
  y: 'a',
  h: 'b',
  v: 'c',
  x: 'd',
  k: 'e',
  p: 'f',
  z: 'g',
  s: 'h',
  a: 'i',
  b: 'j',
  e: 'k',
  w: 'l',
  u: 'm',
  q: 'n',
  n: 'o',
  l: 'p',
  m: 'q',
  f: 'r',
  o: 's',
  i: 't',
  g: 'u',
  j: 'v',
  t: 'w',
  d: 'x',
  r: 'y',
  c: 'z',
  3: '0',
  8: '1',
  4: '2',
  0: '3',
  2: '4',
  7: '5',
  5: '6',
  9: '7',
  1: '8',
  6: '9',
};

// An ingredient has an amount and a description.
// For example: an Ingredient could have "1 cup" as the amount and "butter" as the description.
class Ingredient {
  constructor(amount, description) {
    this.amount = amount;
    this.description = description;
  }
}

const decodeString = (str) => {
  // Given a string named str, use the Caesar encoding above to return the decoded string.
  // TODO: implement me
  return '1 cup';
};

const decodeIngredient = (line) => {
  // Given an ingredient, decode the amount and description, and return a new Ingredient
  // TODO: Implement me
  return new Ingredient('1 cup', 'butter');
};

const init = () => {
  // A program that decodes a secret recipe
  // TODO: Implement me
};

init();

module.exports = {
  Ingredient,
  decodeString,
  decodeIngredient,
};
