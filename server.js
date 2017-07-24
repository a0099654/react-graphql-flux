const express = require('express');

let app = express();

app.use(express.static('public')); //To server the static file
app.listen(3000);
