const shell = require('shelljs')
const path = require('path')

const baseDir = path.resolve(__dirname, '../')

shell.exec('npm run generate')
shell.rm('rf', baseDir + '/docs')
shell.cp('R', baseDir + '/dist', baseDir + '/docs')
shell.exec('echo "photoleuchten.com" > docs/CNAME')
shell.exec('git add -A && git commit -am "updated docs folder"')

