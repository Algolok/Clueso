const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from the current directory and public folder with cache headers
app.use(express.static(path.join(__dirname), {
  maxAge: '1d' // Cache for 1 day
}));
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d'
}));

// Route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});