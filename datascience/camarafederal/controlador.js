let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
let fetchxml = require('./fetchDeputadosFed')
let xmlToJson = require('./xmltojson')
//let procesajson = require('./procesajson').procesajson

let recupera = (url) => {
    return new Promise((resolve, reject) => {
        fetchxml(url)
    })
}

//.then((result) => {console.log(`Resultado: ${result}`)})
//.then(xmlToJson)
//.catch(error => {console.log(error)})

recupera(url)
.then(response => console.log('fasdf'+response))
.catch(error => {console.log(error)})