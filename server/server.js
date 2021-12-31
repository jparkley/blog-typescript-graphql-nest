const fs = require('fs')
const app = require('express')()
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8'}))
const resolvers = require('./resolvers')
const apolloServer = new ApolloServer({ typeDefs, resolvers })

apolloServer.start().then((res) => {
    apolloServer.applyMiddleware({app, pat:'/graphql'})
    app.listen(5000, () => {
        console.log('basic express server started at 5000');
    })
})

// app.get('/', (req, res) => {
//     res.send('<h2>Hello on 12/30</h2>')
// })