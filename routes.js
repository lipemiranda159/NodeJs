const express = require('express');
const bibleController = require("./Controllers/BibleController")
routes = express.Router();

routes.get('/', (rec, res) => {
    res.send('Aprendendo node.js teste');
});

routes.get("/Bible", bibleController.index);

module.exports = routes;