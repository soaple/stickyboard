const MongoClient = require('mongodb').MongoClient;

// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
});

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log('Connected successfully to server');
    const db = client.db(process.eng.MONGODB_DB_NAME);

    client.close();
});

export default client;
