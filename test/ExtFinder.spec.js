import { expect } from 'chai'
import { describe, it } from 'mocha'
import extFinder from '../lib'

describe('ExtFinder', () => {
  it('should return an extension...', () => {
    let result = extFinder.getExtension('ExtFinder.spec.js')
    expect(result).to.equal('js')
  })
  it('should return an empty extension...', () => {
    let result = extFinder.getExtension('testFile')
    expect(result).to.equal(undefined)
  })
  it('should return an extension for file with spaces...', () => {
    let result = extFinder.getExtension('test file.js')
    expect(result).to.equal('js')
  })
  it('should return an array of extensions for array of files...', () => {
    let result = extFinder.getExtension([
      'text.c',
      'text.py',
      'test.js'
    ])
    expect(result).to.deep.equal(['c', 'py', 'js'])
  })
})
