const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/Users.js');
const Pictures = require('./routes/Pictures.js');
const Simulator = require('./routes/Simulator.js')
const path = require('path');
var cors = require('cors');

app.use(cors());

const app = express();
mongoose.connect('mongodb+srv://viviennoel:Limousin87*@chep-database.pjx6f.mongodb.net/CHEP-database?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



//Middleware allow access crossed origins


app.use((req, res, next) => {


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Middleware bodyParser


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/simulator', Simulator);
app.use('/api/auth', usersRoutes);


module.exports = app;
