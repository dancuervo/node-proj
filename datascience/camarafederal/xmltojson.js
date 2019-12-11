
let xmlToJson = (xml) => {

    //requires
    const parseString = require('xml2js').parseString;
    const fs = require('fs');
    //

    //modulo para lidiar con error unexpected token at position 0
    let read = (xml) => {
        fs.readFile(xml,
            (error, data) => {

                if (error) throw error

                data.toString().replace("\ufeff", "");
                parse(data);
            })
    }
    //https://github.com/Leonidas-from-XIV/node-xml2js/issues/367 no crear array de values => explicitArray: false
    let parse = (data) => {
        parseString(
            data,
            { trim: true, explicitArray: false},
            (error, data) => {

                if (error) throw error

                let outJson = `./json/camaraFederal-camaraFederal-11-12-2019.json`;
                write(data, outJson);
            });
    }

    let write = (data, outJson) => {
        fs.writeFile(
            outJson,
            JSON.stringify(data),
            (error) => { if (error) throw error }
        );
        console.log('#################\nJSON saved to file!\n#################')
    }

    read(xml)
}

let xml = './xml/camaraFederal-0-11-12-2019.xml';
xmlToJson(xml);

module.exports = {
    xmlToJson
}
