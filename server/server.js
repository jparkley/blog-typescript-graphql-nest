const express = require('express')

const apolloServer = require('./apollo')

const app = express()

//apolloServer.applyMiddleware({app, path:'/graphql'})

app.get('/', (req, res) => {
    res.send('<h2>Hello on 12/30</h2>')
})

app.listen(5000, () => {
    console.log('basic express server started at 5000');
})