// Dotenv
require('dotenv').config();

// Packages
const express = require('express');
const bodyParser = require('body-parser');

// Express
const app = express();

// Server config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
require('./src/controllers/ImageController')(app);

const server = app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${server.address().port}`);
});
