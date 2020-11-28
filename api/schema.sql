CREATE TABLE subject (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	email TEXT NOT NULL,
	name TEXT NOT NULL,
	address_text TEXT NOT NULL,
	address_latitude REAL,
	address_longitude REAL,
	contact_info TEXT NOT NULL,
	CHECK(email <> '')
);
CREATE UNIQUE INDEX subject_email_IDX ON subject (email);

CREATE TABLE item (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"type" TEXT NOT NULL,
	state TEXT NOT NULL,
	owner INTEGER NOT NULL,
	CONSTRAINT item_FK FOREIGN KEY (owner) REFERENCES subject(id)
);

CREATE TABLE demand (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	who INTEGER NOT NULL,
	what INTEGER NOT NULL,
	how_many INTEGER,
	what_in_exchange TEXT NOT NULL,
	CONSTRAINT demand_FK FOREIGN KEY (who) REFERENCES subject(id),
	CONSTRAINT demand_FK_1 FOREIGN KEY (what) REFERENCES item(id)
);
