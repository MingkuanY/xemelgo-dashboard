const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to the SQLite database
const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// RESTful API Endpoints

// Get all items
app.get('/api/items', (req, res) => {
  db.all('SELECT * FROM Item', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get item by name
app.get('/api/items/:name', (req, res) => {
  const { name } = req.params;
  db.get('SELECT * FROM Item WHERE name = ?', [name], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Add a new item
app.post('/api/items', (req, res) => {
  const { name, solution_type, last_location } = req.body;
  db.run(
    'INSERT INTO Item (name, solution_type, last_location) VALUES (?, ?, ?)',
    [name, solution_type, last_location],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Add a new location action by item
app.post('/api/items/:name/location-history', (req, res) => {
  const { location_name } = req.body;
  const { name } = req.params;

  console.log(`called in server for ${location_name}`)

  // Get current timestamp
  const currentTime = new Date().toISOString();

  db.get('SELECT MAX(id) as maxId FROM LocationHistory', (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    const newId = (row.maxId || 0) + 1; // Increment from the maxId

    // Insert the new record with the incremented ID and current time
    db.run(
      'INSERT INTO LocationHistory (id, location_name, time, item_name) VALUES (?, ?, ?, ?)',
      [newId, location_name, currentTime, name],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.status(201).json({ id: this.lastID });
      }
    );
  });
});

// Fetch action and location history for the item from the database
app.get('/api/items/:name/history', (req, res) => {
  const itemName = req.params.name;

  db.serialize(() => {
    // Query for location history
    db.all(`SELECT * FROM LocationHistory WHERE item_name = ?`, [itemName], (err, locationHistory) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Query for action history
      db.all(`SELECT * FROM ActionHistory WHERE item_name = ?`, [itemName], (err, actionHistory) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        
        // Respond with both histories
        res.json({ locationHistory, actionHistory });
      });
    });
  });
});

// Close the database connection when the server stops
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
