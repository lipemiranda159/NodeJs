const express = require('express');

const app = express();

app.get('/', (rec, res) => {
    res.send('Aprendendo node.js');
});

app.listen(8080);