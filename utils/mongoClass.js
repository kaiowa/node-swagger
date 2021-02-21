require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const urlMongo=process.env.mongourl ? process.env.mongourl : 'mongodb://127.0.0.1:27017';

class DB {

    constructor(dbName) {
        this.dbName=dbName;
        this.database;
    }

    connect() {
        console.log('connecting to database ');
        return new Promise((resolve, reject) => {
            MongoClient.connect(
             urlMongo, 
              {       
                useNewUrlParser: true,
                useUnifiedTopology: true 
              },
               (err, client) => {
                if (err) {
                    reject(err);
                } else {
                    this.database = client.db(this.dbName);
                    resolve(this.database);
                }
            })
        })

    }
    close(){
      
        return this.database.close();
      
    }
}

let MongoClass = {
  'mongoClass':DB
}
module.exports = MongoClass;
