const express = require('express');
const {spawn} = require('child_process');


const app = express();

// middleware for allowing react to fetch() from server
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.get('/', function(req, res){
  res.send('Hello World!')
});

app.get("/python", function(req, res){

  // var data;
  const python = spawn('python', ['script.py']);
  python.stdout.on('data', function (data) {
  data = data.toString();
  //res.setHeader('X-Foo', 'bar');
  console.log(data);
  res.json(data);
  // res.render("python", {data: data});
 });


});
app.get("/result", function(req, res){

  // var data;
  const python = spawn('python', ['histogram.py']);
  python.stdout.on('data', function (data) {
  data = data.toString();
  res.json(data);
  //res.render("python", {data: data});
  console.log(data);
 });


});



app.listen('8080', function(){
  console.log('Server started on port 8080');
});
