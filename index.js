const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 8000

app.use(express.json())

// Available Routes
app.use('/api/bookd',require('./routes/add'));
app.use('/api/bookd',require('./routes/view'));
app.use('/api/bookd',require('./routes/update'));
app.use('/api/bookd',require('./routes/delete'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


