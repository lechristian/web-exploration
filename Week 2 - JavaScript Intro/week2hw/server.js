// ==============================
// server.js
// ==============================

// modules ----------------------
var express             = require('express');
var path                = require('path');

// Environment ------------------
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 8000;

// Express Setup ----------------
var app = express();
var router = express.Router();

// Static files -----------------
app.use(express.static(__dirname + '/public'));

// Routes -----------------------
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// Launch app -------------------
app.listen(port);
exports = module.exports = app;
