'use strict';
//create a promise and fulfill the promise with the value 'I FIRED' and reject the promise with the value 'I DID NOT FIRE'
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});
//create a function that prints the error's message with console.log
function onRejected(error){
    console.log(error.message);
}
//pass console.log and the onRejected function as the success and rejection handlers
promise.then(console.log, onRejected);

