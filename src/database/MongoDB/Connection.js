const MongoClient = require('mongodb').MongoClient;

// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbInstance = null;

const Connection = {
    connect: async function() {
        return await client
            .connect()
            .then(function(db) {
                dbInstance = db.db();

                return dbInstance;
            })
            .catch(function(err) {
                throw err;
            });
    },
    getDbInstance: async function() {
        if (!dbInstance) {
            return await this.connect();
        }

        return dbInstance;
    },
    close: function() {
        client.close();
    },
};

module.exports = Connection;
