const { DataStore } = require('notarealdb')
const dataStore = new DataStore('./data')

const posts = dataStore.collection('posts')
module.exports = { posts }
