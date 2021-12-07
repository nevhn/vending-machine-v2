-- CREATE DATABASE vending_machine;

CREATE TABLE items (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(50) NOT NULL UNIQUE,
    cost NUMERIC NOT NULL,
    quantity INT NOT NULL CONSTRAINT quantity_nonnegative CHECK (quantity >= 0)
);

CREATE TABLE transactions (
    posting_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
    description VARCHAR(50),
    amount_inserted NUMERIC NOT NULL, 
    cost NUMERIC NOT NULL
);

CREATE TABLE available_money (
    total NUMERIC CONSTRAINT total_nonnegative CHECK (total >= 0) 
);

-- Add items into the vending machine
INSERT INTO items (description, cost, quantity) VALUES ('Snickers Bar', 0.88, 50);
INSERT INTO items (description, cost, quantity) VALUES ('Clif Bars', 0.65, 50);
INSERT INTO items (description, cost, quantity) VALUES ('Pop-Tarts', 1.28, 50);
INSERT INTO items (description, cost, quantity) VALUES ('Sun Chips', 0.50, 50);

-- Add money to total_money
INSERT INTO available_money(total) VALUES (200);
