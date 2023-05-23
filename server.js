require('dotenv').config();
const express = require("expres");
const app = express();
const port = 3000;

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
app.set('view engine', 'jsx');
app.set('views', './views');


//=======I.N.D.U.C.E.S.=========

// Index
app.get('/logs', (req, res) => {
  res.send('Express is working');
});

// New
app.get('/logs/new', (req, res) => {
  res.render('New');
});

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW

// Listen
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
