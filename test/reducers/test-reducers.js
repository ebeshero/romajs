import expect from 'expect'
import xml2js from 'xml2js'
import fs from 'fs'
import romajsApp from '../../reducers'

const x2jParser = new xml2js.Parser()

describe('Input ODD reducers', () => {
  it('should handle initial state', () => {
    expect(
      romajsApp(undefined, {})
    ).toEqual({ selectedOdd: '', odd: {} })
  })

  it('should handle SELECT_ODD', () => {
    expect(
      romajsApp({}, {
        type: 'SELECT_ODD',
        odd_url: './static/fakeData/bare.odd'
      })
    ).toEqual({
        selectedOdd: './static/fakeData/bare.odd',
        odd: {}
      })
  });

  it('should handle REQUEST_ODD', () => {
    expect(
      romajsApp({ odd: {}, selectedOdd: './static/fakeData/bare.odd' }, {
        type: 'REQUEST_ODD',
        odd: './static/fakeData/bare.odd'
      })
    ).toEqual({
       odd: { customization: { isFetching: true } },
       selectedOdd: './static/fakeData/bare.odd'
     })
  });

  it('should handle RECEIVE_ODD', () => {
    let xml = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    x2jParser.parseString(xml, (err, result) => {
      let state = romajsApp({
         odd: {customization: { isFetching: true } },
         selectedOdd: './static/fakeData/bare.odd'
      }, {
        type: 'RECEIVE_ODD',
        xml: xml,
        json: result
      })
      expect(state.odd.customization.json.TEI.text[0].body[0]).toIncludeKey('schemaSpec')
    })
  });

  it('should handle REQUEST_P5', () => {
    expect(
      romajsApp({ odd: {}, selectedOdd: ''}, {
        type: 'REQUEST_P5',
        url: 'http://localhost:3000/static/fakeData/p5subset.json'
      })
    ).toEqual({
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
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: {customization: { isFetching: false, json: result } },
           selectedOdd: ''
        }, {
          type: 'INCLUDE_MODULES',
          modules: ['analysis', 'core']
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'analysis' || x.$.key == 'core') return x
        })
        expect(expectedModule.length).toEqual(2)
        done();
      })
    });
  })

  it('should handle EXCLUDE_MODULES', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: {customization: { isFetching: false, json: result } },
           selectedOdd: ''
        }, {
          type: 'EXCLUDE_MODULES',
          modules: ['analysis', 'header']
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'header') return x
        })
        expect(expectedModule.length).toEqual(0)
        done();
      })
    });
  })

  it('should handle INCLUDE_ELEMENTS (@except)', (done) => {
    let odd = `<schemaSpec><moduleRef key="core" except="list item p"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['item', 'p'],
        module: "core"
      })
      expect(state.odd.customization.json.schemaSpec.moduleRef[0].$.except).toEqual("list")
      done();
    })
  })

  it('should handle INCLUDE_ELEMENTS (@except with one item)', (done) => {
    let odd = `<schemaSpec><moduleRef key="core" except="item list"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['item', 'list'],
        module: "core"
      })
      expect(state.odd.customization.json.schemaSpec.moduleRef[0].$.except).toNotExist()
      done();
    })
  })


  it('should handle INCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: { customization: { json: result } },
           selectedOdd: ''
        }, {
          type: 'INCLUDE_ELEMENTS',
          elements: ['p', 'list'],
          module: "core"
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'core' && x.$.include) {
            if (x.$.include.split(" ").indexOf("p") > -1 && x.$.include.split(" ").indexOf("list") > -1) {
              return x
            }
          }
        })
        expect(expectedModule.length).toBeGreaterThan(0)
        done();
      })
    });
  })

  it('should handle INCLUDE_ELEMENTS (@include on new moduleRef)', (done) => {
    let odd = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['teiHeader', 'fileDesc'],
        module: "header"
      })
      expect(state.odd.customization.json.schemaSpec.moduleRef[1])
        .toEqual({ '$': { key: 'header', include: 'teiHeader fileDesc' } })
      done();
    })
  })

  it('should handle INCLUDE_ELEMENTS (remove elementSpec[@mode="delete"])', (done) => {
    let odd = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p" module="core" mode="delete"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['p'],
        module: "core"
      })
      expect(state.odd.customization.json.schemaSpec.elementSpec[0].mode).toNotExist()
      done();
    })
  })

  it('should handle INCLUDE_ELEMENTS (elements already included)', (done) => {
    let odd = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: "core"
      })
      expect(state.odd.customization.json.schemaSpec.moduleRef[0]).toEqual({ '$': { key: 'core' } })
      done();
    })
  })

  it('should handle EXCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: { customization: { json: result } },
           selectedOdd: ''
        }, {
          type: 'EXCLUDE_ELEMENTS',
          elements: ['p', 'list'],
          module: "core"
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'core' && x.$.include) {
            if (x.$.include.split(" ").indexOf("p") == -1 && x.$.include.split(" ").indexOf("list") == -1) {
              return x
            }
          }
        })
        expect(expectedModule.length).toBeGreaterThan(0)
        done();
      })
    });
  })

  it('should handle EXCLUDE_ELEMENTS (@include with one item)', (done) => {
    let state = romajsApp({
       odd: { customization: { json: {
         TEI : { text : [{ body : [{ div : [{ schemaSpec : [{
           moduleRef : [
             {$ : {"key" : "core", "include" : "p list" }},
             {$ : {"key" : "tei"}}]
         }] }] }] }] }
       } } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: "core"
    })
    var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[0].schemaSpec[0].moduleRef
    expect(expectedModule.length).toEqual(1)
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (@except)', (done) => {
    let state = romajsApp({
      odd: { customization: { json: {
        TEI : { text : [{ body : [{ div : [{ schemaSpec : [{
          moduleRef : [
            {$ : {"key" : "core", "except" : "p" }}]
        }] }] }] }] }
      } } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'list'],
      module: "core"
    })
    var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[0].schemaSpec[0].moduleRef.filter(function (x){
      if (x.$.key == 'core' && x.$.except) {
        if (x.$.except.split(" ").indexOf("abbr") > -1 && x.$.except.split(" ").indexOf("list") > -1) {
          return x
        }
      }
    })
    expect(expectedModule.length).toBeGreaterThan(0)
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (elementRef)', (done) => {
    let state = romajsApp({
      odd: { customization: { json: {
        TEI : { text : [{ body : [{ div : [{ schemaSpec : [{
          moduleRef : [
            {$ : {"key" : "tei"}}],
          elementRef: [{$ : {"key" : "abbr"}}, {$ : {"key" : "p"}}, {$ : {"key" : "list"}}]
        }] }] }] }] }
      } } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: "core"
    })
    var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[0].schemaSpec[0].elementRef
    expect(expectedModule.length).toEqual(1)
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (elementSpec)', (done) => {
    let state = romajsApp({
      odd: { customization: { json: {
        TEI : { text : [{ body : [{ div : [{ schemaSpec : [{
          moduleRef : [
            {$ : {"key" : "tei"}}],
          elementSpec: [{$ : {"ident" : "abbr", "mode" : "change"}}, {$ : {"ident" : "p", "mode" : "change"}}]
        }] }] }] }] }
      } } },
       selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: "core"
    })
    var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[0].schemaSpec[0].elementSpec
    expect(expectedModule).toEqual([ { '$': { ident: 'abbr', mode: 'delete' } },
                                       { '$': { ident: 'p', mode: 'delete' } } ])
    done();
  })

  it('should handle EXCLUDE_ELEMENTS (elements already excluded)', (done) => {
    let odd = `<schemaSpec><moduleRef key="core" except="p list"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      let state = romajsApp({
         odd: { customization: { json : result } },
         selectedOdd: ''
      }, {
        type: 'EXCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: "core"
      })
      expect(state.odd.customization.json.schemaSpec.moduleRef[0]).toEqual({ '$': { key: 'core', except: 'p list' } })
      done();
    })
  })

})
