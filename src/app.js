const express = require('express');
const connectDB = require('./config/connect-db');
const authRouter = require('./routes/auth.route');

const app = express();

app.use(express.json())

app.use('/auth/', authRouter);

connectDB(process.env.DATABASE_URI)

module.exports = app;