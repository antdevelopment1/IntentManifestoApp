require('dotenv').config();
const User = require('./models/users');

// // const express = require('express');
// // const app = express();


// Get all users
// User.getAll()
//     .then( all => { console.log(all); })

// Gets user by id
User.getById(5)
    .then(userid => {
        console.log(userid);
    })

// Gets user by username
User.getByUsername('lilylove')
    .then(username => {
        console.log(username);
    })
    


// ==============================
// Random chaining example
// ==============================
// User.addUser('Sam', '678')
    // .then(santa => {
    //     // console.log(santa);
    //     santa.getPassword()
    //         .then(password => {
    //             console.log(password.phash);
    //         })

    // })





