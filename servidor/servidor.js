//conf servidor
const servidor = function(){
    const express = require('express');
    const app = express();
    return app;
}

const puerto = function(){
    const puerto = 21139;
    return puerto;
}

//exports
module.exports.servidor = servidor;
module.exports.puerto = puerto;