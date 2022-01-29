const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        content: String
        author: String
    }

    type Query {
        posts: [Post]
    }

    # type Mutation {
    #     createPost(title: String, content: String): Post!
    # }

    # type Mutation {
    #     createPost: (_, { title, content }) => {
    #         const id = generate()
    #         const post = { id, title, content }
    #         cache.set(id, post)
    #         return createPost
    #     }
    # }
`
module.exports = { typeDefs }