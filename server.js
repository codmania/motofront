var express = require("express");
var slashes = require("connect-slashes");
var app = express();

app.use(express.basicAuth('airdata', 'demo'));
app.use(express.logger());
app.use(express.static('www'));
// app.use('/app', express.static('public'));
// app.use('/app/assets', express.static('www/assets'));
// app.use('/bower_components', express.static('public/bower_components'));
// app.use('/content', express.static('public/content'));
// app.use('/partials', express.static('public/partials'));
app.use(slashes());

var port = process.env.PORT || 5001;

app.listen(port, function () {
    console.log("Listening on " + port);
});
