const express = require('express');
const app = express();
const setup_database = require('./database/setup_db');
const router = require('./router.js');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/', router);

setup_database
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on LocalHost: ${PORT}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
