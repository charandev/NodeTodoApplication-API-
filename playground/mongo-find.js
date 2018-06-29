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

  // db.collection('Cients').insertOne({
  //   name:'prabhs',
  //   age:'20',
  //   location:'Vizag'
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert collection',err);
  //   }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  // });

    // db.collection('Users').find({age:'20'}).toArray().then((docs)=>{
    //   console.log('Users');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //   console.log("Unable to connect to the server",err);
    // });

    db.collection('Users').find({age:'20'}).count().then((count)=>{
      console.log(`Users count: ${count}`);

    },(err)=>{
      console.log("Unable to connect to the server",err);
    });


  // db.close();
});
