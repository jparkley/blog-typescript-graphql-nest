const fs = require('fs')
const { ApolloServer, gql } = require('apollo-server-express')


const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8'}))
let resolvers;
const apolloServer = new ApolloServer({ typeDefs, resolvers })

module.exports = { apolloServer }