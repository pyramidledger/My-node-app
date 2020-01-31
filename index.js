// content of index.js
/*const http = require('http')
const port = 3080

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
*/

var express = require("express");
var app = express();

app.get("/", function (req, resp) {
    resp.send("Benim Web Sitem"); //kullanıcılara görünecek yazı
});

app.listen(8080); //uygulamamız bu portu dinleyecek. http://localhost:8080