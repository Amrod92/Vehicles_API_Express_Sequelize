const express = require('express');
const app = express();
//const db = require('./database/models/Vehi');
const setup_database = require('./database/setup_db');
const { version, prefix } = require('./config');
const API = require('./routes/API/routes');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`${prefix}/${version}`, API);
/*
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on LocalHost: ${PORT}`);
  });
});
*/
