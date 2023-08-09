import express from 'express'

// Config
import { port } from './config.js'

// Helpers
import serverListenerCallback from './helpers/server_listener_callback.js'

// App
const app = express()

// Middlewares
app.use(express.json())

// Server Listener
app.listen(port, serverListenerCallback)
