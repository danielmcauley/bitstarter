var express = require('express');

var app = express.createServer(express.logger());

var mybuf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send('Hello World from index.html\n');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
