const express = require('express');
const connectToDatabase = require('./config/db');

// Initialize App
const app = express();

// Connect Database
connectToDatabase();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Set Port For Server
const PORT = process.env.PORT || 5000;

// Initial Test Route
app.get('/', (req, res) => {
  res.send('Application Ready!')
});

// Routes
app.use('/users', require('./routes/api/users'));
app.use('/auth', require('./routes/api/auth'));
app.use('/profile', require('./routes/api/profile'));
app.use('/workouts', require('./routes/api/workouts'));

// Initialize Server 
app.listen(PORT, () => {
  console.log(`server is ready on ${PORT}`)
});