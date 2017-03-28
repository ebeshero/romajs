import fetch from 'isomorphic-fetch';
import {flattenXML, hydrateXML} from 'squash-xml-json';

export const REQUEST_ODD = 'REQUEST_ODD';
export const RECEIVE_ODD = 'RECEIVE_ODD';
export const PARSE_ODD = 'PARSE_ODD';
export const SELECT_ODD = 'SELECT_ODD';
export const REQUEST_P5 = 'REQUEST_P5';
export const RECEIVE_P5 = 'RECEIVE_P5';
// export const REQUEST_OXGARAGE_TRANSFORM = 'REQUEST_OXGARAGE_TRANSFORM';
// export const RECEIVE_FROM_OXGARAGE = 'RECEIVE_FROM_OXGARAGE';
// export const SET_COMPILED_ODD = 'SET_COMPILED_ODD';

// Modules operations
export const INCLUDE_MODULES = 'INCLUDE_MODULES';
export const EXCLUDE_MODULES = 'EXCLUDE_MODULES';
export const INCLUDE_ELEMENTS = 'INCLUDE_ELEMENTS';
export const EXCLUDE_ELEMENTS = 'EXCLUDE_ELEMENTS';

// Element operations
export const SAVE_ELEMENT_CHANGES = 'SAVE_ELEMENT_CHANGES';
export const CREATE_ELEMENT = 'CREATE_ELEMENT';

// Attribute class operations
export const CHANGE_ATT_CLASS = 'CHANGE_ATT_CLASS';
export const CREATE_ATT_CLASS = 'CREATE_ATT_CLASS';
export const DELETE_ATT_CLASS = 'DELETE_ATT_CLASS';

// Model class operations
export const CHANGE_MODEL_CLASS = 'CHANGE_MODEL_CLASS';
export const CREATE_MODEL_CLASS = 'CREATE_MODEL_CLASS';
export const DELETE_MODEL_CLASS = 'DELETE_MODEL_CLASS';

// Dataypes operations
export const CHANGE_DATATYPE = 'CHANGE_DATATYPE';
export const CREATE_DATATYPE = 'CREATE_DATATYPE';
export const DELETE_DATATYPE = 'DELETE_DATATYPE';

export function selectOdd(odd_url) {
  return {
    type: SELECT_ODD,
    odd_url
  }
}

function requestOdd(odd) {
  return {
    type: REQUEST_ODD,
    odd
  }
}

function receiveOdd(string, json) {
  return {
    type: RECEIVE_ODD,
    xml: string,
    json,
    receivedAt: Date.now()
  }
}

export function parseOdd(xmlstring) {
  return {
    type: PARSE_ODD,
    xml: xmlstring,
    json: flattenXML(xmlstring)
  }
}

function requestP5(url) {
  return {
    type: REQUEST_P5,
    url
  }
}

function receiveP5(json){
  return {
    type: RECEIVE_P5,
    json,
    receivedAt: Date.now()
  }
}

/* MODULE OPERATIONS */

export function includeModules(modules) {
  return {
    type: INCLUDE_MODULES,
    modules
  }
}

export function excludeModules(modules) {
  return {
    type: EXCLUDE_MODULES,
    modules
  }
}

export function includeElements(elements, module) {
  return {
    type: INCLUDE_ELEMENTS,
    elements, module
  }
}

export function excludeElements(elements, module) {
  return {
    type: EXCLUDE_ELEMENTS,
    elements, module
  }
}

/* ELEMENTS OPERATIONS */

export function changeElement(element, changes) {
  return {
    type: SAVE_ELEMENT_CHANGES,
    changes
  }
}

export function createElement(element, properties) {
  return {
    type: CREATE_ELEMENT,
    properties
  }
}

export function createAttribute(element, attribute_properties) {
  return {
    type: CREATE_ATTRIBUTE,
    attribute_properties
  }
}

export function changeAttribute(element, attribute_properties) {
  return {
    type: CHANGE_ATTRIBUTE,
    attribute_properties
  }
}

export function deleteAttribute(element, attribute) {
  return {
    type: DELETE_ATTRIBUTE,
    attribute
  }
}

export function createConstrain(element, constrain) {
  return {
    type: CREATE_CONSTRAIN,
    constrain
  }
}

export function changeConstrain(element, constrain) {
  return {
    type: CHANGE_CONSTRAIN,
    constrain
  }
}

export function deleteConstrain(element, constrain) {
  return {
    type: DELETE_CONSTRAIN,
    constrain
  }
}

// function requestOxGarageTransform(input, endpoint) {
//   return {
//     type: REQUEST_OXGARAGE_TRANSFORM,
//     input,
//     endpoint
//   }
// }

// function receiveFromOxGarage(input, endpoint, string, json) {
//   return {
//     type: RECEIVE_FROM_OXGARAGE,
//     input,
//     endpoint,
//     xml: string,
//     json,
//     receivedAt: Date.now()
//   }
// }

// export function setCompiledOdd(odd) {
//   return {
//     type: SET_COMPILED_ODD,
//     odd
//   }
// }

/**********
 * thunks *
 **********/
export function fetchOdd(odd) {
  return dispatch => {
    dispatch(requestOdd(odd))
    return new Promise((res, rej)=>{
      fetch(odd)
        .then(response => response.text())
        .then((xml) => {
          res(dispatch(receiveOdd(xml, flattenXML(xml))))
        })
    })
  }
}

export function fetchP5(url) {
  return dispatch => {
    dispatch(requestP5(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveP5(json)))
  }
}

// export function postToOxGarage(input, endpoint) {
//   return dispatch => {
//     dispatch(requestOxGarageTransform(input, endpoint));
//     let fd = new FormData();
//     fd.append("fileToConvert", new Blob([input], {"type":"application\/octet-stream"}), 'file.odd');
//     return new Promise((res, rej)=>{
//       fetch(endpoint, {
//           mode: 'cors',
//           method: 'post',
//           body: fd
//         })
//         .then(response => {return response.text()})
//         .then((xml) => {
//           return x2jParser.parseString(xml, (err, result) => {
//             res(dispatch(receiveFromOxGarage(input, endpoint, xml, result)))
//           })
//         })
//     })
//   }
// }
