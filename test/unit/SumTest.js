'use strict';

testDone(function() {
  console.log('SumTest.js cleaning up');
  myAppNamespace.sumService.reset();
});

test('adds one', function() {
  var result = myAppNamespace.sumService.add();
  equal(result, 1, 'should have added one');

  var result = myAppNamespace.sumService.add();
  equal(result, 2, 'should have added one');
});

test('adds one separate test', function() {
  var result = myAppNamespace.sumService.add();
  equal(result, 1, 'should have added one');
});