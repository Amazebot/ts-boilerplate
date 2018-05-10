import { logger, config } from '..'

/** Main interface to start the app, initialising other modules */
export async function start () {
  logger.info(`Starting app!`)
  logger.debug('Using config:', config)
}
