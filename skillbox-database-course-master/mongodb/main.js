var mongodb = require('mongodb');


const myFunction = async function () {
    const uri = 'mongodb://localhost:27017';
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const session = client.startSession({
        defaultTransactionOptions: {
            readConcern: { level: 'local' },
            writeConcern: { w: 'majority' },
            readPreference: 'primary'
        }
    });

    await session.withTransaction(async function () {
        const coll1 = client.db('myDB').collection('users');
        const coll2 = client.db('myDB').collection('roles');

        await coll1.insertOne({ "userName": "Foo" }, { session });
        await coll2.insertOne({ "roleName": "Admin" }, { session });
    });
}

const start = async function () {
    const result = await myFunction();
    console.log(result);
}

start();