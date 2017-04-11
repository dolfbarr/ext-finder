import { expect } from 'chai'
import { describe, it } from 'mocha'
import { ext } from '../lib'

describe('extFinder', () => {
  it('should start', () => {
    let result = ext('ext-finder.spec.js')
    expect(result).to.equal('js')
  })
})
