'use strict';
//first() will return a promise that will be fulfilled witha secret value
var firstPromise = first();
//call the second with the fulfilled value of first
var secondPromise = firstPromise.then(function (val) {
    return second(val);
});
//fill the fulfilled value with console.log
secondPromise.then(console.log);

