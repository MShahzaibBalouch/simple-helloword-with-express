const express = require('express');
const app = express();
const port = 8080; 


app.get('/', (req, res) => {
  res.send('Hello World with Express! Awo ghar chalay');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
