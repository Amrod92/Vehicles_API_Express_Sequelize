const express = require('express');
const app = express();
const db = require('./models');
const { version, prefix } = require('./config');
const API = require('./routes/API/endpoint_api');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`${prefix}/${version}`, API);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on LocalHost: ${PORT}`);
  });
});
