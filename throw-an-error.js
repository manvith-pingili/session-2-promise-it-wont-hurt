'use strict';
/* 
Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block,
and fulfills or rejectsthe promise depending on whether an error is thrown 
*/
function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
    try {
        fulfill(JSON.parse(json));
    }
    catch(e) {
        reject(e);
    }
  });
}

function onRejected(error) {
console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onRejected);


