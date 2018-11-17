require('dotenv').config();
const User = require('./models/users');
const Entries = require('./models/entries');

// // const express = require('express');
// // const app = express();


// =======================
//      Create User
// =======================

// Creates new user
// User.createUser('Coke-Cola', 'cola', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK')
//     .then(newUser => {
//         console.log(newUser);
//     })

// // =======================
// //     Retreive User
// // =======================

// // Get all users
// User.getAll()
//     .then( all => { console.log(all); })

// // Gets user by id
// User.getById(5)
//     .then(userid => {
//         console.log(userid);
//     })

// // Gets user by username
// User.getByUsername('lilylove')
//     .then(username => {
//         console.log(username);
//     })

// // ====================== 
// //      Update User
// // =======================

// // Updates user username
// User.getByUsername('pancakes')
//     .then(newUserName => {
//         newUserName.updateUserName('lilylove')
//             .then(rowCount => {
//                 console.log(rowCount);
//             })
//     })

// // Updates password
// User.getByUsername('lilylove')
//     .then(newpwhash => {
//             newpwhash.updatePassword('$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.Jl')
//             .then(rowCount => {
//                 console.log(rowCount);
//             })
//     })

// // =======================
// //      Delete User
// // =======================

// // Deletes user by id
// User.deleteById(17)
//     .then(deleted => {
//         console.log(deleted);
//     })

// Deletes user by username
// User.deleteByUsername('cokees')
//     .then(rowCount => {
//         console.log(rowCount);
//     })



// =======================
//     Create Entries
// =======================

// Entries.newEntry('lilylove', 'Guess What', '2018-11-16', 'I really dont have anything to say.. hehe..')
//     .then(newEntry => {
//         console.log(newEntry);
//     })


// =======================
//    Retrieve Entries
// =======================

// // Gets all entries
// Entries.getAllEntries()
//     .then(entries => {
//         entries.forEach(entry => {
//             console.log(entry.entry);
//     })
// })

// Retrieve by title
// Entries.getByTitle('bloopy')
//     .then(entry => {
//         console.log(entry);
//     })



// Retrieve by newest date
// Entries.getNewerEntries()
    // .then(instance => {
    //    instance.forEach(entry => {
    //     console.log(`Title: ${entry.title} \nEntry: ${entry.entry}`);
    //    })
    // })

// Retrieve by oldest date
// Entries.getOlderEntries()
    // .then(instance => {
    //    instance.forEach(entry => {
    //     console.log(`Title: ${entry.title} \nEntry: ${entry.entry}`);
    //    })
    // })

// Retreive by date
// Entries.getByDate('2018-06-11','2018-09-13')
//     .then(entry => {
//         console.log(entry);
//     })


// Retrieve by id
// Entries.getById(1)
//     .then(entry => {
//         console.log(entry);
//     })


// =======================
//    Update Entries
// =======================

// Update by title

Entries.getById(1)
    .then(entry => {
        entry.updateByTitle('Bloopy')
            .then(rowCount => {
                console.log(rowCount);
            })
    })