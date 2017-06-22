import './scss/romajs.scss'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import { selectOdd, fetchOdd, fetchP5, parseOdd, includeModules } from './actions'
import romajsApp from './reducers'
import App from './containers/App'
import {hydrateXML} from 'squash-xml-json';
import saveAs from 'save-as';

const loggerMiddleware = createLogger();

let store = createStore(
  romajsApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

// Simple upolad and download components for preliminary user testing
// This code is not meant to last
// var button = document.getElementById("open");
// button.addEventListener("click",function(e){
//
//     button.disabled = "true";
//
//     let files = document.getElementById("files").files
//
//     let reader = new FileReader()
//     console.log(reader.readAsText(files[0]))
//
//     reader.onload = (e) => {
//
//       store.dispatch(parseOdd(e.target.result))
//
//       store.dispatch(fetchP5('static/fakeData/p5subset.json')).then((action)=>{
//         render(
//           <Provider store={store}>
//             <App />
//           </Provider>,
//           document.getElementById('romajs')
//         )
//       })
//   }
//
// },false);
//
// var exportBtn = document.getElementById("export");
// exportBtn.addEventListener("click",function(e){
//   let xml_string = hydrateXML(store.getState().odd.customization.json)
//   let bb = new Blob([xml_string], {"type":"text\/xml"});
//   saveAs(bb, 'new_odd.xml');
//
// },false);



// let testoddURL = 'http://localhost:3000/static/fakeData/bare.odd';
// // let compileoddEndPoint = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
// // let compileoddEndPoint = 'http://localhost:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
//
// store.dispatch(selectOdd(testoddURL));
// store.dispatch(fetchOdd(testoddURL)).then((action) => {
//     store.dispatch(fetchP5('http://localhost:3000/static/fakeData/p5subset.json')).then((action)=>{
//       // store.dispatch(includeModules(['header', 'core']))
//       render(
//         <Provider store={store}>
//           <App />
//         </Provider>,
//         document.getElementById('romajs')
//       )
//     })
//   }
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('romajs')
)
