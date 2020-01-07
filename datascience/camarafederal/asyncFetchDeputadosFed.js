//requires
const fetch = require('node-fetch');
const fs = require('fs');

//recibe url desde formulario en dashboard
//hace fetch desde url y envía el resultado a xmltojson.js
//let urlDeputadosFed = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
//let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
//let url
module.exports = async (url) => {

    //string titulo destino
    let date = new Date()
    let dia = date.getDate()
    let mes = 1 + date.getMonth()
    let ano = date.getFullYear()
    let formato = 'xml'
    let title = `./${formato}/camaraFederal-0-${dia}-${mes}-${ano}.${formato}`

    let writeFetch = async (response) => {
        try {
            fs.writeFile(title, response, (error) => {
                if(error) throw error
                console.log(`\n########################\nXML created: ${title}\n########################\n`)
                return writeTemp(title)
            })   
        } catch (error) {
            throw error;
        }
    }
    //almacena titulo del archivo para el próximo módulo
    let writeTemp = async (title) => {
        try {
            fs.writeFile('./xml/temp.txt', title, (error) => {      
                if (error) throw error
                console.log(`\n########################\nTemp created: ${title}\n########################\n`)
                return
            })   
        } catch (error) {
            throw error
        }
    }
    
    ////////////////////////////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////////////////////////
   
    let fechData = (url) => {
        return new Promise((reject, resolve) =>{
            fetch(url)
            .then(status)
            .then(text)
            .then((response) => {
                writeFetch(response)
                resolve('success')
                })
            .catch((error) => {
            console.log(error)
            reject()
            })
        })
        
    }
   fechData(url)
 
}