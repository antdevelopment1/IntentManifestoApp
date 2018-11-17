-- Bullet Journal App

-- Dummy Data For Users Table
INSERT INTO users (name, username, pwhash) VALUES('Lauren', 'lilylove', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');
INSERT INTO users (name, username, pwhash) VALUES('April', 'doodle', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');
INSERT INTO users (name, username, pwhash) VALUES('Chris', 'cloud', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');
INSERT INTO users (name, username, pwhash) VALUES('Jackie', 'jaidragon', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');
INSERT INTO users (name, username, pwhash) VALUES('Jessy', 'jaydbee', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');
INSERT INTO users (name, username, pwhash) VALUES('Chris', 'peapod', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');

-- Dummy Data For Entries Table
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('lilylove', 'I love watercolors.', '2018-09-12', 'I know just where the paintbrush is. ...', 1);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('doodle', 'I love ice cream.', '2017-09-09', 'Oh oreo. You own my heart. Yes in did. Burr!!!...', 2);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('cloud', 'I love music.', '2018-02-03', 'I wanna rock and roll all night and lick some cocaine...', 3);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('jaidragon', 'I love graphic design.', '2018-06-11', 'I like to make cool circles and triangles...', 4);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('jaydbee', 'I love my kitties.', '2018-09-13', 'I like to make Moo and Cy chase lasers......', 5);
INSERT INTO entries (author, title, date, entry, user_id) VALUES ('peapod', 'I love tool and drums.', '2016-01-05', 'Bang Bang Bang Cymbal Hihat Bang Polyrythms. Sacred Geometry.', 6);



