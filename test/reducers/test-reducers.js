import expect from 'expect'
import {flattenXML} from 'squash-xml-json'
import fs from 'fs'
import romajsApp from '../../reducers'
import P5 from '../P5'

const initialState = { selectedOdd: '', odd: {}, ui: {} }

describe('Input ODD reducers', () => {
  it('should handle initial state', () => {
    expect(
      romajsApp(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle SELECT_ODD', () => {
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
  })

  it('should handle REQUEST_ODD', () => {
    const state = Object.assign({}, initialState,
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
  })

  it('should handle RECEIVE_ODD', () => {
    const xml = '<TEI><teiHeader/><text><body><schemaSpec></schemaSpec></body></text></TEI>'
    const json = flattenXML(xml)
    const newState = Object.assign({}, initialState,
      {selectedOdd: './static/fakeData/bare.odd',
        odd: {customization: { isFetching: true } }}
    )
    const state = romajsApp(newState, {
      type: 'RECEIVE_ODD',
      xml: xml,
      json: json
    })

    const odd = state.odd.customization.json
    const schemaSpec = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'schemaSpec') {
        acc.push(nodeId)
      }
      return acc
    }, [])

    expect(schemaSpec.length).toEqual(1)
  })

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
  })

  it('should handle RECEIVE_P5', () => {
    const json = {'title': 'The TEI Guidelines', 'edition': '', 'generator': 'odd2json',
      'modules': [{'ident': 'analysis', 'id': 'AI', 'desc': 'Simple analytic mechanisms'}]}
    const state = romajsApp({
      odd: {customization: { isFetching: true } },
      selectedOdd: './static/fakeData/bare.odd'
    }, {
      type: 'RECEIVE_P5',
      json
    })
    expect(state.odd.localsource.json).toIncludeKey('modules')
  })
})

