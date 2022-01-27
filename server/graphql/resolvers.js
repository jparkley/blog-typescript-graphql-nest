const db = require('../db')

const resolvers = {
    Query: {
        posts: () => db.posts.list()
    },

    // Mutation: {
    //     createPost: (root, {title, content}) => {
    //         const id = db.posts.create({title, content})
    //         return db.posts.get(id)
    //     } 
    // }
}

 

module.exports =  { resolvers }
