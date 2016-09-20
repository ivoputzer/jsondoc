// jsondoc json-schema.json >> index.html

const {ok, equal} = require('assert')

const {join:joinPath} = require('path')
const {spawnSync} = require('child_process')

describe('jsondoc', function () {
  const json = require(joinPath(__dirname, 'schema.json'))
  it('needs to have a $schema reference', function () {
    ok(json.hasOwnProperty('$schema'))
    ok(/^https?:\/\//ig.test(json.$schema))
  })

  it('parses descriptions', function () {

  })

  function aDescription(){
    return 'this is a description for my schema'
  }

  function aSchema() {
    return 'http://a/schema/url/here'
  }
})
