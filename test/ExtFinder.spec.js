import { expect } from 'chai'
import { describe, it } from 'mocha'
import extFinder from '../lib'

describe('ExtFinder', () => {
  it('should return an extension...', () => {
    const result = extFinder.getExtension('ExtFinder.spec.js')
    expect(result).to.equal('js')
  })
  it('should return an empty extension...', () => {
    const result = extFinder.getExtension('testFile')
    expect(result).to.equal(undefined)
  })
  it('should return an extension for file with spaces...', () => {
    const result = extFinder.getExtension('test file.js')
    expect(result).to.equal('js')
  })
  it('should return an array of extensions for array of files...', () => {
    const result = extFinder.getExtension([
      'text.c',
      'text.py',
      'test.js'
    ])
    expect(result).to.deep.equal(['c', 'py', 'js'])
  })
})
