var express = require('express');
var app = express();

app.use(express.static('assets'));

app.listen(3000, function() {
	console.log("listening on " + 3000);
});