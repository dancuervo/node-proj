//conf servidor
const servidor = function(){
    const express = require('express');
    const app = express();
    return app;
}

const puerto = function(){
    const puerto = 21113;
    return puerto;
}

//exports
module.exports = {
    servidor,
    puerto
}