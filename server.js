const express = require('express');
const bodyParser = require('body-parser');
const nocache = require('nocache');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(nocache());

const CLIENT_ID = '1084555321495-nrlkeqheineoo95gdki6lf0mtv50emm1.apps.googleusercontent.com';
const CLIENT_SECRET = 'lgp3J-rVD58m7RxBfxrcGr0t';
const API_KEY = "AIzaSyCvRoaIVd5F_JbwiDC5LW0gpTBWzIVoaT0";

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
});
