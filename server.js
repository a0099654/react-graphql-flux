import express from 'express';
import schema from './data/Schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

let app = express();
let db;

app.use(express.static('public'));

(async () => {
    let db = await MongoClient.connect("mongodb://localhost:27017/rgrjs");

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(3000, () => { console.log('Listening on port 3000') });
})()
