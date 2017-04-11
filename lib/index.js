import yargs from 'yargs'
import ext from './ext-finder'
export default ext

export function extFinder () {
  let argv = yargs.argv

  ext(argv._).map(ext =>
    ext.length
    ? console.log(ext)
    : console.log('[no extension]'))
}

extFinder()
