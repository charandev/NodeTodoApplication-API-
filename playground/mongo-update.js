const {MongoClient,ObjectID} = require("mongodb");
// var obj = ObjectID().getTimestamp();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log("Unable to Connect to the mongodb Server");
  }
  console.log("Connected Succesully");
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectId('5b23c504037a4021f8ab8b95')
  },{
$set: {
  name:'charan'
}},{
returnOriginal:false
})
  .then((result) => {
  console.log(result);
  })
    // db.close();
});
