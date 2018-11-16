require('dotenv').config();
const User = require('./models/users');

// // const express = require('express');
// // const app = express();


// =======================
//        Create
// =======================

// Creates new user
// User.createUser('Coke-Cola', 'cola', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK')
//     .then(newUser => {
//         console.log(newUser);
//     })

// =======================
//        Retreive
// =======================

// Get all users
// User.getAll()
//     .then( all => { console.log(all); })

// Gets user by id
// User.getById(5)
//     .then(userid => {
//         console.log(userid);
//     })

// Gets user by username
// User.getByUsername('lilylove')
//     .then(username => {
//         console.log(username);
//     })

// ======================
//        Update
// =======================

// Updates user
User.getByUsername('pancakes')
    .then(newUserName => {
        newUserName.updateUserName('lilylove')
            .then(rowCount => {
                console.log(rowCount);
            })
    })





