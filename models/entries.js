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
                return entry.entry;
            })
            return entryArr;
        })
}


// Retrieve by title



// Retrieve by date



// Retrieve by id







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

