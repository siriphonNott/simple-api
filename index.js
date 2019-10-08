const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.send({status: 'ok'});
});

app.listen(port, ()=>console.log(`Server is running on port ${port}`));