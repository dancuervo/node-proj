const graficos = (req, res) => {
    //require file
    let fs = require('fs');
    let path = require('path');

    let fileJSON = path.join(__dirname, '../datascience/camarafederal/json/procesado-camaraFederal-11-12-2019.json');
    fs.readFile(fileJSON, 'utf8', (error, data) => {
        if (error) throw error
        let datos = JSON.parse(data);
        var label, percentage;
        var pesoPartido = [];
        var labelPartido = [];
        var colors = [];

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        for (let [key, value] of Object.entries(datos.deputados.pesoPartidos)) {
            percentage = (value * 100) / 513;
            percentage = percentage.toFixed(1);
            pesoPartido.push(percentage);
            colors.push(getRandomColor());
            label = key + ' : ' + value
            labelPartido.push(label);
        }

        //el total de diputados de cada partido en porcentaje de 513 = 100%
        //problema: pasar un array de strings a pug => https://stackoverflow.com/questions/24847821/jade-render-an-array-of-strings-as-an-array-of-string

        numPartidos = labelPartido.length;
        labelPartido = JSON.stringify(labelPartido);
        colors = JSON.stringify(colors);
        res.render('panel', { datos, pesoPartido, labelPartido, colors });
    });

}

module.exports = {
    graficos
}