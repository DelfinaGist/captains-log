require('dotenv').config();

const express = require("express");
const app = express();

// const port = 3000;
const port = process.env.PORT || 3000;
const { connect, connection } = require('mongoose');
const methodOverride = require('method-override');
const Log = require('./models/log');

// Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once('open', () => {
  console.log('connected to mongo');
});


// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);

app.set('view engine', 'jsx');

app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});
app.use(methodOverride('_method'));

app.use(express.static("public"));

//=======I.N.D.U.C.E.S.=========

// Index
// app.get('/logs', (req, res) => {
//   res.send('Index');
app.get('/logs', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    res.status(200).render('Index', { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get('/logs/new', (req, res) => {
  res.render('New');
});

//DELETE

//UPDATE
// app.put('/:id', async (req, res) => {
//     try {
//       req.body.shipIsBroken = req.body.shipIsBroken === 'on';
//       const updatedLog = await Log.findByIdAndUpdate(
//         req.params.id,

//         // From Edit form
//         req.body,
//         { new: true }
//       );
//       console.log(updatedFruit);

//       // Redirect
//       res.redirect(`/fruits/${req.params.id}`);
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });

//CREATE
app.post('/logs', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    const newLog = await Log.create(req.body);
    console.log(newLog);

    res.redirect(`/logs/${newLog._id}`);
  } catch (err) {
    res.status(400).send(err);
  }
})

//EDIT

//SHOW

// Listen
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
