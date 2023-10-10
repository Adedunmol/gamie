require('express-async-errors');
require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
    console.log('Database Connected');
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}...`);
    })
})