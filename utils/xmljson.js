// A collection of simple functions to manipluate Squahs XML JSON objects
import { hydrateXML } from 'squash-xml-json'

export function mergeFragment(json, fragment) {
  delete fragment['>root']
  delete fragment['>before_root']
  return Object.assign(json, fragment)
}

export function appendFragmentTo(json, parent, fragment) {
  const rootId = fragment['>root']
  json[parent].children.push(rootId)
  return mergeFragment(json, fragment)
}

export function prependFragmentTo(json, parent, fragment) {
  const rootId = fragment['>root']
  json[parent].children.unshift(rootId)
  return mergeFragment(json, fragment)
}

export function hydrateFragment(json, node) {
  const fragment = {
    '>before_root': [],
    '>root': node,
  }
  const root = Object.assign({}, json[node])
  delete root.parent
  for (const child of root.children) {
    fragment[child] = json[child]
  }
  fragment[node] = root
  return hydrateXML(fragment)
}
