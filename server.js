var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var billers = require('./routes/billers');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res,next){
  res.render('index.html');
});

/*app.all('*', (req,res) => {
  console.log(`[TRACE] Server 404 request`);
  res.status(200).sendFile('index.html');
});*/

app.use('/api', users);
app.use('/api', billers);

app.listen(port, function(){
    console.log('Server started on port '+port);
});
