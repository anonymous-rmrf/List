const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const config = require('config')
const app = express();
var cors = require('cors');


const db = config.get('mongoURI');


//Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

app.use('/api/item', require('./routes/api/listitems'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))


// if(process.env.NODE_ENV == 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })
// } 


const port = process.env.PORT || 5000;

app.listen( port, () => console.log(`server started at port ${port}`));