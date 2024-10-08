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
