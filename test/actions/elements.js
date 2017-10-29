import expect from 'expect'
import * as actions from '../../src/actions/elements'

describe('Element actions', () => {
  it('updateElementDocs should pass documentation element changes to an elementSpec', () =>{
    expect(actions.updateElementDocs('p', 'desc', 'new desc')).toEqual({
      type: 'UPDATE_ELEMENT_DOCS',
      element: 'p',
      docEl: 'desc',
      content: 'new desc'
    })
  })
})
