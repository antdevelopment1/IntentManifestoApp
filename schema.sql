-- Bullet Journal App

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    username VARCHAR(200) UNIQUE NOT NULL,
    pwhash VARCHAR(60) NOT NULL
);

-- Entries Table
CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    author TEXT REFERENCES users (username) ON DELETE CASCADE,
    title TEXT,
    date TIMESTAMP,
    entry TEXT,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);