const express = require('express');
const app = express();

const answer= ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name', (req, res) => {
    res.send(`wow! hello there,` + req.params.name);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Tip base off of total: $` + req.params.total + ` ` + `tip%:`+ req.params.tipPercentage + '% ' + `tip:` +`$` + req.params.tipPercentage * req.params.total / 100);
});

app.get('/magic/:question', (req, res) => {
    res.send(`${req.params.question}:` + `` + `<h1>` + answer[(Math.floor(Math.random() * answer.length + 1))] + `</h1>`)
});

app.listen(3000, () => {
    console.log('listening');
});