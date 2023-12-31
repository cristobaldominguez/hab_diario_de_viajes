// DotEnv
import 'dotenv/config'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  SMTP_USER,
  SENDGRID_KEY,
  SECRET,
  UPLOADS_DIR,
  NODE_ENV
} = process.env

const root = dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT || 3000
const env = NODE_ENV || 'production'

export {
  port,
  root,
  env,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  SMTP_USER,
  SENDGRID_KEY,
  SECRET,
  UPLOADS_DIR
}
