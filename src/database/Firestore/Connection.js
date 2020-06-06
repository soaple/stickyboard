const admin = require('firebase-admin');

// IMPORTANT!!
// Download your firebase-service-account.json file and update the file path below
// Firebase Console > Project settings > Service accounts > Generate new private key
const serviceAccount = require('../../../firebase-service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

let db = admin.firestore();

module.exports = db;
