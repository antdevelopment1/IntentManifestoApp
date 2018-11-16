const db = require('./db');

class User {
    constructor(id, name, username, pwhash) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.pwhash = pwhash;
    }


//     // Create
    
// Gets all users from users table
    static getAll() {
        return db.any(`select * from users`);
    }

// Get user by id
    static getById(id) {
        return db.one(`select * from users where id = ${id}`)
            .then(person => {
                console.log(person);
            })
    }
// Get user by username


//     // Retrieve

        
//     // Update




//     // Delete
}

module.exports = User;


