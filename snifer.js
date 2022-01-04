const express = require("express");

const app = express();

app.get('/ping', (_demande, reponse) => {
    reponse.json('pong');
});

const port = getRandomPort();
console.log(port);

app.listen(port);

function getRandomPort(min, max) {
    min = Math.ceil(3000);
    max = Math.floor(4000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
