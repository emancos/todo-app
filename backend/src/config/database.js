require('dotenv').config({ path: process.cwd() + '/.env' })
const mongoose = require('mongoose')

const { USER_DB, PASS_DB } = { ...process.env }
const url = `mongodb+srv://${ USER_DB }:${ PASS_DB }@cluster0.kyevq.mongodb.net/todo?retryWrites=true&w=majority`

mongoose.Promise = global.Promise

module.exports = mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true
     }, function(err, db) {

    if(err) {
        console.log('\x1b[31m'+err);
    }
    else {

        console.log('\x1b[34m'+'connected to ' + url.replace(`${USER_DB}:${PASS_DB}@`, ''))
    }

})
