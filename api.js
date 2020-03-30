//API SETUP
//API to get/post score into backend
//inspipratie opgedaan bij http://www.sqlitetutorial.net/sqlite-nodejs/connect/
//Backend runs in sqlite3
//inspiratie opgedaan bij https://charlietheprogrammer.com/the-best-nodejs-sqlite-tutorial-part-1
const sqlite3 = require('sqlite3').verbose()
const DB_PATH = './memory_backend.sqlite3'
//zet db op
const DB = new sqlite3.Database(DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')
});

//close DB
DB.close();

//ORM!


//API calls


//get


//post


//??
