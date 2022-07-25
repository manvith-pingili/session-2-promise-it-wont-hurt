'use strict';
//Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`
function alwaysThrows() {
    throw new Error('OH NOES');
}
// Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1
function iterate(num) {
    console.log(num);
    return num+1;
}

function onReject(error) {
    console.log(error.message);
}
/*
Create a promise chain using `Promise.resolve` that wraps the iterate method, then a series of iterations that attempts to perform `iterate` a total of 10 times.
Attach a rejection handler at the bottom of the chain to print the`error.message` using `console.log`.
Insert a call to `alwaysThrows` after the 5th call of `iterate`
*/
Promise.resolve(iterate(1)).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).catch(onReject);


