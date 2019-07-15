import mongoose from 'mongoose'
const connectionString = 'mongodb+srv://student:student@cluster0-ur4ua.mongodb.net/blogger?retryWrites=true&w=majority'

let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})
connection.on("error", err => {
    console.error('[DATABASE ERROR]:', err)
})
connection.once("open", () => {
    console.log("connected to the db")
})