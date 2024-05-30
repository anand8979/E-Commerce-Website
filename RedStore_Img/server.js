const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));

// Mock data for users
const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  // Add more users as needed
];

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password is correct (this is simplified for demonstration purposes)
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Handle registration form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username or email is already taken (this is simplified for demonstration purposes)
  const existingUser = users.find((user) => user.username === username || user.email === email);

  if (existingUser) {
    res.status(400).send('Username or email already taken');
  } else {
    // Add the new user to the mock data
    users.push({ username, email, password });
    res.send('Registration successful');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
