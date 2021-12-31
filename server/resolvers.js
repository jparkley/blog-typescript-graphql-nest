const db = require('./db')

const Query = {
    posts: () => db.posts.list()
}

module.exports =  { Query }