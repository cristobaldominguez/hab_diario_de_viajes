import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'

// Config
import { port, UPLOADS_DIR } from './config.js'

// Middlewares
import errorMiddleware from './middlewares/error_middleware.js'
import error404 from './middlewares/error_404.js'

// Routes
import userRoutes from './routes/users_routes.js'

// Helpers
import serverListenerCallback from './helpers/server_listener_callback.js'

// App
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(morgan('common'))
app.use('/avatars', express.static(UPLOADS_DIR))

// Routes
app.use('/users', userRoutes)

// Error Handling
app.use(error404)
app.use(errorMiddleware)

// Server Listener
app.listen(port, serverListenerCallback)
