let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
let fetchxml = require('./fetchDeputadosFed')
let xmlToJson = require('./xmltojson')
//let procesajson = require('./procesajson').procesajson


let control = (url) => {
    
    fetchxml(url)
    setTimeout(() => { xmlToJson();}, 3000)
}
control(url)