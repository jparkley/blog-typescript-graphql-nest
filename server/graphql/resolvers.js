const db = require('../db')

const resolvers = {
    Query: {
        posts: () => db.posts.list()
    }
}

 

module.exports =  { resolvers }