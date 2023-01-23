import express from 'express';

const app = express()
app.listen(3000)

app.get('/', (req, res) => {
    res.send('Hello Wolrd\n')
})

app.get('/contato', (req, res) => {
    res.send('contato\n')
})