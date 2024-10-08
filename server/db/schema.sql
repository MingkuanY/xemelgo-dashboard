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
(5, 'WO', 1),
(6, 'WO', 4),
(7, 'Asset', 1),
(8, 'Inventory', 3),
(9, 'Inventory', 3),
(10, 'WO', 4),
(11, 'Asset', 4),
(12, 'WO', 2);

-- Insert sample data into the LocationHistory table
INSERT INTO LocationHistory (id, location_name, time, item_name) VALUES
(1, 2, '2024-07-19T16:45:00', 3),
(2, 3, '2024-07-19T15:23:00', 3),
(3, 1, '2024-07-19T14:57:00', 3),
(4, 4, '2024-07-19T13:05:00', 3),
(5, 2, '2024-07-19T14:57:00', 3),
(6, 1, '2024-07-19T13:05:00', 3),
(7, 1, '2024-07-19T16:45:00', 1),
(8, 2, '2024-07-19T15:23:00', 1),
(9, 1, '2024-07-19T14:57:00', 1),
(10, 4, '2024-07-19T13:05:00', 1),
(11, 2, '2024-07-19T14:57:00', 1),
(12, 1, '2024-07-19T13:05:00', 1),
(13, 4, '2024-07-19T16:45:00', 6),
(14, 2, '2024-07-19T15:23:00', 6),
(15, 1, '2024-07-19T14:57:00', 6),
(16, 4, '2024-07-19T13:05:00', 6),
(17, 2, '2024-07-19T14:57:00', 6),
(18, 1, '2024-07-19T13:05:00', 6);

-- Insert sample data into the ActionHistory table
INSERT INTO ActionHistory (id, user_name, action, time, item_name) VALUES
(1, 'Tabitha Ryne', 'Scanned', '2024-07-19T16:45:00', 3),
(2, 'Jacob Eld', 'Scanned', '2024-07-19T15:23:00', 3),
(3, 'Jacob Eld', 'Scanned', '2024-07-19T14:57:00', 3),
(4, 'Claire Stroup', 'Scanned', '2024-07-19T13:05:00', 3),
(5, 'Curtis Trak', 'Scanned', '2024-07-19T11:31:00', 3),
(6, 'Tabitha Ryne', 'Scanned', '2024-07-19T09:18:00', 3),
(7, 'Tabitha Ryne', 'Moved', '2024-07-19T16:45:00', 1),
(8, 'Jacob Eld', 'Moved', '2024-07-19T15:23:00', 1),
(9, 'Jacob Eld', 'Moved', '2024-07-19T14:57:00', 1),
(10, 'Claire Stroup', 'Moved', '2024-07-19T13:05:00', 1),
(11, 'Curtis Trak', 'Moved', '2024-07-19T11:31:00', 1),
(12, 'Tabitha Ryne', 'Moved', '2024-07-19T09:18:00', 1),
(13, 'Tabitha Ryne', 'Received', '2024-07-19T16:45:00', 6),
(14, 'Jacob Eld', 'Received', '2024-07-19T15:23:00', 6),
(15, 'Jacob Eld', 'Received', '2024-07-19T14:57:00', 6),
(16, 'Claire Stroup', 'Received', '2024-07-19T13:05:00', 6),
(17, 'Curtis Trak', 'Received', '2024-07-19T11:31:00', 6),
(18, 'Tabitha Ryne', 'Received', '2024-07-19T09:18:00', 6);