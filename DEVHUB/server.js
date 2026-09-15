const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// In-memory array to store users
const users = [];

// Route: GET all users
app.get('/users', (req, res) => {
  res.json({ success: true, data: users });
});

// Route: POST signup user
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);

  res.status(201).json({ success: true, message: 'Signup successful!', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
