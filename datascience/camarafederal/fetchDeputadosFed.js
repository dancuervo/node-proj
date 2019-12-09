//requires
const fetch = require('node-fetch');
//recibe url desde formulario en dashboard
//hace fetch desde url y envía el resultado a xmltojson.js
//let urlDeputadosFed = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
//let url;
const fetchDeputadosFed = fetch(url)
    .then((resultado) => 
        resultado.text()
        )
    .then(
        (resultado) => {
            //string titulo destino
            let date = new Date();
            let dia = date.getDate();
            let mes = 1 + date.getMonth();
            let ano = date.getFullYear();
            let formato = 'xml'
            let title = `./${formato}/camaraFederal-0${dia}-${mes}-${ano}$.{formato}`;

            const fs = require('fs');
            fs.writeFile(
                title,
                resultado,
                (error) => {if(error) throw error}
            );
            let xmljs = require('./xmltojson').parse;
            xmljs(title);

    })
    .catch(
        (error)=>{
            console.log(error);
        }
    );
module.exports = {
    fetchDeputadosFed
}
