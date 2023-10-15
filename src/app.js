const express = require('express');
const connectDB = require('./config/connect-db');
const authRouter = require('./routes/auth.route');
const playRouter = require('./routes/play.route')

const app = express();

app.use(express.json())

app.use('/auth/', authRouter);
app.use("/play/", playRouter);

connectDB(process.env.DATABASE_URI)

module.exports = app;