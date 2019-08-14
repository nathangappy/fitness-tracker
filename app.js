const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Application Ready!')
});

app.listen(PORT, () => {
  console.log(`server is ready on ${PORT}`)
});