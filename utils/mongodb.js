const Mongo=require('./mongoClass')
var MongoConnect=new Mongo.mongoClass('peliculas');

async function searchAll(){

  var dbSelected=await MongoConnect.connect();
  let pelis=await  dbSelected.collection('peliculas').find({}).toArray();

}
async function getAllHome(){
 
  var dbSelected=await MongoConnect.connect();
  let pelis=await  dbSelected.collection('peliculas').find({}).limit(10).toArray();
  return pelis;

}
async function searchByCategory(cat){

    var dbSelected=await MongoConnect.connect();
    let pelis=await  dbSelected.collection('peliculas').find({'cat':cat}).toArray();
    return pelis;
}


let MongoDBService = {
  'getAllHome':getAllHome,
  'searchAll':searchAll,
  'searchByCategory':searchByCategory
}
module.exports = MongoDBService;

