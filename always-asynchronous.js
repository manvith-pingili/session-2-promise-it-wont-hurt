'use strict';
//create a promise and fulfill it with a value 'PROMISE VALUE'
var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});
//pass console.log as the success handler
promise.then(console.log);
//print 'MAIN PROGRAM' using console.log
console.log('MAIN PROGRAM');
