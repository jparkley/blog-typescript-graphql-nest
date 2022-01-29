const express = require('express')
const http = require('http')
const { ApolloServer, gql } = require('apollo-server-express')
const {typeDefs} = require('./graphql/typeDefs')
const {resolvers} = require('./graphql/resolvers')

const app = express()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

apolloServer.start().then((res) => {
    apolloServer.applyMiddleware({app, path:'/graphql'})
    app.listen(5000, () => {
        console.log('Apollo express server started at 5000');
    })
})

// app.get('/', (req, res) => {
//     res.send('<h2>Hello on 12/30</h2>')
// })

