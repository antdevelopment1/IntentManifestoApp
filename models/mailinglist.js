const db = require('./db');

// Class for new subscriber but not nessisarily a member
class Email {
    constructor(id, firstname, lastname, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }


    // ======================
    //     Create Email
    // ======================
    // Adds new email to mailing list
    static addEmail(firstname, lastname, email) {
        return db.one(`insert into emails (firstname, lastname, email) values ($1, $2, $3) returning id`, [firstname, lastname, email])
            .then( result => {
                const newEmail = new Email(result.id, firstname, lastname, email);
                return newEmail;
            })
    }

    // ======================
    //    Retrieve Email
    // ======================
    // Retrieves email info from a single user
    static getEmail(firstname, lastname, email) {
        return db.one(`select * from emails where email = $1`, [email])
            .then(result => {
                const instance = new Email(result.id, firstname, lastname, email);
                return instance;
            })
    }

    // Retrieves all emails
    static getAllEmails() {
        return db.any(`select * from emails`)
    }

    // ======================
    //     Update Email
    // ======================
    // Updates email for mailing list
    updateEmail(email) {
        console.log(email)
        return db.result(`update emails set email=$2 where id=$1`, [this.id, email])
    }


    // ======================
    //     Delete Email
    // ======================
    static unsubscribe(email) {
        return db.result(`delete from emails where email=$1`, [email])
    }

}


module.exports = Email;