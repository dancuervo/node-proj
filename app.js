//require de servidor.js
const servidor = require('./config/servidor');
const app = servidor.servidor();
const puerto = servidor.puerto();

//MOONGOSE
const db = require('./config/mongoose');
const mongoose = db.mongoose;
const DBHOST = db.DBHOST;

//fetch
const fetch = require('node-fetch');
//body-parser
let bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//configuraciones de template
app.set('view engine', 'pug');
app.set('views', './vistas');

//rutas
const rutas = require('./rutas/rutas');
rutas(app, puerto);

//mongoose connection
mongoose.connect(DBHOST, (err, res) => {
    if (err){
        console.log(`Error al conectar a BD: ${err}`);
    }
    console.log('Conectado a BD!')
    //listen
    app.listen(puerto, (req, res)=>{
        console.log(`Servidor arriba!\nEscuchando puerto ${puerto}`);
    });
});