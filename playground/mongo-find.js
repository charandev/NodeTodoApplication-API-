const {MongoClient,ObjectID} = require("mongodb");
// var obj = ObjectID().getTimestamp();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log("Unable to Connect to the mongodb Server");
  }
  console.log("Connected Succesully");

    db.collection('Users').find({age:'20'}).count().then((count)=>{
      console.log(`Users count: ${count}`);

    },(err)=>{
      console.log("Unable to connect to the server",err);
    });


  // db.close();
});
