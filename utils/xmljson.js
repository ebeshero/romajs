// A collection of simple functions to manipluate Squahs XML JSON objects

export function appendFragmentTo(json, parent, fragment) {
  const rootId = fragment[">root"]
  json[parent].children.push(rootId)
  return mergeFragment(json, fragment)
}

export function prependFragmentTo(json, parent, fragment) {
  const rootId = fragment[">root"]
  json[parent].children.unshift(rootId)
  return mergeFragment(json, fragment)
}

export function mergeFragment(json, fragment) {
  const rootId = fragment[">root"]
  delete fragment[">root"]
  delete fragment[">before_root"]
  return Object.assign(json, fragment)
}
