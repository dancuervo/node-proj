//conf servidor

const servidor = () => {
    const express = require('express');
    const app = express();
    return app;
}

const puerto = () => {
    const puerto = 21113;
    return puerto;
}

//exports
module.exports = {
    servidor,
    puerto
}