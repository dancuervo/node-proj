//require de servidor.js
const servidor = require('./servidor/servidor');
const app = servidor.servidor();
const puerto = servidor.puerto()

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

//listen
app.listen(puerto, (req, res)=>{
    console.log(`Servidor arriba!\nEscuchando puerto ${puerto}`);
});