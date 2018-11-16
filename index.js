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

// Updates user username
// User.getByUsername('pancakes')
//     .then(newUserName => {
//         newUserName.updateUserName('lilylove')
//             .then(rowCount => {
//                 console.log(rowCount);
//             })
//     })

// Updates password
// User.getByUsername('lilylove')
//     .then(newpwhash => {
//             newpwhash.updatePassword('$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.Jl')
//             .then(rowCount => {
//                 console.log(rowCount);
//             })
//     })

// =======================
//        Delete
// =======================

// Deletes user
// User.deleteById(17)
//     .then(deleted => {
//         console.log(deleted);
//     })

User.deleteByUsername('cokees')
    .then(rowCount => {
        console.log(rowCount);
    })



