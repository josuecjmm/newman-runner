const newman = require('newman')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const {collection, environment} = require('./config/collection.config'); 

async function createNewmanDir() {
  const { stdout, stderr } = await exec(
    `mkdir -p reports`
  )
  if (stdout !== '') console.log('stdout:', stdout)
  if (stderr !== '') console.log('stdout:', stderr)
}

createNewmanDir()

async function openReport() {
  const { stdout, stderr } = await exec(
    `cd ./reports
    file=$(ls -t | head -n1 |awk '{printf("%s",$0)}') 
    open $file`
  )
  if (stdout !== '') console.log('stdout:', stdout)
  if (stderr !== '') console.log('stdout:', stderr)
}

newman.run({
  collection,
  environment,
  reporters: ['htmlextra', 'cli'],
  reporter: {
    htmlextra: {
      export: './reports',
      logs: true,
    },
  },
}, (err) => {
  if (err) { throw err }
  openReport()
})
