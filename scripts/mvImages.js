/* eslint-disable no-console */

const shell = require('shelljs')
const path = require('path')

const baseDir = path.resolve(__dirname, '../')

console.log(baseDir)
console.log(` Removing ${baseDir}/static/img`)
shell.rm('-Rf', `${baseDir}/static/img`)

console.log(` images to ${baseDir}/static/img`)
shell.mkdir(`${baseDir}/static/img`)
shell.cp('-R', `${baseDir}/node_modules/pl-images/dist/*`, `${baseDir}/static/img`)
