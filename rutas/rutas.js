
let controlador = require('../controlador/controlador');
let contenidoIndex = controlador.Index;

let rutas = function(app, puerto, controlador){
    
    app.get('/', (req, res) => {

        res.render('index', contenidoIndex)
    });

    app.post('/mensajes', (req, res) => {
        let mensaje = req.body;
        console.log("Mensaje recibido: " + JSON.stringify(mensaje));
        res.json({resultado: 'Se recibieron los datos post del formulario!'})
    });

    app.get('/about', (req, res) => {
        res.render('about');
    });

    app.get('/blog', (req, res) => {
        res.render('blog');
    });

    app.post('/blog', (req, res) => {
        console.log('recibido!');
        let entradaString = JSON.stringify(req.body);
        console.log(entradaString);
        
        //let db = require('../db/dbapp');
        //let guarda = db.guardaArticulo;

        let guardaArticulo = (entradaString) =>{
            console.log('accediendo a guardaArticulo');
            let mongoose = require('mongoose');
          // make a connection
          mongoose.connect('mongodb://localhost:27017/blog');
          // get reference to database
          let db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));
        
        
          let entrada = JSON.parse(entradaString);
          db.once('open', function() {
            console.log("Connection Successful!");    
            // define Schema
            let BlogSchema = mongoose.Schema({
              autor: String,
              fecha: Date,
              post: String,
              tags: String
            });
            // compile schema to model
            let Articulo = mongoose.model('Articulo', BlogSchema, 'blog');
            // a document instance
            //recoger datos de body.request
            let newArticulo = new Articulo({ autor: entrada.autor, fecha: entrada.fecha, post: entrada.post, tags: entrada.post});
            // save model to database
            newArticulo.save(function(err, newArticulo){
              if(err) return console.error(err);
              console.log(newArticulo + "guardado en BD")
            });
        
          });
          }

        guardaArticulo(entradaString);
        console.log('nueva entrada guardada!');
        res.send(res.status);
    });

    app.get('/editor', (req, res) => {
        res.render('blog-editor');
    });
    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function(req, res){
        res.status(404).render('404');
    });
}

module.exports.rutas = rutas;