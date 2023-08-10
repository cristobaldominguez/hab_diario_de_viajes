import express from 'express'

// Controllers
import entryController from '../controllers/entry_controller.js'

// Middlewares
import authUser from '../middlewares/auth_user.js'
import userExists from '../middlewares/user_exists.js'
import authUserOptional from '../middlewares/auth_user_optional.js'

// Router
const router = express.Router()

// Routes
// POST /entries/
router.post('/', authUser, userExists, entryController.createEntry)

// GET /entries/
router.get('/', authUserOptional, userExists, entryController.listEntries)

// GET /entries/1
router.get('/:id', authUserOptional, userExists, entryController.getEntry)

// POST /entries/1/photos
router.post('/:id/photos', authUser, userExists, entryController.addPhoto)

// DELETE /entries/4/photos/9
router.delete('/:id/photos/:photoId', authUser, userExists, entryController.deleteEntryPhoto)

export default router
