const cheerio = require('cheerio'),
    axios = require('axios'),
    express = require('express'),
    app = express(),
    port = 5000,
    cors = require('cors')
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(cors());
app.use(express.json());
require('./server/config/routes')(app);
