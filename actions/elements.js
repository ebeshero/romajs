export const UPDATE_ELEMENT_DOCS = 'UPDATE_ELEMENT_DOCS'
export const ELEMENT_ADD_MEMBEROF = 'ELEMENT_ADD_MEMBEROF'
export const ELEMENT_REMOVE_MEMBEROF = 'ELEMENT_REMOVE_MEMBEROF'
// export const CREATE_ELEMENT = 'CREATE_ELEMENT'

export function updateElementDocs(element, docsEl, content) {
  return {
    type: UPDATE_ELEMENT_DOCS,
    element,
    docsEl,
    content
  }
}

export function elementAddMemberof(element, className) {
  return {
    type: ELEMENT_ADD_MEMBEROF,
    element,
    className
  }
}

export function elementRemoveMemberof(element, className) {
  return {
    type: ELEMENT_REMOVE_MEMBEROF,
    element,
    className
  }
}
