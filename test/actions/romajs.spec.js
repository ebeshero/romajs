import configureMockStore from 'redux-mock-store'
import xml2js from 'xml2js'
import traverse from 'traverse'
import thunk from 'redux-thunk'
import express from 'express'
import fs from 'fs'
import expect from 'expect'
import * as actions from '../../actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const x2jParser = new xml2js.Parser()

let startTestServer = function(){
  // use startTestServer().close() to stop the server.
  let app = new (express)()
  let port = 3000
  app.use('/static', express.static('static'));

  return app.listen(port, function(error) {
    if (error) {
      console.error(error)
    }
  })
}

describe('Input ODD actions', () => {
  it('selectOdd should store the URL of an input ODD', () =>{
    expect(actions.selectOdd('./static/data/bare.odd')).toEqual({
      type: 'SELECT_ODD',
      odd_url: './static/data/bare.odd'
    })
  });

  it('fetchOdd should retrieve an input ODD', (done) =>{
    const store = mockStore({ receivedOdd: {}, selectedOdd: './static/data/bare.odd' })
    // spin up the server temporarily
    let srv = startTestServer();

    var unsubscribe = store.subscribe(() => {
      let receiveAct = store.getActions().find((act)=>{
        return act.type == "RECEIVE_ODD"
      })
      if (receiveAct) {
        expect(traverse(receiveAct.json).reduce(function (acc, x) {
            if (this.key == "schemaSpec") acc.push(x);
            return acc;
        }, []).length).toBeGreaterThan(0);
        srv.close();
        done();
      }
    });
    store.dispatch(actions.fetchOdd('http://localhost:3000/static/data/bare.odd'));

  });

  it('fetchP5 should retrieve P5subset.json', (done) =>{
    const store = mockStore({ receivedOdd: {}, selectedOdd: '' })

    let srv = startTestServer();

    var unsubscribe = store.subscribe(() => {
      let receiveAct = store.getActions().find((act)=>{
        return act.type == "RECEIVE_P5"
      })
      if (receiveAct) {
        srv.close();
        expect(receiveAct.json.modules.length).toEqual(21)
        done();
      }
    });
    store.dispatch(actions.fetchP5('http://localhost:3000/static/data/p5subset.json'));
  })

  // it('postToOxGarage should obtain a compiled version of the ODD', (done) => {
  //   const store = mockStore({})
  //   let compileodd = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
  //   return fs.readFile('test/data/bare.odd', 'utf-8', function(err, data){
  //     if (err) {
  //       throw "Unable to read file";
  //     }
  //
  //     var unsubscribe = store.subscribe(() => {
  //       let receiveAct = store.getActions().find((act)=>{
  //         return act.type == "RECEIVE_FROM_OXGARAGE"
  //       })
  //       if (receiveAct) {
  //         expect(traverse(receiveAct.json).reduce(function (acc, x) {
  //             if (this.key == "schemaSpec") acc.push(x);
  //             return acc;
  //         }, []).length).toBeGreaterThan(0);
  //         done();
  //         srv.close();
  //       }
  //     });
  //     store.dispatch(actions.postToOxGarage(data, compileodd));
  //   })
  // }).timeout(30000); // giving a long time for slower connections

});
