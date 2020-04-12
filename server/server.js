const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const port = 5000;

const app = express();

app.use(express.static('../client/ public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const privateKey = fs.readFileSync('certificates/server.key', 'utf-8');
const certificate = fs.readFileSync('certificates/server.crt', 'utf-8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => console.log(`🚀 Server listening on port ${port}. Happy Hacking!`));