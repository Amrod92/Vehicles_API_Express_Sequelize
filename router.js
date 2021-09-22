const express = require('express');
const router = express.Router();
const { getAllVehicles } = require('./controller');

// GET all vehicles
router.get('/vehicles', getAllVehicles);

module.exports = router;
