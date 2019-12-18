//requires
const parseString = require('xml2js').parseString;
const fs = require('fs');
//

module.exports = () => {
    
    let readTempFile = () => {
        fs.readFile(
            './xml/temp.txt',
            (error, data) => {if (error) {throw error}
             else { readXml(data) }
            });
    }
    //modulo para lidiar con error unexpected token at position 0
    let readXml = (data) => {
        fs.readFile(data,
            (error, data) => {

                if (error) throw error

                data.toString().replace("\ufeff", "");
                parseToJson(data);
            })
    }
    //https://github.com/Leonidas-from-XIV/node-xml2js/issues/367 no crear array de values => explicitArray: false
    let parseToJson = (data) => {
        parseString(
            data,
            { trim: true, explicitArray: false },
            (error, data) => {

                if (error) throw error

                //string titulo destino
                let date = new Date();
                let dia = date.getDate();
                let mes = 1 + date.getMonth();
                let ano = date.getFullYear();
                let formato = 'json'

                title = `./${formato}/camaraFederal-0-${dia}-${mes}-${ano}.${formato}`;

                //let outJson = title;
                writeJson(data, title);
            });
    }

    let writeJson = (data, title) => {
        fs.writeFile(
            title,
            JSON.stringify(data),
            (error) => { if (error) throw error }
        );
        console.log('#################\nJSON saved to file!\n#################')
        fs.unlink('./xml/temp.txt', (error) => {if (error) throw error })
        console.log('#################\nTemp erased!\n#################')
    }

    readTempFile()

}
