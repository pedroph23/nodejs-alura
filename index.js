require('marko/express');
require('marko/node-require').install();
require('./app/config/database');
const express = require('express');
const router = require('./app/routers');

const app = express();
router(app);

app.listen(3000, () => {
    console.log('Service running');
});

module.exports = app;
