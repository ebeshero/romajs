import fetch from 'isomorphic-fetch';
import xml2js from 'xml2js';

export const REQUEST_ODD = 'REQUEST_ODD';
export const RECEIVE_ODD = 'RECEIVE_ODD';
export const SELECT_ODD = 'SELECT_ODD';
export const REQUEST_OXGARAGE_TRANSFORM = 'REQUEST_OXGARAGE_TRANSFORM';
export const RECEIVE_FROM_OXGARAGE = 'RECEIVE_FROM_OXGARAGE';
export const SET_COMPILED_ODD = 'SET_COMPILED_ODD';

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

function receiveOdd(odd, xml) {
  return {
    type: RECEIVE_ODD,
    xml,
    json: xml,
    receivedAt: Date.now()
  }
}

function requestOxGarageTransform(input, endpoint) {
  return {
    type: REQUEST_OXGARAGE_TRANSFORM,
    input,
    endpoint
  }
}

function receiveFromOxGarage(input, endpoint, xml) {
  return {
    type: RECEIVE_FROM_OXGARAGE,
    input,
    endpoint,
    result: xml,
    receivedAt: Date.now()
  }
}

export function setCompiledOdd(odd) {
  return {
    type: SET_COMPILED_ODD,
    odd
  }
}

/**********
 * thunks *
 **********/
export function fetchOdd(odd) {
  return dispatch => {
    dispatch(requestOdd(odd))
    return fetch(odd)
      .then(response => response.text())
      .then((xml) => {
        // parse into JSON as well
        return x2jParser.parseString(xml, (err, result) => {
            dispatch(receiveOdd(xml, result))
        })
      })
  }
}

export function postToOxGarage(input, endpoint) {
  return dispatch => {
    dispatch(requestOxGarageTransform(input, endpoint));
    let fd = new FormData();
    fd.append("fileToConvert", new Blob([input], {"type":"application\/octet-stream"}), 'file.odd');
    return fetch(endpoint, {
        mode: 'cors',
        method: 'post',
        body: fd
      })
      .then(response => {return response.text()})
      .then(xml => dispatch(receiveFromOxGarage(input, endpoint, xml)))
  }
}

export function parseCompiledOdd(xml) {
  return dispatch => {
    return x2jParser.parseString(xml, (err, result) => {
        dispatch(setCompiledOdd(result))
    })
  }
}
