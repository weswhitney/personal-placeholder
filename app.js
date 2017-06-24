var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 3000));

app.use(express.static('assets'));

app.listen(app.get('port'), function() {
	console.log("listening on ", app.get('port'));
});