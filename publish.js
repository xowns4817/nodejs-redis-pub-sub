
var redis = require('redis');
var publisher = redis.createClient();
publisher.publish('notification', 'hello welcome Redis!', function(){
 process.exit(0);
});

