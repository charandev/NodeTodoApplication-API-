const {MongoClient,ObjectID} = require("mongodb");
// var obj = ObjectID().getTimestamp();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log("Unable to Connect to the mongodb Server");
  }
  console.log("Connected Succesully");

  // db.collection('Todos').insertOne({
  //   text:'Something goes here',
  //   completed:false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert collection',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Manager').insertOne({
    name:'Vamsi Varun',
    age:'16',
    location:''
  },(err,result) => {
    if(err){
      return console.log('Unable to insert collection',err);
    }
      console.log(JSON.stringify(result.ops,undefined,2));
  });


  db.close();
});
