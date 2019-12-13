//textos persistentes
let texto = require('../vistas/includes/textos');
//modelos BD
//Controladores
let blogControl = require('../controller/blogController');
let graficos = require('../controller/panoptico');

let rutas = function(app, puerto, controlador){
    
    app.get('/', (req, res) => {
        res.render('index', texto.Index)
    });

    app.post('/mensajes', (req, res) => {
        console.log("Mensaje recibido: " + req.body);
        res.json({resultado: 'Se recibieron los datos post del formulario!'})
    });

    app.get('/about', (req, res) => {
        res.render('about');
    });

    app.get('/blog', blogControl.blogEntries);

    app.post('/blog', blogControl.blogNewPost);

    app.get('/editor', (req, res) => {
        res.render('blog-editor');
    });

    //login
    app.post('/login', (req, res) =>{
        
    })

    //PANOPTICO
    app.get('/panel', graficos.graficos);

    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function(req, res){
        res.status(404).render('404');
    });
}

module.exports = rutas;