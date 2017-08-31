import './scss/romajs.scss'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// import { selectOdd, fetchOdd, fetchP5, parseOdd, includeModules } from './actions'
import romajsApp from './reducers'
import App from './containers/App'

const loggerMiddleware = createLogger()
const history = createHistory()

const store = createStore(
  romajsApp,
  applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

// let testoddURL = 'http://localhost:3000/static/fakeData/bare.odd'
// // let compileoddEndPoint = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml'
// // let compileoddEndPoint = 'http://localhost:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml'
//
// store.dispatch(selectOdd(testoddURL))
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
// )

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('romajs')
)
