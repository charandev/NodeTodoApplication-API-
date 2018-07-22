const {MongoClient,ObjectID} = require("mongodb");
// var obj = ObjectID().getTimestamp();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log("Unable to Connect to the mongodb Server");
  }
  console.log("Connected Succesully");
// db.collection('Users').deleteMany({dinner:'no'}).then((result) => {
//   console.log(result);
// })
// db.collection('Users').deleteOne({age:'20'}).then((result) => {
//
db.collection('Users').findOneAndDelete({age:'19'}).then((result) => {
console.log(result[1]);
})


    // db.close();
});
