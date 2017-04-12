import yargs from 'yargs'
import { name, version, homepage } from '../package.json'
import ext from './ext-finder'
export default ext

export function extFinder () {
  let argv = yargs
    .demand('q')
    .usage('Usage: $0 [files] [options]')
    .version('version', 'Show version', version)
    .alias('version', 'v')
    .help()
    .alias('help', 'h')
    .example(`${name} text.txt`, '| Get extension of "text.txt" file')
    .example(`${name} text1.txt text2.txt`, '| Get extensions of several files')
    .example(`${name} "new text.txt"`, '| Get extensions of file with spaces in name')
    .epilog(`for more information visit ${homepage}`)
    .showHelpOnFail(false, 'whoops, something went wrong! run with --help')
    .argv

  ext(argv._).map(ext =>
    ext.length
    ? console.log(ext)
    : console.log('[no extension]'))
}

extFinder()
