const mongoose = require('mongoose');

const connectDB = async (connectionUri) => {
    try {
       await mongoose.connect(connectionUri)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;