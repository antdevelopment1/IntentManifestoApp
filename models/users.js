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
                    const newUserName = new User(person.id, person.name, person.username, person.pwhash);
                    return newUserName;
            })
    }

    // ======================
    //         Update
    // ======================
    updateUserName(username){
        // this.username = username;
        return db.result(`update users set username=$2 where id=$1`,[this.id, username])
            .then(result => {
                console.log(result);
                if (result.rowCount === 1) {
                    console.log('Updated');
                } else {
                    console.log('Could not update');
                }
                return result.rowCount;
            })
    }

    updatePassword(password) {
        return db.result(`update users set pwhash=$2 where id=$1`, [this.id, password])
            .then(result => {
                console.log(result);
                if (result.rowCount === 1) {
                    console.log('Password Updated');
                } else {
                    console.log('Unable to update password');
                }
                return result.rowCount;
            })
    }

    // ======================
    //         Delete
    // ======================
    static deletebyId(id) {
        return db.one(`delete from users where id = $1`, [id]);
    }

    


}




module.exports = User;


