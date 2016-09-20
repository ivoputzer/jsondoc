const {ok} = require('assert')
const {schema_to_html} = require.main.require(process.env.npm_package_main)

describe('test/module/exports', () => {
  it('la cosa più semplice in assoluto', () => {
    const html = schema_to_html('')
    ok(/<!doctype html><html><\/html>/i.test(html))
  })
})
