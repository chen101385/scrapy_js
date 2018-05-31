const { client } = require('./config');

//sends HEAD request to "/";
client.ping({
    requestTimeout: 30000,
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Elasticsearch cluster is working properly');
    }
});