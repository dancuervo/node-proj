//requires
const fetch = require('node-fetch');
const fs = require('fs');
//recibe url desde formulario en dashboard
//hace fetch desde url y envía el resultado a xmltojson.js
//let urlDeputadosFed = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
//let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
//let url
module.exports = (url) => {

    //string titulo destino
    let date = new Date()
    let dia = date.getDate()
    let mes = 1 + date.getMonth()
    let ano = date.getFullYear()
    let formato = 'xml'
    let title = `./${formato}/camaraFederal-0-${dia}-${mes}-${ano}.${formato}`

    let writeFetch = (response) => {
        return new Promise((resolve, reject)=>{
            fs.writeFile(title, response, (error) => {if(error) reject(error)} )
            console.log(`\n########################\nXML guardado: ${title}\n########################\n`);    
            return resolve(title)
        })
    }
    
    let status = (response) => {
            if (response.status >= 200) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
    }
    let text = (response) => {
        return response.text()
    }

    let fechData = (url) => {
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(status)
        .then(text)
        .then((response) => {
                writeFetch(response).then((r) => {resolve(r)})
            })
        .catch( (error)=> { reject(error) });   
        })
        
    }

    fechData(url)
}
 
    

