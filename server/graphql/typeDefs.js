const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        posts: [Post]
    }
    
    type Post {
        id: ID!
        title: String!
        content: String
        author: String
    }
`
module.exports = { typeDefs }