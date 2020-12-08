const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/todo'
mongoose.Promise = global.Promise

module.exports = mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true
     }, function(err, db) {

    if(err) {
        console.log('\x1b[31m'+err);
    }
    else {
        console.log('\x1b[34m'+'connected to ' + url);
    }

})
