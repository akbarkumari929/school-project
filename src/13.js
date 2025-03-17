const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const data = {
    message: 'Hello World'
  };
  res.json(data);
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
