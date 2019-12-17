const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/13andar', {useNewUrlParser: true});
  
    // define Schema
const camaraFedSchema = Schema({
    camara: JSON,
    dataConsulta: Date,
    numPartidos: Number,
    numDeputados: Number,
    sexo: JSON,
    pesoPartidos: JSON
});
  // compile schema to model

//module.exports = mongoose.model('camara', camaraFedSchema, 'dataScience');
let Sh = mongoose.model('Camara', camaraFedSchema, 'dataScience');

let cam = {
    'camara':[{'hey':'ho1'},{'hey':'ho5'},{'hey':'ho7'}],
    'numPartidos':24,
    "sexo":{"feminino":77,"masculino":436},
    "pesoPartidos":{"PT":53,"PP":39,"PCdoB":8,"CIDADANIA":9,"PSB":31,"MDB":33,"PSD":37,"PSDB":32,"PSOL":10,"PDT":28,"REPUBLICANOS":31,"PL":40,"DEM":27,"PSC":9,"PTB":12,"SOLIDARIEDADE":14,"PROS":10,"AVANTE":8,"PATRIOTA":5,"PODE":11,"PSL":53,"PV":4,"NOVO":8,"REDE":1},
    "dataConsulta": "2019-12-11T17:07:04.819Z",
    "numDeputados": 513
    }

let salvaCamara = (cam) => {
    let camarafile = new Sh();

    camarafile.camara = cam.camara,
    camarafile.dataConsulta = cam.dataConsulta,
    camarafile.numPartidos = cam.numPartidos,
    camarafile.numDeputados = cam.numDeputados,
    camarafile.pesoPartidos = cam.pesoPartidos,
    camarafile.sexo = cam.sexo

    camarafile.save((err) => {
        if(err) return console.error(err);
        console.log('\ncamara salvado!\n')
      });

}
salvaCamara(cam);