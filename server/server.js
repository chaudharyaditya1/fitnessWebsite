const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


// Serve static files from the client/public folder
app.use(express.static(path.join(__dirname, '../client/public')));

// Health check endpoint (already set up)
app.get('/api/health', (req, res) => {
  res.json({ status: `Server is running on port ${PORT}` });
});

// Import the hello controller
const { hello } = require('./src/controllers/hellocontroller');

// Create a new endpoint: /api/hello
app.get('/api/hello', hello);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
