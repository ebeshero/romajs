import expect from 'expect'
import xml2js from 'xml2js'
import romajsApp from '../../reducers'

const x2jParser = new xml2js.Parser()

describe('Input ODD reducers', () => {
  it('should handle initial state', () => {
    expect(
      romajsApp(undefined, {})
    ).toEqual({ compiledOdd: {}, receivedOdd: {}, selectedOdd: '' })
  })

  it('should handle SELECT_ODD', () => {
    expect(
      romajsApp({}, {
        type: 'SELECT_ODD',
        odd_url: './static/data/bare.odd'
      })
    ).toEqual({
        compiledOdd: {},
        receivedOdd: {},
        selectedOdd: './static/data/bare.odd'
      })
  });

  it('should handle REQUEST_ODD', () => {
    expect(
      romajsApp({ compiledOdd: {}, receivedOdd: {}, selectedOdd: './static/data/bare.odd' }, {
        type: 'REQUEST_ODD',
        odd: './static/data/bare.odd'
      })
    ).toEqual({
       compiledOdd: {},
       receivedOdd: { isFetching: true } ,
       selectedOdd: './static/data/bare.odd' })
  });

  it('should handle RECEIVE_ODD', () => {
    let xml = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    x2jParser.parseString(xml, (err, result) => {
      let state = romajsApp({
         compiledOdd: {},
         receivedOdd: { isFetching: true } ,
         selectedOdd: './static/data/bare.odd'
      }, {
        type: 'RECEIVE_ODD',
        xml: xml,
        json: result
      })
      expect(state.receivedOdd.json.TEI.text[0].body[0]).toIncludeKey('schemaSpec')
    })
  });

  it('should handle SET_COMPILED_ODD', () => {
    let state = romajsApp({
       compiledOdd: {},
       receivedOdd: {} ,
       selectedOdd: ''
    }, {
      type: 'SET_COMPILED_ODD',
      odd: '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    })
    x2jParser.parseString(state.compiledOdd.data, (err, result) => {
      expect(result.TEI.text[0].body[0]).toIncludeKey('schemaSpec')
    })
  });

})
