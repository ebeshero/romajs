import fs from 'fs'
import { shallow, mount } from 'enzyme';
import expect, { spyOn, createSpy } from 'expect'
import xml2js from 'xml2js'

import * as selectors from '../../selectors'

const x2jParser = new xml2js.Parser()

describe('Selector: getElementsForModule', (done) => {

  it('should select all elements with moduleRef', (done) => {

    let odd = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      const state = {
         odd: {
           customization: { json : result },
           localsource: { json : P5 }
         },
         selectedOdd: ''
      }

      let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
      let deselected = elements.filter((el)=>{
        return !el.selected
      })

      expect(deselected.length).toEqual(0)

      done()
    })
  })

  it('should select elements with moduleRef/@include', (done) => {

    let odd = `<schemaSpec><moduleRef key="core" include="list item"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      const state = {
         odd: {
           customization: { json : result },
           localsource: { json : P5 }
         },
         selectedOdd: ''
      }

      let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
      let selected = elements.filter((el)=>{
        return el.selected
      })

      expect(selected.length).toEqual(2)

      done()
    })
  })

  it('should deselect elements with moduleRef/@except', (done) => {

    let odd = `<schemaSpec><moduleRef key="core" except="list item"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      const state = {
         odd: {
           customization: { json : result },
           localsource: { json : P5 }
         },
         selectedOdd: ''
      }

      let elements = selectors.getElementsForModule(state, {module: "core", module_selected: true})
      let deselected = elements.filter((el)=>{
        return !el.selected
      })

      expect(deselected.length).toEqual(2)

      done()
    })
  })

  it('should deselect elements with elementSpec[@mode="delete"]', (done) => {

    let odd = `<schemaSpec><moduleRef key="core"/><elementSpec ident="list" mode="delete"/>
              <elementSpec ident="item" mode="delete"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      const state = {
         odd: {
           customization: { json : result },
           localsource: { json : P5 }
         },
         selectedOdd: ''
      }

      let elements = selectors.getElementsForModule(state, {module: "core", module_selected: false})
      let deselected = elements.filter((el)=>{
        return !el.selected
      })

      expect(deselected.length).toEqual(2)

      done()
    })
  })

  it('should select elements specified by elementRef', (done) => {

    let odd = `<schemaSpec><moduleRef key="core"/><elementRef key="msDesc"/><elementRef key="msContents"/></schemaSpec>`
    x2jParser.parseString(odd, (err, result) => {
      const state = {
         odd: {
           customization: { json : result },
           localsource: { json : P5 }
         },
         selectedOdd: ''
      }

      let elements = selectors.getElementsForModule(state, {module: "msdescription", module_selected: true})
      let deselected = elements.filter((el)=>{
        return el.selected
      })

      expect(deselected.length).toEqual(2)

      done()
    })
  })
})
