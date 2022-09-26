let http= require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/plain'});
  res.end('Getting started with NodeJS');
}).listen(5000,()=>{console.log('Server is listening to 127.0.0.5000, open the browser and type in localhost:5000')});