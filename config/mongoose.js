const mongoose = require('mongoose');
//mongoose confs
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('bufferCommands', false);
//conexión a BD:
//local
const DBHOST = 'mongodb://localhost:27017';
/*
const remote = {
    DBHOST : '*********',
    DBUSER : '*********',
    DBPASS : '*********'
}
*/
//remote connection string
/*
mongoose.connect(`mongodb://${remote.DBUSER}:${remote.DBPASS}@${remote.DBHOST}`);
mongoose.connect('mongodb://13andar01:*********@mongodb.13andar.com/blog');
*/
const remoteString = 'mongodb://*********:*********@*********';

module.exports = {
    mongoose,
    DBHOST,
    remoteString
}