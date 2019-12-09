//recibde un xml y lo convierte a json
//envía el resultado a jsontodb.js
const parseString = require('xml2js').parseString;
const fs = require('fs');

let xml = './xml/camaraFederal-8-12-2019.xml';
let parse = (doc) => {
    parseString(doc, {trim: true}, (error, parsed) => {
        if (error) {
            console.log(`Falla al parsear => ${error}`);
        } else {
            let titleString = `./json/camaraFederal-camaraFederal-8-12-2019.json`;
            let write = (parsed)=>{
                fs.writeFile(
                    titleString,
                    JSON.stringify(parsed),
                    (error) => {if(error) throw error}
                );
            }
            write(parsed);
        }
    });
    
}
let read = (xml)=>{
    fs.readFile(xml,
        function(err, data) {
            var doc = data.toString().replace("\ufeff", "");
            parse(doc);
        })
}
read(xml);

module.exports = {
    parse
}
