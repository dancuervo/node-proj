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

    app.get('/sobre', (req, res) => {
        res.send(`Esta es la página de detalles del sitio`);
    });
}

module.exports.rutas = rutas;