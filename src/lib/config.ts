import * as yargs from 'yargs'
import * as packageJSON from '../../package.json'

/**
 * Config class to be populated by argument vector or variety of other means.
 * All properties should be initialised with a default or explicitly undefined,
 * so they can be populated by looping through the keys, instead of requiring
 * manual assignment when configs are loaded.
 */
export class Config {
  logLevel: 'debug' | 'info' | 'warn' | 'error' | 'silent' | undefined = 'info'

  /** Assign initial config properties */
  constructor (configs?: any) {
    if (configs) this.assign(configs)
  }
  
  /** Assign configs to defined properties */
  assign (configs: any) {
    for (let key in this) {
      if (typeof configs[key] !== 'undefined') this[key] = configs[key]
    }
  }
}

/**
 * Defines configs given as command line args, environment and/or JSON file.
 * The option values are assigned to the config object on startup.
 * - Any env variable with the `APP_` prefix will be converted to assigned as
 *   its camel case equivalent config property. e.g: 
 *   `APP_LOG_LEVEL === config.logLevel`
 * - The `app` property in package.json can also define a JSON object of
 *   properties to merge into config.
 */
export function loadConfig () {
  return new Config(yargs
    .usage('\nUsage: $0 [args]')
    .env('APP')
    .pkgConf('app')
    .option('log-level', {
      type: 'string',
      describe: 'The starting minimum level for logging events (silent|debug|info|warn|error).',
      default: new Config().logLevel,
      alias: 'l'
    })
    .config()
    .alias('config', 'c')
    .example('config', 'node dist/index.js -c bot-config.json')
    .version(packageJSON.version)
    .alias('version', 'v')
    .help()
    .alias('help', 'h')
    .epilogue(`
    Environment variables with the prefix \`APP_\` will be assigned in config.
    Configs can also be declared in \`package.json\` with the key: "app".
    `)
    .fail((msg: string, err: Error) => {
      console.error(msg, err)
      console.info('Start with --help for config argument info.')
      if (err) throw err
      process.exit(1)
    })
    .argv
  )
}

/** Access all settings from argv, env, package.json and custom config file */
export const config = loadConfig()

// Catch Windows OS exits
if (process.platform !== 'win32') process.on('SIGTERM', () => process.exit(0))
