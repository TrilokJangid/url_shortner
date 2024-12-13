const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortId: {
        type: 'string',
        required: true,
        unique: true
    },
    redirectURL: {
        type: 'string',
        required: true
    },
    visitHistory: [{ timestamp: { type: Number } }]
},
    { timestamps: true }
)

const URL = mongoose.model("url", UrlSchema);

Module.exports = URL;


