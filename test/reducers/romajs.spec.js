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
        odd_url: './static/data/bare.odd'
      })
    ).toEqual({
        selectedOdd: './static/data/bare.odd',
        odd: {}
      })
  });

  it('should handle REQUEST_ODD', () => {
    expect(
      romajsApp({ odd: {}, selectedOdd: './static/data/bare.odd' }, {
        type: 'REQUEST_ODD',
        odd: './static/data/bare.odd'
      })
    ).toEqual({
       odd: { customization: { isFetching: true } },
       selectedOdd: './static/data/bare.odd'
     })
  });

  it('should handle RECEIVE_ODD', () => {
    let xml = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    x2jParser.parseString(xml, (err, result) => {
      let state = romajsApp({
         odd: {customization: { isFetching: true } },
         selectedOdd: './static/data/bare.odd'
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
        url: 'http://localhost:3000/static/data/p5subset.json'
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
       selectedOdd: './static/data/bare.odd'
    }, {
      type: 'RECEIVE_P5',
      json
    })
    expect(state.odd.localsource.json).toIncludeKey('modules')
  });

})

describe('ODD modules operation reducers', () => {

  it('should handle INCLUDE_MODULES', (done) => {
    fs.readFile('test/data/bare.odd', 'utf-8', function(err, data){
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
          if (x.$.key == 'analysis') return x
        })
        expect(expectedModule.length).toBeGreaterThan(0)
        done();
      })
    });
  })

  it('should handle EXCLUDE_MODULES', (done) => {
    fs.readFile('test/data/bare.odd', 'utf-8', function(err, data){
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

  it('should handle INCLUDE_ELEMENTS', (done) => {
    fs.readFile('test/data/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: { customization: { json: result } },
           selectedOdd: ''
        }, {
          type: 'INCLUDE_ELEMENTS',
          elements: ['p'],
          module: "core"
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'core' && x.$.include) {
            if (x.$.include.split(" ").indexOf("p") > -1) {
              return x
            }
          }
        })
        expect(expectedModule.length).toBeGreaterThan(0)
        done();
      })
    });
  })

  it('should handle EXCLUDE_ELEMENTS', (done) => {
    fs.readFile('test/data/bare.odd', 'utf-8', function(err, data){
      if (err) {
        throw "Unable to read file";
      }
      x2jParser.parseString(data, (err, result) => {
        let state = romajsApp({
           odd: { customization: { json: result } },
           selectedOdd: ''
        }, {
          type: 'EXCLUDE_ELEMENTS',
          elements: ['p'],
          module: "core"
        })
        var expectedModule = state.odd.customization.json.TEI.text[0].body[0].div[3].schemaSpec[0].moduleRef.filter(function (x){
          if (x.$.key == 'core' && x.$.exclude) {
            if (x.$.exclude.split(" ").indexOf("p") > -1) {
              return x
            }
          }
        })
        expect(expectedModule.length).toBeGreaterThan(0)
        done();
      })
    });
  })
})
