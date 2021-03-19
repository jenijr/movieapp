const mongoose = require('mongoose')

mongoose
    .connect("mongodb://jeniffer:38394364@mongodbproject-shard-00-00.fo0ip.mongodb.net:27017,mongodbproject-shard-00-01.fo0ip.mongodb.net:27017,mongodbproject-shard-00-02.fo0ip.mongodb.net:27017/cinema?ssl=true&replicaSet=atlas-12gqy9-shard-0&authSource=admin&retryWrites=true&w=majority")
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

