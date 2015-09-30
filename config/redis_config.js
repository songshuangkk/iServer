/**
 * Created by songshuang on 15/9/27.
 */

var Config = require('../config');

var redis = require('redis'),
    redisClient = redis.createClient(Config.RedisPort, Config.RedisHost);

redisClient.AUTH(Config.RedisPssword, Config.RedisUserName);

redisClient.on('error', function(error) {
   console.error('Redis error!', error);
   redisClient.quit();
});

redisClient.on('connect', function(err, data){
    if (err) {
        console.error('Redis error!', err);
        redisClient.quit();
    } else {
        console.log('Redis connected success');
    }
});

module.exports = exports = redisClient;