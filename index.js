const express = require('express');
const urlRoute = require('./routes/url')
const { connectDb } = require('connect');
const uId = require('short-unique-id')

const app = express();

const PORT = 4000;

connectDb('mongodb://127.0.0.1:27017/short-url')

app.use("/url", urlRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})