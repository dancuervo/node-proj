
let controlador = require('../controlador/controlador');
let contenidoIndex = controlador.Index;

let rutas = function(app, puerto, controlador){
    
    app.get('/', (req, res) => {
        console.log(contenidoIndex);

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

    app.get('/editor', (req, res) => {
        res.render('blog-editor');
    });
    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function(req, res){
        res.status(404).render('404');
    });
}

module.exports.rutas = rutas;