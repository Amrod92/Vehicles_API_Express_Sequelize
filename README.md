# Vehicles API 🚗

A simple API that reads vehicles from a database table (MySQL) and returns all the rows in the JSON format.

## Description 📖

The program takes a JSON file to populate the database, in this case MySQL, and makes it the API available to be consume.

## API Reference 🥼

#### GET example

The server is running at `localhost:8000`. You can change it anytime by going to `index.js` and change the variable `const PORT`.

```http
  GET /api/v1/vehicles

[
    {
        "id": 1,
        "make": "Audi",
        "model": "Q3",
        "createdAt": "2020-01-27T20:44:17.000Z",
        "updatedAt": "2020-01-27T20:44:17.000Z"
    },
    {
        "id": 2,
        "make": "Chevrolet",
        "model": "Malibu",
        "createdAt": "2020-01-27T20:44:17.000Z",
        "updatedAt": "2020-01-27T20:44:17.000Z"
    },

    .........
]

```

## API Reference 🥼

#### GET example

The server is running at `localhost:8000`. You can change it anytime by going to `index.js` and change the variable `const PORT`.

```http
  GET /api/v1/vehicles

[
    {
        "id": 1,
        "make": "Audi",
        "model": "Q3",
        "createdAt": "2020-01-27T20:44:17.000Z",
        "updatedAt": "2020-01-27T20:44:17.000Z"
    },
    {
        "id": 2,
        "make": "Chevrolet",
        "model": "Malibu",
        "createdAt": "2020-01-27T20:44:17.000Z",
        "updatedAt": "2020-01-27T20:44:17.000Z"
    },

    .........
]

```

## Run Locally and Dependencies 🛠

Clone the project

```bash
  git clone https://github.com/Amrod92/Vehicles_API_Express_Sequelize.git
```

Go to the project directory

```bash
  cd Vehicles_API_Express_Sequelize
```

Install dependencies

```bash
  npm install
```

Start the software and enjoy!

```bash
  npm start
```

PS: You might want to use XAMPP server solution stack package developed to have an online server between the Express application and MySQL database.

## Tech Stack 👓

**Beckend:** Node.JS v15.9, Express, Sequelize.

**Database:** MySQL 8.0CE - (My testing environment)

## License ⚖

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
