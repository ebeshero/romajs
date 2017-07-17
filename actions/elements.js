export const UPDATE_ELEMENT_ALTIDENT = 'UPDATE_ELEMENT_ALTIDENT'
export const UPDATE_ELEMENT_GLOSS = 'UPDATE_ELEMENT_DESC'
export const UPDATE_ELEMENT_DESC = 'UPDATE_ELEMENT_DESC'
// export const CREATE_ELEMENT = 'CREATE_ELEMENT'

export function updateElementAltident(element, altIdent) {
  return {
    type: UPDATE_ELEMENT_ALTIDENT,
    element,
    altIdent
  }
}

export function updateElementGloss(element, gloss) {
  return {
    type: UPDATE_ELEMENT_GLOSS,
    element,
    gloss
  }
}

export function updateElementDesc(element, desc) {
  return {
    type: UPDATE_ELEMENT_DESC,
    element,
    desc
  }
}
