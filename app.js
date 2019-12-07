    //require de servidor.js
    const servidor = require('./config/servidor');
    const app = servidor.servidor();
    const puerto = servidor.puerto();
    const fs = require('fs');
     
    const dotenv = (envFile) => {
        //dotenv
    require('dotenv').config({
        path: envFile
    });
    }
    let connectionString;
    try {
        if (fs.existsSync('./.env')) {
            const envFile = './.env';
            dotenv(envFile);
            connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
        } else {
            const envFile = './.env-dev';
            dotenv(envFile);
            connectionString = process.env.DB_HOST_LOCAL;
        }
    } catch(error) {console.log(error)}
     
    //MOONGOSE
    const db = require('./config/mongoose');
    const mongoose = db.mongoose;
     
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
     
    //MONGOOSE CONNECTION
     
    mongoose.connect(connectionString, {connectTimeoutMS: 1000})
        .then(
            ()=>{ console.log(`Conectado a BD!`);
            app.listen(puerto, (req, res) => {
                console.log(`Servidor arriba!\nEscuchando puerto ${puerto}`);
            });
        },
            (error)=>{
                console.log(`Error al conectar: ${error}. No conectado a ${connectionString}!`)
        })
     