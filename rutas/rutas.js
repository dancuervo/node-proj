
let controlador = require('../controlador/controlador');
let contenidoIndex = controlador.Index;

let rutas = function(app, puerto, controlador){
    
    app.get('/', (req, res) => {
        console.log(contenidoIndex);

        res.render('index', contenidoIndex)
        });

    app.get('/prueba', (req, res) => {
        res.send(`Hola, Node!<br>Escuchando puerto: ${puerto}<br>Ahora con módulos!`);
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