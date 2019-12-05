//funciones de control de la app
//requires
const articulo = require('../models/entradaBlog');

let blogNewPost = (req, res) => {
        
        let Articulo = new articulo();
        Articulo.autor = req.body.autor,
        Articulo.fecha = req.body.fecha,
        Articulo.post = req.body.post,
        Articulo.tags = req.body.tags
        
        Articulo.save(function(err, nuevoArticulo){
            if(err) return console.error(err);
          });

        console.log('nueva entrada guardada!');
        res.send(res.status);
}

let blogEntries = (req, res) => {
    //consulta entradas del blog en BD
    articulo.find({}, (err, lista) => {
        //console.log(`Resultado: ${lista}`);
        if(err){
            let texto = require('../vistas/includes/textos');
            let lista = [ texto.blogDefault ]
            res.render('blog', {entradas:lista});    
        } else{
            res.render('blog', {entradas:lista});
        }
    });   
}

let blogErasePost = () => {
    //delete post
}

module.exports = {
    blogNewPost,
    blogEntries,
    blogErasePost
}

