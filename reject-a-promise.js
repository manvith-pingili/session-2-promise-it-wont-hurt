'use strict';
//Create a promise that after a delay of 300ms, rejects with an Error object
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        reject(new Error('REJECTED!'));
    }, 300);
})
//print the error.message using console.log
function onReject(error) {
    console.log(error.message);
}
promise.then(null, onReject);


