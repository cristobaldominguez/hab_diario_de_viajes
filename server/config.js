// DotEnv
import 'dotenv/config'

const port = process.env.PORT || 3000

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  SMTP_USER,
  SENDGRID_KEY
} = process.env

export {
  port,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  SMTP_USER,
  SENDGRID_KEY
}
