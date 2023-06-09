require('dotenv').config();

const express = require("express");
const app = express();

// const port = 3000;
const port = process.env.PORT || 3000;
const { connect, connection } = require('mongoose');
const methodOverride = require('method-override');
const logsController = require('./controllers/logsController');

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

app.use(methodOverride('_method'));

app.use(express.static("public"));
// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

// Routes
app.use("/logs", logsController);

app.get("/*", (req, res) => {
  res.redirect("/logs");
});


// Listen
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
