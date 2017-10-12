const shell = require('shelljs')
const path = require('path')

const baseDir = path.resolve(__dirname, '../')

shell.echo('\n -- Starting build -- \n')

shell.rm('-rf', `${baseDir}/docs`)
shell.exec('npm run generate')
shell.cp('-R', `${baseDir}/dist`, `${baseDir}/docs`)
shell.exec('echo "photoleuchten.com" > docs/CNAME')

shell.echo('\n -- Build complete -- \n')
