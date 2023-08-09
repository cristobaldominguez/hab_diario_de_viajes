import { port } from '../config.js'

const serverListen = () => console.log(
  `Server running at: http://localhost:${port} \n` +
  'Press Ctrl-C to terminate.'
)

export default serverListen
