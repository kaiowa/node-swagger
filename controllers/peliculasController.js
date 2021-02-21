const MongoDBService=require('../utils/mongodb');

module.exports.getAllHome = async(req,callRes) =>{

    let peliculas=await MongoDBService.getAllHome();    
    callRes.json(peliculas);
    callRes.status(200).end;
    
}

module.exports.getAll = async(req,callRes) =>{

    let peliculas=await MongoDBService.searchAll();    
    callRes.json(peliculas);
    callRes.status(200).end;
    
}

module.exports.getByCategory = async(req,callRes) =>{

    let peliculas=await MongoDBService.searchByCategory(req.params.cat);    
    callRes.json(peliculas);
    callRes.status(200).end;

}