describe('ODD modules operation reducers', () => {
  it('should handle INCLUDE_MODULES', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Unable to read file')
      }

      const json = flattenXML(data)

      const state = romajsApp({
        odd: {customization: { isFetching: false, json: json } },
        selectedOdd: ''
      }, {
        type: 'INCLUDE_MODULES',
        modules: ['analysis', 'core']
      })

      const odd = state.odd.customization.json
      const addedModules = Object.keys(odd).reduce((acc, nodeId) => {
        if (odd[nodeId].name === 'moduleRef') {
          const key = odd[nodeId]['@'].key
          if (key === 'analysis' || key === 'core') {
            acc.push(key)
          }
        }
        return acc
      }, [])

      expect(addedModules).toEqual(['core', 'analysis'])
      done()
    })
  })

  it('should handle EXCLUDE_MODULES', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Unable to read file')
      }
      const json = flattenXML(data)

      const state = romajsApp({
        odd: {customization: { isFetching: false, json: json } },
        selectedOdd: ''
      }, {
        type: 'EXCLUDE_MODULES',
        modules: ['analysis', 'header']
      })

      const odd = state.odd.customization.json
      const expectedModules = Object.keys(odd).reduce((acc, nodeId) => {
        if (odd[nodeId].name === 'moduleRef') {
          const key = odd[nodeId]['@'].key
          if (key === 'analysis' || key === 'header') {
            acc.push(key)
          }
        }
        return acc
      }, [])

      expect(expectedModules.length).toEqual(0)
      done()
    })
  })

  it('should handle INCLUDE_ELEMENTS (@except)', (done) => {
    const data = `<schemaSpec><moduleRef key="core" except="list item p"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['item', 'p'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'moduleRef') {
        expect(odd[nodeId]['@'].except).toEqual('list')
        done()
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (@except with one item)', (done) => {
    const data = `<schemaSpec><moduleRef key="core" except="item list"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['item', 'list'],
      module: 'core'
    })
    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'moduleRef') {
        expect(odd[nodeId]['@'].except).toNotExist()
        done()
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Unable to read file')
      }
      const json = flattenXML(data)
      const state = romajsApp({
        odd: { customization: { json: json } },
        selectedOdd: ''
      }, {
        type: 'INCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: 'core'
      })

      const odd = state.odd.customization.json

      for (const nodeId of Object.keys(odd)) {
        if (odd[nodeId].name === 'moduleRef' && odd[nodeId]['@'].key === 'core') {
          expect(
            odd[nodeId]['@'].include.split(' ').indexOf('p') > -1 &&
            odd[nodeId]['@'].include.split(' ').indexOf('list') > -1
          ).toBeTruthy()
          done()
        }
      }
    })
  })

  it('should handle INCLUDE_ELEMENTS (@include on new moduleRef)', (done) => {
    const data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['teiHeader', 'fileDesc'],
      module: 'header'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'moduleRef' && odd[nodeId]['@'].key === 'header') {
        expect(odd[nodeId]['@'].include).toEqual('teiHeader fileDesc')
        done()
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (remove elementSpec[@mode="delete"])', (done) => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p" module="core" mode="delete"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['p'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        expect(odd[nodeId]['@'].mode).toNotExist()
        done()
      }
    }
  })

  it('should handle INCLUDE_ELEMENTS (elements already included)', (done) => {
    const data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'INCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'moduleRef') {
        expect(odd[nodeId]['@']).toEqual({key: 'core'})
        done()
      }
    }
  })

  it('should handle EXCLUDE_ELEMENTS (@include)', (done) => {
    fs.readFile('test/fakeData/bare.odd', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Unable to read file')
      }
      const json = flattenXML(data)
      const state = romajsApp({
        odd: { customization: { json: json } },
        selectedOdd: ''
      }, {
        type: 'EXCLUDE_ELEMENTS',
        elements: ['p', 'list'],
        module: 'core'
      })

      const odd = state.odd.customization.json

      for (const nodeId of Object.keys(odd)) {
        if (odd[nodeId].name === 'moduleRef' && odd[nodeId]['@'].key === 'core') {
          expect(odd[nodeId]['@'].include.split(' ').indexOf('p') === -1)
          expect(odd[nodeId]['@'].include.split(' ').indexOf('list') === -1)
          done()
        }
      }
    })
  })

  it('should handle EXCLUDE_ELEMENTS (@include with one item)', (done) => {
    const data = `<schemaSpec><moduleRef key="core" include="p list"/>
                <moduleRef key="tei"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    const modules = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'moduleRef') {
        acc.push(nodeId)
      }
      return acc
    }, [])

    expect(modules.length).toEqual(1)
    done()
  })

  it('should handle EXCLUDE_ELEMENTS (@except)', (done) => {
    const data = `<schemaSpec><moduleRef key="core" except="p"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'list'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'moduleRef' && odd[nodeId]['@'].key === 'core') {
        expect(odd[nodeId]['@'].except.split(' ').indexOf('abbr') > -1)
        expect(odd[nodeId]['@'].except.split(' ').indexOf('list') > -1)
        done()
      }
    }
  })

  it('should handle EXCLUDE_ELEMENTS (@except - all elements)', () => {
    const data = `<schemaSpec><moduleRef key="tei"/>
                  <moduleRef key="gaiji" except="char charDecl charName charProp
                    g glyph glyphName localName mapping"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['unicodeName', 'value'],
      module: 'gaiji'
    })

    const odd = state.odd.customization.json

    const modules = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'moduleRef') {
        acc.push(nodeId)
      }
      return acc
    }, [])

    expect(modules.length).toEqual(1)
  })

  it('should handle EXCLUDE_ELEMENTS (elementRef)', (done) => {
    const data = `<schemaSpec><moduleRef key="tei"/><elementRef key="abbr"/>
                <elementRef key="p"/><elementRef key="list"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    const elementRefs = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'elementRef') {
        acc.push(nodeId)
      }
      return acc
    }, [])

    expect(elementRefs.length).toEqual(1)
    done()
  })

  it('should handle EXCLUDE_ELEMENTS (elementSpec)', (done) => {
    const data = `<schemaSpec><moduleRef key="tei"/><elementSpec ident="abbr" mode="change"/>
                <elementSpec ident="p" mode="change"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: { customization: { json: json } },
      selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['abbr', 'p'],
      module: 'core'
    })

    const odd = state.odd.customization.json

    const elementSpecs = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'elementSpec') {
        acc.push(odd[nodeId])
      }
      return acc
    }, [])

    expect(elementSpecs[0]['@']).toEqual({'ident': 'abbr', 'mode': 'delete'})
    expect(elementSpecs[1]['@']).toEqual({'ident': 'p', 'mode': 'delete'})
    done()
  })

  it('should handle EXCLUDE_ELEMENTS (elements already excluded)', () => {
    const data = `<schemaSpec><moduleRef key="core" except="p list"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'EXCLUDE_ELEMENTS',
      elements: ['p', 'list'],
      module: 'core'
    })
    const odd = state.odd.customization.json

    const moduleRefs = Object.keys(odd).reduce((acc, nodeId) => {
      if (odd[nodeId].name === 'moduleRef') {
        acc.push(odd[nodeId])
      }
      return acc
    }, [])

    expect(moduleRefs[0]['@']).toEqual({ key: 'core', except: 'p list' })
  })
})

