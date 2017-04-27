import { connect } from 'react-redux'
import { selectOdd, fetchOdd, fetchP5, parseOdd, includeModules } from '../actions'
import AppBody from '../components/AppBody'
import {hydrateXML} from 'squash-xml-json';
import saveAs from 'save-as';

const mapStateToProps = (state) => {

  // if (state.odd.customization) {
  //   let odd = state.odd.customization.json
  //
  //   let selectedModules = Object.keys(odd).reduce((acc, node_id)=>{
  //     if (odd[node_id].name == "moduleRef") {
  //       acc.push(odd[node_id]["@"]["key"])
  //     }
  //     return acc
  //   }, [])
  //
  //   let modules = state.odd.localsource.json.modules.map(module => {
  //     let selected = false
  //     if (selectedModules.indexOf(module.ident) > -1) {
  //       selected = true
  //     }
  //     return Object.assign({}, module,
  //       {selected: selected}
  //     )
  //   })
  //   return {
  //     modules: modules
  //   }
  // }
  // else return {modules: []}

  return state

}

const mapDispatchToProps = (dispatch) => {
  return {
    onUploadClick: () => {
      // this is wrong, find way of passing it to function instead:
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
