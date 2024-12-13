const mongoose = require('mongoose');

const connectDb = mongoose.connect(URL)
    .then(() => {
        console.log("database connected")
    }).catch((error) => {
        console.log(error)
    });

//async function connectDb(url) {
//return mongoose.connect(url)}

Module.exports = connectDb;