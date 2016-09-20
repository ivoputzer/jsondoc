const {ok, equal} = require('assert')

const {spawnSync} = require('child_process')
const {statSync} = require('fs')
const {join} = require('path')

describe('test/module/bin', function () {

  it('needs to have a binary for `npm_package_bin_jsondoc`', () => {
    ok(process.env.hasOwnProperty('npm_package_bin_jsondoc'))
  })

  it('needs to be executable', () => {
    const {size, mode} = statSync(process.env.npm_package_bin_jsondoc)
    const {S_IXOTH} = require('fs').constants
    ok(mode & S_IXOTH) // S_IXOTH
  })

  it('takes schemas from arguments', () => {
    const args = ['test/schema.json']
    const {status, stdout, stderr} = spawnSync(process.env.npm_package_bin_jsondoc, args)
    equal(status, 0)
  })
})
