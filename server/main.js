// this is where the server will live

import express from 'express'
import mongoose from 'mongoose'
import bp from 'body-parser'
import PostController from './controllers/PostController'
import './db/dbconfig'

let server = express()
let port = 3000
server.use(bp.json({ limit: '50mb' }))

server.use('/api/blogs', new PostController().router)
server.use('/', express.static(__dirname + '/../public'))



//default handler
server.use((error, req, res, next)=>{
    res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("Server running on port:", port)
})