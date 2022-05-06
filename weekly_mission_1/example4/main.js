const Logger = require('./logger')
const dbLogger = new Logger('DB')
const acessLogger = new Logger('ACCESS')

dbLogger.info('This is an informational message')
acessLogger.verbose('This is a verbose message')