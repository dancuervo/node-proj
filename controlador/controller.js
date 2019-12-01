//funciones de control de la app
//requires
const articulo = require('../db/entradaBlog');

let blogNewPost = (req, res) => {
        console.log('recibido!');
        let entrada = req.body;
        console.log(entrada);

        let Articulo = new articulo();
        Articulo.autor = entrada.autor,
        Articulo.fecha = entrada.fecha,
        Articulo.post = entrada.post,
        Articulo.tags = entrada.tags
        
        Articulo.save(function(err, nuevoArticulo){
            if(err) return console.error(err);
          });

        console.log('nueva entrada guardada!');
        res.send(res.status);
}

let blogEntries = (req, res) => {
    //consulta entradas del blog en BD
    articulo.find({}, (err, lista) => {
        console.log(`Resultado: ${lista}`);
        res.render('blog', {entradas:lista});

    });   
}

let blogErasePost = () => {

}

module.exports = {
    blogNewPost,
    blogEntries,
    blogErasePost
}

