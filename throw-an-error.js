'use strict';
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


