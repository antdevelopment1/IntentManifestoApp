-- Bullet Journal App

-- Dummy Data For Users Table
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('Lauren', 'Hill', 'lilylove', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'antdevelopment1@gmail.com');
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('April', 'Copes', 'doodle', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'laurenalyn@gmail.com');
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('Chris', 'Cruz', 'cloud', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'chriscruz@aol.com');
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('Jackie', 'Perez', 'jaidragon', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'jaidragon@yahoo.com');
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('Jessy', 'jay', 'jaydbee', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'Samsmith@aol.com');
INSERT INTO users (firstname, lastname, username, pwhash, email) VALUES('Chris', 'Furtado', 'peapod', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK', 'goldenbridge@gmail.com');

-- Dummy Data For Entries Table
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('lilylove', 'I love watercolors.', '2018-09-12', 'I know just where the paintbrush is. ...', 1);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('doodle', 'I love ice cream.', '2017-09-09', 'Oh oreo. You own my heart. Yes in did. Burr!!!...', 2);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('doodle', 'Yo! Wheres the icecream?.', '2017-09-09', 'Oh oreo. You own my heart. Yes in did. Burr!!!...', 2);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('cloud', 'I love music.', '2018-02-03', 'I wanna rock and roll all night and lick some cocaine...', 3);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('jaidragon', 'I love graphic design.', '2018-06-11', 'I like to make cool circles and triangles...', 4);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('jaidragon', 'LOGOS.', '2018-06-11', 'I like to make cool circles and triangles...', 4);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('jaydbee', 'I love my kitties.', '2018-09-13', 'I like to make Moo and Cy chase lasers......', 5);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('peapod', 'I love tool and drums.', '2016-01-05', 'Bang Bang Bang Cymbal Hihat Bang Polyrythms. Sacred Geometry.', 6);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('lilylove', 'I love tools..NOT.', '2016-01-05', 'Bang Bang Bang Cymbal Hihat Bang Polyrythms. Sacred Geometry.', 6);

-- Dummy Data For Email Table
INSERT INTO emails (firstname, lastname, email) VALUES ('Samantha', 'Kirk', 'antdevelopment10@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Sandra', 'Rice', 'laurenhill@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Derek', 'Green', 'abc123@yahoo.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Dennis', 'Brink', 'doodle@aol.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Glen', 'Smith', 'bunnyhopper2000@yahoo.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('George', 'Brown', 'lilylove@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Ryan', 'Bell', 'farttimeisfun@msn.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Tim', 'Duck', 'orangeisgreen@hotmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Steven', 'Man', 'antdevelo@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Nickilas', 'Smith', 'sunnyday@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Lucy', 'Laurens', 'rainstorms@gmail.com');
INSERT INTO emails (firstname, lastname, email) VALUES ('Martha', 'Stewart', 'antsgomarching@aol.com');



