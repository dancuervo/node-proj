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
        //console.log(`Resultado: ${lista}`);
        if(err){
            let lista = [ { 
                autor: '<p>Daniel Cenoz</p>',
                fecha: '2019-12-01T12:04:46.461Z',
                post:
                 '<p>Hola, mundo!</p><p>Primeiro post do blog.</p><p>Obrigado pela visita!</p><p>Tudo neste site é um processo e uma viagem de aprendizado. Depois de um career shift brutal, muita sorte e apoio da família, aprendi a programar o bastante para arranjar um emprego na área de TI, o que me permitiu continuar o desenvolvimento pessoal e profissional e, basicamente, correr atrás dos sonhos. Estou aprendendo Front End e Back End con JavaScript na unha através do projeto deste site, devolvendo ao mesmo tempo algo para a sociedade e as pessoas e organizações que tornam o conhecimento de alto nível (aquele que exige anos de esforço, treinamento e rigor) em algo acessível a qualquer um com tempo, esforço e motivação (que não deixam de ser privilégios).</p><p>Cada funcionalidade que você está vendo, foi desenvolvida com sangue, suor e lágrimas, noites viradas, centenas de páginas de documentação consultadas, muitos tutoriais, livros técnicos, cursos e consultas a pessoas mais experientes e dispostas a ajudar.</p><p>Para pagar minha dívida com a sociedade, estou desenvolvendo um app neste site onde exibir resultados de pesquisas na área de data science para que qualquer um possa obter informações de interesse público sobre o estado e empresas que impactam na vida de todos nós.</p><p> <br></p>',
                tags: '<p>hello, data science, code<br></p>',
                __v: 0 } ]

            res.render('blog', {entradas:lista});    
        } else{
            res.render('blog', {entradas:lista});
        }
        

    });   
}

let blogErasePost = () => {

}

module.exports = {
    blogNewPost,
    blogEntries,
    blogErasePost
}

