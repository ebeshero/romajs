import 'babel-polyfill'
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectOdd, fetchOdd, postToOxGarage } from './actions'
import romajsApp from './reducers'
// import App from './components/App'

const loggerMiddleware = createLogger();

let store = createStore(
  romajsApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

let testoddURL = 'http://localhost:3000/static/data/bare.odd';
let compileoddEndPoint = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
// let compileoddEndPoint = 'http://localhost:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';

store.dispatch(selectOdd(testoddURL));
store.dispatch(fetchOdd(testoddURL)).then((action) => {
    store.dispatch(postToOxGarage(action.xml, compileoddEndPoint))
  }
);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
