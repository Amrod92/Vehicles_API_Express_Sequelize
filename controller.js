const Vehicles = require('./database/models/Vehicles');

module.exports = {
  getAllVehicles: (req, res) => {
    Vehicles.findAll()
      .then(vehicles => res.send(vehicles))
      .catch(error => {
        console.error('onRejected function called: ' + error.message);
      });
  }
};
