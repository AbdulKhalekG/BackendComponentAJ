const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the data.json file
app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data/data.json');
});


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
