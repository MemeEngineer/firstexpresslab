const express = require('express');
const app = express();


app.get('/greeting/:name', (req, res) => {
    res.send("Hello, Stranger");
});




app.listen(3000, () => {
    console.log('listening');
});