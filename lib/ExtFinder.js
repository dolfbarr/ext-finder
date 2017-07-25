export default class ExtFinder {
  static getExtension (fileNameData) {
    if (Array.isArray(fileNameData)) {
      return fileNameData.map(filename => this._parseExtension(filename))
    } else {
      return this.parseExtension(fileNameData)
    }
  }

  static _parseExtension (filename) {
    let parts = filename.split('.')
    return parts.length > 1 ? parts.pop() : undefined
  }
}
