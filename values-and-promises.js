// Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result
function attachTitle(arg) {
    return 'DR. ' + arg;
}
// Create a fulfilled promise with a value of `'MANHATTAN'`
var promise = Promise.resolve('MANHATTAN');
//Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`
promise.then(attachTitle).then(console.log);

