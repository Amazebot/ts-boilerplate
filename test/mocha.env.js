/**
 * This file is loaded by Mocha config, to set any env configs prior to tests.
 * There are no test files at this path because all specs are inline (beside
 * the file they're testing).
 *
 * The `/test` path is only used as it's the default place mocha looks for
 * configs, so `mocha` can run from command line without an opts file argument.
 *
 * Insert env config for tests below:
 */
process.env.MY_CONFIG = 'WHATEVER'
