//requires
const parseString = require('xml2js').parseString;
const fs = require('fs');

module.exports = async () => {
    
//string titulo destino

let date = new Date();
let dia = date.getDate();
let mes = 1 + date.getMonth();
let ano = date.getFullYear();
let formato = 'json';
title = `./${formato}/camaraFederal-0-${dia}-${mes}-${ano}.${formato}`;

    let readTempFile = async () => {

        try {
            fs.readFile('./xml/temp.txt', (error, data) => { 
                if (error) throw error
                return readXml(data)
                
            })
        } catch (error) {
            throw error
        }
    }

    //modulo para lidiar con error unexpected token at position 0
    let readXml = async (data) => {
        try {
            fs.readFile(data, (error, data) => {
                if (error) throw error
                
                data.toString().replace("\ufeff", "");
                return parseToJson(data)

            })
        } catch (error) {
            throw error();    
        }
        
    }
    //https://github.com/Leonidas-from-XIV/node-xml2js/issues/367 no crear array de values => explicitArray: false
    let parseToJson = async (data) => {
        try {
            parseString( data, { trim: true, explicitArray: false }, (error, data) => {
                if (error) throw error
                return writeJson(data)

            });    
        } catch (error) {
            throw error
        }
        
    }

    let writeJson = async (data) => {
        try {
            fs.writeFile(title, JSON.stringify(data), (error) => { if (error) throw error });
            console.log('#################\nJSON saved to file!\n#################\n')
        
            fs.unlink('./xml/temp.txt', (error) => {if (error) throw error })
            console.log('\n#################\nTemp erased!\n#################')
            return

        } catch (error) {
           throw error
       }
        
    }
    
   readTempFile()
   .catch((error) => { console.log(error)})
  
}
