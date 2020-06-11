import  mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
var dbName = "nodedb10";

const MainCall = {}

var output;
MainCall.getData =  (colName) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).find({}).toArray((err,result) => {
            if(err) throw err;
            console.log('Data Fetched')
            output = result
        })
    })

    return output
}

MainCall.postData =  (colName,dbObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).insert(dbObj,(err,result) => {
            if(err) throw err;
            console.log('Data aadded')
            db.close()
        })
    })
    let out = `Date inserrted in ${colName}`
    return out
}


export default MainCall