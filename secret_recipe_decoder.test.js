const {
  Ingredient,
  decodeString,
  decodeIngredient,
} = require('./secret_recipe_decoder');

test('decodeString decodes correctly', () => {
  expect(decodeString('8 vgl')).toEqual('1 cup');
});

test('decodeIngredient decodes correctly', () => {
  const expected = new Ingredient('1 cup', 'butter');
  const actual = decodeIngredient('8 vgl#hgiikf');

  expect(actual.amount).toEqual(expected.amount);
  expect(actual.description).toEqual(expected.description);
});
