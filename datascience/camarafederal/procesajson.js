//procesa el archivo detallando número de partidos y peso de cada partido
const fs = require('fs');
let originFile = './json/camaraFederal-camaraFederal-8-12-2019.json';
fs.open(originFile, 'r', (error, data) => {
    if(error) console.log(error);
    fs.readFile(data, 'utf8', (error, datos)=>{
        if(error) console.log('Error: ' + error)
        var datos = JSON.parse(datos);
        var camara = datos.deputados.deputado;
        var numDeputados = camara.length;
        var pesoPartidos = [];
        camara.forEach(element => {
            pesoPartidos.push(element.partido[0]);
        });
        var Partidos = Array.from(new Set(pesoPartidos));
        var partidosObj = {};
        var partido;
        for(i = 0; i < pesoPartidos.length; i++){
            if(partidosObj.hasOwnProperty(pesoPartidos[i])){
                partido = pesoPartidos[i];
                partidosObj[partido] +=1;
            }else{
                partido = pesoPartidos[i];
                partidosObj[partido] = 1;
            }
        }
        datos.pesoPartido = partidosObj;
        var fecha = new Date();
        datos.dataConsulta = fecha;
        let destinationFile = './json/procesado-camaraFederal-8-12-2019.json';
        fs.writeFile(
            destinationFile,
            JSON.stringify(datos),
            (error)=>{
                if(error) throw error
            }
        )


        //console.log('Datos: '+ JSON.stringify( datos));
        //console.log('\npeso partidos: ' + JSON.stringify( partidosObj ))
        });
    })

