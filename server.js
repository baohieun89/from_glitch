// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var todos = [
  {id:1, todo: 'Đi chợ'},
  {id:1, todo: 'Nấu Cơm'},
  {id:1, todo: 'Rửa Bát'},
  {id:1, todo: 'Học code'}

  
]
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});
// app.get("/todos", (request, response) => {
//   response.send(
//     "<ul><li>Đi chợ</li><li>Nấu Cơm</li><li>Rửa Bát</li><li>Học code tại CodersX</li></ul>"
//   );
// });
app.get('/todos',(req, res) => {
  res.render('index',{
    todos: todos
  });
});

app.get('/todos/search',(req, res) => {

  var q = req.query.q;
  var matchedItem = todos.filter(item => {
    return item.content.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('index',{
    todos: matchedItem
  });
});

app.get('/todos/create', (req, res) => {
  
});
app.post('/todos/create',(req, res) => {
  
  todos.push(req.body);
  res.redirect('back');
  
})
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
