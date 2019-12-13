//funciones de control de la app
//requires Blog Model
const Post = require('../models/entradaBlog');


let blogNewPost = (req, res) => {
    console.log(req.body);
    let post = new Post();

        post.author = req.body.autor,
        post.date = new Date(),
        post.title = req.body.titulo,
        post.post = req.body.post,
        post.tags = req.body.tags
        console.log(post);
        post.save((err) => {
            if(err) return console.error(err);
          });

        res.send(res.status);
}

let blogEntries = (req, res) => {
    //consulta entradas del blog en BD
    //let post = new Post();
    
    Post.find({}).sort({date: -1}).exec((error, resultado) => {
        
        if(error) throw error
        
        res.render('blog', {resultado});
    })
}

let blogErasePost = () => {
    //delete post
}

module.exports = {
    blogNewPost,
    blogEntries,
    blogErasePost
}

