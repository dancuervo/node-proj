//requests
const fetchDepFed = require('./fetchDeputadosFed').fetchDeputadosFed;

const xmltojs = require('./xmltojson');
const xmltojson = xmltojs.parse;

let url = 'https://www.camara.leg.br/SitCamaraWS/Deputados.asmx/ObterDeputados';
let xmldestino = '';
let jsondestino = '';


fetchDepFed(url);
//xmltojs()

