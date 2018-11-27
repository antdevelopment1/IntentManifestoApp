-- Bullet Journal App

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    username VARCHAR(200) UNIQUE NOT NULL,
    pwhash VARCHAR(60) NOT NULL,
    email TEXT
);

-- Entries Table
CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    -- Move this line of code to the bottom with user_id
    author TEXT REFERENCES users (username) ON DELETE CASCADE,
    title TEXT,
    date TIMESTAMP,
    entry TEXT,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE emails (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT
);