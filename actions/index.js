import fetch from 'isomorphic-fetch';
import xml2js from 'xml2js';

export const REQUEST_ODD = 'REQUEST_ODD';
export const RECEIVE_ODD = 'RECEIVE_ODD';
export const SELECT_ODD = 'SELECT_ODD';
export const REQUEST_P5 = 'REQUEST_P5';
export const RECEIVE_P5 = 'RECEIVE_P5';
// export const REQUEST_OXGARAGE_TRANSFORM = 'REQUEST_OXGARAGE_TRANSFORM';
// export const RECEIVE_FROM_OXGARAGE = 'RECEIVE_FROM_OXGARAGE';
// export const SET_COMPILED_ODD = 'SET_COMPILED_ODD';

const x2jParser = new xml2js.Parser()

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
          // parse into JSON as well
          x2jParser.parseString(xml, (err, result) => {
              res(dispatch(receiveOdd(xml, result)))
          })
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
