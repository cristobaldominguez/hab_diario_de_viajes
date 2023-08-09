import express from 'express'
import cors from 'cors'

// Config
import { port } from './config.js'

// Helpers
import serverListenerCallback from './helpers/server_listener_callback.js'

// App
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Server Listener
app.listen(port, serverListenerCallback)
