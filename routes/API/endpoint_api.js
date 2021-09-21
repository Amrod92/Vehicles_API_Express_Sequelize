const express = require('express');
const router = express.Router();
const db = require('../../models');

// GET all vehicles
router.get('/vehicles', (req, res) => {
  db.vehicles.findAll().then(vehicles => res.send(vehicles));
});

// GET vehicle by id
router.get('/vehicles/:id', (req, res) => {
  db.vehicles
    .findAll({
      where: {
        id: req.params.id
      }
    })
    .then(vehicle => res.send(vehicle));
});

// POST new vehicle
router.post('/vehicles', (req, res) => {
  db.vehicles
    .create({
      id: req.body.id,
      make: req.body.make,
      model: req.body.model,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
    })
    .then(submitVehicle => res.send(submitVehicle));
});

// DELETE vehicle by id
router.delete('/vehicles/:id', (req, res) => {
  db.vehicles
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.send('success'));
});

// PUT vehicle by id
router.put('/vehicles/:id', (req, res) => {
  db.vehicles
    .update(
      {
        make: req.body.make,
        model: req.body.model
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(() => res.send('success'));
});
module.exports = router;
