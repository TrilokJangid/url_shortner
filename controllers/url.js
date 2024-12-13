const URL = require('../models/url.js');
const uId = require('short-unique-id');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' })
    const shortId = uId(8);
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}

Module.exports = { handleGenerateNewShortURL }