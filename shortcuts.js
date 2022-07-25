'use strict';
//using Promise.resolve
var promise = Promise.resolve('SECRET VALUE');
//using promise.catch
promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
  });

