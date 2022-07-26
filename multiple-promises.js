'use strict';
/*
Create a function all that accepts two promises as arguments.

Create an internal promise

Create a counter variable with initial value of 0.

Attach then fulfillment handlers to both promises and increment the internal
counter when the handlers are called.

When the counter reaches 2, fulfill the internal promise with an array
containing both values.
*/

function all(firstPromise, secondPromise) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var values = [];
        firstPromise.then(function (val) {
            values[0] = val;
            counter++;

            if(counter>=2) {fulfill(values);}
        });
       
        secondPromise.then(function (val) {
            values[1] = val;
            counter++;

            if(counter>=2) {fulfill(values);}
        });
        
    });
}

/*
pass getPromise1() and
getPromise2() into the function and then attach console.log as a
fulfillment handler*/
all(getPromise1(), getPromise2()).then(console.log);


