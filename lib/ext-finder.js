export default function ext (filenames) {
  if (Array.isArray(filenames)) {
    return filenames.map(filename => getExtenison(filename))
  } else {
    return getExtenison(filenames)
  }
}

export function getExtenison (filename) {
  let parts = filename.split('.')
  return parts.length > 1 ? parts.pop() : ''
}
