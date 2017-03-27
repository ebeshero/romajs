import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import express from 'express'
import fs from 'fs'
import expect from 'expect'
import * as actions from '../../actions'
import {flattenXML, hydrateXML} from 'squash-xml-json'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

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

describe('I/O ODD actions', () => {
  it('selectOdd should store the URL of an input ODD', () =>{
    expect(actions.selectOdd('./static/fakeData/bare.odd')).toEqual({
      type: 'SELECT_ODD',
      odd_url: './static/fakeData/bare.odd'
    })
  });

  it('fetchOdd should retrieve an input ODD', (done) =>{
    const store = mockStore({ receivedOdd: {}, selectedOdd: './static/fakeData/bare.odd' })
    // spin up the server temporarily
    let srv = startTestServer();

    var unsubscribe = store.subscribe(() => {
      let receiveAct = store.getActions().find((act)=>{
        return act.type == "RECEIVE_ODD"
      })
      if (receiveAct) {
        let schemaSpec = Object.keys(receiveAct.xml).reduce((acc, node_id) => {
          if (receiveAct.xml[node_id].name == "schemaSpec") {
            acc.push(node_id)
          }
          return acc
        }, [])
        srv.close();
        done();
      }
    });
    store.dispatch(actions.fetchOdd('http://localhost:3000/static/fakeData/bare.odd'));

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
    store.dispatch(actions.fetchP5('http://localhost:3000/static/fakeData/p5subset.json'));
  })

  // it('postToOxGarage should obtain a compiled version of the ODD', (done) => {
  //   const store = mockStore({})
  //   let compileodd = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
  //   return fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
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

  it('serializeODD should serialize JSON to XML', (done) =>{
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      let json = flattenXML(data)
      expect(json).toExist()
      done()
    })
  });

});

describe('Module actions', () => {
  it('includeModules should pass a list of modules to include in the customization', () =>{
    expect(actions.includeModules(['analysis'])).toEqual({
      type: 'INCLUDE_MODULES',
      modules: ['analysis']
    })
  });
  it('excludeModules should pass a list of modules to exclude from the customization', () =>{
    expect(actions.excludeModules(['header'])).toEqual({
      type: 'EXCLUDE_MODULES',
      modules: ['header']
    })
  });
  it('includeElements should pass a list of elements to include in a module', () =>{
    expect(actions.includeElements(['p'], "core")).toEqual({
      type: 'INCLUDE_ELEMENTS',
      elements: ['p'],
      module: "core"
    })
  });
  it('excludeElements should pass a list of elements to exclude from a module', () =>{
    expect(actions.excludeElements(['p'], "core")).toEqual({
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p'],
      module: "core"
    })
  });

});

describe('Element actions', () => {
  it('changeElement should pass changes to an element', () =>{
    expect(actions.changeElement(
      "p",
      {
        namespace: "",
        alias: "",
        desc: "",
        classes: [],
        examples: [],
        content: [],
        constraints: [],
        content: {},
        attributes: []
      }
    )).toEqual({
      type: 'SAVE_ELEMENT_CHANGES',
      changes: {
        namespace: "",
        alias: "",
        desc: "",
        classes: [],
        examples: [],
        content: [],
        constraints: [],
        content: {},
        attributes: []
      }
    })
  });
});
