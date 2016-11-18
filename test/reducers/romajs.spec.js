import expect from 'expect'
import xml2js from 'xml2js'
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
      type: 'RECEIVE_ODD',
      json
    })
    expect(state.odd.customization.json).toIncludeKey('modules')
  });

  // it('should handle SET_COMPILED_ODD', () => {
  //   let state = romajsApp({
  //      compiledOdd: {},
  //      receivedOdd: {},
  //      selectedOdd: ''
  //   }, {
  //     type: 'SET_COMPILED_ODD',
  //     odd: '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
  //   })
  //   x2jParser.parseString(state.compiledOdd.data, (err, result) => {
  //     expect(result.TEI.text[0].body[0]).toIncludeKey('schemaSpec')
  //   })
  // });

  // it('should handle INCLUDE_MODULES', () => {
  //   let state = romajsApp({
  //     receivedOdd: {},
  //     selectedOdd: '',
  //      compiledOdd: {
  //        data: {
  //
  //        }
  //      }
  //   }, {
  //     type: 'INCLUDE_MODULES',
  //     modules: ['textcrit', 'transcr']
  //   })
  //
  // });

})
