import { getUserBy } from '../db/queries/users_queries.js'

// Errors
import AuthError from '../errors/auth_error.js'

async function userExists (req, res, next) {
  const { id } = req.user

  try {
    const user = await getUserBy({ id })
    if (!user) throw new AuthError({ message: 'Usuario no encontrado', status: 404 })

    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

export default userExists
