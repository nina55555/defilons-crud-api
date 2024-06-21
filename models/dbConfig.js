const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongodb connecté avec grâce a defilons-crud-api'))
.catch(err => console.log(err) );

