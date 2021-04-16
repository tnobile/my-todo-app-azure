const { MongoClient } = require("mongodb");

let client = null;
let database = null;

const getCollection = async () => {
    if (database == null) {
        try {
            client = MongoClient(process.env.DATABASE_CONNECTION_URL, { useUnifiedTopology: true })
            await client.connect();
            database = await client.db("swiss");
            return database.collection("todos");
        } catch (err) {
            console.log(err)
        }
    }
    return database.collection("todos");
};

module.exports = getCollection;