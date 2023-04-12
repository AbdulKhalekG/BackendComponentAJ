const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const response = await fetch('/login', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  console.log(data);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Store the user data in an array
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});