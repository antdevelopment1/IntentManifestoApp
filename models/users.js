const db = require('./db');

class User {
    constructor(id, name, username, pwhash) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.pwhash = pwhash;
    }


// ======================
//     // Create
// ======================

    static createUser(name, username, pwhash) {
        return db.one(`insert into users (name, username, pwhash) values ($1, $2, $3) returning id`, [name, username, pwhash])
            .then(id => {
                const newUser = new User(id.id, name, username, pwhash)
                return(newUser);
            })
    }



// ======================
//     // Retrieve
// ======================
// Gets all users from users table
    static getAll() {
        return db.any(`select * from users`);
    }

// Get user by id
    static getById(id) {
        return db.one(`select * from users where id = ${id}`)
            .then(person => {
                return person;
            })
    }
// Get user by username
    static getByUsername(username) {
        return db.one(`select * from users where username ilike '%$1:raw%'`, [username])
            .then(person => {
                return person;
            })
    }

}

// ======================
//      // Update
// ======================


// ======================
//      // Delete
// ======================

module.exports = User;


