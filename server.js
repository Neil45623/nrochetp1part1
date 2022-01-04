
const express = require("express");

const app = express();

app.get('/ping', (_demande, reponse) => {
    reponse.json('pong');
});

app.listen(3000);

