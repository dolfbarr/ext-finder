import { expect } from 'chai'
import { describe, it } from 'mocha'
import ext from '../lib'

describe('ext-finder', () => {
  it('should return an extension...', () => {
    let result = ext('ext-finder.spec.js')
    expect(result).to.equal('js')
  })
  it('should return an empty extension...', () => {
    let result = ext('testFile')
    expect(result).to.equal('')
  })
  it('should return an extension for file with spaces...', () => {
    let result = ext('test file.exe')
    expect(result).to.equal('exe')
  })
  it('should return an array of extensions for array of files...', () => {
    let result = ext(['text.exe', 'text.txt', 'test.js'])
    expect(result).to.deep.equal(['exe', 'txt', 'js'])
  })
})
