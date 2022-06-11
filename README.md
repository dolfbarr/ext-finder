# ext-finder
[![npm version](https://badge.fury.io/js/ext-finder.svg)](https://badge.fury.io/js/ext-finder) [![code style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dlf42/ext-finder/master/LICENSE)

Finds an extension of given filenames
# Instalation
## CLI
```shell
$ npm i ext-finder -g
```
## Lib
```shell
npm i ext-finder --save
```

# Usage

## CLI
```shell
Usage: ext-finder [files] [options]

Options:
  --version, -v  Show version [boolean]
  --help,    -h  Show help    [boolean]

Examples:
  ext-finder text.txt             | Get extension of "text.txt" file
  ext-finder text1.txt text2.txt  | Get extensions of several files
  ext-finder "new text.txt"       | Get extensions of file with spaces in name
```

## Lib

```javascript
import extFinder from 'ext-finder'

// use

let extension = extfinder.getExtension("file.txt")
// 'txt'

let allExtensions = extFinder.(['file1.txt', 'file2.js', 'file3'])
// ['txt', 'js', undefined]
```

# License
Copyright (c) 2017 dolfbarr

Licensed under the [MIT](LICENSE) license
