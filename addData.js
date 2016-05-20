var mongo = require('mongodb');

var mongoc = mongo.MongoClient;

var url = 'mongodb://localhost:27017/test';

mongoc.connect(url, function(err, db){
  if(err){
    console.log('Unable to connect to the mongoDB server. Error: ' + err);
  }
  else{
    console.log('Connection established to: ' + url);

    var coll = db.collection('users');

    var user1 = {name: 'user1', age: 22, gender: 'male'};
    var user2 = {name: 'user2', age: 24, gender: 'male'};
    var user3 = {name: 'user3', age: 20, gender: 'female'};

    coll.insert([user1, user2, user3], function(err, result){
      if(err){
        console.log(err);
      }
      else{
        console.log('Inserted %d documents into "users" collection, they are: ',result.length, result);
      }
    db.close();
    });
  }
});

