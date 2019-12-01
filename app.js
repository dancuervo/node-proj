//require de servidor.js
const servidor = require('./servidor/servidor');
const app = servidor.servidor();
const puerto = servidor.puerto();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

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
rutas.rutas(app, puerto);

//mongoose connection
mongoose.connect('mongodb://localhost:27017/blog', (err, res) => {
    if (err){
        console.log(`Error al conectar a BD: ${err}`);
    }
    console.log('Conectado a BD!')
    //listen
    app.listen(puerto, (req, res)=>{
        console.log(`Servidor arriba!\nEscuchando puerto ${puerto}`);
    });
});