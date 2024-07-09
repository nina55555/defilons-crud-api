

//appel des paquets necessaires:
const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');


/* Si erreur d'update:
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
*/

//ou mettre après app
require ('./models/dbConfig');

const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsController');


//middlewares
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}) );

app.use(bodyParser.json());
app.use(cors());
/* si on veut restreindre a une adress en particulier
app.use(cors({origin: 'http://localhost:5950/posts'}));
*/
//*si on veut gerer le middleware d'encodage d'url pour eviter les valeurs undefined 
app.use(express.urlencoded({extended: false}) );

app.use('/defilons', postsRoutes);

app.listen(5978, () => console.log('server connecté merveilleusement sur port: 5978'));
