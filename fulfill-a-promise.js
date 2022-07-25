
'use strict';
//create a promise function and have it fulfilled with a value of 'FULFILLED!' after 300ms
var promise = new Promise(function (fulfill, reject) {
  setTimeout(function() {
    fulfill('FULFILLED!');
  }, 300);
});
//print the contents of the promise after it has been fulfilled
promise.then(console.log);


