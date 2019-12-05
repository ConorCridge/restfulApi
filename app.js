const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on homepage');
});


//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,
  {useUnifiedTopology: true, useNewUrlParser: true },
  () => { console.log('connected to db!')
});

//Listen to server
app.listen(3000);