const express = require('express');

const router = express.Router();
const Log = require('../models/log');

// Seed Route
router.get('/seed', async (req, res) => {
  try {
    await Log.create([
      {
        title: 'Weather Conditions',
        entry: 'Cloudy, partly sunny, 65°.',
        shipIsBroken: false,
      },
      {
        title: 'Departure and destination',
        entry: 'Unknown.',
        shipIsBroken: true,
      },
      {
        title: 'Fuel consumption',
        entry: 'Decent, 75% full.',
        shipIsBroken: true,
      },
    ]);
    res.redirect('/logs');
  } catch (err) {
    res.status(400).send(err);
  }
});

//INDEX
router.get('/', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    res.status(200).render('Index', { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

//NEW 
router.get('/new', (req, res) => {

  res.render('New');
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id)
    res.status(200).redirect("/logs")
  } catch (error) {
    res.status(400).send(error);

  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    const updatedLog = await Log.findByIdAndUpdate(
      req.params.id,
      // Data from Edit form
      req.body,
      { new: true }
    );
    console.log(updatedLog);
    // Redirect
    res.redirect(`/logs/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

//CREATE
router.post('/', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    const newLog = await Log.create(req.body);
    console.log(newLog);

    res.redirect(`/logs`);

  } catch (err) {
    res.status(400).send(err);
  }
})

//EDIT
router.get('/:id/edit', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id)
    res.render('Edit', { log: foundLog })
  } catch (error) {
    res.status(400).send(error)
  }
})

//SHOW
router.get('/:id', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id)
    res.render('Show', { log: foundLog })
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;