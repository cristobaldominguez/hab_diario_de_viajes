import express from 'express'
import cors from 'cors'

// Config
import { port } from './config.js'

// Middlewares
import errorMiddleware from './middlewares/error_middleware.js'
import error404 from './middlewares/error_404.js'

// Helpers
import serverListenerCallback from './helpers/server_listener_callback.js'

// App
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Error Handling
app.use(error404)
app.use(errorMiddleware)

// Server Listener
app.listen(port, serverListenerCallback)
