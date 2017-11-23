const test = require('tape');
const logic = require('../JS/logic.js');

test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one');
  t.end();
})
