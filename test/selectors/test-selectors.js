import fs from 'fs'
import { shallow, mount } from 'enzyme'
import expect, { spyOn, createSpy } from 'expect'
import {flattenXML, hydrateXML} from 'squash-xml-json'

import * as selectors from '../../selectors'

describe('Selector: getElementsForModule', (done) => {

  it('should select all elements with moduleRef', () => {

    let data = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    let json = flattenXML(data)
    const state = {
       odd: {
         customization: { json : json },
         localsource: { json : P5 }
       },
       selectedOdd: ''
    }

    let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
    let deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(0)
  })

  it('should select elements with moduleRef/@include', () => {

    let data = `<schemaSpec><moduleRef key="core" include="list item"/></schemaSpec>`
    let json = flattenXML(data)
    const state = {
       odd: {
         customization: { json : json },
         localsource: { json : P5 }
       },
       selectedOdd: ''
    }

    let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
    let selected = elements.filter((el)=>{
      return el.selected
    })

    expect(selected.length).toEqual(2)
  })

  it('should deselect elements with moduleRef/@except', () => {

    let data = `<schemaSpec><moduleRef key="core" except="list item"/></schemaSpec>`
    let json = flattenXML(data)
    const state = {
       odd: {
         customization: { json : json },
         localsource: { json : P5 }
       },
       selectedOdd: ''
    }

    let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
    let deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(2)
  })

  it('should deselect elements with elementSpec[@mode="delete"]', () => {

    let data = `<schemaSpec><moduleRef key="core"/><elementSpec ident="list" mode="delete"/>
              <elementSpec ident="item" mode="delete"/></schemaSpec>`
    let json = flattenXML(data)
    const state = {
       odd: {
         customization: { json : json },
         localsource: { json : P5 }
       },
       selectedOdd: ''
    }

    let elements = selectors.getElementsForModule(state, {module: "core", module_selected: false})
    let deselected = elements.filter((el)=>{
      return !el.selected
    })

    expect(deselected.length).toEqual(2)
  })

  it('should select elements specified by elementRef', () => {

    let data = `<schemaSpec><moduleRef key="core"/><elementRef key="msDesc"/>
               <elementRef key="msContents"/></schemaSpec>`
    let json = flattenXML(data)
    const state = {
       odd: {
         customization: { json : json },
         localsource: { json : P5 }
       },
       selectedOdd: ''
    }

    let elements = selectors.getElementsForModule(state, {module: "msdescription", module_selected: true})
    let deselected = elements.filter((el)=>{
      return el.selected
    })

    expect(deselected.length).toEqual(2)
  })
})
