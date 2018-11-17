const db = require('./db');

class Entries {

    constructor(id, author, title, date, entry) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.date = date;
        this.entry = entry;
    }

    
// ======================
//     // Create
// ======================

// Create new entry

static newEntry(author, title, date, entry) {
    return db.one(`insert into entries (author, title, date, entry) values($1, $2, $3, $4) returning id`, [author, title, date, entry])
        .then(id => {
            const newEntry = new Entries(id.id, author, title, date, entry);   
            return newEntry;
        })
}



// ======================
//     // Retrieve
// ======================


// Retrieve all entries 
static getAllEntries() {
    return db.any(`select * from entries`)
        .then(entryObj => {
            // console.log(entryObj);
            const entryArr = entryObj.map( (entry) => {
                const instance = new Entries(entry.id, entry.author, entry.title, entry.date, entry.entry);
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
static getByDate(date1, date2) {
    return db.any(`select * from entries where date between $1 and $2`, [date1, date2])
}

// Retrieve entries from newest to oldest
static getNewerEntries() {
    return db.any(`select * from entries order by date asc`)
        .then(newest => {
           const orderedEntryArr = newest.map(entry => {
                const instance = new Entries(entry.id, entry.author, entry.title, entry.date, entry.entry);
                return instance;
            })
            return orderedEntryArr;
        })

}


// Retrieve entries from oldest to newest
static getOlderEntries() {
    return db.any(`select * from entries order by date desc`)
        .then(oldest => {
           const oldestEntryArr = oldest.map(entry => {
                const instance = new Entries(entry.id, entry.author, entry.title, entry.date, entry.entry);
                return instance;
            })
            return oldestEntryArr;
        })
}

// Retrieve by id
static getById(id) {
    return db.one(`select * from entries where id = $1`, [id])
        .then(entry => {
            const instance = new Entries(entry.id, entry.author, entry.title, entry.date, entry.entry);
                return instance;
        })
}


// ======================
//         Update
// ======================

// Update entry by title
updateByTitle(title) {
    return db.result(`update entries set title=$2 where id=$1`, [this.id, title])
        .then(result => {
            if (result.rowCount === 1) {
                console.log('Title has been updated');
            } else {
                console.log('Title has not been updated.')
            }
            return result.rowCount;
        })
}

// Update entry body(the entry itself)
updateByBody(body) {
    return db.result(`update entries set entry=$2 where id=$1`, [this.id, body])
        .then(result => {
            if (result.rowCount === 1) {
                console.log(`Entry has been updated`);
            } else {
                console.log(`Entry was not updated`);
            }
            return result.rowCount;
        })
}



// ======================
//         Delete
// ======================

// Delete entry by title
static deleteByTitle(title) {
    return db.result(`delete from entries where title=$1`, [title])
    .then( result => {
        if (result.rowCount === 1) {
            console.log(`Entry has been deleted`);
        } else {
            console.log(`Entry wasnt deleted`);
        }
        return result.rowCount;
    })

}

// Delete entry by id








}

module.exports = Entries;

