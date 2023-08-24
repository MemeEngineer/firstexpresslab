const express = require('express');
const app = express();


app.get('/greeting/:name', (req, res) => {
    res.send(`wow! hello there,` + req.params.name);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Tip base off of total: $` + req.params.total + ` ` + `tip%:`+ req.params.tipPercentage);
});



app.listen(3000, () => {
    console.log('listening');
});