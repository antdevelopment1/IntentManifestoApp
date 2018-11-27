// ==================================
//  NPM's and Model Database Imports
// ==================================
require('dotenv').config();
const User = require('./models/users');
const Entries = require('./models/entries');
// ---------------------------------------
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
const homepage = require('./views/home');
const loginpage = require('./views/login');
const registerpage = require('./views/register');
const dashboardpage = require('./views/dashbaord');

// ================================
//       Routes GET / POST
// ================================

// Home Directory / Root
app.get('/', (req, res) => {
    res.send(homepage());
})

// Login Page
app.get('/login', (req, res) => {
    res.send(loginpage());
})

// Register Page
app.get('/register', (req, res) => {
    res.send(registerpage());
})

// Dashboard Page
app.get('/dashboard', (req, res) => {
    res.send(dashboardpage());
})

// Logout Page
app.post('/logout', (req, res) => {
    res.send('You have logged out');
})

// ================================
//       Routes GET / POST
//   Once Inside User Dashboard
// ================================

// Directs user to their personal dashboard
app.get('/dashboard/:id([0-9]+)', (req, res) => {
    res.send('This is the users personal page');
})

// Create an entry inside user's dashboard
app.get('/dashboard/:id([0-9]+)/newentry', (req, res) => {
    res.send('You may now create your new entry');
})

// Retrieve all entries from a user
app.get('/dashboard/:id(\\d+)/entryupdate', (req, res) => {
    res.send('This is the user\'s page with all their entries');
})

// Allow a user to edit / update the entries
app.get('/dashboard/:id([0-9]+)/entryedit', (req, res) => {
    res.send('You may now edit your entry');
})

// Allow a user to edit their username
app.get('/dashboard/:id([0-9]+)/editusername', (req, res) => {
    res.send('You may now edit your username');
})

// Allow a user to edit their password
app.get('/dashboard/:id([0-9]+)/editpassword', (req, res) => {
    res.send('You may now edit your password');
})

// Allows user to delete an entry
app.get('/dashboard/:id([0-9]+)/deleteentry', (req, res) => {
    res.send('You deleted the entry');
})

// Route to display all members
// app.get('/members', (req, res) => {
//     User.getAll()
//         .then(members => {
//             const usersUL = allMembers(members);
//             const thePage = page(usersUL);
//             res.send(`${thePage}`);
//         })
// })


app.listen(3000, () => {
    console.log('Listening on port 3000');
})

// ========================================
//             Models Functions
// ========================================

// =======================
//      Create User
// =======================

// Creates new user
// User.createUser('kevin', 'blue', 'green', '$2b$10$S2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'yahoo@gmail.com')
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

// Get active email from user
// User.getUserByEmail('antdevelopment1@gmail.com')
//     .then(userEmail => {
//         console.log(userEmail);
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

// // Gets all entries from every user
// Entries.getAllEntries()
//     .then(entries => {
//         entries.forEach(entry => {
//             console.log(entry.entry);
//     })
// })

// Retrieve all entries from a single user by username
Entries.getByAuthor('lilylove')
    .then(user => {
        user.forEach(eachInstance => {
            console.log(`Title: ${eachInstance.title} Entry: ${eachInstance.entry}`);
        })
    })











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



// Add email to mailing list
// =======================
//     Create Email
// =======================

// Retrieve email from mailing list
// =======================
//    Retrieve Email
// =======================

// Update email from mailing list
// =======================
//     Update Email
// =======================

// Unsubscribe from mailing list
// =======================
//     Delete Email
// =======================
