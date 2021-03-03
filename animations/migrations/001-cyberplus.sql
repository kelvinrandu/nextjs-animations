-- Up
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCRIMENT ,
    name TEXT,
    phone TEXT,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);
CREATE TABLE Stores (
    id INTEGER PRIMARY KEY AUTOINCRIMENT ,
    name TEXT,
    phone TEXT,
    email TEXT,
    owner_id INTEGER REFERENCES Users(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);
CREATE TABLE Items(
    id INTEGER PRIMARY KEY AUTOINCRIMENT ,
    name TEXT,
    quantity TEXT,
    buying_price TEXT,
    selling_price TEXT,
    store_id INTEGER REFERENCES Stores(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);
-- Down
DROP TABLE Users;
DROP TABLE Stores;
DROP TABLE Items;