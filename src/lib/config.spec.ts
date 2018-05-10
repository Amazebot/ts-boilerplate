import 'mocha'
import { expect } from 'chai'
import * as yargs from 'yargs'
import * as config from './config'

describe('Config', () => {
  describe('.assign', () => {
    it('leaves defaults if property undefined', () => {
      const testConfig = new config.Config()
      testConfig.assign({})
      expect(testConfig.logLevel).to.eq('info')
    })
    it('assigns given properties', () => {
      const testConfig = new config.Config()
      testConfig.assign({ logLevel: 'debug' })
      expect(testConfig.logLevel).to.eq('debug')
    })
    it('ignores any properties not in type', () => {
      const testConfig = new config.Config()
      testConfig.assign({ foo: 'foo' })
      expect(testConfig).to.not.have.property('foo')
    })
  })
  describe('.loadConfig', () => {
    it('loads config from process.argv', () => {
      yargs.parse(['-l', 'silent']) // overwrite argv
      const testConfig = config.loadConfig()
      expect(testConfig).to.have.property('logLevel', 'silent')
      yargs.parse(process.argv) // replace with actual argv
    })
    it('loads configs from ENV variables using prefix', () => {
      process.env.APP_LOG_LEVEL = 'silent'
      expect(config.loadConfig()).to.have.property('logLevel', 'silent')
      delete process.env.BOT_NAME
    })
    it('loads config from package.json `app` attribute', () => {
      require('../../package.json').app = { logLevel: 'silent' }
      expect(config.loadConfig()).to.have.property('logLevel', 'silent')
    })
  })
})