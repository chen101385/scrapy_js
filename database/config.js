const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: process.env.ENDPOINT,
    log: 'trace',
});

module.exports = {
    client,
};
