let rutas = function(app, puerto){
    
    app.get('/', (req, res) => {
        res.render('index', {
            title: '13º Andar',
            titulo: '13º Andar',
            mensaje: 'Desenvolvimento Web'
        });
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