//textos persistentes
let texto = require('../vistas/includes/textos');
//modelos BD
//Controladores
let blogControl = require('../controller/blogController');

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
    //PANOPTICO
    app.get('/panel', (req, res) => {
        //require file
        let fs = require('fs');
        let path = require('path');
        
        let fileJSON = path.join(__dirname,'../datascience/camarafederal/json/procesado-camaraFederal-8-12-2019.json');
        fs.readFile(fileJSON,'utf8',(error, data) => {
            if(error) throw error
            let datos = JSON.parse(data);
            
            var partido = datos.pesoPartido
            
            var partidos = []
            var percentage
            for (let [key, value] of Object.entries(partido)){
            percentage = (value * 100) / 513
            percentage = percentage.toFixed(1)
            partidos.push(percentage)
            }
                //el total de diputados de cada partido en porcentaje de 513 = 100%

            res.render('panel', {datos:datos, partidos:partidos});
        });

    });
    //The 404 Route (ALWAYS Keep this as the last route)
    app.get('*', function(req, res){
        res.status(404).render('404');
    });
}

module.exports = rutas;