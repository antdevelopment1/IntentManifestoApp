require('dotenv').config();
const User = require('./models/users');

// // const express = require('express');
// // const app = express();


User.getAll()
    .then( all => { console.log(all); })








