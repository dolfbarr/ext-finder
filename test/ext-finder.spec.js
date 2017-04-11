import { expect } from 'chai'
import { describe, it } from 'mocha'
import ext from '../lib'

console.log(ext)

describe('extFinder', () => {
  it('should return an extension', () => {
    let result = ext('ext-finder.spec.js')
    expect(result).to.equal('js')
  })
})
