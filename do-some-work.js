var qhttp = require('q-io/http');
// Send an HTTP GET request to the session cache on port 7000.  A stringwill be returned representing a user ID
qhttp.read("http://localhost:7000/")

//Grab that ID from the session response and send an HTTP GET request to the database on port 7001 to the url `localhost:7001/<id>`
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();


