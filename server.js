const express = require('express');
const bodyParser = require('body-parser');
const nocache = require('nocache');

const app = express();

const PORT = 3002;

// Applying middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(nocache());

// const CLIENT_ID = "217790754539-clteqqopgk8j355djl2j8htpnf2tqg1o.apps.googleusercontent.com";
const CLIENT_ID = '1084555321495-nrlkeqheineoo95gdki6lf0mtv50emm1.apps.googleusercontent.com';
// const CLIENT_SECRET = "T7cD-f7XjAWTguMdePKrKD_-";
const CLIENT_SECRET = 'lgp3J-rVD58m7RxBfxrcGr0t';
// const API_KEY = "AIzaSyDCL_sDDu7YCs8Oy-FV3u994iYTAUijshI";
const API_KEY = "AIzaSyCvRoaIVd5F_JbwiDC5LW0gpTBWzIVoaT0";

// Server Startup
app.listen(PORT, () => {
    console.log(`OAuth 2.0 Demo Started On ${PORT}`);
});

// Login Page Load
app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
});
