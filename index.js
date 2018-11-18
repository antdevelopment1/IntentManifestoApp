require('dotenv').config();
const User = require('./models/users');
const Entries = require('./models/entries');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ===============================
// Public Folder and Body Parser
// ===============================
// Allows us to look inside public files without needing to import them into our html files
app.use(express.static('public'));
// Configure body-parser to read data sent by HTML form tags
app.use(bodyParser.urlencoded({ extended: false }));
// Configure body-parser to read JSON bodies
app.use(bodyParser.json());

// ================================
//       Views Module Imports
// ================================
const page = require('./views/page');
const allMembers = require('./views/usersList');
const entriesList = require('./views/entriesList');
// const userForm = require('./views/userForm'); ** need to add form file

// Home Directory / Root
app.get('/', (req, res) => {
    const thePage = page('Home Page');
    res.send(`${thePage}`);
})

// Route to display all members
app.get('/members', (req, res) => {
    User.getAll()
        .then(members => {
            const usersUL = allMembers(members);
            const thePage = page(usersUL);
            res.send(`${thePage}`);
        })
})
app.get('/welcome', (req, res) => {
    res.send(`Hello. Welcome to your journal`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})





// =======================
//      Create User
// =======================

// Creates new user
// User.createUser('Coke-Cdola', 'colda', '$2b$10$dQUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK')
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
// User.deleteById(2)
//     .then(rowCount => {
//         console.log(`${rowCount} affected`);
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


// Retrieve all entries by author
// Entries.getByAuthor('lilylove')
//     .then(authorEntries => {
//         console.log(authorEntries);
//     })

// =======================
//    Update Entries
// =======================

// Update by title
// Entries.getById(1)
//     .then(entry => {
//         entry.updateByTitle('Bloopy')
//             .then(rowCount => {
//                 console.log(`${rowCount} row has been updated);;
//             })
//     })

// Update by entry/body
// Entries.getById(1)
// .then(entry => {
//     entry.updateByBody('blooby bloob bloob bloob bloob. Bloopidy bloop blo bloooppp?')
//         .then(rowCount => {
//             console.log(`${rowCount} row has been updated`);
//         })
// })


// =======================
//     Delete Entries
// =======================

// Delete by title
// Entries.deleteByTitle('Bloopy')
//     .then(rowCount => {
//         console.log(`${rowCount} rows have been affected`);
//     })

// Delete by Id
// Entries.deleteById(8)
//     .then(rowCount => {
//         console.log(`${rowCount} affected.`)
//     })
