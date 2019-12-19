let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
let fetchxml = require('./asyncFetchDeputadosFed')
let xmlToJson = require('./asyncXmlToJson')
//let procesajson = require('./procesajson').procesajson


let control = async (url) => {
    
    fetchxml(url)
    setTimeout(()=>{
        xmlToJson()
    },1000)
    
}
 control(url)
