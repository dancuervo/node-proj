const mongoose = require('mongoose');
//mongoose confs
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('bufferCommands', false);
//conexión a BD:
//local
const DBHOST = 'mongodb://localhost:27017/blog';
/*
const remote = {
    DBHOST = 'mongodb.13andar.com/blog',
    DBUSER : '13andar01',
    DBPASS : '*********'
}
*/

//mongoose.connect(`mongodb://${remote.DBUSER}:${remote.DBPASS}@${remote.DBHOST}`);

module.exports = {
    mongoose,
    DBHOST
}