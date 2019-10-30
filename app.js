//require de servidor.js
const servidor = require('./servidor/servidor');
const app = servidor.servidor();
const puerto = servidor.puerto()

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