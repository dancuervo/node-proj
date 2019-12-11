//procesa el archivo detallando
// número de partidos y peso de cada partido
// peso de género masculino y femenino
// {deputados:{
//      deputado:[],
//      numDeputados: integer,
//      pesoPartidos:{ partido: integer }
//      sexo: {
//          masculino: integer,
//          feminino: integer }
//      dataConsulta: new Date()
//  }

let procesaJSON = (originFile, destinationFile) => {

    const fs = require('fs');

    //openFile + readFile
    let open = (originFile) => {
        fs.open(originFile, 'r', (error, data) => {
            if (error) throw error
            read(data)
        })
    }

    let read = (data) => {
        fs.readFile(data, 'utf8', (error, data) => {
            if (error) throw error
            procesa(data)
        })
    }

    let procesa = (data) => {
        data = JSON.parse(data);
        let camara = data.deputados.deputado;
        let pesoPartidos = {};
        let sexo = {};
        let dataConsulta = new Date();
        let numDeputados = camara.length;

        //crea key en object para 'partido', sobreescribe con 0 cada vez que lo encuentra
        let partidos = () => {
            camara.forEach(el => {
                pesoPartidos[el.partido] = 0;
            });
            //cuenta cuántas veces aparece el partido en el array
            camara.forEach(el => {
                pesoPartidos[el.partido] += 1;
            });
            return data
        }

        /////////////////////////////////////////////////////////////
        //SET
        //genero diputados
        let genero = (data) => {
            camara.forEach(el => {
                sexo[el.sexo] = 0;
            })
            camara.forEach(el => {
                sexo[el.sexo] += 1;
            })
            return data
        }
        partidos(data);
        genero(data);
        data.deputados.numPartidos = Object.keys(pesoPartidos).length;
        data.deputados.sexo = sexo;
        data.deputados.pesoPartidos = pesoPartidos;
        data.deputados.dataConsulta = dataConsulta;
        data.deputados.numDeputados = numDeputados;

        write(data, destinationFile);
    }

    let write = (data, destinationFile) => {
        fs.writeFile(destinationFile, JSON.stringify(data), (error) => {
            if (error) throw error
            console.log('#################\nJSON procesado!\n#################');
        })
    }


    open(originFile);
}

let originFile = './json/camaraFederal-camaraFederal-11-12-2019.json';
let destinationFile = './json/procesado-camaraFederal-11-12-2019.json';

procesaJSON(originFile, destinationFile);
