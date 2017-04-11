import yargs from 'yargs'
import ext from './ext-finder'
export default ext

let argv = yargs.argv
argv._.map(filename => {
  console.log(ext(filename))
})
