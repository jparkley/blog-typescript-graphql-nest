const express = require('express')
const app = express()

app.get('/', (_, res) => {
    res.send('this is test')
})
app.listen(4000, () => {
    console.log('new server started at 4000');
})