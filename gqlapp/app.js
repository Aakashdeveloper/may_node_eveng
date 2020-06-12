const express = require('express');
const expressGraphQl = require('express-graphql');
const port = 8600;
const app = express();
const cors = require('cors');
const schema = require('./schema/schema');

app.use(cors());

app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}))

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})
