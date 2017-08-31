import expect from 'expect'
import {flattenXML} from 'squash-xml-json'
import P5 from '../P5'

import * as selectors from '../../selectors'

describe('Selector: getElementsForModule', () => {
  it('should select all elements with moduleRef', () => {
    const data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    const elements = selectors.getElementsForModule(state.odd, {module: 'core', module_selected: true})
    const deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(0)
  })

  it('should select elements with moduleRef/@include', () => {
    const data = `<schemaSpec><moduleRef key="core" include="list item"/></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    const elements = selectors.getElementsForModule(state.odd, {module: 'core', module_selected: true})
    const selected = elements.filter((el)=>{
      return el.selected
    })

    expect(selected.length).toEqual(2)
  })

  it('should deselect elements with moduleRef/@except', () => {
    const data = `<schemaSpec><moduleRef key="core" except="list item"/></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    const elements = selectors.getElementsForModule(state.odd, {module: 'core', module_selected: true})
    const deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(2)
  })

  it('should deselect elements with elementSpec[@mode="delete"]', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="list" mode="delete"/>
              <elementSpec ident="item" mode="delete"/></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    const elements = selectors.getElementsForModule(state.odd, {module: 'core', module_selected: false})
    const deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(2)
  })

  it('should select elements specified by elementRef', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementRef key="msDesc"/>
               <elementRef key="msContents"/></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    const elements = selectors.getElementsForModule(state.odd, {module: 'msdescription', module_selected: true})
    const deselected = elements.filter((el)=>{
      return el.selected
    })

    expect(deselected.length).toEqual(2)
  })
})

describe('Selector: getElementDataByIdent', () => {
  it('should apply customization and overwrite desc', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="ab" mode="change"><desc>new desc</desc></elementSpec></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }

    expect(selectors.getElementDataByIdent(state.odd, 'ab').desc).toEqual('<desc>new desc</desc>')
  })

  it('should apply customization merge local desc with custom altIdent', () => {
    const data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="p" mode="change"><altIdent>para</altIdent></elementSpec></schemaSpec>`
    const json = flattenXML(data)
    const state = {
      odd: {
        customization: { json: json },
        localsource: { json: P5 }
      },
      selectedOdd: ''
    }
    const element = selectors.getElementDataByIdent(state.odd, 'p')
    expect(element.desc).toEqual('(paragraph) marks paragraphs in prose.')
    expect(element.altIdent).toEqual('<altIdent>para</altIdent>')
  })
})
