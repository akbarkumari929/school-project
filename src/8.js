const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.status(400).send('Please provide a name');
  }
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
