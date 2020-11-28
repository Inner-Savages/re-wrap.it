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

CREATE TABLE demand (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	owner INTEGER NOT NULL,
	item_name TEXT NOT NULL,
	item_count INTEGER,
	direction_give INTEGER,
	item_type TEXT NOT NULL,
	item_condition TEXT NOT NULL,
	what_in_exchange TEXT NOT NULL,
	CONSTRAINT demand_FK FOREIGN KEY (owner) REFERENCES subject(id),
);
