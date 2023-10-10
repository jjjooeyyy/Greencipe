const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Templating Engine
app.set('view engine', 'ejs');




app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });