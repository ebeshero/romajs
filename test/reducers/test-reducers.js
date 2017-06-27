import expect from 'expect'
import {flattenXML, hydrateXML} from 'squash-xml-json';
import fs from 'fs'
import romajsApp from '../../reducers'

var initialState = { selectedOdd: '', odd: {}, ui: {} }

describe('Input ODD reducers', () => {
  it('should handle initial state', () => {
    expect(
      romajsApp(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle SELECT_ODD', () => {
    let state = Object.assign({}, initialState,
      {selectedOdd: './static/fakeData/bare.odd'}
    )
    expect(
      romajsApp({}, {
        type: 'SELECT_ODD',
        oddUrl: './static/fakeData/bare.odd'
      })
    ).toEqual({
        ui: {},
        selectedOdd: './static/fakeData/bare.odd',
        odd: {}
      })
  });

  it('should handle REQUEST_ODD', () => {
    let state = Object.assign({}, initialState,
      {selectedOdd: './static/fakeData/bare.odd'}
    )
    expect(
      romajsApp(state, {
        type: 'REQUEST_ODD',
        odd: './static/fakeData/bare.odd'
      })
    ).toEqual({
       ui: {},
       odd: { customization: { isFetching: true } },
       selectedOdd: './static/fakeData/bare.odd'
     })
  });

  it('should handle RECEIVE_ODD', () => {
    let xml = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    let json = flattenXML(xml)
    let newState = Object.assign({}, initialState,
      {selectedOdd: './static/fakeData/bare.odd',
      odd: {customization: { isFetching: true } }}
    )
    let state = romajsApp(newState, {
      type: 'RECEIVE_ODD',
      xml: xml,
      json: json
    })

    let odd = state.odd.customization.json
    let schemaSpec = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "schemaSpec") {
        acc.push(node_id)
      }
      return acc
    }, [])

    expect(schemaSpec.length).toEqual(1)
  });

  it('should handle REQUEST_P5', () => {
    expect(
      romajsApp(initialState, {
        type: 'REQUEST_P5',
        url: 'http://localhost:3000/static/fakeData/p5subset.json'
      })
    ).toEqual({
       ui: {},
       selectedOdd: '',
       odd: { localsource: { isFetching: true } }
    })
  });

  it('should handle RECEIVE_P5', () => {
    let json = {"title": "The TEI Guidelines","edition": "","generator": "odd2json",
        "modules": [{"ident":"analysis","id":"AI","desc":"Simple analytic mechanisms"}]}
    let state = romajsApp({
       odd: {customization: { isFetching: true } },
       selectedOdd: './static/fakeData/bare.odd'
    }, {
      type: 'RECEIVE_P5',
      json
    })
    expect(state.odd.localsource.json).toIncludeKey('modules')
  });

})

describe('ODD modules operation reducers', () => {

  it('should handle INCLUDE_MODULES', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }

      let json = flattenXML(data)

      let state = romajsApp({
         odd: {customization: { isFetching: false, json: json } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_MODULES',
        modules: ['analysis', 'core']
      })

      let odd = state.odd.customization.json
      let addedModules = Object.keys(odd).reduce((acc, node_id) => {
        if (odd[node_id].name == "moduleRef") {
          let key = odd[node_id]["@"].key
          if (key == "analysis" || key == "core") {
            acc.push(key)
          }
        }
        return acc
      }, [])

        expect(addedModules).toEqual(["core", "analysis"])
        done();
    });
  })

  it('should handle EXCLUDE_MODULES', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      let json = flattenXML(data)

      let state = romajsApp({
         odd: {customization: { isFetching: false, json: json } },
         selectedOdd: ''
      }, {
        type: 'EXCLUDE_MODULES',
        modules: ['analysis', 'header']
      })

      let odd = state.odd.customization.json
      let expectedModules = Object.keys(odd).reduce((acc, node_id) => {
        if (odd[node_id].name == "moduleRef") {
          let key = odd[node_id]["@"].key
          if (key == "analysis" || key == "header") {
            acc.push(key)
          }
        }
        return acc
      }, [])

      expect(expectedModules.length).toEqual(0)
      done();
    });
  })

  it('should handle INCLUDE_ELEMENTS (@except)', (done) => {
    let data = `<schemaSpec><moduleRef key="core" except="list item p"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
       odd: { customization: { json : json } },
       selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['item', 'p'],
      module: "core"
    })

    let odd = state.odd.customization.json

    for (let node_id of Object.keys(odd)) {
      if (odd[node_id].name == "moduleRef"){
        expect(odd[node_id]["@"].except).toEqual("list")
        done();
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (@except with one item)', (done) => {
    let data = `<schemaSpec><moduleRef key="core" except="item list"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
       odd: { customization: { json : json } },
       selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['item', 'list'],
      module: "core"
    })
    let odd = state.odd.customization.json

    for (let node_id of Object.keys(odd)) {
      if (odd[node_id].name == "moduleRef"){
        expect(odd[node_id]["@"].except).toNotExist()
        done();
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      let json = flattenXML(data)
      let state = romajsApp({
         odd: { customization: { json: json } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: "core"
      })

      let odd = state.odd.customization.json

      for (let node_id of Object.keys(odd)) {
        if (odd[node_id].name == "moduleRef" && odd[node_id]["@"].key == "core"){
          expect(
            odd[node_id]["@"].include.split(" ").indexOf("p") > -1 &&
            odd[node_id]["@"].include.split(" ").indexOf("list") > -1
          ).toBeTruthy()
          done();
        }
      }
    });
  })

  it('should handle INCLUDE_ELEMENTS (@include on new moduleRef)', (done) => {
    let data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
       odd: { customization: { json : json } },
       selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['teiHeader', 'fileDesc'],
      module: "header"
    })

    let odd = state.odd.customization.json

    for (let node_id of Object.keys(odd)) {
      if (odd[node_id].name == "moduleRef" && odd[node_id]["@"].key == "header"){
        expect(odd[node_id]["@"].include).toEqual("teiHeader fileDesc")
        done();
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (remove elementSpec[@mode="delete"])', (done) => {
    let data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p" module="core" mode="delete"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
       odd: { customization: { json : json } },
       selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['p'],
      module: "core"
    })

    let odd = state.odd.customization.json

    for (let node_id of Object.keys(odd)) {
      if (odd[node_id].name == "elementSpec"){
        expect(odd[node_id]["@"].mode).toNotExist()
        done();
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (elements already included)', (done) => {
    let data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    let json = flattenXML(data)
      let state = romajsApp({
         odd: { customization: { json : json } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: "core"
      })

      let odd = state.odd.customization.json

      for (let node_id of Object.keys(odd)) {
        if (odd[node_id].name == "moduleRef"){
          expect(odd[node_id]["@"]).toEqual({key : 'core'})
          done();
        }
      }
  })

  it('should handle EXCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      let json = flattenXML(data)
      let state = romajsApp({
         odd: { customization: { json: json } },
         selectedOdd: ''
      }, {
        type: 'EXCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: "core"
      })

      let odd = state.odd.customization.json

      for (let node_id of Object.keys(odd)) {
        if (odd[node_id].name == "moduleRef" && odd[node_id]["@"].key == "core"){
          expect(odd[node_id]["@"].include.split(" ").indexOf("p") == -1)
          expect(odd[node_id]["@"].include.split(" ").indexOf("list") == -1)
          done();
        }
      }
    });
  })

  it('should handle EXCLUDE_ELEMENTS (@include with one item)', (done) => {
    let data = `<schemaSpec><moduleRef key="core" include="p list"/>
                <moduleRef key="tei"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
       odd: { customization: { json: json } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: "core"
    })

    let odd = state.odd.customization.json

    let modules = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "moduleRef") {
        acc.push(node_id)
      }
      return acc
    }, [])

    expect(modules.length).toEqual(1)
    done()
  })

  it('should handle EXCLUDE_ELEMENTS (@except)', (done) => {
    let data = `<schemaSpec><moduleRef key="core" except="p"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
      odd: {
        customization: { json : json },
        localsource: { json : P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'list'],
      module: "core"
    })

    let odd = state.odd.customization.json

    for (let node_id of Object.keys(odd)) {
      if (odd[node_id].name == "moduleRef" && odd[node_id]["@"].key == "core"){
        expect(odd[node_id]["@"].except.split(" ").indexOf("abbr") > -1)
        expect(odd[node_id]["@"].except.split(" ").indexOf("list") > -1)
        done();
      }
    }
  })

  it('should handle EXCLUDE_ELEMENTS (@except - all elements)', () => {
    let data = `<schemaSpec><moduleRef key="tei"/>
                  <moduleRef key="gaiji" except="char charDecl charName charProp
                    g glyph glyphName localName mapping"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
      odd: {
        customization: { json : json },
        localsource: { json : P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['unicodeName', 'value'],
      module: "gaiji"
    })

    let odd = state.odd.customization.json

    let modules = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "moduleRef") {
        acc.push(node_id)
      }
      return acc
    }, [])

    expect(modules.length).toEqual(1)
  })

  it('should handle EXCLUDE_ELEMENTS (elementRef)', (done) => {
    let data = `<schemaSpec><moduleRef key="tei"/><elementRef key="abbr"/>
                <elementRef key="p"/><elementRef key="list"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
      odd: { customization: { json: json } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: "core"
    })

    let odd = state.odd.customization.json

    let elementRefs = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "elementRef") {
        acc.push(node_id)
      }
      return acc
    }, [])

    expect(elementRefs.length).toEqual(1)
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (elementSpec)', (done) => {
    let data = `<schemaSpec><moduleRef key="tei"/><elementSpec ident="abbr" mode="change"/>
                <elementSpec ident="p" mode="change"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
      odd: { customization: { json: json } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: "core"
    })

    let odd = state.odd.customization.json

    let elementSpecs = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "elementSpec") {
        acc.push(odd[node_id])
      }
      return acc
    }, [])

    expect(elementSpecs[0]["@"]).toEqual({"ident" : "abbr", "mode" : "delete"})
    expect(elementSpecs[1]["@"]).toEqual({"ident" : "p", "mode" : "delete"})
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (elements already excluded)', () => {
    let data = `<schemaSpec><moduleRef key="core" except="p list"/></schemaSpec>`
    let json = flattenXML(data)
    let state = romajsApp({
      odd: {
        customization: { json : json },
        localsource: { json : P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: "core"
    })
    let odd = state.odd.customization.json

    let moduleRefs = Object.keys(odd).reduce((acc, node_id) => {
      if (odd[node_id].name == "moduleRef") {
        acc.push(odd[node_id])
      }
      return acc
    }, [])

    expect(moduleRefs[0]["@"]).toEqual({ key: 'core', except: 'p list' })
  })

})

describe('Interface operation reducers', () => {

  it('should handle SET_FILTER_TERM', () => {
    let state = romajsApp(initialState, {
      type: 'SET_FILTER_TERM',
      term: 'p'
    })

    expect(state.ui.filterTerm).toEqual('p')
  })

})