describe('Element operation reducers', () => {
  it('should handle UPDATE_ELEMENT_DOCS', () => {
    const data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'UPDATE_ELEMENT_DOCS',
      element: 'p',
      docsEl: 'altIdent',
      content: 'para'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const altId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'altIdent'
        })[0]
        const textnode = odd[altId].children.filter((child)=>{
          return odd[child].t !== undefined
        })[0]
        expect(odd[altId].name).toEqual('altIdent')
        expect(odd[textnode].t).toEqual('para')
        break
      }
    }
  })

  it('should handle UPDATE_ELEMENT_DOCS with existing elementSpec', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'UPDATE_ELEMENT_DOCS',
      element: 'p',
      docsEl: 'altIdent',
      content: 'para'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const altId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'altIdent'
        })[0]
        const textnode = odd[altId].children.filter((child)=>{
          return odd[child].t !== undefined
        })[0]
        expect(odd[altId].name).toEqual('altIdent')
        expect(odd[textnode].t).toEqual('para')
        break
      }
    }
  })

  it('should handle UPDATE_ELEMENT_DOCS with other documentation elements present', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p"><altIdent>para</altIdent></elementSpec></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'UPDATE_ELEMENT_DOCS',
      element: 'p',
      docsEl: 'gloss',
      content: 'a paragraph'
    })

    const odd = state.odd.customization.json

    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const altId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'altIdent'
        })[0]
        const glossId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'gloss'
        })[0]
        const textnode = odd[glossId].children.filter((child)=>{
          return odd[child].t !== undefined
        })[0]
        expect(odd[altId].name).toEqual('altIdent')
        expect(odd[glossId].name).toEqual('gloss')
        expect(odd[textnode].t ).toEqual('a paragraph')
        break
      }
    }
  })

  it('should handle ELEMENT_ADD_MEMBEROF', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p"></elementSpec></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'ELEMENT_ADD_MEMBEROF',
      element: 'p',
      className: 'model.pLike'
    })
    const odd = state.odd.customization.json
    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const classesId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'classes'
        })[0]
        const memberOfId = odd[classesId].children.filter((child)=>{
          return odd[child].name === 'memberOf'
        })[0]
        expect(odd[memberOfId]['@'].key).toEqual('model.pLike')
        break
      }
    }
  })

  it('should handle ELEMENT_ADD_MEMBEROF with classes already selected', () => {
    const data = `
      <schemaSpec><moduleRef key="core"/>
        <elementSpec ident="p"><classes><memberOf key="model.pLike"/></classes></elementSpec>
      </schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'ELEMENT_ADD_MEMBEROF',
      element: 'p',
      className: 'newModel'
    })
    const odd = state.odd.customization.json
    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const classesId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'classes'
        })[0]
        const memberOfId = odd[classesId].children.filter((child)=>{
          return odd[child].name === 'memberOf'
        })[1]
        expect(odd[memberOfId]['@'].key).toEqual('newModel')
        break
      }
    }
  })

  it('should handle ELEMENT_ADD_MEMBEROF on new elementSpec', () => {
    const data = `
      <schemaSpec><moduleRef key="core"/></schemaSpec>`
    const json = flattenXML(data)
    const state = romajsApp({
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      }, selectedOdd: ''
    }, {
      type: 'ELEMENT_ADD_MEMBEROF',
      element: 'p',
      className: 'model.pLike'
    })
    const odd = state.odd.customization.json
    for (const nodeId of Object.keys(odd)) {
      if (odd[nodeId].name === 'elementSpec') {
        const classesId = odd[nodeId].children.filter((child)=>{
          return odd[child].name === 'classes'
        })[0]
        const memberOfId = odd[classesId].children.filter((child)=>{
          return odd[child].name === 'memberOf'
        })[0]
        expect(odd[memberOfId]['@'].key).toEqual('model.pLike')
        break
      }
    }
  })
})

describe('Interface operation reducers', () => {
  it('should handle SET_FILTER_TERM', () => {
    const state = romajsApp(initialState, {
      type: 'SET_FILTER_TERM',
      term: 'p'
    })

    expect(state.ui.filterTerm).toEqual('p')
  })
})
