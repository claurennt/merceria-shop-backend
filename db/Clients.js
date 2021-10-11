const mongoose = require('mongoose');
const { connectToDBClient } = require('../utils/connectToDBClient');

const { MONGODB_URI_PRODOTTI, MONGODB_URI_USERS } = process.env;

//manage multiple connections  to database here

const prodottiClient = connectToDBClient(MONGODB_URI_PRODOTTI, 'prodotti');

const usersClient = connectToDBClient(MONGODB_URI_USERS, 'users');


module.exports = { prodottiClient, usersClient };
