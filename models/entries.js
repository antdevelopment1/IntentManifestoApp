const db = require('./db');

class Entries {

    constructor(id, title, date, entry) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.entry = entry;
    }

    
// ======================
//     // Create
// ======================

// Create new entry




// ======================
//     // Retrieve
// ======================


// Retrieve all entries 
static getAllEntries() {
    return db.any(`select * from entries`)
        .then(entryObj => {
            // console.log(entryObj);
            const entryArr = entryObj.map( (entry) => {
                const instance = new Entries(entry.id, entry.title, entry.date, entry.entry);
                return instance;
            })
            return entryArr;
        })
}


// Retrieve by title
static getByTitle(title) {
    return db.any(`select * from entries where title ilike '%$1:raw%'`, [title])
}


// Retrieve by date
static getByDate() {
    return db.any
}

// Retrieve entries from newest to oldest


// Retrieve entries from oldest to newest


// Retrieve by id
static getById(id) {
    return db.one(`select * from entries where id = $1`, [id])
        .then(entry => {
            const instance = new Entries(entry.id, entry.title, entry.date, entry.entry);
                return instance;
        })
}







// ======================
//         Update
// ======================

// Update entry by title

// Update entry body(the entry itself)



// ======================
//         Delete
// ======================

// Delete entry by title

// Delete entry by id








}

module.exports = Entries;

