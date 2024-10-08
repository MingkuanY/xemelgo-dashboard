CREATE TABLE Item (
  name INTEGER PRIMARY KEY,
  solution_type TEXT CHECK(solution_type IN ('Asset', 'Inventory', 'WO')),
  last_location INTEGER
);

CREATE TABLE LocationHistory (
  id INTEGER PRIMARY KEY,
  location_name INTEGER,
  time DATETIME,
  item_name INTEGER,
  FOREIGN KEY (item_name) REFERENCES Item(name)
);

CREATE TABLE ActionHistory (
  id INTEGER PRIMARY KEY,
  user_name TEXT,
  action TEXT CHECK(action IN ('Scanned', 'Moved', 'Received')),
  time DATETIME,
  item_name INTEGER,
  FOREIGN KEY (item_name) REFERENCES Item(name)
);

-- Insert sample data into the Item table
INSERT INTO Item (name, solution_type, last_location) VALUES
(1, 'Asset', 1),
(2, 'Inventory', 2),
(3, 'Inventory', 2),
(4, 'Asset', 3),
(5, 'WO', 1);

-- Insert sample data into the LocationHistory table
INSERT INTO LocationHistory (id, location_name, time, item_name) VALUES
(1, 2, '2024-07-19T16:45:00', 3),
(2, 3, '2024-07-19T15:23:00', 3),
(3, 1, '2024-07-19T14:57:00', 3),
(4, 4, '2024-07-19T13:05:00', 3);

-- Insert sample data into the ActionHistory table
INSERT INTO ActionHistory (id, user_name, action, time, item_name) VALUES
(1, 'Tabitha Ryne', 'Scanned', '2024-07-19T16:45:00', 3),
(2, 'Jacob Eld', 'Scanned', '2024-07-19T15:23:00', 3),
(3, 'Jacob Eld', 'Scanned', '2024-07-19T14:57:00', 3),
(4, 'Claire Stroup', 'Scanned', '2024-07-19T13:05:00', 3);