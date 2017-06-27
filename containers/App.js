import { connect } from 'react-redux'
import { fetchP5, parseOdd } from '../actions'
import AppBody from '../components/AppBody'
import {hydrateXML} from 'squash-xml-json'
import saveAs from 'save-as'

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    onUploadClick: () => {
      // TODO: this is wrong, find way of passing it to function instead:
      const files = document.getElementById('files').files
      const reader = new FileReader()
      reader.readAsText(files[0])
      reader.onload = (e) => {
        dispatch(parseOdd(e.target.result))
        dispatch(fetchP5('static/fakeData/p5subset.json'))
      }
    },
    onDownloadClick: (odd) => {
      const xmlString = hydrateXML(odd)
      saveAs(new Blob([xmlString], {'type': 'text\/xml'}), 'new_odd.xml')
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody)

export default App
