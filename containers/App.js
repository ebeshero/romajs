import { connect } from 'react-redux'
import { selectOdd, fetchOdd, fetchP5, parseOdd, includeModules } from '../actions'
import AppBody from '../components/AppBody'
import {hydrateXML} from 'squash-xml-json';
import saveAs from 'save-as';

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    onUploadClick: () => {
      // TODO: this is wrong, find way of passing it to function instead:
      let files = document.getElementById("files").files
      let reader = new FileReader()
      reader.readAsText(files[0])
      reader.onload = (e) => {
        dispatch(parseOdd(e.target.result))
        dispatch(fetchP5('static/fakeData/p5subset.json'))
      }
    },
    onDownloadClick: (odd) => {
      let xml_string = hydrateXML(odd)
      let bb = new Blob([xml_string], {"type":"text\/xml"});
      saveAs(bb, 'new_odd.xml');
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody)

export default App
