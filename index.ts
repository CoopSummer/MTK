var server = require('express');
var dotenv = require('dotenv');
var router = require('./Route');

const api = server();

dotenv.config();
api.use(server.json());
api.use(server.urlencoded({ extended : true }));

api.use('/api', router);

api.listen(process.env.PORT, () => {
    console.log(`Server run on ${process.env.PORT}`);
})
