/**
 * Created by songshuang on 15/8/9.
 */


var config = {

    MongoHost: 'mongodb://120.26.42.12:27017/iServer',      //连接阿里云上面的地址:120.26.42.12:28018
    MongoPort: '',
    MongodbDebug: true,
    MongodbUserName: '',
    MongodbPassword: '',

    PORT: 3000,

    Elasticsearch: '', // 搜索引擎服务器地址
    ElasticsearchPort: '', // 搜索引擎服务器端口

    RedisHost: '120.26.42.12',
    RedisPort: '6379',
    RedisUserName: '',
    RedisPssword: 'Ss64746269'
};

module.exports = exports = config;