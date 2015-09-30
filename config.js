/**
 * Created by songshuang on 15/8/9.
 */


var config = {

    MongoHost: 'mongodb://localhost/iServer',      //连接阿里云上面的地址:120.26.42.12:28018
    MongoPort: '',
    MongodbDebug: true,

    PORT: 3000,

    Elasticsearch: '', // 搜索引擎服务器地址
    ElasticsearchPort: '', // 搜索引擎服务器端口

    RedisHost: 'localhost',
    RedisPort: '6379',
    RedisUserName: '',
    RedisPssword: ''
};

module.exports = exports = config;