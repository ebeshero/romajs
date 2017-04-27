webpackJsonp([0],{

/***/ "./actions/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_DATATYPE = exports.CREATE_DATATYPE = exports.CHANGE_DATATYPE = exports.DELETE_MODEL_CLASS = exports.CREATE_MODEL_CLASS = exports.CHANGE_MODEL_CLASS = exports.DELETE_ATT_CLASS = exports.CREATE_ATT_CLASS = exports.CHANGE_ATT_CLASS = exports.CREATE_ELEMENT = exports.SAVE_ELEMENT_CHANGES = exports.EXCLUDE_ELEMENTS = exports.INCLUDE_ELEMENTS = exports.EXCLUDE_MODULES = exports.INCLUDE_MODULES = exports.RECEIVE_P5 = exports.REQUEST_P5 = exports.SELECT_ODD = exports.PARSE_ODD = exports.RECEIVE_ODD = exports.REQUEST_ODD = undefined;
exports.selectOdd = selectOdd;
exports.parseOdd = parseOdd;
exports.includeModules = includeModules;
exports.excludeModules = excludeModules;
exports.includeElements = includeElements;
exports.excludeElements = excludeElements;
exports.changeElement = changeElement;
exports.createElement = createElement;
exports.createAttribute = createAttribute;
exports.changeAttribute = changeAttribute;
exports.deleteAttribute = deleteAttribute;
exports.createConstrain = createConstrain;
exports.changeConstrain = changeConstrain;
exports.deleteConstrain = deleteConstrain;
exports.fetchOdd = fetchOdd;
exports.fetchP5 = fetchP5;

var _isomorphicFetch = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _squashXmlJson = __webpack_require__("./node_modules/squash-xml-json/lib/squash-xml-json.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_ODD = exports.REQUEST_ODD = 'REQUEST_ODD';
var RECEIVE_ODD = exports.RECEIVE_ODD = 'RECEIVE_ODD';
var PARSE_ODD = exports.PARSE_ODD = 'PARSE_ODD';
var SELECT_ODD = exports.SELECT_ODD = 'SELECT_ODD';
var REQUEST_P5 = exports.REQUEST_P5 = 'REQUEST_P5';
var RECEIVE_P5 = exports.RECEIVE_P5 = 'RECEIVE_P5';
// export const REQUEST_OXGARAGE_TRANSFORM = 'REQUEST_OXGARAGE_TRANSFORM';
// export const RECEIVE_FROM_OXGARAGE = 'RECEIVE_FROM_OXGARAGE';
// export const SET_COMPILED_ODD = 'SET_COMPILED_ODD';

// Modules operations
var INCLUDE_MODULES = exports.INCLUDE_MODULES = 'INCLUDE_MODULES';
var EXCLUDE_MODULES = exports.EXCLUDE_MODULES = 'EXCLUDE_MODULES';
var INCLUDE_ELEMENTS = exports.INCLUDE_ELEMENTS = 'INCLUDE_ELEMENTS';
var EXCLUDE_ELEMENTS = exports.EXCLUDE_ELEMENTS = 'EXCLUDE_ELEMENTS';

// Element operations
var SAVE_ELEMENT_CHANGES = exports.SAVE_ELEMENT_CHANGES = 'SAVE_ELEMENT_CHANGES';
var CREATE_ELEMENT = exports.CREATE_ELEMENT = 'CREATE_ELEMENT';

// Attribute class operations
var CHANGE_ATT_CLASS = exports.CHANGE_ATT_CLASS = 'CHANGE_ATT_CLASS';
var CREATE_ATT_CLASS = exports.CREATE_ATT_CLASS = 'CREATE_ATT_CLASS';
var DELETE_ATT_CLASS = exports.DELETE_ATT_CLASS = 'DELETE_ATT_CLASS';

// Model class operations
var CHANGE_MODEL_CLASS = exports.CHANGE_MODEL_CLASS = 'CHANGE_MODEL_CLASS';
var CREATE_MODEL_CLASS = exports.CREATE_MODEL_CLASS = 'CREATE_MODEL_CLASS';
var DELETE_MODEL_CLASS = exports.DELETE_MODEL_CLASS = 'DELETE_MODEL_CLASS';

// Dataypes operations
var CHANGE_DATATYPE = exports.CHANGE_DATATYPE = 'CHANGE_DATATYPE';
var CREATE_DATATYPE = exports.CREATE_DATATYPE = 'CREATE_DATATYPE';
var DELETE_DATATYPE = exports.DELETE_DATATYPE = 'DELETE_DATATYPE';

function selectOdd(odd_url) {
  return {
    type: SELECT_ODD,
    odd_url: odd_url
  };
}

function requestOdd(odd) {
  return {
    type: REQUEST_ODD,
    odd: odd
  };
}

function receiveOdd(string, json) {
  return {
    type: RECEIVE_ODD,
    xml: string,
    json: json,
    receivedAt: Date.now()
  };
}

function parseOdd(xmlstring) {
  return {
    type: PARSE_ODD,
    xml: xmlstring,
    json: (0, _squashXmlJson.flattenXML)(xmlstring)
  };
}

function requestP5(url) {
  return {
    type: REQUEST_P5,
    url: url
  };
}

function receiveP5(json) {
  return {
    type: RECEIVE_P5,
    json: json,
    receivedAt: Date.now()
  };
}

/* MODULE OPERATIONS */

function includeModules(modules) {
  return {
    type: INCLUDE_MODULES,
    modules: modules
  };
}

function excludeModules(modules) {
  return {
    type: EXCLUDE_MODULES,
    modules: modules
  };
}

function includeElements(elements, module) {
  return {
    type: INCLUDE_ELEMENTS,
    elements: elements, module: module
  };
}

function excludeElements(elements, module) {
  return {
    type: EXCLUDE_ELEMENTS,
    elements: elements, module: module
  };
}

/* ELEMENTS OPERATIONS */

function changeElement(element, changes) {
  return {
    type: SAVE_ELEMENT_CHANGES,
    changes: changes
  };
}

function createElement(element, properties) {
  return {
    type: CREATE_ELEMENT,
    properties: properties
  };
}

function createAttribute(element, attribute_properties) {
  return {
    type: CREATE_ATTRIBUTE,
    attribute_properties: attribute_properties
  };
}

function changeAttribute(element, attribute_properties) {
  return {
    type: CHANGE_ATTRIBUTE,
    attribute_properties: attribute_properties
  };
}

function deleteAttribute(element, attribute) {
  return {
    type: DELETE_ATTRIBUTE,
    attribute: attribute
  };
}

function createConstrain(element, constrain) {
  return {
    type: CREATE_CONSTRAIN,
    constrain: constrain
  };
}

function changeConstrain(element, constrain) {
  return {
    type: CHANGE_CONSTRAIN,
    constrain: constrain
  };
}

function deleteConstrain(element, constrain) {
  return {
    type: DELETE_CONSTRAIN,
    constrain: constrain
  };
}

// function requestOxGarageTransform(input, endpoint) {
//   return {
//     type: REQUEST_OXGARAGE_TRANSFORM,
//     input,
//     endpoint
//   }
// }

// function receiveFromOxGarage(input, endpoint, string, json) {
//   return {
//     type: RECEIVE_FROM_OXGARAGE,
//     input,
//     endpoint,
//     xml: string,
//     json,
//     receivedAt: Date.now()
//   }
// }

// export function setCompiledOdd(odd) {
//   return {
//     type: SET_COMPILED_ODD,
//     odd
//   }
// }

/**********
 * thunks *
 **********/
function fetchOdd(odd) {
  return function (dispatch) {
    dispatch(requestOdd(odd));
    return new Promise(function (res, rej) {
      (0, _isomorphicFetch2.default)(odd).then(function (response) {
        return response.text();
      }).then(function (xml) {
        res(dispatch(receiveOdd(xml, (0, _squashXmlJson.flattenXML)(xml))));
      });
    });
  };
}

function fetchP5(url) {
  return function (dispatch) {
    dispatch(requestP5(url));
    return (0, _isomorphicFetch2.default)(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveP5(json));
    });
  };
}

// export function postToOxGarage(input, endpoint) {
//   return dispatch => {
//     dispatch(requestOxGarageTransform(input, endpoint));
//     let fd = new FormData();
//     fd.append("fileToConvert", new Blob([input], {"type":"application\/octet-stream"}), 'file.odd');
//     return new Promise((res, rej)=>{
//       fetch(endpoint, {
//           mode: 'cors',
//           method: 'post',
//           body: fd
//         })
//         .then(response => {return response.text()})
//         .then((xml) => {
//           return x2jParser.parseString(xml, (err, result) => {
//             res(dispatch(receiveFromOxGarage(input, endpoint, xml, result)))
//           })
//         })
//     })
//   }
// }

/***/ }),

/***/ "./components/AppBody.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__("./node_modules/react/react.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__("./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FullModuleList = __webpack_require__("./containers/FullModuleList.js");

var _FullModuleList2 = _interopRequireDefault(_FullModuleList);

var _drawer = __webpack_require__("./node_modules/@material/drawer/index.js");

var Drawer = _interopRequireWildcard(_drawer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AppBody: {
    displayName: 'AppBody'
  }
};

var _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/rviglian/Projects/romajs/components/AppBody.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/components/AppBody.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var AppBody = _wrapComponent('AppBody')(function (_Component) {
  _inherits(AppBody, _Component);

  function AppBody(props) {
    _classCallCheck(this, AppBody);

    return _possibleConstructorReturn(this, (AppBody.__proto__ || Object.getPrototypeOf(AppBody)).call(this, props));
  }

  _createClass(AppBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'aside',
          { className: 'mdc-persistent-drawer' },
          _react3.default.createElement(
            'nav',
            { className: 'mdc-persistent-drawer__drawer' },
            _react3.default.createElement('div', { className: 'mdc-persistent-drawer__toolbar-spacer' }),
            _react3.default.createElement(
              'div',
              { className: 'mdc-list-group' },
              _react3.default.createElement(
                'nav',
                { className: 'mdc-list' },
                _react3.default.createElement(
                  'a',
                  { className: 'mdc-list-item', href: '#' },
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                    'dashboard'
                  ),
                  'Dashboard'
                ),
                _react3.default.createElement(
                  'a',
                  { className: 'mdc-list-item mdc-persistent-drawer--selected', href: '#' },
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                    'code'
                  ),
                  'Modules & Elements'
                ),
                _react3.default.createElement(
                  'a',
                  { className: 'mdc-list-item', href: '#' },
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                    'bubble_chart'
                  ),
                  'Classes'
                ),
                _react3.default.createElement(
                  'a',
                  { className: 'mdc-list-item', href: '#' },
                  _react3.default.createElement(
                    'i',
                    { className: 'material-icons mdc-list-item__start-detail', 'aria-hidden': 'true' },
                    'vpn_key'
                  ),
                  'Datatypes'
                )
              )
            )
          )
        ),
        _react3.default.createElement(
          'header',
          { className: 'mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed romajs-toolbar' },
          _react3.default.createElement(
            'div',
            { className: 'mdc-toolbar__row' },
            _react3.default.createElement(
              'section',
              { className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
              _react3.default.createElement(
                'button',
                { className: 'romajs-menu material-icons' },
                'menu'
              ),
              _react3.default.createElement(
                'span',
                { className: 'mdc-toolbar__title' },
                'Roma js - ODD customization - Prototype 1'
              )
            ),
            _react3.default.createElement(
              'section',
              { className: 'mdc-toolbar__section mdc-toolbar__section--align-end' },
              _react3.default.createElement('input', { type: 'file', id: 'files' }),
              _react3.default.createElement(
                'a',
                { className: 'material-icons', title: 'Upload ODD', onClick: this.props.onUploadClick },
                'file_upload'
              ),
              _react3.default.createElement(
                'a',
                { className: 'material-icons', title: 'Download ODD', onClick: function onClick() {
                    _this2.props.onDownloadClick(_this2.props.odd.customization.json);
                  } },
                'file_download'
              )
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'romajs-content' },
          _react3.default.createElement(
            'main',
            { className: 'romajs-main' },
            _react3.default.createElement(_FullModuleList2.default, null)
          )
        )
      );
    }

    // <FullModuleList/>

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Use Drawer.MDCFoundation for greater control
      var drawr = new Drawer.MDCPersistentDrawer(document.querySelector('.mdc-persistent-drawer'));
      drawr.open = true;
      // This should be handled more natively:
      document.querySelector('.romajs-menu').addEventListener('click', function () {
        drawr.open = !drawr.open;
      });
    }
  }]);

  return AppBody;
}(_react2.Component));

AppBody.propTypes = {
  onUploadClick: _react2.PropTypes.func.isRequired
};

exports.default = AppBody;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/Element.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function Element(_ref) {
  var onChange = _ref.onChange,
      selected = _ref.selected,
      ident = _ref.ident;
  return _react2.default.createElement(
    "li",
    { className: "mdc-list-item" },
    _react2.default.createElement(
      "span",
      { className: "romajs-elementIdent" },
      ident
    ),
    _react2.default.createElement(
      "span",
      { className: "mdc-list-item__end-detail " },
      _react2.default.createElement(
        "span",
        { className: "mdc-checkbox" },
        _react2.default.createElement("input", { type: "checkbox", id: "basic-checkbox", className: "mdc-checkbox__native-control",
          checked: selected, onChange: onChange }),
        _react2.default.createElement(
          "span",
          { className: "mdc-checkbox__background" },
          _react2.default.createElement(
            "svg",
            { className: "mdc-checkbox__checkmark", viewBox: "0 0 24 24" },
            _react2.default.createElement("path", { className: "mdc-checkbox__checkmark__path", fill: "none", stroke: "white", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })
          ),
          _react2.default.createElement("span", { className: "mdc-checkbox__mixedmark" })
        )
      )
    )
  );
};

Element.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.bool.isRequired,
  ident: _react.PropTypes.string.isRequired
};

exports.default = Element;

/***/ }),

/***/ "./components/ElementList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Element = __webpack_require__("./components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ElementList = function ElementList(_ref) {
  var elements = _ref.elements,
      onElementChange = _ref.onElementChange;
  return _react2.default.createElement(
    'ul',
    { className: 'mdc-list mdc-list--dense' },
    elements.map(function (element) {
      return _react2.default.createElement(_Element2.default, _extends({
        key: element.ident
      }, element, {
        onChange: function onChange() {
          return onElementChange(element.ident, element.module, element.selected);
        }
      }));
    })
  );
};

ElementList.propTypes = {
  elements: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    selected: _react.PropTypes.bool,
    ident: _react.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onElementChange: _react.PropTypes.func.isRequired
};

exports.default = ElementList;

/***/ }),

/***/ "./components/Module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _FullElementList = __webpack_require__("./containers/FullElementList.js");

var _FullElementList2 = _interopRequireDefault(_FullElementList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Module = function Module(_ref) {
  var onChange = _ref.onChange,
      selected = _ref.selected,
      ident = _ref.ident;
  return _react2.default.createElement(
    'div',
    { className: 'mdl-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone' },
    _react2.default.createElement(
      'div',
      { className: 'mdc-card romajs-card', style: {
          backgroundColor: selected ? "#d2f9c2" : ""
        } },
      _react2.default.createElement(
        'section',
        { className: 'mdc-card__primary' },
        _react2.default.createElement(
          'h1',
          { className: 'mdc-card__title mdc-card__title--large' },
          ident
        ),
        _react2.default.createElement(
          'div',
          { className: 'mdc-form-field' },
          _react2.default.createElement(
            'div',
            { className: 'mdc-checkbox' },
            _react2.default.createElement('input', { type: 'checkbox', id: 'basic-checkbox', className: 'mdc-checkbox__native-control',
              checked: selected, onChange: onChange }),
            _react2.default.createElement(
              'div',
              { className: 'mdc-checkbox__background' },
              _react2.default.createElement(
                'svg',
                { className: 'mdc-checkbox__checkmark', viewBox: '0 0 24 24' },
                _react2.default.createElement('path', { className: 'mdc-checkbox__checkmark__path', fill: 'none', stroke: 'white', d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
              ),
              _react2.default.createElement('div', { className: 'mdc-checkbox__mixedmark' })
            )
          )
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'mdc-card__supporting-text' },
        _react2.default.createElement(_FullElementList2.default, { module: ident, module_selected: selected })
      )
    )
  );
};

Module.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.bool.isRequired,
  ident: _react.PropTypes.string.isRequired
};

exports.default = Module;

/***/ }),

/***/ "./components/ModuleList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Module = __webpack_require__("./components/Module.js");

var _Module2 = _interopRequireDefault(_Module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleList = function ModuleList(_ref) {
  var modules = _ref.modules,
      onModuleChange = _ref.onModuleChange;
  return _react2.default.createElement(
    'div',
    { className: 'mdc-layout-grid' },
    modules.map(function (module) {
      return _react2.default.createElement(_Module2.default, _extends({
        key: module.ident
      }, module, {
        onChange: function onChange() {
          return onModuleChange(module.ident, module.selected);
        }
      }));
    })
  );
};

ModuleList.propTypes = {
  modules: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    selected: _react.PropTypes.bool.isRequired,
    ident: _react.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onModuleChange: _react.PropTypes.func.isRequired
};

exports.default = ModuleList;

/***/ }),

/***/ "./containers/App.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _actions = __webpack_require__("./actions/index.js");

var _AppBody = __webpack_require__("./components/AppBody.js");

var _AppBody2 = _interopRequireDefault(_AppBody);

var _squashXmlJson = __webpack_require__("./node_modules/squash-xml-json/lib/squash-xml-json.js");

var _saveAs = __webpack_require__("./node_modules/save-as/lib/index.js");

var _saveAs2 = _interopRequireDefault(_saveAs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {

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

  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onUploadClick: function onUploadClick() {
      // this is wrong, find way of passing it to function instead:
      var files = document.getElementById("files").files;
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function (e) {
        dispatch((0, _actions.parseOdd)(e.target.result));
        dispatch((0, _actions.fetchP5)('static/fakeData/p5subset.json'));
      };
    },
    onDownloadClick: function onDownloadClick(odd) {
      var xml_string = (0, _squashXmlJson.hydrateXML)(odd);
      var bb = new Blob([xml_string], { "type": "text\/xml" });
      (0, _saveAs2.default)(bb, 'new_odd.xml');
    }
  };
};

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AppBody2.default);

exports.default = App;

/***/ }),

/***/ "./containers/FullElementList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _actions = __webpack_require__("./actions/index.js");

var _ElementList = __webpack_require__("./components/ElementList.js");

var _ElementList2 = _interopRequireDefault(_ElementList);

var _selectors = __webpack_require__("./selectors/index.js");

var _selectors2 = _interopRequireDefault(_selectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, params) {

  return {
    elements: (0, _selectors2.default)(state, params)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onElementChange: function onElementChange(name, module, selected) {
      if (selected) {
        dispatch((0, _actions.excludeElements)([name], module));
      } else {
        dispatch((0, _actions.includeElements)([name], module));
      }
    }
  };
};

var FullElementList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ElementList2.default);

exports.default = FullElementList;

/***/ }),

/***/ "./containers/FullModuleList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _actions = __webpack_require__("./actions/index.js");

var _ModuleList = __webpack_require__("./components/ModuleList.js");

var _ModuleList2 = _interopRequireDefault(_ModuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {

  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      var odd = state.odd.customization.json;

      var selectedModules = Object.keys(odd).reduce(function (acc, node_id) {
        if (odd[node_id].name == "moduleRef") {
          acc.push(odd[node_id]["@"]["key"]);
        }
        return acc;
      }, []);

      var modules = state.odd.localsource.json.modules.map(function (module) {
        var selected = false;
        if (selectedModules.indexOf(module.ident) > -1) {
          selected = true;
        }
        return Object.assign({}, module, { selected: selected });
      });
      return {
        modules: modules
      };
    } else return { modules: [] };
  } else return { modules: [] };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onModuleChange: function onModuleChange(name, selected) {
      if (selected) {
        dispatch((0, _actions.excludeModules)([name]));
      } else {
        dispatch((0, _actions.includeModules)([name]));
      }
    }
  };
};

var FullModuleList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModuleList2.default);

exports.default = FullModuleList;

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./scss/romajs.scss");

__webpack_require__("./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/lib/index.js");

var _reduxThunk = __webpack_require__("./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__("./node_modules/redux-logger/lib/index.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _actions = __webpack_require__("./actions/index.js");

var _reducers = __webpack_require__("./reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__("./containers/App.js");

var _App2 = _interopRequireDefault(_App);

var _squashXmlJson = __webpack_require__("./node_modules/squash-xml-json/lib/squash-xml-json.js");

var _saveAs = __webpack_require__("./node_modules/save-as/lib/index.js");

var _saveAs2 = _interopRequireDefault(_saveAs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, // lets us dispatch() functions
loggerMiddleware // neat middleware that logs actions
));

// Simple upolad and download components for preliminary user testing
// This code is not meant to last
// var button = document.getElementById("open");
// button.addEventListener("click",function(e){
//
//     button.disabled = "true";
//
//     let files = document.getElementById("files").files
//
//     let reader = new FileReader()
//     console.log(reader.readAsText(files[0]))
//
//     reader.onload = (e) => {
//
//       store.dispatch(parseOdd(e.target.result))
//
//       store.dispatch(fetchP5('static/fakeData/p5subset.json')).then((action)=>{
//         render(
//           <Provider store={store}>
//             <App />
//           </Provider>,
//           document.getElementById('romajs')
//         )
//       })
//   }
//
// },false);
//
// var exportBtn = document.getElementById("export");
// exportBtn.addEventListener("click",function(e){
//   let xml_string = hydrateXML(store.getState().odd.customization.json)
//   let bb = new Blob([xml_string], {"type":"text\/xml"});
//   saveAs(bb, 'new_odd.xml');
//
// },false);


// let testoddURL = 'http://localhost:3000/static/fakeData/bare.odd';
// // let compileoddEndPoint = 'http://oxgarage.oucs.ox.ac.uk:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
// // let compileoddEndPoint = 'http://localhost:8080/ege-webservice/Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml';
//
// store.dispatch(selectOdd(testoddURL));
// store.dispatch(fetchOdd(testoddURL)).then((action) => {
//     store.dispatch(fetchP5('http://localhost:3000/static/fakeData/p5subset.json')).then((action)=>{
//       // store.dispatch(includeModules(['header', 'core']))
//       render(
//         <Provider store={store}>
//           <App />
//         </Provider>,
//         document.getElementById('romajs')
//       )
//     })
//   }
// );

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('romajs'));

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("./node_modules/@material/base/foundation.js");
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCComponent {
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  constructor(root, foundation = undefined, ...args) {
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  // Wrapper method to add an event listener to the component's root element. This is most useful when
  // listening for custom events.
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  // Wrapper method to remove an event listener to the component's root element. This is most useful when
  // unlistening for custom events.
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  // Fires a cross-browser-compatible custom event from the component root of the given type,
  // with the given data.
  emit(evtType, evtData) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {detail: evtData});
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, false, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCComponent;



/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCFoundation {
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  constructor(adapter = {}) {
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCFoundation;



/***/ }),

/***/ "./node_modules/@material/base/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("./node_modules/@material/base/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("./node_modules/@material/base/component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ "./node_modules/@material/drawer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("./node_modules/@material/drawer/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__("./node_modules/@material/drawer/temporary/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawer", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__("./node_modules/@material/drawer/persistent/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawer", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_0__util__; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/***/ }),

/***/ "./node_modules/@material/drawer/persistent/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("./node_modules/@material/drawer/slidable/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */],
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),

/***/ "./node_modules/@material/drawer/persistent/foundation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("./node_modules/@material/drawer/slidable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/@material/drawer/persistent/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCPersistentDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      isDrawer: () => false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter),
      MDCPersistentDrawerFoundation.cssClasses.ROOT,
      MDCPersistentDrawerFoundation.cssClasses.ANIMATING,
      MDCPersistentDrawerFoundation.cssClasses.OPEN);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/persistent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("./node_modules/@material/drawer/persistent/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("./node_modules/@material/drawer/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCPersistentDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCPersistentDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      registerTransitionEndHandler: (handler) =>
          this.root_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) =>
          this.root_.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          __WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : `translateX(${value}px)`),
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawer;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const FOCUSABLE_ELEMENTS =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
	'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
/* harmony export (immutable) */ __webpack_exports__["a"] = FOCUSABLE_ELEMENTS;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/foundation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("./node_modules/@material/base/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCSlidableDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      hasClass: (/* className: string */) => {},
      hasNecessaryDom: () => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      setTranslateX: (/* value: number | null */) => {},
      getFocusableElements: () => /* NodeList */ {},
      saveElementTabState: (/* el: Element */) => {},
      restoreElementTabState: (/* el: Element */) => {},
      makeElementUntabbable: (/* el: Element */) => {},
      isRtl: () => /* boolean */ false,
      getDrawerWidth: () => /* number */ 0,
    };
  }

  constructor(adapter, rootCssClass, animatingCssClass, openCssClass) {
    super(Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter));

    this.rootCssClass_ = rootCssClass;
    this.animatingCssClass_ = animatingCssClass;
    this.openCssClass_ = openCssClass;

    this.transitionEndHandler_ = (ev) => {
      if (this.isRootTransitioningEventTarget_(ev.target)) {
        this.adapter_.removeClass(this.animatingCssClass_);
        this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      }
    };

    this.inert_ = false;

    this.drawerClickHandler_ = (evt) => evt.stopPropagation();
    this.componentTouchStartHandler_ = (evt) => this.handleTouchStart_(evt);
    this.componentTouchMoveHandler_ = (evt) => this.handleTouchMove_(evt);
    this.componentTouchEndHandler_ = (evt) => this.handleTouchEnd_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.close();
      }
    };
  }

  init() {
    const ROOT = this.rootCssClass_;
    const OPEN = this.openCssClass_;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    } else {
      this.detabinate_();
      this.isOpen_ = false;
    }

    this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  }

  open() {
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.addClass(this.openCssClass_);
    this.retabinate_();
    this.isOpen_ = true;
  }

  close() {
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.removeClass(this.openCssClass_);
    this.detabinate_();
    this.isOpen_ = false;
  }

  isOpen() {
    return this.isOpen_;
  }

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  detabinate_() {
    if (this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.saveElementTabState(elements[i]);
        this.adapter_.makeElementUntabbable(elements[i]);
      }
    }

    this.inert_ = true;
  }

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  retabinate_() {
    if (!this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.restoreElementTabState(elements[i]);
      }
    }

    this.inert_ = false;
  }

  handleTouchStart_(evt) {
    if (!this.adapter_.hasClass(this.openCssClass_)) {
      return;
    }
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.direction_ = this.adapter_.isRtl() ? -1 : 1;
    this.drawerWidth_ = this.adapter_.getDrawerWidth();
    this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    this.currentX_ = this.startX_;
    this.touchingSideNav_ = true;

    requestAnimationFrame(this.updateDrawer_.bind(this));
  }

  handleTouchMove_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  }

  handleTouchEnd_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.prepareForTouchEnd_();

    // Did the user close the drawer by more than 50%?
    if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
      this.close();
    } else {
      // Triggering an open here means we'll get a nice animation back to the fully open state.
      this.open();
    }
  }

  prepareForTouchEnd_() {
    this.touchingSideNav_ = false;
    this.adapter_.setTranslateX(null);
  }

  updateDrawer_() {
    if (!this.touchingSideNav_) {
      return;
    }

    requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  }

  get newPosition_() {
    let newPos = null;

    if (this.direction_ === 1) {
      newPos = Math.min(0, this.currentX_ - this.startX_);
    } else {
      newPos = Math.max(0, this.currentX_ - this.startX_);
    }

    return newPos;
  }

  isRootTransitioningEventTarget_(el) {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSlidableDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./node_modules/@material/drawer/slidable/constants.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("./node_modules/@material/drawer/slidable/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ "./node_modules/@material/drawer/temporary/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("./node_modules/@material/drawer/slidable/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */],
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),

/***/ "./node_modules/@material/drawer/temporary/foundation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("./node_modules/@material/drawer/slidable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/@material/drawer/temporary/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTemporaryDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      isDrawer: () => false,
      updateCssVariable: (/* value: string */) => {},
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter),
      MDCTemporaryDrawerFoundation.cssClasses.ROOT,
      MDCTemporaryDrawerFoundation.cssClasses.ANIMATING,
      MDCTemporaryDrawerFoundation.cssClasses.OPEN);

    this.componentClickHandler_ = () => this.close();
  }

  init() {
    super.init();

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  }

  destroy() {
    super.destroy();

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
  }

  open() {
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    super.open();
  }

  close() {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    super.close();
  }

  prepareForTouchEnd_() {
    super.prepareForTouchEnd_();

    this.adapter_.updateCssVariable('');
  }

  updateDrawer_() {
    super.updateDrawer_();

    const newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/temporary/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("./node_modules/@material/drawer/temporary/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("./node_modules/@material/drawer/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCTemporaryDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCTemporaryDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      registerTransitionEndHandler: (handler) => this.drawer.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.drawer.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          __WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : `translateX(${value}px)`),
      updateCssVariable: (value) => {
        if (__WEBPACK_IMPORTED_MODULE_2__util__["supportsCssCustomProperties"]()) {
          this.root_.style.setProperty(OPACITY_VAR_NAME, value);
        }
      },
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawer;



/***/ }),

/***/ "./node_modules/@material/drawer/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["remapEvent"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["getTransformPropertyName"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["supportsCssCustomProperties"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["saveElementTabState"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["restoreElementTabState"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

let storedTransformPropertyName_;
let supportsPassive_;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName, globalObj = window) {
  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj = window, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : '-webkit-transform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties(globalObj = window) {
  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer-shims/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var buffer = __webpack_require__("./node_modules/buffer/index.js");
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__("./node_modules/ieee754/index.js")
var isArray = __webpack_require__("./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-util-is/lib/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/index.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./scss/romajs.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".mdc-animation-linear-out-slow-in{animation-timing-function:cubic-bezier(0,0,.2,1)}.mdc-animation-fast-out-slow-in{animation-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-animation-fast-out-linear-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.mdc-button{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;letter-spacing:.04em;line-height:1.5rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));display:inline-block;position:relative;min-width:64px;height:36px;padding:0 16px;border:none;border-radius:2px;outline:none;background:transparent;font-size:14px;font-weight:500;line-height:36px;text-align:center;text-decoration:none;text-transform:uppercase;overflow:hidden;vertical-align:middle;user-select:none;box-sizing:border-box;-webkit-appearance:none}.mdc-button:not(.mdc-ripple-upgraded):active:after,.mdc-button:not(.mdc-ripple-upgraded):focus:before,.mdc-button:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button:before{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button:after{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button:not(.mdc-ripple-upgraded){-webkit-tap-highlight-color:rgba(0,0,0,.18)}.mdc-button--theme-dark,.mdc-theme--dark .mdc-button{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-button--theme-dark:not(.mdc-ripple-upgraded):active:after,.mdc-button--theme-dark:not(.mdc-ripple-upgraded):focus:before,.mdc-button--theme-dark:not(.mdc-ripple-upgraded):hover:before,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):active:after,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):focus:before,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button--theme-dark:before,.mdc-theme--dark .mdc-button:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--theme-dark.mdc-ripple-upgraded:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--theme-dark.mdc-ripple-upgraded--background-focused:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--theme-dark.mdc-ripple-upgraded--background-active-fill:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button--theme-dark.mdc-ripple-upgraded--unbounded:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--theme-dark:after,.mdc-theme--dark .mdc-button:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--theme-dark.mdc-ripple-upgraded:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button--theme-dark:not(.mdc-ripple-upgraded--unbounded):after,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button--theme-dark.mdc-ripple-upgraded--unbounded:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button--theme-dark.mdc-ripple-upgraded--foreground-activation:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button--theme-dark.mdc-ripple-upgraded--foreground-deactivation:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button--theme-dark:not(.mdc-ripple-upgraded),.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded){-webkit-tap-highlight-color:rgba(255,255,255,.18)}.mdc-button.mdc-button--primary{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):active:after,.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):focus:before,.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button.mdc-button--primary:before{background-color:rgba(63,81,181,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--primary:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(12%))}}.mdc-button.mdc-button--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--primary:after{background-color:rgba(63,81,181,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--primary:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(12%))}}.mdc-button.mdc-button--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button.mdc-button--accent{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):active:after,.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):focus:before,.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button.mdc-button--accent:before{background-color:rgba(255,64,129,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--accent:before{background-color:color(var(--mdc-theme-accent,#ff4081) a(12%))}}.mdc-button.mdc-button--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--accent:after{background-color:rgba(255,64,129,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--accent:after{background-color:color(var(--mdc-theme-accent,#ff4081) a(12%))}}.mdc-button.mdc-button--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;min-width:88px}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised.mdc-button--primary{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):active:after,.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):focus:before,.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button--raised.mdc-button--primary:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--primary:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button--raised.mdc-button--accent{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):active:after,.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):focus:before,.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-button--raised.mdc-button--accent:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--accent:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-button--theme-dark .mdc-button--raised,.mdc-theme--dark .mdc-button--raised{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-button--theme-dark .mdc-button--raised:before,.mdc-theme--dark .mdc-button--raised:before{color:#000}.mdc-button--primary,.mdc-button--theme-dark .mdc-button--primary,.mdc-theme--dark .mdc-button--primary{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-button--primary.mdc-button--raised{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-button--primary.mdc-button--raised:before{color:#000}.mdc-button--accent,.mdc-button--theme-dark .mdc-button--accent,.mdc-theme--dark .mdc-button--accent{color:#ff4081;color:var(--mdc-theme-accent,#ff4081)}.mdc-button--accent.mdc-button--raised{background-color:#ff4081;background-color:var(--mdc-theme-accent,#ff4081);color:#fff;color:var(--mdc-theme-text-primary-on-accent,#fff)}.mdc-button--accent.mdc-button--raised:before{color:#000}.mdc-button--compact{padding:0 8px}.mdc-button:disabled,fieldset:disabled .mdc-button{color:rgba(0,0,0,.26);cursor:default;pointer-events:none}.mdc-button--theme-dark .mdc-button:disabled,.mdc-button--theme-dark fieldset:disabled .mdc-button,.mdc-theme--dark .mdc-button:disabled,.mdc-theme--dark fieldset:disabled .mdc-button{color:hsla(0,0%,100%,.3)}.mdc-button--raised:disabled,fieldset:disabled .mdc-button--raised{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);background-color:rgba(0,0,0,.12);pointer-events:none}.mdc-button--theme-dark .mdc-button--raised:disabled,.mdc-button--theme-dark fieldset:disabled .mdc-button--raised,.mdc-theme--dark .mdc-button--raised:disabled,.mdc-theme--dark fieldset:disabled .mdc-button--raised{background-color:hsla(0,0%,100%,.12)}.mdc-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:flex;flex-direction:column;justify-content:flex-end;padding:0;box-sizing:border-box}.mdc-card__primary{padding:16px}.mdc-card__primary .mdc-card__title--large{padding-top:8px}.mdc-card__primary:last-child{padding-bottom:24px}.mdc-card__supporting-text{padding:8px 16px;box-sizing:border-box;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-card--theme-dark .mdc-card__supporting-text,.mdc-theme--dark .mdc-card__supporting-text{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__primary+.mdc-card__supporting-text{margin-top:-8px;padding-top:0}.mdc-card__supporting-text:last-child{padding-bottom:24px}.mdc-card__actions{display:flex;padding:8px;box-sizing:border-box}.mdc-card--theme-dark .mdc-card__actions,.mdc-theme--dark .mdc-card__actions{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__actions .mdc-card__action{margin:0 8px 0 0}.mdc-card__actions .mdc-card__action:last-child{margin-right:0}.mdc-card__actions--vertical{flex-flow:column;align-items:flex-start}.mdc-card__actions--vertical .mdc-card__action{margin:0 0 4px}.mdc-card__actions--vertical .mdc-card__action:last-child{margin-bottom:0}.mdc-card__media{display:flex;flex-direction:column;justify-content:flex-end;padding:16px;box-sizing:border-box}.mdc-card__media-item{display:inline-block;width:auto;height:80px;margin:16px 0 0;padding:0}.mdc-card__media-item--1dot5x{width:auto;height:120px}.mdc-card__media-item--2x{width:auto;height:160px}.mdc-card__media-item--3x{width:auto;height:240px}.mdc-card__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:-.063rem 0}.mdc-card--theme-dark .mdc-card__title,.mdc-theme--dark .mdc-card__title{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__title--large{font-size:1.5rem;letter-spacing:normal;line-height:2rem;margin:0}.mdc-card__subtitle,.mdc-card__title--large{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400}.mdc-card__subtitle{font-size:.875rem;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:-.063rem 0}.mdc-card--theme-dark .mdc-card__subtitle,.mdc-theme--dark .mdc-card__subtitle{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__horizontal-block{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;padding:0 16px 0 0;box-sizing:border-box}.mdc-card__horizontal-block .mdc-card__actions--vertical{margin:16px}.mdc-card__horizontal-block .mdc-card__media-item{margin-left:16px}.mdc-card__horizontal-block .mdc-card__media-item--3x{margin-bottom:16px}@keyframes mdc-checkbox-fade-in-background{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}}@keyframes mdc-checkbox-fade-out-background{0%,80%{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}to{border-color:rgba(0,0,0,.54);background-color:transparent}}@keyframes mdc-checkbox-fade-in-background-dark{0%{border-color:#fff;background-color:transparent}50%{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}}@keyframes mdc-checkbox-fade-out-background-dark{0%,80%{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}to{border-color:#fff;background-color:transparent}}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}to{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{transform:rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(0,0,.2,1)}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{transform:rotate(45deg);opacity:0;animation-timing-function:cubic-bezier(.14,0,0,1)}to{transform:rotate(1turn);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{transform:rotate(-45deg);opacity:0;animation-timing-function:cubic-bezier(0,0,.2,1)}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{transform:rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.14,0,0,1)}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{transform:scaleX(1);opacity:1;animation-timing-function:linear}32.8%,to{transform:scaleX(0);opacity:0}}.mdc-checkbox{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;box-sizing:content-box;width:18px;height:18px;flex:0 0 18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox:not(.mdc-ripple-upgraded):active:after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus:before,.mdc-checkbox:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-checkbox:before{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-checkbox:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-checkbox.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-checkbox.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-checkbox.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-checkbox.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-checkbox:after{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-checkbox:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-checkbox.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-checkbox:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-checkbox:after,.mdc-checkbox:before{top:0;left:0;width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__background:before{content:none}.mdc-checkbox__background{position:absolute;top:0;right:0;bottom:0;left:0;left:11px;right:auto;display:inline-flex;top:11px;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;width:45%;height:45%;transition:background-color 90ms cubic-bezier(.4,0,1,1) 0ms,border-color 90ms cubic-bezier(.4,0,1,1) 0ms;border:2px solid rgba(0,0,0,.54);border-radius:2px;background-color:transparent;will-change:background-color,border-color}.mdc-checkbox[dir=rtl] .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox__background{left:auto;right:11px}.mdc-checkbox--theme-dark .mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox__background{border-color:#fff}.mdc-checkbox__background:before{right:0;bottom:0;transform:scale(0);transition:opacity 90ms cubic-bezier(.4,0,1,1) 0ms,transform 90ms cubic-bezier(.4,0,1,1) 0ms;border-radius:50%;content:\"\";pointer-events:none;will-change:opacity,transform;background:#3f51b5;background:var(--mdc-theme-primary,#3f51b5)}.mdc-checkbox__background:before,.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.mdc-checkbox__native-control{margin:0;padding:0;cursor:inherit}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;transition:opacity .18s cubic-bezier(.4,0,1,1) 0ms;opacity:0;fill:#fff}.mdc-checkbox__checkmark__path{transition:stroke-dashoffset .18s cubic-bezier(.4,0,1,1) 0ms;stroke:#fff!important;stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-checkbox__mixedmark{width:100%;height:2px;transform:scaleX(0) rotate(0deg);transition:opacity 90ms cubic-bezier(.4,0,1,1) 0ms,transform 90ms cubic-bezier(.4,0,1,1) 0ms;background-color:#fff;opacity:0}.mdc-checkbox__native-control:focus~.mdc-checkbox__background:before{transform:scale(2.75);transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms;opacity:.26}.mdc-checkbox__native-control:checked~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms;border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark__path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);transition:opacity 90ms cubic-bezier(.4,0,1,1) 0ms,transform 90ms cubic-bezier(.4,0,1,1) 0ms;opacity:0}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark__path{stroke-dashoffset:0}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox__native-control:disabled,[aria-disabled=true] .mdc-checkbox__native-control,fieldset:disabled .mdc-checkbox__native-control{cursor:default}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background,[aria-disabled=true] .mdc-checkbox__native-control~.mdc-checkbox__background,fieldset:disabled .mdc-checkbox__native-control~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled~.mdc-checkbox__background,.mdc-checkbox--theme-dark [aria-disabled=true] .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--theme-dark fieldset:disabled .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox__native-control:disabled~.mdc-checkbox__background,.mdc-theme--dark [aria-disabled=true] .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-theme--dark fieldset:disabled .mdc-checkbox__native-control~.mdc-checkbox__background{border-color:hsla(0,0%,100%,.3)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background,[aria-disabled=true] .mdc-checkbox__native-control:checked~.mdc-checkbox__background,[aria-disabled=true] .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,fieldset:disabled .mdc-checkbox__native-control:checked~.mdc-checkbox__background,fieldset:disabled .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox--theme-dark [aria-disabled=true] .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--theme-dark [aria-disabled=true] .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox--theme-dark fieldset:disabled .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--theme-dark fieldset:disabled .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background,.mdc-theme--dark [aria-disabled=true] .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-theme--dark [aria-disabled=true] .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-theme--dark fieldset:disabled .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-theme--dark fieldset:disabled .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:hsla(0,0%,100%,.3)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark__path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none!important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background{animation:mdc-checkbox-fade-in-background .18s linear}.mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-dark}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation:mdc-checkbox-fade-out-background .18s linear}.mdc-checkbox--theme-dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--theme-dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-theme--dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-dark}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark__path{animation:.18s linear 0s:local(mdc-checkbox-unchecked-checked-checkmark-path);transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s:local(mdc-checkbox-unchecked-indeterminate-mixedmark);transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark__path{animation:90ms linear 0s:local(mdc-checkbox-checked-unchecked-checkmark-path);transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:90ms linear 0s:local(mdc-checkbox-checked-indeterminate-checkmark);transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s:local(mdc-checkbox-checked-indeterminate-mixedmark);transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:.5s linear 0s:local(mdc-checkbox-indeterminate-checked-checkmark);transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:.5s linear 0s:local(mdc-checkbox-indeterminate-checked-mixedmark);transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:.3s linear 0s:local(mdc-checkbox-indeterminate-unchecked-mixedmark);transition:none}:root{--mdc-dialog-dark-theme-bg-color:#303030}.mdc-dialog{display:flex;position:fixed;align-items:center;justify-content:center;opacity:0;z-index:-1}.mdc-dialog__surface{display:inline-flex;flex-direction:column;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);width:calc(100% - 30px);min-width:640px;max-width:865px;transform:translateY(150px) scale(.8);transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms;border-radius:2px;background-color:#fff;background-color:var(--mdc-theme-background,#fff);opacity:0}.mdc-dialog--theme-dark .mdc-dialog__surface,.mdc-theme--dark .mdc-dialog__surface{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff);background-color:#303030;background-color:var(--mdc-dialog-dark-theme-bg-color,#303030)}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__backdrop{display:flex;position:fixed;top:0;left:0;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,.87);background-color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));opacity:0;z-index:-1}.mdc-dialog__header{display:flex;align-items:center;padding:24px 24px 0}.mdc-dialog__header__empty{padding:0}.mdc-dialog[dir=rtl] .mdc-dialog__header,[dir=rtl] .mdc-dialog .mdc-dialog__header{text-align:right}.mdc-dialog__header__title{flex:1;margin:0;font-size:1.25rem;font-weight:500;letter-spacing:.02em;line-height:2rem}.mdc-dialog__body,.mdc-dialog__header__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-dialog__body{margin-top:20px;padding:0 24px 24px;color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem}.mdc-dialog--theme-dark.mdc-dialog__body,.mdc-theme--dark .mdc-dialog__body{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-dialog__body--scrollable{max-height:195px;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);overflow-y:scroll;overflow-x:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:8px}@media (max-width:640px){.mdc-dialog,.mdc-dialog__surface{min-width:280px}.mdc-dialog__body{line-height:24px}}.mdc-dialog--open{display:flex;top:0;left:0;align-items:center;justify-content:center;width:100%;height:100%;opacity:1;z-index:2}.mdc-dialog--open .mdc-dialog__surface{transform:translateY(0) scale(1);transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-dialog--open .mdc-dialog__backdrop{transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms;opacity:.3}.mdc-dialog-scroll-lock{height:100vh;overflow:hidden}:root{--mdc-persistent-drawer-dark-theme-bg-color:#212121}.mdc-persistent-drawer{width:0}.mdc-persistent-drawer__toolbar-spacer{display:flex;position:relative;flex-direction:row;flex-shrink:0;align-items:flex-center;height:56px;padding:16px;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:border-box}.mdc-persistent-drawer__toolbar-spacer--theme-dark .mdc-persistent-drawer__toolbar-spacer,.mdc-theme--dark .mdc-persistent-drawer__toolbar-spacer{border-bottom:1px solid hsla(0,0%,100%,.12)}@media (min-width:600px){.mdc-persistent-drawer__toolbar-spacer{height:64px}}.mdc-persistent-drawer__header{position:relative}.mdc-persistent-drawer__header:before{display:block;padding-top:56.25%;content:\"\"}.mdc-persistent-drawer__header-content{display:flex;position:absolute;top:0;right:0;bottom:0;left:0;align-items:flex-end;padding:16px;box-sizing:border-box}.mdc-persistent-drawer .mdc-list,.mdc-persistent-drawer .mdc-list-group{padding-right:0;padding-left:0}.mdc-persistent-drawer .mdc-list-item{position:relative;padding:0 16px;outline:none;color:inherit;text-decoration:none;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem}.mdc-persistent-drawer .mdc-list-item__start-detail{color:rgba(0,0,0,.54)}.mdc-persistent-drawer .mdc-list-item__start-detail--theme-dark .mdc-persistent-drawer .mdc-list-item__start-detail,.mdc-theme--dark .mdc-persistent-drawer .mdc-list-item__start-detail{color:hsla(0,0%,100%,.54)}.mdc-persistent-drawer--selected.mdc-list-item,.mdc-persistent-drawer--selected.mdc-list-item .mdc-list-item__start-detail{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-persistent-drawer .mdc-list-item:before{position:absolute;top:0;left:0;width:100%;height:100%;transition:opacity .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:inherit;background:currentColor;content:\"\";opacity:0}.mdc-persistent-drawer .mdc-list-item:focus:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.12}.mdc-persistent-drawer .mdc-list-item:active:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.18}.mdc-persistent-drawer .mdc-list-item:active:focus:before{transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-persistent-drawer__drawer{background:#fff;background:var(--mdc-theme-background,#fff);border-left:0;border-right:1px solid #e4e4e4;left:0;right:auto;height:100%;transform:translateX(-107%);transform:translateX(calc(-100% - 20px));will-change:transform;display:inline-flex;flex-direction:column;box-sizing:border-box;overflow:hidden;touch-action:none;width:240px}.mdc-persistent-drawer__drawer[dir=rtl],[dir=rtl] .mdc-persistent-drawer__drawer{border-left:1px solid #e4e4e4;border-right:0;left:auto;right:0}.mdc-persistent-drawer__drawer--theme-dark,.mdc-theme--dark .mdc-persistent-drawer__drawer{background-color:#212121;background-color:var(--mdc-persistent-drawer-dark-theme-bg-color,#212121);color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff);border-left:0;border-right:1px solid hsla(0,0%,100%,.12)}.mdc-persistent-drawer__drawer--theme-dark[dir=rtl],.mdc-theme--dark .mdc-persistent-drawer__drawer[dir=rtl],[dir=rtl] .mdc-persistent-drawer__drawer--theme-dark,[dir=rtl] .mdc-theme--dark .mdc-persistent-drawer__drawer{border-left:1px solid hsla(0,0%,100%,.12);border-right:0}.mdc-persistent-drawer[dir=rtl] .mdc-persistent-drawer__drawer,[dir=rtl] .mdc-persistent-drawer .mdc-persistent-drawer__drawer{transform:translateX(107%);transform:translateX(calc(100% + 20px))}.mdc-persistent-drawer--animating .mdc-persistent-drawer__drawer{transition:transform .13s cubic-bezier(0,0,.2,1) 0ms}.mdc-persistent-drawer--animating.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer{transition:transform .33s cubic-bezier(0,0,.2,1) 0ms}.mdc-persistent-drawer--open{width:240px;pointer-events:auto}.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer,.mdc-persistent-drawer--open[dir=rtl] .mdc-persistent-drawer__drawer,[dir=rtl] .mdc-persistent-drawer--open .mdc-persistent-drawer__drawer{transform:none}:root{--mdc-permanent-drawer-dark-theme-bg-color:#212121}.mdc-permanent-drawer{background:#fff;background:var(--mdc-theme-background,#fff);border-left:0;border-right:1px solid #e4e4e4;left:0;right:auto;display:inline-flex;flex-direction:column;width:240px;height:100%;box-sizing:border-box;overflow:hidden}.mdc-permanent-drawer__toolbar-spacer{display:flex;position:relative;flex-direction:row;flex-shrink:0;align-items:flex-center;height:56px;padding:16px;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:border-box}.mdc-permanent-drawer__toolbar-spacer--theme-dark .mdc-permanent-drawer__toolbar-spacer,.mdc-theme--dark .mdc-permanent-drawer__toolbar-spacer{border-bottom:1px solid hsla(0,0%,100%,.12)}@media (min-width:600px){.mdc-permanent-drawer__toolbar-spacer{height:64px}}.mdc-permanent-drawer__header{position:relative}.mdc-permanent-drawer__header:before{display:block;padding-top:56.25%;content:\"\"}.mdc-permanent-drawer__header-content{display:flex;position:absolute;top:0;right:0;bottom:0;left:0;align-items:flex-end;padding:16px;box-sizing:border-box}.mdc-permanent-drawer .mdc-list,.mdc-permanent-drawer .mdc-list-group{padding-right:0;padding-left:0}.mdc-permanent-drawer .mdc-list-item{position:relative;padding:0 16px;outline:none;color:inherit;text-decoration:none;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem}.mdc-permanent-drawer .mdc-list-item__start-detail{color:rgba(0,0,0,.54)}.mdc-permanent-drawer .mdc-list-item__start-detail--theme-dark .mdc-permanent-drawer .mdc-list-item__start-detail,.mdc-theme--dark .mdc-permanent-drawer .mdc-list-item__start-detail{color:hsla(0,0%,100%,.54)}.mdc-permanent-drawer--selected.mdc-list-item,.mdc-permanent-drawer--selected.mdc-list-item .mdc-list-item__start-detail{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-permanent-drawer .mdc-list-item:before{position:absolute;top:0;left:0;width:100%;height:100%;transition:opacity .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:inherit;background:currentColor;content:\"\";opacity:0}.mdc-permanent-drawer .mdc-list-item:focus:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.12}.mdc-permanent-drawer .mdc-list-item:active:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.18}.mdc-permanent-drawer .mdc-list-item:active:focus:before{transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-permanent-drawer[dir=rtl],[dir=rtl] .mdc-permanent-drawer{border-left:1px solid #e4e4e4;border-right:0;left:auto;right:0}.mdc-permanent-drawer--theme-dark,.mdc-theme--dark .mdc-permanent-drawer{background-color:#212121;background-color:var(--mdc-permanent-drawer-dark-theme-bg-color,#212121);color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff);border-left:0;border-right:1px solid hsla(0,0%,100%,.12)}.mdc-permanent-drawer--theme-dark[dir=rtl],.mdc-theme--dark .mdc-permanent-drawer[dir=rtl],[dir=rtl] .mdc-permanent-drawer--theme-dark,[dir=rtl] .mdc-theme--dark .mdc-permanent-drawer{border-left:1px solid hsla(0,0%,100%,.12);border-right:0}.mdc-permanent-drawer--floating{background:none;border-left:0;border-right:none}.mdc-permanent-drawer--floating[dir=rtl],[dir=rtl] .mdc-permanent-drawer--floating{border-left:none;border-right:0}.mdc-permanent-drawer--floating--theme-dark,.mdc-theme--dark .mdc-permanent-drawer--floating{background:none;border-left:0;border-right:none}.mdc-permanent-drawer--floating--theme-dark[dir=rtl],.mdc-theme--dark .mdc-permanent-drawer--floating[dir=rtl],[dir=rtl] .mdc-permanent-drawer--floating--theme-dark,[dir=rtl] .mdc-theme--dark .mdc-permanent-drawer--floating{border-left:none;border-right:0}.mdc-temporary-drawer{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;box-sizing:border-box;contain:strict;z-index:3}.mdc-temporary-drawer__toolbar-spacer{display:flex;position:relative;flex-direction:row;flex-shrink:0;align-items:flex-center;height:56px;padding:16px;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:border-box}.mdc-temporary-drawer__toolbar-spacer--theme-dark .mdc-temporary-drawer__toolbar-spacer,.mdc-theme--dark .mdc-temporary-drawer__toolbar-spacer{border-bottom:1px solid hsla(0,0%,100%,.12)}@media (min-width:600px){.mdc-temporary-drawer__toolbar-spacer{height:64px}}.mdc-temporary-drawer__header{position:relative}.mdc-temporary-drawer__header:before{display:block;padding-top:56.25%;content:\"\"}.mdc-temporary-drawer__header-content{display:flex;position:absolute;top:0;right:0;bottom:0;left:0;align-items:flex-end;padding:16px;box-sizing:border-box}.mdc-temporary-drawer .mdc-list,.mdc-temporary-drawer .mdc-list-group{padding-right:0;padding-left:0}.mdc-temporary-drawer .mdc-list-item{position:relative;padding:0 16px;outline:none;color:inherit;text-decoration:none;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem}.mdc-temporary-drawer .mdc-list-item__start-detail{color:rgba(0,0,0,.54)}.mdc-temporary-drawer .mdc-list-item__start-detail--theme-dark .mdc-temporary-drawer .mdc-list-item__start-detail,.mdc-theme--dark .mdc-temporary-drawer .mdc-list-item__start-detail{color:hsla(0,0%,100%,.54)}.mdc-temporary-drawer--selected.mdc-list-item,.mdc-temporary-drawer--selected.mdc-list-item .mdc-list-item__start-detail{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-temporary-drawer .mdc-list-item:before{position:absolute;top:0;left:0;width:100%;height:100%;transition:opacity .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:inherit;background:currentColor;content:\"\";opacity:0}.mdc-temporary-drawer .mdc-list-item:focus:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.12}.mdc-temporary-drawer .mdc-list-item:active:before{transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms;opacity:.18}.mdc-temporary-drawer .mdc-list-item:active:focus:before{transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-temporary-drawer:before{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);content:\"\";opacity:0;opacity:var(--mdc-temporary-drawer-opacity,0);will-change:opacity;box-sizing:border-box}.mdc-temporary-drawer__drawer{background:#fff;background:var(--mdc-theme-background,#fff);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);left:0;right:auto;height:100%;transform:translateX(-107%);transform:translateX(calc(-100% - 20px));will-change:transform;display:flex;position:absolute;flex-direction:column;width:calc(100% - 56px);max-width:280px;box-sizing:border-box;overflow:hidden;touch-action:none}.mdc-temporary-drawer__drawer[dir=rtl],[dir=rtl] .mdc-temporary-drawer__drawer{left:auto;right:0}.mdc-temporary-drawer--theme-dark .mdc-temporary-drawer__drawer,.mdc-theme--dark .mdc-temporary-drawer__drawer{background:#303030;color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-temporary-drawer__drawer[dir=rtl] .mdc-temporary-drawer__drawer,[dir=rtl] .mdc-temporary-drawer__drawer .mdc-temporary-drawer__drawer{transform:translateX(107%);transform:translateX(calc(100% + 20px))}@media (min-width:600px){.mdc-temporary-drawer__drawer{width:calc(100% - 64px);max-width:320px}}.mdc-temporary-drawer__content{flex-grow:1;margin:0;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;-webkit-overflow-scrolling:touch;touch-action:pan-y}.mdc-temporary-drawer__footer{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);flex-shrink:0}.mdc-temporary-drawer--animating:before{transition:opacity .3s cubic-bezier(0,0,.2,1) 0ms}.mdc-temporary-drawer--animating.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer{transition:transform .33s cubic-bezier(0,0,.2,1) 0ms}.mdc-temporary-drawer--animating .mdc-temporary-drawer__drawer{transition:transform .13s cubic-bezier(0,0,.2,1) 0ms}.mdc-temporary-drawer--open{pointer-events:auto}.mdc-temporary-drawer--open:before{opacity:1;opacity:var(--mdc-temporary-drawer-opacity,1)}.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer,.mdc-temporary-drawer--open[dir=rtl] .mdc-temporary-drawer__drawer,[dir=rtl] .mdc-temporary-drawer--open .mdc-temporary-drawer__drawer{transform:none}.mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{will-change:box-shadow}.mdc-elevation-transition,.mdc-fab{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-fab{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;display:inline-flex;position:relative;justify-content:center;width:56px;height:56px;padding:0;border:none;border-radius:50%;cursor:pointer;user-select:none;box-sizing:border-box;fill:currentColor;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;background-color:#ff4081;background-color:var(--mdc-theme-accent,#ff4081);color:#fff;color:var(--mdc-theme-text-primary-on-accent,#fff);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-fab:not(.mdc-ripple-upgraded):active:after,.mdc-fab:not(.mdc-ripple-upgraded):focus:before,.mdc-fab:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-fab:before{background-color:hsla(0,0%,100%,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-fab.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-fab.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-fab.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-fab:after{background-color:hsla(0,0%,100%,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-fab:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-fab:not(.mdc-ripple-upgraded){-webkit-tap-highlight-color:rgba(0,0,0,.18)}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--plain{background-color:#fff;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))}.mdc-fab--plain:before{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab--plain.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-fab--plain.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-fab--plain.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-fab--plain.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-fab--plain:after{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab--plain.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-fab--plain:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-fab--plain.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-fab--plain.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-fab--plain.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:hover{cursor:pointer}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab>svg{width:100%}.mdc-fab:disabled,fieldset:disabled .mdc-fab{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);cursor:default;pointer-events:none}.mdc-fab__icon{display:flex;align-items:center;justify-content:center;width:100%}.mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field--theme-dark,.mdc-theme--dark .mdc-form-field{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-grid-list .mdc-grid-tile__primary{padding-bottom:100%}.mdc-grid-list .mdc-grid-tile{margin:2px 0;padding:0 2px}.mdc-grid-list .mdc-grid-tile__secondary{left:2px;width:calc(100% - 4px)}.mdc-grid-list .mdc-grid-list__tiles{margin:2px auto}.mdc-grid-list__tiles{display:flex;flex-direction:row;flex-wrap:wrap;margin:0;padding:0}.mdc-grid-list--tile-gutter-1 .mdc-grid-tile{margin:.5px 0;padding:0 .5px}.mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary{left:.5px;width:calc(100% - 1px)}.mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles{margin:.5px auto}.mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary{padding-bottom:56.24993%}.mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary{padding-bottom:66.66667%}.mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary{padding-bottom:149.99925%}.mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary{padding-bottom:75.00019%}.mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary{padding-bottom:133.33333%}.mdc-grid-list--twoline-caption .mdc-grid-tile__secondary{height:68px}.mdc-grid-list--header-caption .mdc-grid-tile__secondary{top:0;bottom:auto}.mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary{padding-left:56px;padding-right:8px}.mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary,[dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary{padding-left:8px;padding-right:56px}.mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon{left:16px;right:auto;font-size:24px}.mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon,[dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon{left:auto;right:16px}.mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary{padding-left:16px;padding-right:56px}.mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary,[dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary{padding-left:56px;padding-right:16px}.mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon{left:auto;right:16px;font-size:24px}.mdc-grid-list[dir=rtl] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon,[dir=rtl] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon{left:16px;right:auto}.mdc-grid-tile{display:block;position:relative;width:var(--mdc-grid-list-tile-width,200px)}.mdc-grid-tile__primary{position:relative;height:0;background-color:#fff;background-color:var(--mdc-theme-background,#fff);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-grid-tile__primary-content{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-grid-tile__secondary{position:absolute;box-sizing:border-box;bottom:0;height:48px;padding:16px;background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-grid-tile__title{display:block;margin:0;padding:0;font-size:1rem;font-weight:500;line-height:1rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-grid-tile__support-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;display:block;margin:0;margin-top:4px;padding:0}.mdc-grid-tile__icon{position:absolute;top:calc(50% - 24px / 2);font-size:0}.mdc-icon-toggle{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;will-change:auto;display:flex;position:relative;box-sizing:border-box;align-items:center;justify-content:center;width:48px;height:48px;padding:12px;outline:none;font-size:1.5rem;cursor:pointer;user-select:none}.mdc-icon-toggle:not(.mdc-ripple-upgraded):active:after,.mdc-icon-toggle:not(.mdc-ripple-upgraded):focus:before,.mdc-icon-toggle:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-icon-toggle:before{background-color:rgba(0,0,0,.062);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-toggle.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-icon-toggle.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle:after{background-color:rgba(0,0,0,.062);top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear}.mdc-icon-toggle.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-icon-toggle.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-icon-toggle--theme-dark.mdc-icon-toggle:before,.mdc-theme--dark .mdc-icon-toggle:before{background-color:hsla(0,0%,100%,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded:before,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-focused:before,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill:before,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded:before,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--theme-dark.mdc-icon-toggle:after,.mdc-theme--dark .mdc-icon-toggle:after{background-color:hsla(0,0%,100%,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded:after,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded):after,.mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded:after,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation:after,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation:after,.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-icon-toggle:after{position:absolute;border-radius:50%;content:\"\";opacity:0;pointer-events:none}.mdc-icon-toggle--theme-dark,.mdc-theme--dark .mdc-icon-toggle{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-icon-toggle--primary{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-icon-toggle--primary:before{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-icon-toggle--primary:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-icon-toggle--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-icon-toggle--primary.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--primary:after{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-icon-toggle--primary:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-icon-toggle--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-icon-toggle--primary:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-icon-toggle--accent{color:#ff4081;color:var(--mdc-theme-accent,#ff4081)}.mdc-icon-toggle--accent:before{background-color:rgba(255,64,129,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-icon-toggle--accent:before{background-color:color(var(--mdc-theme-accent,#ff4081) a(14%))}}.mdc-icon-toggle--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-icon-toggle--accent.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-icon-toggle--accent:after{background-color:rgba(255,64,129,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-icon-toggle--accent:after{background-color:color(var(--mdc-theme-accent,#ff4081) a(14%))}}.mdc-icon-toggle--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-icon-toggle--accent:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-icon-toggle--disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));pointer-events:none}.mdc-icon-toggle--theme-dark.mdc-icon-toggle--disabled,.mdc-theme--dark .mdc-icon-toggle--disabled{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-layout-grid{display:flex;flex-flow:row wrap;align-items:stretch;margin:0 auto;box-sizing:border-box;padding:8px;padding:calc(var(--mdc-layout-grid-margin, 16px) - var(--mdc-layout-grid-gutter, 16px) / 2)}@supports (display:grid){.mdc-layout-grid{display:grid;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter,16px);padding:16px;padding:var(--mdc-layout-grid-margin,16px)}@media (min-width:840px){.mdc-layout-grid{grid-template-columns:repeat(12,minmax(0,1fr))}}@media (min-width:480px) and (max-width:839px){.mdc-layout-grid{grid-template-columns:repeat(8,minmax(0,1fr))}}@media (max-width:479px){.mdc-layout-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}}.mdc-layout-grid__cell{margin:8px;margin:calc(var(--mdc-layout-grid-gutter, 16px) / 2);box-sizing:border-box}@supports (display:grid){.mdc-layout-grid__cell{margin:0}}@media (min-width:840px){.mdc-layout-grid__cell{width:calc(33.33333% - 16px);width:calc(33.33333% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}}@media (min-width:480px) and (max-width:839px){.mdc-layout-grid__cell{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}}@media (max-width:479px){.mdc-layout-grid__cell{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}}@media (min-width:840px){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop.mdc-layout-grid__cell--span-1-desktop{width:calc(8.33333% - 16px);width:calc(8.33333% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop.mdc-layout-grid__cell--span-2-desktop{width:calc(16.66667% - 16px);width:calc(16.66667% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop.mdc-layout-grid__cell--span-4-desktop{width:calc(33.33333% - 16px);width:calc(33.33333% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop.mdc-layout-grid__cell--span-5-desktop{width:calc(41.66667% - 16px);width:calc(41.66667% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop.mdc-layout-grid__cell--span-7-desktop{width:calc(58.33333% - 16px);width:calc(58.33333% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop.mdc-layout-grid__cell--span-8-desktop{width:calc(66.66667% - 16px);width:calc(66.66667% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop.mdc-layout-grid__cell--span-10-desktop{width:calc(83.33333% - 16px);width:calc(83.33333% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop.mdc-layout-grid__cell--span-11-desktop{width:calc(91.66667% - 16px);width:calc(91.66667% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media (min-width:480px) and (max-width:839px){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media (max-width:479px){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter, 16px))}@supports (display:grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports (display:grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports (display:grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}.mdc-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.04em;line-height:1.75rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:0;padding:8px 16px 0;line-height:1.5rem;list-style-type:none}.mdc-list--theme-dark,.mdc-theme--dark .mdc-list{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-list--dense{padding-top:4px;font-size:.812rem}.mdc-list-item{display:flex;align-items:center;justify-content:flex-start;height:48px}.mdc-list-item__start-detail{width:24px;height:24px;margin-left:0;margin-right:32px}.mdc-list-item[dir=rtl] .mdc-list-item__start-detail,[dir=rtl] .mdc-list-item .mdc-list-item__start-detail{margin-left:32px;margin-right:0}.mdc-list-item__end-detail{width:24px;height:24px;margin-left:auto;margin-right:16px}.mdc-list-item[dir=rtl] .mdc-list-item__end-detail,[dir=rtl] .mdc-list-item .mdc-list-item__end-detail{margin-left:16px;margin-right:auto}.mdc-list-item__text{display:inline-flex;flex-direction:column}.mdc-list-item__text__secondary{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-list-item__text__secondary--theme-dark,.mdc-theme--dark .mdc-list-item__text__secondary{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-list--dense .mdc-list-item__text__secondary{font-size:inherit}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--dense .mdc-list-item__start-detail{width:20px;height:20px;margin-left:0;margin-right:36px}.mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__start-detail,[dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail{margin-left:36px;margin-right:0}.mdc-list--dense .mdc-list-item__end-detail{width:20px;height:20px}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__start-detail{width:40px;height:40px;margin-left:0;margin-right:16px;border-radius:50%}.mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__start-detail,[dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail{margin-left:16px;margin-right:0}.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item{height:48px}.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail{width:36px;height:36px;margin-left:0;margin-right:20px}.mdc-list-item[dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,[dir=rtl] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail{margin-left:20px;margin-right:0}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;position:relative;left:-16px;width:100%;padding:0 16px;overflow:hidden}.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active:after,.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus:before,.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-list-item.mdc-ripple-upgraded:before{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-list-item.mdc-ripple-upgraded:after{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-list-item.mdc-ripple-upgraded:focus{outline:none}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:before,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:before{background-color:hsla(0,0%,100%,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:before,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused:before,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill:before,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:before,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:after{background-color:hsla(0,0%,100%,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded):after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation:after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation:after,.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-list-divider{height:0;margin:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}.mdc-list--theme-dark .mdc-list-divider,.mdc-theme--dark .mdc-list-divider{border-bottom-color:hsla(0,0%,100%,.2)}.mdc-list-divider--inset{margin-left:56px;margin-right:0;width:calc(100% - 56px)}.mdc-list-group[dir=rtl] .mdc-list-divider--inset,[dir=rtl] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:56px}.mdc-list-group{padding:0 16px}.mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:.75rem 0}.mdc-list-group__subheader--theme-dark,.mdc-theme--dark .mdc-list-group__subheader{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-list-group .mdc-list{padding:0}.mdc-simple-menu{display:none;position:absolute;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(0);transform-origin:top left;border-radius:2px;background-color:#fff;white-space:nowrap;opacity:0;overflow:hidden;box-sizing:border-box;will-change:transform,opacity;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-simple-menu--theme-dark,.mdc-theme--dark .mdc-simple-menu{background-color:#424242}.mdc-simple-menu:focus{outline:none}.mdc-simple-menu--open{display:inline-block;transform:scale(1);opacity:1}.mdc-simple-menu--animating{display:inline-block;transition:opacity .2s cubic-bezier(0,0,.2,1)}.mdc-simple-menu__items{display:inline-block;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;will-change:transform}.mdc-simple-menu__items>*{opacity:0}.mdc-simple-menu__items>.mdc-list-item{cursor:pointer}.mdc-simple-menu--animating .mdc-simple-menu__items{overflow-y:hidden}.mdc-simple-menu--animating .mdc-simple-menu__items>*{transition-duration:.3s;transition-property:opacity;transition-timing-function:cubic-bezier(0,0,.2,1)}.mdc-simple-menu--open .mdc-simple-menu__items>*{opacity:1;will-change:opacity}[dir=rtl] .mdc-simple-menu{transform-origin:top right}.mdc-simple-menu--open-from-top-left{transform-origin:top left!important}.mdc-simple-menu--open-from-top-right{transform-origin:top right!important}.mdc-simple-menu--open-from-bottom-left{transform-origin:bottom left!important}.mdc-simple-menu--open-from-bottom-right{transform-origin:bottom right!important}.mdc-simple-menu .mdc-list,.mdc-simple-menu .mdc-list-group{padding:0}.mdc-simple-menu .mdc-list-item{position:relative;padding:0 16px;outline:none;color:inherit;text-decoration:none;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem}.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item,.mdc-theme--dark .mdc-simple-menu .mdc-list-item{color:#fff}.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-divider,.mdc-theme--dark .mdc-simple-menu .mdc-list-divider{border-color:hsla(0,0%,100%,.12)}.mdc-simple-menu .mdc-list-item__start-detail{color:rgba(0,0,0,.54)}.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item__start-detail,.mdc-theme--dark .mdc-simple-menu .mdc-list-item__start-detail{color:hsla(0,0%,100%,.54)}.mdc-simple-menu--selected.mdc-list-item,.mdc-simple-menu--selected.mdc-list-item .mdc-list-item__start-detail{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-simple-menu .mdc-list-item:before{position:absolute;top:0;left:0;width:100%;height:100%;transition:opacity .12s cubic-bezier(0,0,.2,1);border-radius:inherit;background:currentColor;content:\"\";opacity:0}.mdc-simple-menu .mdc-list-item:focus:before{opacity:.12}.mdc-simple-menu .mdc-list-item:active:before{opacity:.18}.mdc-menu-anchor{position:relative;overflow:visible}.mdc-radio{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;box-sizing:border-box;width:40px;height:40px;flex:0 0 40px;padding:10px;cursor:pointer;will-change:opacity,transform,border-color,background-color,color}.mdc-radio:not(.mdc-ripple-upgraded):active:after,.mdc-radio:not(.mdc-ripple-upgraded):focus:before,.mdc-radio:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-radio:before{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-radio:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-radio.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-radio.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-radio.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-radio.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-radio:after{background-color:rgba(63,81,181,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-radio:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(14%))}}.mdc-radio.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-radio:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-radio:after,.mdc-radio:before{top:0;left:0;width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background:before{content:none}.mdc-radio__background{display:inline-block;position:absolute;width:50%;height:50%;box-sizing:border-box}.mdc-radio__background:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0);transition:opacity .12s cubic-bezier(.4,0,1,1) 0ms,transform .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:50%;content:\"\";opacity:0;pointer-events:none}.mdc-radio__outer-circle{border-color:rgba(0,0,0,.54);border:2px solid var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));position:absolute;top:0;left:0;width:100%;height:100%;transition:border-color .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:50%;box-sizing:border-box}.mdc-radio--theme-dark .mdc-radio__outer-circle,.mdc-theme--dark .mdc-radio__outer-circle{border-color:hsla(0,0%,100%,.7);border-color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-radio__inner-circle{background-color:rgba(0,0,0,.54);background-color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0);transition:transform .12s cubic-bezier(.4,0,1,1) 0ms,background-color .12s cubic-bezier(.4,0,1,1) 0ms;border-radius:50%;box-sizing:border-box}.mdc-radio--theme-dark .mdc-radio__inner-circle,.mdc-theme--dark .mdc-radio__inner-circle{background-color:hsla(0,0%,100%,.7);background-color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-radio__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;cursor:inherit;opacity:0;z-index:1}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);transform:scale(.5);transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background,fieldset:disabled .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle,fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio--theme-dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio--theme-dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio--theme-dark fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:hsla(0,0%,100%,.3)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:rgba(0,0,0,.26)}.mdc-radio--theme-dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio--theme-dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio--theme-dark fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-theme--dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-theme--dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-theme--dark fieldset:disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:hsla(0,0%,100%,.3)}.mdc-radio__native-control:focus+.mdc-radio__background:before{transform:scale(2);transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms;opacity:.26}@keyframes mdc-ripple-fg-radius-in{0%{transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);animation-timing-function:cubic-bezier(.4,0,.2,1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{opacity:0;animation-timing-function:linear}to{opacity:1}}@keyframes mdc-ripple-fg-opacity-out{0%{opacity:1;animation-timing-function:linear}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):hover:before{transition-duration:85ms;opacity:.6}.mdc-ripple-surface:before{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-ripple-surface.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface:after{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-ripple-surface:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-ripple-surface--primary:before{background-color:rgba(63,81,181,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-ripple-surface--primary:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(16%))}}.mdc-ripple-surface--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface--primary:after{background-color:rgba(63,81,181,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-ripple-surface--primary:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(16%))}}.mdc-ripple-surface--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-ripple-surface--accent:before{background-color:rgba(255,64,129,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-ripple-surface--accent:before{background-color:color(var(--mdc-theme-accent,#ff4081) a(16%))}}.mdc-ripple-surface--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-active-fill:before{transition-duration:.12s;opacity:1}.mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-ripple-surface--accent:after{background-color:rgba(255,64,129,.16);position:absolute;top:-50%;left:-50%;width:200%;height:200%;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}@supports (background-color:color(green a(10%))){.mdc-ripple-surface--accent:after{background-color:color(var(--mdc-theme-accent,#ff4081) a(16%))}}.mdc-ripple-surface--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center;opacity:0}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded--unbounded):after{transform-origin:center center}.mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);transform:scale(0);transform-origin:center center}.mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-activation:after{animation:.3s:local(mdc-ripple-fg-radius-in) forwards,83ms:local(mdc-ripple-fg-opacity-in) forwards}.mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-deactivation:after{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));animation:.25s:local(mdc-ripple-fg-opacity-out)}.mdc-select{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.04em;line-height:1.75rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));padding-left:0;padding-right:24px;appearance:none;display:inline-flex;align-items:center;justify-content:flex-start;max-width:calc(100% - 24px);height:32px;transition:border-bottom-color .15s cubic-bezier(.4,0,1,1) 0ms,background-color .15s cubic-bezier(.4,0,1,1) 0ms;border:none;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;background:none;background-repeat:no-repeat;background-position:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%230' fill-rule='evenodd' opacity='.54' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");font-family:Roboto,sans-serif;font-size:.936rem;cursor:pointer}.mdc-select[dir=rtl],[dir=rtl] .mdc-select{padding-left:24px;padding-right:0}.mdc-select::-ms-expand{display:none}.mdc-select:focus{border-bottom-color:#3f51b5;border-bottom-color:var(--mdc-theme-primary,#3f51b5);outline:none;background-color:rgba(0,0,0,.06)}.mdc-select[dir=rtl],[dir=rtl] .mdc-select{background-position:0}.mdc-select--theme-dark,.mdc-theme--dark .mdc-select{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' fill-rule='evenodd' opacity='.54' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");border-bottom:1px solid hsla(0,0%,100%,.12)}.mdc-select--theme-dark:focus,.mdc-theme--dark .mdc-select:focus{border-bottom-color:#3f51b5;border-bottom-color:var(--mdc-theme-primary,#3f51b5);background-color:hsla(0,0%,100%,.09)}.mdc-select__menu{position:fixed;top:0;left:0;max-height:100%;transform-origin:center center;overflow-y:scroll;z-index:4}.mdc-select__selected-text{transition:opacity 125ms cubic-bezier(.4,0,1,1) 0ms,transform 125ms cubic-bezier(.4,0,1,1) 0ms;white-space:nowrap;overflow:hidden}.mdc-select--open .mdc-select__selected-text{transform:translateY(8px);transition:opacity 125ms cubic-bezier(0,0,.2,1) 125ms,transform 125ms cubic-bezier(0,0,.2,1) 125ms;opacity:0}.mdc-select--disabled,.mdc-select[disabled]{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%230' fill-rule='evenodd' opacity='.38' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");border-bottom-style:dotted;cursor:default;pointer-events:none;user-select:none}.mdc-select--theme-dark.mdc-select--disabled,.mdc-select--theme-dark.mdc-select[disabled],.mdc-theme--dark .mdc-select--disabled,.mdc-theme--dark .mdc-select[disabled]{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5));background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' fill-rule='evenodd' opacity='.38' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");border-bottom:1px dotted hsla(0,0%,100%,.38)}.mdc-select__menu .mdc-list-item{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.04em;line-height:1.75rem;color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-select__menu .mdc-list-item[aria-selected=true]{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))}.mdc-select--theme-dark .mdc-select__menu .mdc-list-item,.mdc-theme--dark .mdc-select__menu .mdc-list-item{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-select--theme-dark .mdc-select__menu .mdc-list-item[aria-selected=true],.mdc-theme--dark .mdc-select__menu .mdc-list-item[aria-selected=true]{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-select__menu .mdc-list-group,.mdc-select__menu .mdc-list-group>.mdc-list-item:first-child{margin-top:12px}.mdc-select__menu .mdc-list-group{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));font-weight:400}.mdc-select__menu .mdc-list-group .mdc-list-item{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))}.mdc-select--theme-dark .mdc-select__menu .mdc-list-group,.mdc-theme--dark .mdc-select__menu .mdc-list-group{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-select--theme-dark .mdc-select__menu .mdc-list-group .mdc-list-item,.mdc-theme--dark .mdc-select__menu .mdc-list-group .mdc-list-item{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-multi-select{appearance:none;width:250px;padding:0;border:1px solid;border-color:rgba(0,0,0,.38);border-color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));outline:none}.mdc-multi-select--theme-dark,.mdc-theme--dark .mdc-multi-select{border-color:hsla(0,0%,100%,.5);border-color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-multi-select .mdc-list-group{margin:16px 0 0;padding:0 0 0 16px;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));font-weight:400}.mdc-multi-select .mdc-list-group--theme-dark,.mdc-theme--dark .mdc-multi-select .mdc-list-group{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-multi-select .mdc-list-group:last-child{margin-bottom:16px}.mdc-multi-select .mdc-list-group .mdc-list-divider{margin-left:-16px}.mdc-multi-select .mdc-list-item{margin:0 0 0 -16px;padding:0 16px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))}.mdc-multi-select .mdc-list-item--theme-dark,.mdc-theme--dark .mdc-multi-select .mdc-list-item{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-multi-select .mdc-list-item:first-child{margin-top:12px}.mdc-multi-select .mdc-list-item:last-child{margin-bottom:8px}.mdc-multi-select .mdc-list-item:checked{background-color:rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-multi-select .mdc-list-item:checked--theme-dark,.mdc-theme--dark .mdc-multi-select .mdc-list-item:checked{background-color:#fff;background-color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-multi-select:focus .mdc-list-item:checked{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-multi-select:focus .mdc-list-item:checked--theme-dark,.mdc-theme--dark .mdc-multi-select:focus .mdc-list-item:checked{background-color:#fff;background-color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-list-divider{margin-bottom:8px;padding-top:8px;font-size:0}.mdc-snackbar{display:flex;position:fixed;bottom:0;left:50%;align-items:center;justify-content:flex-start;padding-right:24px;padding-left:24px;transform:translateY(100%);transition:transform .25s cubic-bezier(.4,0,1,1) 0ms;background-color:#323232;will-change:transform;pointer-events:none}@media (max-width:599px){.mdc-snackbar{left:0;width:calc(100% - 48px)}}@media (min-width:600px){.mdc-snackbar{min-width:288px;max-width:568px;transform:translate(-50%,100%);border-radius:2px}}.mdc-snackbar--active{transform:translate(0);pointer-events:auto;transition:transform .25s cubic-bezier(0,0,.2,1) 0ms}@media (min-width:600px){.mdc-snackbar--active{transform:translate(-50%)}}.mdc-snackbar--action-on-bottom{flex-direction:column}.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin-right:inherit}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{flex-direction:column;justify-content:flex-start;margin:-12px 0 8px auto}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir=rtl],.mdc-snackbar__text,[dir=rtl] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{margin-left:0;margin-right:auto}.mdc-snackbar__text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;display:flex;align-items:center;height:48px;transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;color:#fff;opacity:0}.mdc-snackbar[dir=rtl] .mdc-snackbar__text,[dir=rtl] .mdc-snackbar .mdc-snackbar__text{margin-left:auto;margin-right:0}.mdc-snackbar--multiline .mdc-snackbar__text{height:80px}.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin:0}.mdc-snackbar__action-button{color:#ff4081;color:var(--mdc-theme-accent,#ff4081);margin-left:0;margin-right:-16px;min-width:auto;height:inherit;transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;opacity:0;visibility:hidden}.mdc-snackbar[dir=rtl] .mdc-snackbar__action-button,[dir=rtl] .mdc-snackbar .mdc-snackbar__action-button{margin-left:-16px;margin-right:0}.mdc-snackbar__action-button::-moz-focus-inner{border:0}.mdc-snackbar__action-button:not([aria-hidden]){visibility:inherit}.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]),.mdc-snackbar--active .mdc-snackbar__text{transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;opacity:1}.mdc-switch{display:inline-block;position:relative}.mdc-switch__native-control{display:inline-block;position:absolute;top:0;left:0;width:34px;height:14px;cursor:pointer;opacity:0;z-index:2}.mdc-switch__background{display:block;position:relative;width:34px;height:14px;border-radius:7px;outline:none;cursor:pointer;user-select:none}.mdc-switch--theme-dark .mdc-switch__background,.mdc-switch__background,.mdc-theme--dark .mdc-switch__background{background-color:transparent}.mdc-switch__background:before{display:block;position:absolute;top:0;right:0;bottom:0;left:0;transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1);border-radius:7px;background-color:#000;content:\"\";opacity:.38}.mdc-switch--theme-dark .mdc-switch__background:before,.mdc-theme--dark .mdc-switch__background:before{background-color:#fff;opacity:.3}.mdc-switch__background .mdc-switch__knob{display:block;position:absolute;top:-3px;left:0;width:20px;height:20px;transform:translateX(0);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1);border-radius:10px;background-color:#fafafa;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);z-index:1}.mdc-switch--theme-dark .mdc-switch__background .mdc-switch__knob,.mdc-theme--dark .mdc-switch__background .mdc-switch__knob{background-color:#bdbdbd}.mdc-switch__background .mdc-switch__knob:before{top:-14px;left:-14px;transform:scale(0);background-color:transparent;content:\"\";opacity:.2}.mdc-switch__background .mdc-switch__knob:before,.mdc-switch__native-control:focus~.mdc-switch__background .mdc-switch__knob:before{position:absolute;width:48px;height:48px;transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1);border-radius:24px}.mdc-switch__native-control:focus~.mdc-switch__background .mdc-switch__knob:before{transform:scale(1);background-color:#9e9e9e}.mdc-switch--theme-dark .mdc-switch__native-control:focus~.mdc-switch__background .mdc-switch__knob:before,.mdc-theme--dark .mdc-switch__native-control:focus~.mdc-switch__background .mdc-switch__knob:before{background-color:#f1f1f1;opacity:.14}.mdc-switch__native-control:checked~.mdc-switch__background:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);opacity:.5}.mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob{transform:translateX(14px);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1);background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);opacity:.15}.mdc-switch--theme-dark .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob:before,.mdc-theme--dark .mdc-switch__native-control:checked~.mdc-switch__background .mdc-switch__knob:before{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-switch__native-control:disabled{cursor:auto}.mdc-switch__native-control:disabled~.mdc-switch__background:before{background-color:#000;opacity:.12}.mdc-switch--theme-dark .mdc-switch__native-control:disabled~.mdc-switch__background:before,.mdc-theme--dark .mdc-switch__native-control:disabled~.mdc-switch__background:before{background-color:#fff;opacity:.1}.mdc-switch__native-control:disabled~.mdc-switch__background .mdc-switch__knob{background-color:#bdbdbd}.mdc-switch--theme-dark .mdc-switch__native-control:disabled~.mdc-switch__background .mdc-switch__knob,.mdc-theme--dark .mdc-switch__native-control:disabled~.mdc-switch__background .mdc-switch__knob{background-color:#424242}.mdc-textfield{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;letter-spacing:.04em;display:inline-block;margin-bottom:8px;will-change:opacity,transform,color}.mdc-textfield__input{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));padding:0 0 8px;border:none;background:none;font-size:inherit;appearance:none}.mdc-textfield__input::placeholder{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));transition:color .18s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-textfield__input:focus{outline:none}.mdc-textfield__input:focus::placeholder{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-textfield__input:invalid{box-shadow:none}.mdc-textfield__input--theme-dark,.mdc-theme--dark .mdc-textfield__input{color:#fff}.mdc-textfield__input--theme-dark::placeholder,.mdc-theme--dark .mdc-textfield__input::placeholder{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__input--theme-dark:focus::placeholder,.mdc-theme--dark .mdc-textfield__input:focus::placeholder{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-textfield__label{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));position:absolute;bottom:8px;left:0;transform-origin:left top;transition:transform .18s cubic-bezier(.4,0,.2,1),color .18s cubic-bezier(.4,0,.2,1);cursor:text}.mdc-textfield[dir=rtl] .mdc-textfield__label,[dir=rtl] .mdc-textfield .mdc-textfield__label{right:0;left:auto;transform-origin:right top}.mdc-textfield--theme-dark .mdc-textfield__label,.mdc-theme--dark .mdc-textfield__label{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__label--float-above{transform:translateY(-100%) scale(.75);cursor:auto}.mdc-textfield__input:-webkit-autofill+.mdc-textfield__label{transform:translateY(-100%) scale(.75);cursor:auto}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth){display:inline-flex;position:relative;box-sizing:border-box;align-items:flex-end;margin-top:16px}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline){height:48px}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{position:absolute;bottom:0;left:0;width:100%;height:1px;transform:translateY(50%) scaleY(1);transform-origin:center bottom;transition:background-color .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1);background-color:rgba(0,0,0,.12);content:\"\"}.mdc-textfield--theme-dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-theme--dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{background-color:hsla(0,0%,100%,.12)}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth) .mdc-textfield__label{pointer-events:none}.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-textfield--theme-dark.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-theme--dark .mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);transform:translateY(100%) scaleY(2);transition:transform .18s cubic-bezier(.4,0,.2,1)}.mdc-textfield--focused .mdc-textfield__label,.mdc-textfield--theme-dark .mdc-textfield--focused .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--focused .mdc-textfield__label{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield--dense{margin-top:12px;margin-bottom:4px;font-size:.813rem}.mdc-textfield--dense .mdc-textfield__label--float-above{transform:translateY(calc(-100% - 2px)) scale(.923)}.mdc-textfield--invalid:not(.mdc-textfield--focused):after{background-color:#d50000}.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label{color:#d50000}.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused):after,.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused):after{background-color:#ff6e6e}.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label{color:#ff6e6e}.mdc-textfield--disabled{border-bottom:1px dotted rgba(35,31,32,.26)}.mdc-textfield--disabled:after{display:none}.mdc-textfield--disabled .mdc-textfield__input{padding-bottom:7px}.mdc-textfield--theme-dark.mdc-textfield--disabled,.mdc-theme--dark .mdc-textfield--disabled{border-bottom:1px dotted hsla(0,0%,100%,.3)}.mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-textfield--disabled .mdc-textfield__input,.mdc-textfield--disabled .mdc-textfield__label{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-textfield--theme-dark.mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__input,.mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__label{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield--disabled .mdc-textfield__label{bottom:7px;cursor:default}.mdc-textfield__input:required+.mdc-textfield__label:after{margin-left:1px;content:\"*\"}.mdc-textfield--focused .mdc-textfield__input:required+.mdc-textfield__label:after{color:#d50000}.mdc-textfield--focused .mdc-textfield--theme-dark .mdc-textfield__input:required+.mdc-textfield__label:after,.mdc-textfield--focused .mdc-theme--dark .mdc-textfield__input:required+.mdc-textfield__label:after{color:#ff6e6e}.mdc-textfield--multiline{display:flex;height:auto;transition:none}.mdc-textfield--multiline:after{content:normal}.mdc-textfield--multiline .mdc-textfield__input{padding:4px;transition:border-color .18s cubic-bezier(.4,0,.2,1);border:1px solid rgba(0,0,0,.12);border-radius:2px}.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input{border-color:hsla(0,0%,100%,.12)}.mdc-textfield--multiline .mdc-textfield__input:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus){border-color:#d50000}.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus),.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus){border-color:#ff6e6e}.mdc-textfield--multiline .mdc-textfield__label{top:6px;bottom:auto;left:4px}.mdc-textfield--multiline[dir=rtl] .mdc-textfield--multiline .mdc-textfield__label,[dir=rtl] .mdc-textfield--multiline .mdc-textfield--multiline .mdc-textfield__label{right:4px;left:auto}.mdc-textfield--multiline .mdc-textfield__label--float-above{transform:translateY(calc(-100% - 6px)) scale(.923)}.mdc-textfield--multiline.mdc-textfield--disabled{border-bottom:none}.mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input{border:1px dotted rgba(35,31,32,.26)}.mdc-textfield--theme-dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input{border-color:hsla(0,0%,100%,.3)}.mdc-textfield--fullwidth{display:block;width:100%;box-sizing:border-box;margin:0;border:none;border-bottom:1px solid rgba(0,0,0,.12);outline:none}.mdc-textfield--fullwidth:not(.mdc-textfield--multiline){height:56px}.mdc-textfield--fullwidth.mdc-textfield--multiline{padding:20px 0 0}.mdc-textfield--fullwidth.mdc-textfield--dense:not(.mdc-textfield--multiline){height:48px}.mdc-textfield--fullwidth.mdc-textfield--dense.mdc-textfield--multiline{padding:16px 0 0}.mdc-textfield--fullwidth.mdc-textfield--disabled,.mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline{border-bottom:1px dotted rgba(0,0,0,.12)}.mdc-textfield--fullwidth--theme-dark,.mdc-theme--dark .mdc-textfield--fullwidth{border-bottom:1px solid hsla(0,0%,100%,.12)}.mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled,.mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled.mdc-textfield--multiline,.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled,.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline{border-bottom:1px dotted hsla(0,0%,100%,.12)}.mdc-textfield--fullwidth .mdc-textfield__input{width:100%;height:100%;padding:0;resize:none;border:none!important}.mdc-textfield:not(.mdc-textfield--upgraded):not(.mdc-textfield--multiline) .mdc-textfield__input{transition:border-bottom-color .18s cubic-bezier(.4,0,.2,1);border-bottom:1px solid rgba(0,0,0,.12)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));border-style:dotted;border-color:rgba(35,31,32,.26)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus){border-color:#d50000}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus),.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus){border-color:hsla(0,0%,100%,.12)}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled,.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5));border-color:hsla(0,0%,100%,.3)}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus),.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus){border-color:#ff6e6e}.mdc-textfield-helptext{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));margin:0;transition:opacity .18s cubic-bezier(.4,0,.2,1);font-size:.75rem;opacity:0;will-change:opacity}.mdc-textfield-helptext--theme-dark,.mdc-theme--dark .mdc-textfield-helptext{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield+.mdc-textfield-helptext{margin-bottom:8px}.mdc-textfield--dense+.mdc-textfield-helptext{margin-bottom:4px}.mdc-textfield--focused+.mdc-textfield-helptext:not(.mdc-textfield-helptext--validation-msg){opacity:1}.mdc-textfield-helptext--persistent{transition:none;opacity:1;will-change:auto}.mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg{color:#d50000;opacity:1}.mdc-textfield--theme-dark.mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg,.mdc-theme--dark .mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg{color:#ff6e6e}.mdc-form-field>.mdc-textfield+label{align-self:flex-start}:root{--mdc-theme-primary:#3f51b5;--mdc-theme-accent:#ff4081;--mdc-theme-background:#fff;--mdc-theme-text-primary-on-primary:#fff;--mdc-theme-text-secondary-on-primary:hsla(0,0%,100%,.7);--mdc-theme-text-hint-on-primary:hsla(0,0%,100%,.5);--mdc-theme-text-disabled-on-primary:hsla(0,0%,100%,.5);--mdc-theme-text-icon-on-primary:hsla(0,0%,100%,.5);--mdc-theme-text-primary-on-accent:#fff;--mdc-theme-text-secondary-on-accent:hsla(0,0%,100%,.7);--mdc-theme-text-hint-on-accent:hsla(0,0%,100%,.5);--mdc-theme-text-disabled-on-accent:hsla(0,0%,100%,.5);--mdc-theme-text-icon-on-accent:hsla(0,0%,100%,.5);--mdc-theme-text-primary-on-background:rgba(0,0,0,.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,.5)}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--primary{color:#3f51b5!important;color:var(--mdc-theme-primary,#3f51b5)!important}.mdc-theme--accent{color:#ff4081!important;color:var(--mdc-theme-accent,#ff4081)!important}.mdc-theme--text-primary-on-primary{color:#fff!important;color:var(--mdc-theme-text-primary-on-primary,#fff)!important}.mdc-theme--text-secondary-on-primary{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-primary,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-primary{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-primary,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-primary{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-primary,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-primary{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-primary,hsla(0,0%,100%,.5))!important}.mdc-theme--text-primary-on-accent{color:#fff!important;color:var(--mdc-theme-text-primary-on-accent,#fff)!important}.mdc-theme--text-secondary-on-accent{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-accent,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-accent{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-accent,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-accent{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-accent,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-accent{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-accent,hsla(0,0%,100%,.5))!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#3f51b5!important;background-color:var(--mdc-theme-primary,#3f51b5)!important}.mdc-theme--accent-bg{background-color:#ff4081!important;background-color:var(--mdc-theme-accent,#ff4081)!important}.mdc-toolbar{flex-direction:column;justify-content:space-between;background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-toolbar,.mdc-toolbar__row{display:flex;position:relative;width:100%;box-sizing:border-box}.mdc-toolbar__row{height:64px;padding:20px 28px}@media (max-width:599px){.mdc-toolbar__row{height:56px;padding:16px}}.mdc-toolbar__section{display:inline-flex;flex:1;align-items:flex-start;justify-content:center;z-index:1;overflow:hidden}.mdc-toolbar__section--align-start{justify-content:flex-start;order:-1}.mdc-toolbar__section--align-end{justify-content:flex-end;order:1}.mdc-toolbar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;font-weight:500;letter-spacing:.02em;line-height:2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;line-height:1.5rem}.mdc-toolbar--fixed{position:fixed;top:0;left:0;z-index:1;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-toolbar-fixed-adjust{margin-top:64px}@media (max-width:599px){.mdc-toolbar-fixed-adjust{margin-top:56px}}.mdc-toolbar__section--shrink-to-fit{flex:none}.mdc-typography,.mdc-typography--display4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--display4{font-size:7rem;font-weight:300;letter-spacing:-.04em;line-height:7rem}.mdc-typography--adjust-margin.mdc-typography--display4{margin:-1rem 0 3.5rem -.085em}.mdc-typography--display3{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:3.5rem;font-weight:400;letter-spacing:-.02em;line-height:3.5rem}.mdc-typography--adjust-margin.mdc-typography--display3{margin:-8px 0 64px -.07em}.mdc-typography--display2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:2.813rem;font-weight:400;letter-spacing:normal;line-height:3rem}.mdc-typography--adjust-margin.mdc-typography--display2{margin:-.5rem 0 4rem -.07em}.mdc-typography--display1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:2.125rem;font-weight:400;letter-spacing:normal;line-height:2.5rem}.mdc-typography--adjust-margin.mdc-typography--display1{margin:-.5rem 0 4rem -.07em}.mdc-typography--headline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.mdc-typography--adjust-margin.mdc-typography--headline{margin:-.5rem 0 1rem -.06em}.mdc-typography--title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;font-weight:500;letter-spacing:.02em;line-height:2rem}.mdc-typography--adjust-margin.mdc-typography--title{margin:-.5rem 0 1rem -.05em}.mdc-typography--subheading2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.04em;line-height:1.75rem}.mdc-typography--adjust-margin.mdc-typography--subheading2{margin:-.5rem 0 1rem -.06em}.mdc-typography--subheading1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.938rem;font-weight:400;letter-spacing:.04em;line-height:1.5rem}.mdc-typography--adjust-margin.mdc-typography--subheading1{margin:-.313rem 0 .813rem -.06em}.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem}.mdc-typography--adjust-margin.mdc-typography--body2{margin:-.25rem 0 .75rem}.mdc-typography--body1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem}.mdc-typography--adjust-margin.mdc-typography--body1{margin:-.25rem 0 .75rem}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;font-weight:400;letter-spacing:.08em;line-height:1.25rem}.mdc-typography--adjust-margin.mdc-typography--caption{margin:-.5rem 0 1rem -.04em}body,html{height:100%}body{padding:0;margin:0;box-sizing:border-box;width:100%}#romajs>div{display:flex;flex-direction:row}.romajs-menu{background:none;border:none;width:24px;height:24px;padding:0;margin:0;color:#fff;box-sizing:border-box;outline-style:none;text-decoration:none;cursor:pointer;padding:0 50px 0 0}.romajs-content{display:inline-flex;flex-direction:column;flex-grow:1;height:100%;box-sizing:border-box;margin:64px 0 0}.romajs-main{padding-left:16px}.romajs-toolbar .mdc-toolbar__section--align-end .material-icons{padding-right:20px;cursor:pointer}.romajs-card{max-height:300px;min-height:300px;justify-content:flex-start}.romajs-card .mdc-card__supporting-text{overflow-y:auto;margin-bottom:24px}.romajs-card .mdc-card__title--large{padding-top:3px}.romajs-card h1{float:left}.romajs-card .mdc-form-field{float:right}.romajs-card .romajs-elementIdent{padding-top:20px}", ""]);

// exports
exports.locals = {
	"mdc-animation-linear-out-slow-in": "mdc-animation-linear-out-slow-in",
	"mdc-animation-fast-out-slow-in": "mdc-animation-fast-out-slow-in",
	"mdc-animation-fast-out-linear-in": "mdc-animation-fast-out-linear-in",
	"mdc-button": "mdc-button",
	"mdc-ripple-upgraded": "mdc-ripple-upgraded",
	"mdc-ripple-upgraded--background-focused": "mdc-ripple-upgraded--background-focused",
	"mdc-ripple-upgraded--background-active-fill": "mdc-ripple-upgraded--background-active-fill",
	"mdc-ripple-upgraded--unbounded": "mdc-ripple-upgraded--unbounded",
	"mdc-ripple-upgraded--foreground-activation": "mdc-ripple-upgraded--foreground-activation",
	"mdc-ripple-upgraded--foreground-deactivation": "mdc-ripple-upgraded--foreground-deactivation",
	"mdc-button--theme-dark": "mdc-button--theme-dark",
	"mdc-theme--dark": "mdc-theme--dark",
	"mdc-button--primary": "mdc-button--primary",
	"mdc-button--accent": "mdc-button--accent",
	"mdc-button--dense": "mdc-button--dense",
	"mdc-button--raised": "mdc-button--raised",
	"mdc-button--compact": "mdc-button--compact",
	"mdc-card": "mdc-card",
	"mdc-card__primary": "mdc-card__primary",
	"mdc-card__title--large": "mdc-card__title--large",
	"mdc-card__supporting-text": "mdc-card__supporting-text",
	"mdc-card--theme-dark": "mdc-card--theme-dark",
	"mdc-card__actions": "mdc-card__actions",
	"mdc-card__action": "mdc-card__action",
	"mdc-card__actions--vertical": "mdc-card__actions--vertical",
	"mdc-card__media": "mdc-card__media",
	"mdc-card__media-item": "mdc-card__media-item",
	"mdc-card__media-item--1dot5x": "mdc-card__media-item--1dot5x",
	"mdc-card__media-item--2x": "mdc-card__media-item--2x",
	"mdc-card__media-item--3x": "mdc-card__media-item--3x",
	"mdc-card__title": "mdc-card__title",
	"mdc-card__subtitle": "mdc-card__subtitle",
	"mdc-card__horizontal-block": "mdc-card__horizontal-block",
	"mdc-checkbox": "mdc-checkbox",
	"mdc-checkbox__background": "mdc-checkbox__background",
	"mdc-checkbox--theme-dark": "mdc-checkbox--theme-dark",
	"mdc-checkbox__native-control": "mdc-checkbox__native-control",
	"mdc-checkbox__checkmark": "mdc-checkbox__checkmark",
	"mdc-checkbox__checkmark__path": "mdc-checkbox__checkmark__path",
	"mdc-checkbox__mixedmark": "mdc-checkbox__mixedmark",
	"mdc-checkbox--upgraded": "mdc-checkbox--upgraded",
	"mdc-checkbox--anim-unchecked-checked": "mdc-checkbox--anim-unchecked-checked",
	"mdc-checkbox--anim-unchecked-indeterminate": "mdc-checkbox--anim-unchecked-indeterminate",
	"mdc-checkbox-fade-in-background": "mdc-checkbox-fade-in-background",
	"mdc-checkbox-fade-in-background-dark": "mdc-checkbox-fade-in-background-dark",
	"mdc-checkbox--anim-checked-unchecked": "mdc-checkbox--anim-checked-unchecked",
	"mdc-checkbox--anim-indeterminate-unchecked": "mdc-checkbox--anim-indeterminate-unchecked",
	"mdc-checkbox-fade-out-background": "mdc-checkbox-fade-out-background",
	"mdc-checkbox-fade-out-background-dark": "mdc-checkbox-fade-out-background-dark",
	"mdc-checkbox--anim-checked-indeterminate": "mdc-checkbox--anim-checked-indeterminate",
	"mdc-checkbox--anim-indeterminate-checked": "mdc-checkbox--anim-indeterminate-checked",
	"mdc-dialog": "mdc-dialog",
	"mdc-dialog__surface": "mdc-dialog__surface",
	"mdc-dialog--theme-dark": "mdc-dialog--theme-dark",
	"mdc-dialog__backdrop": "mdc-dialog__backdrop",
	"mdc-dialog__header": "mdc-dialog__header",
	"mdc-dialog__header__empty": "mdc-dialog__header__empty",
	"mdc-dialog__header__title": "mdc-dialog__header__title",
	"mdc-dialog__body": "mdc-dialog__body",
	"mdc-dialog__body--scrollable": "mdc-dialog__body--scrollable",
	"mdc-dialog__footer": "mdc-dialog__footer",
	"mdc-dialog--open": "mdc-dialog--open",
	"mdc-dialog-scroll-lock": "mdc-dialog-scroll-lock",
	"mdc-persistent-drawer": "mdc-persistent-drawer",
	"mdc-persistent-drawer__toolbar-spacer": "mdc-persistent-drawer__toolbar-spacer",
	"mdc-persistent-drawer__toolbar-spacer--theme-dark": "mdc-persistent-drawer__toolbar-spacer--theme-dark",
	"mdc-persistent-drawer__header": "mdc-persistent-drawer__header",
	"mdc-persistent-drawer__header-content": "mdc-persistent-drawer__header-content",
	"mdc-list-group": "mdc-list-group",
	"mdc-list": "mdc-list",
	"mdc-list-item": "mdc-list-item",
	"mdc-list-item__start-detail": "mdc-list-item__start-detail",
	"mdc-list-item__start-detail--theme-dark": "mdc-list-item__start-detail--theme-dark",
	"mdc-persistent-drawer--selected": "mdc-persistent-drawer--selected",
	"mdc-persistent-drawer__drawer": "mdc-persistent-drawer__drawer",
	"mdc-persistent-drawer__drawer--theme-dark": "mdc-persistent-drawer__drawer--theme-dark",
	"mdc-persistent-drawer--animating": "mdc-persistent-drawer--animating",
	"mdc-persistent-drawer--open": "mdc-persistent-drawer--open",
	"mdc-permanent-drawer": "mdc-permanent-drawer",
	"mdc-permanent-drawer__toolbar-spacer": "mdc-permanent-drawer__toolbar-spacer",
	"mdc-permanent-drawer__toolbar-spacer--theme-dark": "mdc-permanent-drawer__toolbar-spacer--theme-dark",
	"mdc-permanent-drawer__header": "mdc-permanent-drawer__header",
	"mdc-permanent-drawer__header-content": "mdc-permanent-drawer__header-content",
	"mdc-permanent-drawer--selected": "mdc-permanent-drawer--selected",
	"mdc-permanent-drawer--theme-dark": "mdc-permanent-drawer--theme-dark",
	"mdc-permanent-drawer--floating": "mdc-permanent-drawer--floating",
	"mdc-permanent-drawer--floating--theme-dark": "mdc-permanent-drawer--floating--theme-dark",
	"mdc-temporary-drawer": "mdc-temporary-drawer",
	"mdc-temporary-drawer__toolbar-spacer": "mdc-temporary-drawer__toolbar-spacer",
	"mdc-temporary-drawer__toolbar-spacer--theme-dark": "mdc-temporary-drawer__toolbar-spacer--theme-dark",
	"mdc-temporary-drawer__header": "mdc-temporary-drawer__header",
	"mdc-temporary-drawer__header-content": "mdc-temporary-drawer__header-content",
	"mdc-temporary-drawer--selected": "mdc-temporary-drawer--selected",
	"mdc-temporary-drawer__drawer": "mdc-temporary-drawer__drawer",
	"mdc-temporary-drawer--theme-dark": "mdc-temporary-drawer--theme-dark",
	"mdc-temporary-drawer__content": "mdc-temporary-drawer__content",
	"mdc-temporary-drawer__footer": "mdc-temporary-drawer__footer",
	"mdc-temporary-drawer--animating": "mdc-temporary-drawer--animating",
	"mdc-temporary-drawer--open": "mdc-temporary-drawer--open",
	"mdc-elevation--z0": "mdc-elevation--z0",
	"mdc-elevation--z1": "mdc-elevation--z1",
	"mdc-elevation--z2": "mdc-elevation--z2",
	"mdc-elevation--z3": "mdc-elevation--z3",
	"mdc-elevation--z4": "mdc-elevation--z4",
	"mdc-elevation--z5": "mdc-elevation--z5",
	"mdc-elevation--z6": "mdc-elevation--z6",
	"mdc-elevation--z7": "mdc-elevation--z7",
	"mdc-elevation--z8": "mdc-elevation--z8",
	"mdc-elevation--z9": "mdc-elevation--z9",
	"mdc-elevation--z10": "mdc-elevation--z10",
	"mdc-elevation--z11": "mdc-elevation--z11",
	"mdc-elevation--z12": "mdc-elevation--z12",
	"mdc-elevation--z13": "mdc-elevation--z13",
	"mdc-elevation--z14": "mdc-elevation--z14",
	"mdc-elevation--z15": "mdc-elevation--z15",
	"mdc-elevation--z16": "mdc-elevation--z16",
	"mdc-elevation--z17": "mdc-elevation--z17",
	"mdc-elevation--z18": "mdc-elevation--z18",
	"mdc-elevation--z19": "mdc-elevation--z19",
	"mdc-elevation--z20": "mdc-elevation--z20",
	"mdc-elevation--z21": "mdc-elevation--z21",
	"mdc-elevation--z22": "mdc-elevation--z22",
	"mdc-elevation--z23": "mdc-elevation--z23",
	"mdc-elevation--z24": "mdc-elevation--z24",
	"mdc-elevation-transition": "mdc-elevation-transition",
	"mdc-fab": "mdc-fab",
	"mdc-fab--mini": "mdc-fab--mini",
	"mdc-fab--plain": "mdc-fab--plain",
	"mdc-fab__icon": "mdc-fab__icon",
	"mdc-form-field": "mdc-form-field",
	"mdc-form-field--theme-dark": "mdc-form-field--theme-dark",
	"mdc-form-field--align-end": "mdc-form-field--align-end",
	"mdc-grid-list": "mdc-grid-list",
	"mdc-grid-tile__primary": "mdc-grid-tile__primary",
	"mdc-grid-tile": "mdc-grid-tile",
	"mdc-grid-tile__secondary": "mdc-grid-tile__secondary",
	"mdc-grid-list__tiles": "mdc-grid-list__tiles",
	"mdc-grid-list--tile-gutter-1": "mdc-grid-list--tile-gutter-1",
	"mdc-grid-list--tile-aspect-16x9": "mdc-grid-list--tile-aspect-16x9",
	"mdc-grid-list--tile-aspect-3x2": "mdc-grid-list--tile-aspect-3x2",
	"mdc-grid-list--tile-aspect-2x3": "mdc-grid-list--tile-aspect-2x3",
	"mdc-grid-list--tile-aspect-4x3": "mdc-grid-list--tile-aspect-4x3",
	"mdc-grid-list--tile-aspect-3x4": "mdc-grid-list--tile-aspect-3x4",
	"mdc-grid-list--twoline-caption": "mdc-grid-list--twoline-caption",
	"mdc-grid-list--header-caption": "mdc-grid-list--header-caption",
	"mdc-grid-list--with-icon-align-start": "mdc-grid-list--with-icon-align-start",
	"mdc-grid-tile__icon": "mdc-grid-tile__icon",
	"mdc-grid-list--with-icon-align-end": "mdc-grid-list--with-icon-align-end",
	"mdc-grid-tile__primary-content": "mdc-grid-tile__primary-content",
	"mdc-grid-tile__title": "mdc-grid-tile__title",
	"mdc-grid-tile__support-text": "mdc-grid-tile__support-text",
	"mdc-icon-toggle": "mdc-icon-toggle",
	"mdc-icon-toggle--theme-dark": "mdc-icon-toggle--theme-dark",
	"mdc-icon-toggle--primary": "mdc-icon-toggle--primary",
	"mdc-icon-toggle--accent": "mdc-icon-toggle--accent",
	"mdc-icon-toggle--disabled": "mdc-icon-toggle--disabled",
	"mdc-layout-grid": "mdc-layout-grid",
	"mdc-layout-grid__cell": "mdc-layout-grid__cell",
	"mdc-layout-grid__cell--span-1": "mdc-layout-grid__cell--span-1",
	"mdc-layout-grid__cell--span-1-desktop": "mdc-layout-grid__cell--span-1-desktop",
	"mdc-layout-grid__cell--span-2": "mdc-layout-grid__cell--span-2",
	"mdc-layout-grid__cell--span-2-desktop": "mdc-layout-grid__cell--span-2-desktop",
	"mdc-layout-grid__cell--span-3": "mdc-layout-grid__cell--span-3",
	"mdc-layout-grid__cell--span-3-desktop": "mdc-layout-grid__cell--span-3-desktop",
	"mdc-layout-grid__cell--span-4": "mdc-layout-grid__cell--span-4",
	"mdc-layout-grid__cell--span-4-desktop": "mdc-layout-grid__cell--span-4-desktop",
	"mdc-layout-grid__cell--span-5": "mdc-layout-grid__cell--span-5",
	"mdc-layout-grid__cell--span-5-desktop": "mdc-layout-grid__cell--span-5-desktop",
	"mdc-layout-grid__cell--span-6": "mdc-layout-grid__cell--span-6",
	"mdc-layout-grid__cell--span-6-desktop": "mdc-layout-grid__cell--span-6-desktop",
	"mdc-layout-grid__cell--span-7": "mdc-layout-grid__cell--span-7",
	"mdc-layout-grid__cell--span-7-desktop": "mdc-layout-grid__cell--span-7-desktop",
	"mdc-layout-grid__cell--span-8": "mdc-layout-grid__cell--span-8",
	"mdc-layout-grid__cell--span-8-desktop": "mdc-layout-grid__cell--span-8-desktop",
	"mdc-layout-grid__cell--span-9": "mdc-layout-grid__cell--span-9",
	"mdc-layout-grid__cell--span-9-desktop": "mdc-layout-grid__cell--span-9-desktop",
	"mdc-layout-grid__cell--span-10": "mdc-layout-grid__cell--span-10",
	"mdc-layout-grid__cell--span-10-desktop": "mdc-layout-grid__cell--span-10-desktop",
	"mdc-layout-grid__cell--span-11": "mdc-layout-grid__cell--span-11",
	"mdc-layout-grid__cell--span-11-desktop": "mdc-layout-grid__cell--span-11-desktop",
	"mdc-layout-grid__cell--span-12": "mdc-layout-grid__cell--span-12",
	"mdc-layout-grid__cell--span-12-desktop": "mdc-layout-grid__cell--span-12-desktop",
	"mdc-layout-grid__cell--span-1-tablet": "mdc-layout-grid__cell--span-1-tablet",
	"mdc-layout-grid__cell--span-2-tablet": "mdc-layout-grid__cell--span-2-tablet",
	"mdc-layout-grid__cell--span-3-tablet": "mdc-layout-grid__cell--span-3-tablet",
	"mdc-layout-grid__cell--span-4-tablet": "mdc-layout-grid__cell--span-4-tablet",
	"mdc-layout-grid__cell--span-5-tablet": "mdc-layout-grid__cell--span-5-tablet",
	"mdc-layout-grid__cell--span-6-tablet": "mdc-layout-grid__cell--span-6-tablet",
	"mdc-layout-grid__cell--span-7-tablet": "mdc-layout-grid__cell--span-7-tablet",
	"mdc-layout-grid__cell--span-8-tablet": "mdc-layout-grid__cell--span-8-tablet",
	"mdc-layout-grid__cell--span-9-tablet": "mdc-layout-grid__cell--span-9-tablet",
	"mdc-layout-grid__cell--span-10-tablet": "mdc-layout-grid__cell--span-10-tablet",
	"mdc-layout-grid__cell--span-11-tablet": "mdc-layout-grid__cell--span-11-tablet",
	"mdc-layout-grid__cell--span-12-tablet": "mdc-layout-grid__cell--span-12-tablet",
	"mdc-layout-grid__cell--span-1-phone": "mdc-layout-grid__cell--span-1-phone",
	"mdc-layout-grid__cell--span-2-phone": "mdc-layout-grid__cell--span-2-phone",
	"mdc-layout-grid__cell--span-3-phone": "mdc-layout-grid__cell--span-3-phone",
	"mdc-layout-grid__cell--span-4-phone": "mdc-layout-grid__cell--span-4-phone",
	"mdc-layout-grid__cell--span-5-phone": "mdc-layout-grid__cell--span-5-phone",
	"mdc-layout-grid__cell--span-6-phone": "mdc-layout-grid__cell--span-6-phone",
	"mdc-layout-grid__cell--span-7-phone": "mdc-layout-grid__cell--span-7-phone",
	"mdc-layout-grid__cell--span-8-phone": "mdc-layout-grid__cell--span-8-phone",
	"mdc-layout-grid__cell--span-9-phone": "mdc-layout-grid__cell--span-9-phone",
	"mdc-layout-grid__cell--span-10-phone": "mdc-layout-grid__cell--span-10-phone",
	"mdc-layout-grid__cell--span-11-phone": "mdc-layout-grid__cell--span-11-phone",
	"mdc-layout-grid__cell--span-12-phone": "mdc-layout-grid__cell--span-12-phone",
	"mdc-layout-grid__cell--order-1": "mdc-layout-grid__cell--order-1",
	"mdc-layout-grid__cell--order-2": "mdc-layout-grid__cell--order-2",
	"mdc-layout-grid__cell--order-3": "mdc-layout-grid__cell--order-3",
	"mdc-layout-grid__cell--order-4": "mdc-layout-grid__cell--order-4",
	"mdc-layout-grid__cell--order-5": "mdc-layout-grid__cell--order-5",
	"mdc-layout-grid__cell--order-6": "mdc-layout-grid__cell--order-6",
	"mdc-layout-grid__cell--order-7": "mdc-layout-grid__cell--order-7",
	"mdc-layout-grid__cell--order-8": "mdc-layout-grid__cell--order-8",
	"mdc-layout-grid__cell--order-9": "mdc-layout-grid__cell--order-9",
	"mdc-layout-grid__cell--order-10": "mdc-layout-grid__cell--order-10",
	"mdc-layout-grid__cell--order-11": "mdc-layout-grid__cell--order-11",
	"mdc-layout-grid__cell--order-12": "mdc-layout-grid__cell--order-12",
	"mdc-layout-grid__cell--align-top": "mdc-layout-grid__cell--align-top",
	"mdc-layout-grid__cell--align-middle": "mdc-layout-grid__cell--align-middle",
	"mdc-layout-grid__cell--align-bottom": "mdc-layout-grid__cell--align-bottom",
	"mdc-list--theme-dark": "mdc-list--theme-dark",
	"mdc-list--dense": "mdc-list--dense",
	"mdc-list-item__end-detail": "mdc-list-item__end-detail",
	"mdc-list-item__text": "mdc-list-item__text",
	"mdc-list-item__text__secondary": "mdc-list-item__text__secondary",
	"mdc-list-item__text__secondary--theme-dark": "mdc-list-item__text__secondary--theme-dark",
	"mdc-list--avatar-list": "mdc-list--avatar-list",
	"mdc-list__item": "mdc-list__item",
	"mdc-list__item__start-detail": "mdc-list__item__start-detail",
	"mdc-list--two-line": "mdc-list--two-line",
	"mdc-list-divider": "mdc-list-divider",
	"mdc-list-divider--inset": "mdc-list-divider--inset",
	"mdc-list-group__subheader": "mdc-list-group__subheader",
	"mdc-list-group__subheader--theme-dark": "mdc-list-group__subheader--theme-dark",
	"mdc-simple-menu": "mdc-simple-menu",
	"mdc-simple-menu--theme-dark": "mdc-simple-menu--theme-dark",
	"mdc-simple-menu--open": "mdc-simple-menu--open",
	"mdc-simple-menu--animating": "mdc-simple-menu--animating",
	"mdc-simple-menu__items": "mdc-simple-menu__items",
	"mdc-simple-menu--open-from-top-left": "mdc-simple-menu--open-from-top-left",
	"mdc-simple-menu--open-from-top-right": "mdc-simple-menu--open-from-top-right",
	"mdc-simple-menu--open-from-bottom-left": "mdc-simple-menu--open-from-bottom-left",
	"mdc-simple-menu--open-from-bottom-right": "mdc-simple-menu--open-from-bottom-right",
	"mdc-simple-menu--selected": "mdc-simple-menu--selected",
	"mdc-menu-anchor": "mdc-menu-anchor",
	"mdc-radio": "mdc-radio",
	"mdc-radio__background": "mdc-radio__background",
	"mdc-radio__outer-circle": "mdc-radio__outer-circle",
	"mdc-radio--theme-dark": "mdc-radio--theme-dark",
	"mdc-radio__inner-circle": "mdc-radio__inner-circle",
	"mdc-radio__native-control": "mdc-radio__native-control",
	"mdc-radio--disabled": "mdc-radio--disabled",
	"mdc-ripple-surface": "mdc-ripple-surface",
	"mdc-ripple-surface--primary": "mdc-ripple-surface--primary",
	"mdc-ripple-surface--accent": "mdc-ripple-surface--accent",
	"mdc-select": "mdc-select",
	"mdc-select--theme-dark": "mdc-select--theme-dark",
	"mdc-select__menu": "mdc-select__menu",
	"mdc-select__selected-text": "mdc-select__selected-text",
	"mdc-select--open": "mdc-select--open",
	"mdc-select--disabled": "mdc-select--disabled",
	"mdc-multi-select": "mdc-multi-select",
	"mdc-multi-select--theme-dark": "mdc-multi-select--theme-dark",
	"mdc-list-group--theme-dark": "mdc-list-group--theme-dark",
	"mdc-list-item--theme-dark": "mdc-list-item--theme-dark",
	"mdc-snackbar": "mdc-snackbar",
	"mdc-snackbar--active": "mdc-snackbar--active",
	"mdc-snackbar--action-on-bottom": "mdc-snackbar--action-on-bottom",
	"mdc-snackbar__text": "mdc-snackbar__text",
	"mdc-snackbar__action-wrapper": "mdc-snackbar__action-wrapper",
	"mdc-snackbar--multiline": "mdc-snackbar--multiline",
	"mdc-snackbar__action-button": "mdc-snackbar__action-button",
	"mdc-switch": "mdc-switch",
	"mdc-switch__native-control": "mdc-switch__native-control",
	"mdc-switch__background": "mdc-switch__background",
	"mdc-switch--theme-dark": "mdc-switch--theme-dark",
	"mdc-switch__knob": "mdc-switch__knob",
	"mdc-textfield": "mdc-textfield",
	"mdc-textfield__input": "mdc-textfield__input",
	"mdc-textfield__input--theme-dark": "mdc-textfield__input--theme-dark",
	"mdc-textfield__label": "mdc-textfield__label",
	"mdc-textfield--theme-dark": "mdc-textfield--theme-dark",
	"mdc-textfield__label--float-above": "mdc-textfield__label--float-above",
	"mdc-textfield--upgraded": "mdc-textfield--upgraded",
	"mdc-textfield--fullwidth": "mdc-textfield--fullwidth",
	"mdc-textfield--multiline": "mdc-textfield--multiline",
	"mdc-textfield--focused": "mdc-textfield--focused",
	"mdc-textfield--dense": "mdc-textfield--dense",
	"mdc-textfield--invalid": "mdc-textfield--invalid",
	"mdc-textfield--disabled": "mdc-textfield--disabled",
	"mdc-textfield-helptext": "mdc-textfield-helptext",
	"mdc-textfield--fullwidth--theme-dark": "mdc-textfield--fullwidth--theme-dark",
	"mdc-textfield-helptext--theme-dark": "mdc-textfield-helptext--theme-dark",
	"mdc-textfield-helptext--validation-msg": "mdc-textfield-helptext--validation-msg",
	"mdc-textfield-helptext--persistent": "mdc-textfield-helptext--persistent",
	"mdc-theme--background": "mdc-theme--background",
	"mdc-theme--primary": "mdc-theme--primary",
	"mdc-theme--accent": "mdc-theme--accent",
	"mdc-theme--text-primary-on-primary": "mdc-theme--text-primary-on-primary",
	"mdc-theme--text-secondary-on-primary": "mdc-theme--text-secondary-on-primary",
	"mdc-theme--text-hint-on-primary": "mdc-theme--text-hint-on-primary",
	"mdc-theme--text-disabled-on-primary": "mdc-theme--text-disabled-on-primary",
	"mdc-theme--text-icon-on-primary": "mdc-theme--text-icon-on-primary",
	"mdc-theme--text-primary-on-accent": "mdc-theme--text-primary-on-accent",
	"mdc-theme--text-secondary-on-accent": "mdc-theme--text-secondary-on-accent",
	"mdc-theme--text-hint-on-accent": "mdc-theme--text-hint-on-accent",
	"mdc-theme--text-disabled-on-accent": "mdc-theme--text-disabled-on-accent",
	"mdc-theme--text-icon-on-accent": "mdc-theme--text-icon-on-accent",
	"mdc-theme--text-primary-on-background": "mdc-theme--text-primary-on-background",
	"mdc-theme--text-secondary-on-background": "mdc-theme--text-secondary-on-background",
	"mdc-theme--text-hint-on-background": "mdc-theme--text-hint-on-background",
	"mdc-theme--text-disabled-on-background": "mdc-theme--text-disabled-on-background",
	"mdc-theme--text-icon-on-background": "mdc-theme--text-icon-on-background",
	"mdc-theme--text-primary-on-light": "mdc-theme--text-primary-on-light",
	"mdc-theme--text-secondary-on-light": "mdc-theme--text-secondary-on-light",
	"mdc-theme--text-hint-on-light": "mdc-theme--text-hint-on-light",
	"mdc-theme--text-disabled-on-light": "mdc-theme--text-disabled-on-light",
	"mdc-theme--text-icon-on-light": "mdc-theme--text-icon-on-light",
	"mdc-theme--text-primary-on-dark": "mdc-theme--text-primary-on-dark",
	"mdc-theme--text-secondary-on-dark": "mdc-theme--text-secondary-on-dark",
	"mdc-theme--text-hint-on-dark": "mdc-theme--text-hint-on-dark",
	"mdc-theme--text-disabled-on-dark": "mdc-theme--text-disabled-on-dark",
	"mdc-theme--text-icon-on-dark": "mdc-theme--text-icon-on-dark",
	"mdc-theme--primary-bg": "mdc-theme--primary-bg",
	"mdc-theme--accent-bg": "mdc-theme--accent-bg",
	"mdc-toolbar": "mdc-toolbar",
	"mdc-toolbar__row": "mdc-toolbar__row",
	"mdc-toolbar__section": "mdc-toolbar__section",
	"mdc-toolbar__section--align-start": "mdc-toolbar__section--align-start",
	"mdc-toolbar__section--align-end": "mdc-toolbar__section--align-end",
	"mdc-toolbar__title": "mdc-toolbar__title",
	"mdc-toolbar--fixed": "mdc-toolbar--fixed",
	"mdc-toolbar-fixed-adjust": "mdc-toolbar-fixed-adjust",
	"mdc-toolbar__section--shrink-to-fit": "mdc-toolbar__section--shrink-to-fit",
	"mdc-typography": "mdc-typography",
	"mdc-typography--display4": "mdc-typography--display4",
	"mdc-typography--adjust-margin": "mdc-typography--adjust-margin",
	"mdc-typography--display3": "mdc-typography--display3",
	"mdc-typography--display2": "mdc-typography--display2",
	"mdc-typography--display1": "mdc-typography--display1",
	"mdc-typography--headline": "mdc-typography--headline",
	"mdc-typography--title": "mdc-typography--title",
	"mdc-typography--subheading2": "mdc-typography--subheading2",
	"mdc-typography--subheading1": "mdc-typography--subheading1",
	"mdc-typography--body2": "mdc-typography--body2",
	"mdc-typography--body1": "mdc-typography--body1",
	"mdc-typography--caption": "mdc-typography--caption",
	"romajs": "romajs",
	"romajs-menu": "romajs-menu",
	"romajs-content": "romajs-content",
	"romajs-main": "romajs-main",
	"romajs-toolbar": "romajs-toolbar",
	"material-icons": "material-icons",
	"romajs-card": "romajs-card",
	"romajs-elementIdent": "romajs-elementIdent",
	"mdc-ripple-fg-radius-in": "mdc-ripple-fg-radius-in",
	"mdc-ripple-fg-opacity-in": "mdc-ripple-fg-opacity-in",
	"mdc-ripple-fg-opacity-out": "mdc-ripple-fg-opacity-out",
	"mdc-checkbox-unchecked-checked-checkmark-path": "mdc-checkbox-unchecked-checked-checkmark-path",
	"mdc-checkbox-unchecked-indeterminate-mixedmark": "mdc-checkbox-unchecked-indeterminate-mixedmark",
	"mdc-checkbox-checked-unchecked-checkmark-path": "mdc-checkbox-checked-unchecked-checkmark-path",
	"mdc-checkbox-checked-indeterminate-checkmark": "mdc-checkbox-checked-indeterminate-checkmark",
	"mdc-checkbox-indeterminate-checked-checkmark": "mdc-checkbox-indeterminate-checked-checkmark",
	"mdc-checkbox-checked-indeterminate-mixedmark": "mdc-checkbox-checked-indeterminate-mixedmark",
	"mdc-checkbox-indeterminate-checked-mixedmark": "mdc-checkbox-indeterminate-checked-mixedmark",
	"mdc-checkbox-indeterminate-unchecked-mixedmark": "mdc-checkbox-indeterminate-unchecked-mixedmark"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/deep-diff/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter) {
        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
        else if (typeof(prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i = -1,
          last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/error-stack-parser/error-stack-parser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('stackframe'));
    } else {
        root.ErrorStackParser = factory(root.StackFrame);
    }
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') {
            return array.map(fn, thisArg);
        } else {
            var output = new Array(array.length);
            for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
            }
            return output;
        }
    }

    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') {
            return array.filter(fn, thisArg);
        } else {
            var output = [];
            for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                    output.push(array[i]);
                }
            }
            return output;
        }
    }

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName,
                        undefined,
                        locationParts[0],
                        locationParts[1],
                        locationParts[2],
                        line);
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame(
                            match[3] || undefined,
                            undefined,
                            match[2],
                            match[1],
                            undefined,
                            lines[i]
                        )
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return _map(filtered, function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');
                return new StackFrame(
                    functionName,
                    args,
                    locationParts[0],
                    locationParts[1],
                    locationParts[2],
                    line);
            }, this);
        }
    };
}));



/***/ }),

/***/ "./node_modules/events/events.js":
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "./node_modules/global/window.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__("./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__("./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__("./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__("./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__("./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__("./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__("./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__("./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__("./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__("./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__("./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__("./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__("./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__("./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__("./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__("./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__("./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__("./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__("./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__("./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    property = __webpack_require__("./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__("./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__("./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__("./node_modules/lodash/get.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__("./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__("./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__("./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__("./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__("./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__("./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__("./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__("./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__("./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__("./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/difference.js":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__("./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__("./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__("./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__("./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__("./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__("./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/string_decoder/index.js":
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__("./node_modules/buffer/index.js").Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),

/***/ "./node_modules/process-nextick-args/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-deep-force-update/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getForceUpdate;
function traverseRenderedChildren(internalInstance, callback, argument) {
  callback(internalInstance, argument);

  if (internalInstance._renderedComponent) {
    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
  } else {
    for (var key in internalInstance._renderedChildren) {
      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
      }
    }
  }
}

function setPendingForceUpdate(internalInstance) {
  if (internalInstance._pendingForceUpdate === false) {
    internalInstance._pendingForceUpdate = true;
  }
}

function forceUpdateIfPending(internalInstance, React) {
  if (internalInstance._pendingForceUpdate === true) {
    var publicInstance = internalInstance._instance;
    React.Component.prototype.forceUpdate.call(publicInstance);
  }
}

function getForceUpdate(React) {
  return function (instance) {
    var internalInstance = instance._reactInternalInstance;
    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-proxy/modules/bindAutoBindMethods.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAutoBindMethods;
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of React source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Original:
 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
 */

function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);

  boundMethod.__reactBoundContext = component;
  boundMethod.__reactBoundMethod = method;
  boundMethod.__reactBoundArguments = null;

  var componentName = component.constructor.displayName,
      _bind = boundMethod.bind;

  boundMethod.bind = function (newThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (newThis !== component && newThis !== null) {
      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
    } else if (!args.length) {
      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
      return boundMethod;
    }

    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;

    return reboundMethod;
  };

  return boundMethod;
}

function bindAutoBindMethodsFromMap(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      return;
    }

    // Tweak: skip methods that are already bound.
    // This is to preserve method reference in case it is used
    // as a subscription handler that needs to be detached later.
    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = component.__reactAutoBindMap[autoBindKey];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

function bindAutoBindMethods(component) {
  if (component.__reactAutoBindPairs) {
    bindAutoBindMethodsFromArray(component);
  } else if (component.__reactAutoBindMap) {
    bindAutoBindMethodsFromMap(component);
  }
}

function bindAutoBindMethodsFromArray(component) {
  var pairs = component.__reactAutoBindPairs;

  if (!pairs) {
    return;
  }

  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];

    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = pairs[i + 1];

    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/***/ }),

/***/ "./node_modules/react-proxy/modules/createClassProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = proxyClass;
exports.default = createClassProxy;

var _find = __webpack_require__("./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _createPrototypeProxy = __webpack_require__("./node_modules/react-proxy/modules/createPrototypeProxy.js");

var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

var _bindAutoBindMethods = __webpack_require__("./node_modules/react-proxy/modules/bindAutoBindMethods.js");

var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

var _deleteUnknownAutoBindMethods = __webpack_require__("./node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js");

var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

var _supportsProtoAssignment = __webpack_require__("./node_modules/react-proxy/modules/supportsProtoAssignment.js");

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];

function isEqualDescriptor(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// This was originally a WeakMap but we had issues with React Native:
// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
var allProxies = [];
function findProxy(Component) {
  var pair = (0, _find2.default)(allProxies, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var key = _ref2[0];
    return key === Component;
  });
  return pair ? pair[1] : null;
}
function addProxy(Component, proxy) {
  allProxies.push([Component, proxy]);
}

function proxyClass(InitialComponent) {
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = findProxy(InitialComponent);
  if (existingProxy) {
    return existingProxy;
  }

  var prototypeProxy = (0, _createPrototypeProxy2.default)();
  var CurrentComponent = undefined;
  var ProxyComponent = undefined;

  var staticDescriptors = {};
  function wasStaticModifiedByUser(key) {
    // Compare the descriptor with the one we previously set ourselves.
    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
  }

  function instantiate(factory, context, params) {
    var component = factory();

    try {
      return component.apply(context, params);
    } catch (err) {
      (function () {
        // Native ES6 class instantiation
        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

        Object.keys(instance).forEach(function (key) {
          if (RESERVED_STATICS.indexOf(key) > -1) {
            return;
          }
          context[key] = instance[key];
        });
      })();
    }
  }

  try {
    // Create a proxy constructor with matching name
    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + (InitialComponent.name || 'ProxyComponent') + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
      return CurrentComponent;
    }, instantiate);
  } catch (err) {
    // Some environments may forbid dynamic evaluation
    ProxyComponent = function ProxyComponent() {
      return instantiate(function () {
        return CurrentComponent;
      }, this, arguments);
    };
  }

  // Point proxy constructor to the proxy prototype
  ProxyComponent.prototype = prototypeProxy.get();

  // Proxy toString() to the current constructor
  ProxyComponent.toString = function toString() {
    return CurrentComponent.toString();
  };

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    // Prevent proxy cycles
    var existingProxy = findProxy(NextComponent);
    if (existingProxy) {
      return update(existingProxy.__getCurrent());
    }

    // Save the next constructor so we call it
    CurrentComponent = NextComponent;

    // Update the prototype proxy with new methods
    var mountedInstances = prototypeProxy.update(NextComponent.prototype);

    // Set up the constructor property so accessing the statics work
    ProxyComponent.prototype.constructor = ProxyComponent;

    // Set up the same prototype for inherited statics
    ProxyComponent.__proto__ = NextComponent.__proto__;

    // Copy static methods and properties
    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
        configurable: true
      });

      // Copy static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        Object.defineProperty(ProxyComponent, key, staticDescriptor);
        staticDescriptors[key] = staticDescriptor;
      }
    });

    // Remove old static methods and properties
    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      // Skip statics that exist on the next class
      if (NextComponent.hasOwnProperty(key)) {
        return;
      }

      // Skip non-configurable statics
      var descriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
      if (descriptor && !descriptor.configurable) {
        return;
      }

      // Delete static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        delete ProxyComponent[key];
        delete staticDescriptors[key];
      }
    });

    // Try to infer displayName
    ProxyComponent.displayName = NextComponent.displayName || NextComponent.name;

    // We might have added new methods that need to be auto-bound
    mountedInstances.forEach(_bindAutoBindMethods2.default);
    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);

    // Let the user take care of redrawing
    return mountedInstances;
  };

  function get() {
    return ProxyComponent;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  addProxy(ProxyComponent, proxy);

  Object.defineProperty(proxy, '__getCurrent', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

function createFallback(Component) {
  var CurrentComponent = Component;

  return {
    get: function get() {
      return CurrentComponent;
    },
    update: function update(NextComponent) {
      CurrentComponent = NextComponent;
    }
  };
}

function createClassProxy(Component) {
  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
}

/***/ }),

/***/ "./node_modules/react-proxy/modules/createPrototypeProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrototypeProxy;

var _assign = __webpack_require__("./node_modules/lodash/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _difference = __webpack_require__("./node_modules/lodash/difference.js");

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrototypeProxy() {
  var proxy = {};
  var current = null;
  var mountedInstances = [];

  /**
   * Creates a proxied toString() method pointing to the current version's toString().
   */
  function proxyToString(name) {
    // Wrap to always call the current version
    return function toString() {
      if (typeof current[name] === 'function') {
        return current[name].toString();
      } else {
        return '<method was deleted>';
      }
    };
  }

  /**
   * Creates a proxied method that calls the current version, whenever available.
   */
  function proxyMethod(name) {
    // Wrap to always call the current version
    var proxiedMethod = function proxiedMethod() {
      if (typeof current[name] === 'function') {
        return current[name].apply(this, arguments);
      }
    };

    // Copy properties of the original function, if any
    (0, _assign2.default)(proxiedMethod, current[name]);
    proxiedMethod.toString = proxyToString(name);

    return proxiedMethod;
  }

  /**
   * Augments the original componentDidMount with instance tracking.
   */
  function proxiedComponentDidMount() {
    mountedInstances.push(this);
    if (typeof current.componentDidMount === 'function') {
      return current.componentDidMount.apply(this, arguments);
    }
  }
  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

  /**
   * Augments the original componentWillUnmount with instance tracking.
   */
  function proxiedComponentWillUnmount() {
    var index = mountedInstances.indexOf(this);
    // Unless we're in a weird environment without componentDidMount
    if (index !== -1) {
      mountedInstances.splice(index, 1);
    }
    if (typeof current.componentWillUnmount === 'function') {
      return current.componentWillUnmount.apply(this, arguments);
    }
  }
  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

  /**
   * Defines a property on the proxy.
   */
  function defineProxyProperty(name, descriptor) {
    Object.defineProperty(proxy, name, descriptor);
  }

  /**
   * Defines a property, attempting to keep the original descriptor configuration.
   */
  function defineProxyPropertyWithValue(name, value) {
    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

    var _ref$enumerable = _ref.enumerable;
    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
    var _ref$writable = _ref.writable;
    var writable = _ref$writable === undefined ? true : _ref$writable;


    defineProxyProperty(name, {
      configurable: true,
      enumerable: enumerable,
      writable: writable,
      value: value
    });
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindMap() {
    if (!current.__reactAutoBindMap) {
      return;
    }

    var __reactAutoBindMap = {};
    for (var name in current.__reactAutoBindMap) {
      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
        __reactAutoBindMap[name] = proxy[name];
      }
    }

    return __reactAutoBindMap;
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindPairs() {
    var __reactAutoBindPairs = [];

    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
      var name = current.__reactAutoBindPairs[i];
      var method = proxy[name];

      if (typeof method === 'function') {
        __reactAutoBindPairs.push(name, method);
      }
    }

    return __reactAutoBindPairs;
  }

  /**
   * Applies the updated prototype.
   */
  function update(next) {
    // Save current source of truth
    current = next;

    // Find changed property names
    var currentNames = Object.getOwnPropertyNames(current);
    var previousName = Object.getOwnPropertyNames(proxy);
    var removedNames = (0, _difference2.default)(previousName, currentNames);

    // Remove properties and methods that are no longer there
    removedNames.forEach(function (name) {
      delete proxy[name];
    });

    // Copy every descriptor
    currentNames.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(current, name);
      if (typeof descriptor.value === 'function') {
        // Functions require additional wrapping so they can be bound later
        defineProxyPropertyWithValue(name, proxyMethod(name));
      } else {
        // Other values can be copied directly
        defineProxyProperty(name, descriptor);
      }
    });

    // Track mounting and unmounting
    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

    if (current.hasOwnProperty('__reactAutoBindMap')) {
      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
    }

    if (current.hasOwnProperty('__reactAutoBindPairs')) {
      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
    }

    // Set up the prototype chain
    proxy.__proto__ = next;

    return mountedInstances;
  }

  /**
   * Returns the up-to-date proxy prototype.
   */
  function get() {
    return proxy;
  }

  return {
    update: update,
    get: get
  };
};

/***/ }),

/***/ "./node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUnknownAutoBindMethods;
function shouldDeleteClassicInstanceMethod(component, name) {
  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component[name].__reactBoundArguments !== null) {
    // It's a function bound to specific args, keep it
    return false;
  }

  // It's a cached bound method for a function
  // that was deleted by user, so we delete it from component.
  return true;
}

function shouldDeleteModernInstanceMethod(component, name) {
  var prototype = component.constructor.prototype;

  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

  if (!prototypeDescriptor || !prototypeDescriptor.get) {
    // This is definitely not an autobinding getter
    return false;
  }

  if (prototypeDescriptor.get().length !== component[name].length) {
    // The length doesn't match, bail out
    return false;
  }

  // This seems like a method bound using an autobinding getter on the prototype
  // Hopefully we won't run into too many false positives.
  return true;
}

function shouldDeleteInstanceMethod(component, name) {
  var descriptor = Object.getOwnPropertyDescriptor(component, name);
  if (typeof descriptor.value !== 'function') {
    // Not a function, or something fancy: bail out
    return;
  }

  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
    // Classic
    return shouldDeleteClassicInstanceMethod(component, name);
  } else {
    // Modern
    return shouldDeleteModernInstanceMethod(component, name);
  }
}

/**
 * Deletes autobound methods from the instance.
 *
 * For classic React classes, we only delete the methods that no longer exist in map.
 * This means the user actually deleted them in code.
 *
 * For modern classes, we delete methods that exist on prototype with the same length,
 * and which have getters on prototype, but are normal values on the instance.
 * This is usually an indication that an autobinding decorator is being used,
 * and the getter will re-generate the memoized handler on next access.
 */
function deleteUnknownAutoBindMethods(component) {
  var names = Object.getOwnPropertyNames(component);

  names.forEach(function (name) {
    if (shouldDeleteInstanceMethod(component, name)) {
      delete component[name];
    }
  });
}

/***/ }),

/***/ "./node_modules/react-proxy/modules/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForceUpdate = exports.createProxy = undefined;

var _supportsProtoAssignment = __webpack_require__("./node_modules/react-proxy/modules/supportsProtoAssignment.js");

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

var _createClassProxy = __webpack_require__("./node_modules/react-proxy/modules/createClassProxy.js");

var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

var _reactDeepForceUpdate = __webpack_require__("./node_modules/react-deep-force-update/lib/index.js");

var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _supportsProtoAssignment2.default)()) {
  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
}

exports.createProxy = _createClassProxy2.default;
exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ }),

/***/ "./node_modules/react-proxy/modules/supportsProtoAssignment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsProtoAssignment;
var x = {};
var y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

function supportsProtoAssignment() {
  return x.supports || false;
};

/***/ }),

/***/ "./node_modules/react-transform-catch-errors/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = catchErrors;
function catchErrors(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;

  var _imports = _slicedToArray(imports, 3);

  var React = _imports[0];
  var ErrorReporter = _imports[1];
  var reporterOptions = _imports[2];

  if (!React || !React.Component) {
    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
  }
  if (typeof ErrorReporter !== 'function') {
    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
  }

  return function wrapToCatchErrors(ReactClass, componentId) {
    var originalRender = ReactClass.prototype.render;

    ReactClass.prototype.render = function tryRender() {
      try {
        return originalRender.apply(this, arguments);
      } catch (err) {
        setTimeout(function () {
          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
            // We're in React Native. Don't throw.
            // Stop react-native from triggering its own error handler
            console.reportErrorsAsExceptions = false;
            // Log an error
            console.error(err);
            // Reactivate it so other errors are still handled
            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
          } else {
            throw err;
          }
        });

        return React.createElement(ErrorReporter, _extends({
          error: err,
          filename: filename
        }, reporterOptions));
      }
    };

    return ReactClass;
  };
}

/***/ }),

/***/ "./node_modules/react-transform-hmr/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = proxyReactComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactProxy = __webpack_require__("./node_modules/react-proxy/modules/index.js");

var _globalWindow = __webpack_require__("./node_modules/global/window.js");

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var componentProxies = undefined;
if (_globalWindow2['default'].__reactComponentProxies) {
  componentProxies = _globalWindow2['default'].__reactComponentProxies;
} else {
  componentProxies = {};
  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: componentProxies
  });
}

function proxyReactComponents(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;
  var locals = _ref.locals;

  var _imports = _slicedToArray(imports, 1);

  var React = _imports[0];

  var _locals = _slicedToArray(locals, 1);

  var hot = _locals[0].hot;

  if (!React.Component) {
    throw new Error('imports[0] for react-transform-hmr does not look like React.');
  }

  if (!hot || typeof hot.accept !== 'function') {
    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
  }

  if (Object.keys(components).some(function (key) {
    return !components[key].isInFunction;
  })) {
    hot.accept(function (err) {
      if (err) {
        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
        console.error(err);
      }
    });
  }

  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);

  return function wrapWithProxy(ReactClass, uniqueId) {
    var _components$uniqueId = components[uniqueId];
    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
    var _components$uniqueId$displayName = _components$uniqueId.displayName;
    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;

    if (isInFunction) {
      return ReactClass;
    }

    var globalUniqueId = filename + '$' + uniqueId;
    if (componentProxies[globalUniqueId]) {
      (function () {
        console.info('[React Transform HMR] Patching ' + displayName);
        var instances = componentProxies[globalUniqueId].update(ReactClass);
        setTimeout(function () {
          return instances.forEach(forceUpdate);
        });
      })();
    } else {
      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
    }

    return componentProxies[globalUniqueId].get();
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/readable-stream/duplex-browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");


/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = __webpack_require__("./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__("./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

var Readable = __webpack_require__("./node_modules/readable-stream/lib/_stream_readable.js");
var Writable = __webpack_require__("./node_modules/readable-stream/lib/_stream_writable.js");

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__("./node_modules/readable-stream/lib/_stream_transform.js");

/*<replacement>*/
var util = __webpack_require__("./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = Readable;

/*<replacement>*/
var processNextTick = __webpack_require__("./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var isArray = __webpack_require__("./node_modules/isarray/index.js");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__("./node_modules/events/events.js").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

var Buffer = __webpack_require__("./node_modules/buffer/index.js").Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__("./node_modules/buffer-shims/index.js");
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__("./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(1);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__("./node_modules/readable-stream/lib/internal/streams/BufferList.js");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/node-libs-browser/node_modules/string_decoder/index.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__("./node_modules/node-libs-browser/node_modules/string_decoder/index.js").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");

/*<replacement>*/
var util = __webpack_require__("./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



module.exports = Writable;

/*<replacement>*/
var processNextTick = __webpack_require__("./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__("./node_modules/core-util-is/lib/util.js");
util.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__("./node_modules/util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

var Buffer = __webpack_require__("./node_modules/buffer/index.js").Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__("./node_modules/buffer-shims/index.js");
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = Buffer.isBuffer(chunk);

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__("./node_modules/buffer/index.js").Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__("./node_modules/buffer-shims/index.js");
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/events/events.js").EventEmitter;


/***/ }),

/***/ "./node_modules/readable-stream/passthrough.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/readable-stream/readable-browser.js").PassThrough


/***/ }),

/***/ "./node_modules/readable-stream/readable-browser.js":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__("./node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__("./node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__("./node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__("./node_modules/readable-stream/lib/_stream_passthrough.js");


/***/ }),

/***/ "./node_modules/readable-stream/transform.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/readable-stream/readable-browser.js").Transform


/***/ }),

/***/ "./node_modules/readable-stream/writable-browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/readable-stream/lib/_stream_writable.js");


/***/ }),

/***/ "./node_modules/redbox-react/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = __webpack_require__("./node_modules/redbox-react/lib/style.js");

var _style2 = _interopRequireDefault(_style);

var _errorStackParser = __webpack_require__("./node_modules/error-stack-parser/error-stack-parser.js");

var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lib = __webpack_require__("./node_modules/redbox-react/lib/lib.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedBoxError = exports.RedBoxError = function (_get__2) {
  _inherits(RedBoxError, _get__2);

  function RedBoxError() {
    _classCallCheck(this, RedBoxError);

    return _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).apply(this, arguments));
  }

  _createClass(RedBoxError, [{
    key: 'renderFrames',
    value: function renderFrames(frames) {
      var _props = this.props,
          filename = _props.filename,
          editorScheme = _props.editorScheme,
          useLines = _props.useLines,
          useColumns = _props.useColumns;

      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style),
          frame = _get__3.frame,
          file = _get__3.file,
          linkToFile = _get__3.linkToFile;

      return frames.map(function (f, index) {
        var text = void 0;
        var url = void 0;

        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
          url = _get__('makeUrl')(filename, editorScheme);
          text = _get__('makeLinkText')(filename);
        } else {
          var lines = useLines ? f.lineNumber : null;
          var columns = useColumns ? f.columnNumber : null;
          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
          text = _get__('makeLinkText')(f.fileName, lines, columns);
        }

        return _get__('React').createElement(
          'div',
          { style: frame, key: index },
          _get__('React').createElement(
            'div',
            null,
            f.functionName
          ),
          _get__('React').createElement(
            'div',
            { style: file },
            _get__('React').createElement(
              'a',
              { href: url, style: linkToFile },
              text
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          error = _props2.error,
          className = _props2.className;

      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style),
          redbox = _get__4.redbox,
          message = _get__4.message,
          stack = _get__4.stack,
          frame = _get__4.frame;

      var frames = void 0;
      var parseError = void 0;
      try {
        frames = _get__('ErrorStackParser').parse(error);
      } catch (e) {
        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
      }

      if (parseError) {
        frames = _get__('React').createElement(
          'div',
          { style: frame, key: 0 },
          _get__('React').createElement(
            'div',
            null,
            parseError.message
          )
        );
      } else {
        frames = this.renderFrames(frames);
      }

      return _get__('React').createElement(
        'div',
        { style: redbox, className: className },
        _get__('React').createElement(
          'div',
          { style: message },
          error.name,
          ': ',
          error.message
        ),
        _get__('React').createElement(
          'div',
          { style: stack },
          frames
        )
      );
    }
  }]);

  return RedBoxError;
}(_get__('Component'));

// "Portal" component for actual RedBoxError component to
// render to (directly under body). Prevents bugs as in #27.


RedBoxError.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired,
  filename: _get__('PropTypes').string,
  editorScheme: _get__('PropTypes').string,
  useLines: _get__('PropTypes').bool,
  useColumns: _get__('PropTypes').bool,
  style: _get__('PropTypes').object,
  className: _get__('PropTypes').string
};
RedBoxError.displayName = 'RedBoxError';
RedBoxError.defaultProps = {
  useLines: true,
  useColumns: true
};

var RedBox = function (_get__5) {
  _inherits(RedBox, _get__5);

  function RedBox() {
    _classCallCheck(this, RedBox);

    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
  }

  _createClass(RedBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el = document.createElement('div');
      document.body.appendChild(this.el);
      this.renderRedBoxError();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderRedBoxError();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get__('ReactDOM').unmountComponentAtNode(this.el);
      document.body.removeChild(this.el);
      this.el = null;
    }
  }, {
    key: 'renderRedBoxError',
    value: function renderRedBoxError() {
      _get__('ReactDOM').render(_get__('React').createElement(_get__('RedBoxError'), this.props), this.el);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RedBox;
}(_get__('Component'));

RedBox.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired
};
RedBox.displayName = 'RedBox';
exports.default = RedBox;

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'PropTypes':
      return _propTypes2.default;

    case 'assign':
      return _objectAssign2.default;

    case 'style':
      return _style2.default;

    case 'isFilenameAbsolute':
      return _lib.isFilenameAbsolute;

    case 'makeUrl':
      return _lib.makeUrl;

    case 'makeLinkText':
      return _lib.makeLinkText;

    case 'ErrorStackParser':
      return _errorStackParser2.default;

    case 'Component':
      return _react.Component;

    case 'ReactDOM':
      return _reactDom2.default;

    case 'React':
      return _react2.default;

    case 'RedBoxError':
      return RedBoxError;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(RedBox, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;

/***/ }),

/***/ "./node_modules/redbox-react/lib/lib.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var index = filename.lastIndexOf('!');

  return index < 0 ? filename : filename.substr(index + 1);
};

var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  return actualFilename !== filename;
};

var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
  return (/^[\w]+\:/.test(filename)
  );
};

var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (actualFilename.indexOf('/') === 0) {
    return true;
  }

  return false;
};

var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (_get__('filenameHasSchema')(filename)) {
    return actualFilename;
  }

  var url = 'file://' + actualFilename;

  if (scheme) {
    url = scheme + '://open?url=' + url;

    if (line && actualFilename === filename) {
      url = url + '&line=' + line;

      if (column) {
        url = url + '&column=' + column;
      }
    }
  }

  return url;
};

var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
  var text = _get__('filenameWithoutLoaders')(filename);

  if (line && text === filename) {
    text = text + ':' + line;

    if (column) {
      text = text + ':' + column;
    }
  }

  return text;
};

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'filenameWithoutLoaders':
      return filenameWithoutLoaders;

    case 'filenameHasSchema':
      return filenameHasSchema;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
exports.default = _RewireAPI__;

/***/ }),

/***/ "./node_modules/redbox-react/lib/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DefaultExportValue = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    position: 'fixed',
    padding: 10,
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    width: '100%',
    background: 'rgb(204, 0, 0)',
    color: 'white',
    zIndex: 2147483647,
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.2,
    overflow: 'auto'
  },
  message: {
    fontWeight: 'bold'
  },
  stack: {
    fontFamily: 'monospace',
    marginTop: '2em'
  },
  frame: {
    marginTop: '1em'
  },
  file: {
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
  }
};
exports.default = _DefaultExportValue;

/***/ }),

/***/ "./node_modules/redux-logger/lib/core.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.printBuffer = printBuffer;

var _helpers = __webpack_require__("./node_modules/redux-logger/lib/helpers.js");

var _diff = __webpack_require__("./node_modules/redux-logger/lib/diff.js");

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp,
      duration = options.duration;


  return function (action, time, took) {
    var parts = ['action'];

    parts.push('%c' + String(action.type));
    if (timestamp) parts.push('%c@ ' + time);
    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

    return parts.join(' ');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger,
      actionTransformer = options.actionTransformer,
      _options$titleFormatt = options.titleFormatter,
      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
      collapsed = options.collapsed,
      colors = options.colors,
      level = options.level,
      diff = options.diff;


  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started,
        startedTime = logEntry.startedTime,
        action = logEntry.action,
        prevState = logEntry.prevState,
        error = logEntry.error;
    var took = logEntry.took,
        nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action, logEntry) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
    var headerCSS = ['color: gray; font-weight: lighter;'];
    headerCSS.push(titleCSS);
    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
      } else {
        if (colors.title) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('\u2014\u2014 log end \u2014\u2014');
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-logger/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: function stateTransformer(state) {
    return state;
  },
  actionTransformer: function actionTransformer(action) {
    return action;
  },
  errorTransformer: function errorTransformer(error) {
    return error;
  },
  colors: {
    title: function title() {
      return "inherit";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/redux-logger/lib/diff.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffLogger;

var _deepDiff = __webpack_require__("./node_modules/deep-diff/index.js");

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/flitbit/diff#differences
var dictionary = {
  'E': {
    color: '#2196F3',
    text: 'CHANGED:'
  },
  'N': {
    color: '#4CAF50',
    text: 'ADDED:'
  },
  'D': {
    color: '#F44336',
    text: 'DELETED:'
  },
  'A': {
    color: '#2196F3',
    text: 'ARRAY:'
  }
};

function style(kind) {
  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
}

function render(diff) {
  var kind = diff.kind,
      path = diff.path,
      lhs = diff.lhs,
      rhs = diff.rhs,
      index = diff.index,
      item = diff.item;


  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '\u2192', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [path.join('.') + '[' + index + ']', item];
    default:
      return [];
  }
}

function diffLogger(prevState, newState, logger, isCollapsed) {
  var diff = (0, _deepDiff2.default)(prevState, newState);

  try {
    if (isCollapsed) {
      logger.groupCollapsed('diff');
    } else {
      logger.group('diff');
    }
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(function (elem) {
      var kind = elem.kind;

      var output = render(elem);

      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
    });
  } else {
    logger.log('\u2014\u2014 no diff \u2014\u2014');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/redux-logger/lib/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = exports.repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = exports.pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};

var formatTime = exports.formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use performance API if it's available in order to get better precision
var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ }),

/***/ "./node_modules/redux-logger/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.defaults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _core = __webpack_require__("./node_modules/redux-logger/lib/core.js");

var _helpers = __webpack_require__("./node_modules/redux-logger/lib/helpers.js");

var _defaults = __webpack_require__("./node_modules/redux-logger/lib/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates logger with following options
 *
 * @namespace
 * @param {object} options - options for logger
 * @param {string | function | object} options.level - console[level]
 * @param {boolean} options.duration - print duration of each action?
 * @param {boolean} options.timestamp - print timestamp with each action?
 * @param {object} options.colors - custom colors
 * @param {object} options.logger - implementation of the `console` API
 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @param {boolean} options.collapsed - is group collapsed?
 * @param {boolean} options.predicate - condition which resolves logger behavior
 * @param {function} options.stateTransformer - transform state before print
 * @param {function} options.actionTransformer - transform action before print
 * @param {function} options.errorTransformer - transform error before print
 *
 * @returns {function} logger middleware
 */
function createLogger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var loggerOptions = _extends({}, _defaults2.default, options);

  var logger = loggerOptions.logger,
      transformer = loggerOptions.transformer,
      stateTransformer = loggerOptions.stateTransformer,
      errorTransformer = loggerOptions.errorTransformer,
      predicate = loggerOptions.predicate,
      logErrors = loggerOptions.logErrors,
      diffPredicate = loggerOptions.diffPredicate;

  // Return if 'console' object is not defined

  if (typeof logger === 'undefined') {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  if (transformer) {
    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
  }

  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
  if (options.getState && options.dispatch) {
    // eslint-disable-next-line no-console
    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var logBuffer = [];

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // Exit early if predicate function returns 'false'
        if (typeof predicate === 'function' && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};
        logBuffer.push(logEntry);

        logEntry.started = _helpers.timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = void 0;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = _helpers.timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
        logBuffer.length = 0;

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

var defaultLogger = createLogger();

exports.defaults = _defaults2.default;
exports.logger = defaultLogger;
exports.default = createLogger;
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/reselect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "./node_modules/save-as/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 * ES6ified by Cole Chamberlain, https://github.com/cchamberlain
 *
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = exports.saveAs = window.saveAs || function (view) {
  // IE <10 is explicitly unsupported
  if (typeof navigator !== 'undefined' && /MSIE [1-9]\./.test(navigator.userAgent)) return;
  var doc = view.document;
  // only get URL when necessary in case Blob.js hasn't overridden it yet
  var get_URL = function get_URL() {
    return view.URL || view.webkitURL || view;
  };
  var save_link = doc.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  var can_use_save_link = 'download' in save_link;
  var click = function click(node) {
    var event = new MouseEvent('click');
    node.dispatchEvent(event);
  };
  var is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
  var webkit_req_fs = view.webkitRequestFileSystem;
  var req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem;
  var throw_outside = function throw_outside(ex) {
    (view.setImmediate || view.setTimeout)(function () {
      throw ex;
    }, 0);
  };
  var force_saveable_type = 'application/octet-stream';
  var fs_min_size = 0;
  // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
  var arbitrary_revoke_timeout = 1000 * 40; // in ms
  var revoke = function revoke(file) {
    var revoker = function revoker() {
      if (typeof file === 'string') // file is an object URL
        get_URL().revokeObjectURL(file);else // file is a File
        file.remove();
    };
    /* // Take note W3C:
    var
      uri = typeof file === "string" ? file : file.toURL()
    , revoker = function(evt) {
      // idealy DownloadFinishedEvent.data would be the URL requested
      if (evt.data === uri) {
        if (typeof file === "string") { // file is an object URL
          get_URL().revokeObjectURL(file);
        } else { // file is a File
          file.remove();
        }
      }
    }
    ;
    view.addEventListener("downloadfinished", revoker);
    */
    setTimeout(revoker, arbitrary_revoke_timeout);
  };
  var dispatch = function dispatch(filesaver, event_types, event) {
    event_types = [].concat(event_types);
    var i = event_types.length;
    while (i--) {
      var listener = filesaver['on' + event_types[i]];
      if (typeof listener === 'function') {
        try {
          listener.call(filesaver, event || filesaver);
        } catch (ex) {
          throw_outside(ex);
        }
      }
    }
  };
  var auto_bom = function auto_bom(blob) {
    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob(['﻿', blob], { type: blob.type });
    return blob;
  };

  var FileSaver = function FileSaver(blob, name, no_auto_bom) {
    _classCallCheck(this, FileSaver);

    if (!no_auto_bom) blob = auto_bom(blob);
    // First try a.download, then web filesystem, then object URLs
    var filesaver = this,
        type = blob.type,
        blob_changed = false,
        object_url,
        target_view,
        dispatch_all = function dispatch_all() {
      dispatch(filesaver, 'writestart progress write writeend'.split(' '));
    }
    // on any filesys errors revert to saving with object URLs
    ,
        fs_error = function fs_error() {
      if (target_view && is_safari && typeof FileReader !== 'undefined') {
        // Safari doesn't allow downloading of blob urls
        var reader = new FileReader();
        reader.onloadend = function () {
          var base64Data = reader.result;
          target_view.location.href = 'data:attachment/file' + base64Data.slice(base64Data.search(/[,;]/));
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
        };
        reader.readAsDataURL(blob);
        filesaver.readyState = filesaver.INIT;
        return;
      }
      // don't create more object URLs than needed
      if (blob_changed || !object_url) {
        object_url = get_URL().createObjectURL(blob);
      }
      if (target_view) {
        target_view.location.href = object_url;
      } else {
        var new_tab = view.open(object_url, '_blank');
        if (new_tab === undefined && is_safari) {
          //Apple do not allow window.open, see http://bit.ly/1kZffRI
          view.location.href = object_url;
        }
      }
      filesaver.readyState = filesaver.DONE;
      dispatch_all();
      revoke(object_url);
    },
        abortable = function abortable(func) {
      return function () {
        if (filesaver.readyState !== filesaver.DONE) {
          return func.apply(this, arguments);
        }
      };
    },
        create_if_not_found = { create: true, exclusive: false },
        slice;

    filesaver.readyState = filesaver.INIT;
    if (!name) {
      name = 'download';
    }
    if (can_use_save_link) {
      object_url = get_URL().createObjectURL(blob);
      setTimeout(function () {
        save_link.href = object_url;
        save_link.download = name;
        click(save_link);
        dispatch_all();
        revoke(object_url);
        filesaver.readyState = filesaver.DONE;
      });
      return;
    }
    // Object and web filesystem URLs have a problem saving in Google Chrome when
    // viewed in a tab, so I force save with application/octet-stream
    // http://code.google.com/p/chromium/issues/detail?id=91158
    // Update: Google errantly closed 91158, I submitted it again:
    // https://code.google.com/p/chromium/issues/detail?id=389642
    if (view.chrome && type && type !== force_saveable_type) {
      slice = blob.slice || blob.webkitSlice;
      blob = slice.call(blob, 0, blob.size, force_saveable_type);
      blob_changed = true;
    }
    // Since I can't be sure that the guessed media type will trigger a download
    // in WebKit, I append .download to the filename.
    // https://bugs.webkit.org/show_bug.cgi?id=65440
    if (webkit_req_fs && name !== 'download') {
      name += '.download';
    }
    if (type === force_saveable_type || webkit_req_fs) {
      target_view = view;
    }
    if (!req_fs) {
      fs_error();
      return;
    }
    fs_min_size += blob.size;
    req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
      fs.root.getDirectory('saved', create_if_not_found, abortable(function (dir) {
        var save = function save() {
          dir.getFile(name, create_if_not_found, abortable(function (file) {
            file.createWriter(abortable(function (writer) {
              writer.onwriteend = function (event) {
                target_view.location.href = file.toURL();
                filesaver.readyState = filesaver.DONE;
                dispatch(filesaver, 'writeend', event);
                revoke(file);
              };
              writer.onerror = function () {
                var error = writer.error;
                if (error.code !== error.ABORT_ERR) {
                  fs_error();
                }
              };
              'writestart progress write abort'.split(' ').forEach(function (event) {
                writer['on' + event] = filesaver['on' + event];
              });
              writer.write(blob);
              filesaver.abort = function () {
                writer.abort();
                filesaver.readyState = filesaver.DONE;
              };
              filesaver.readyState = filesaver.WRITING;
            }), fs_error);
          }), fs_error);
        };
        dir.getFile(name, { create: false }, abortable(function (file) {
          // delete file if it already exists
          file.remove();
          save();
        }), abortable(function (ex) {
          if (ex.code === ex.NOT_FOUND_ERR) {
            save();
          } else {
            fs_error();
          }
        }));
      }), fs_error);
    }), fs_error);
  };

  var FS_proto = FileSaver.prototype;
  var saveAs = function saveAs(blob, name, no_auto_bom) {
    return new FileSaver(blob, name, no_auto_bom);
  };

  // IE 10+ (native saveAs)
  if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
    return function (blob, name, no_auto_bom) {
      if (!no_auto_bom) blob = auto_bom(blob);
      return navigator.msSaveOrOpenBlob(blob, name || 'download');
    };
  }

  FS_proto.abort = function () {
    var filesaver = this;
    filesaver.readyState = filesaver.DONE;
    dispatch(filesaver, 'abort');
  };
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;

  FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

  return saveAs;
}(typeof self !== 'undefined' && self || typeof window !== 'undefined' && window || undefined.content);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

exports.default = saveAs;

/***/ }),

/***/ "./node_modules/sax/lib/sax.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'opentagstart',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = __webpack_require__("./node_modules/stream-browserify/index.js").Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__("./node_modules/node-libs-browser/node_modules/string_decoder/index.js").StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // character classes and tokens
  var whitespace = '\r\n\t '

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.

  // (Letter | "_" | ":")
  var quote = '\'"'
  var attribEnd = whitespace + '>'
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // turn all the string character sets into character class objects.
  whitespace = charClass(whitespace)

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  quote = charClass(quote)
  attribEnd = charClass(attribEnd)

  function charClass (str) {
    return str.split('').reduce(function (s, c) {
      s[c] = true
      return s
    }, {})
  }

  function isMatch (regex, c) {
    return regex.test(c)
  }

  function is (charclass, c) {
    return charclass[c]
  }

  function notMatch (regex, c) {
    return !isMatch(regex, c)
  }

  function not (charclass, c) {
    return !is(charclass, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
    emitNode(parser, 'onopentagstart', tag)
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (not(whitespace, c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c

      if (!c) {
        break
      }

      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }

      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (is(whitespace, c)) {
            // wait for it...
          } else if (isMatch(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (is(quote, c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (is(quote, c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (is(quote, c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (is(whitespace, c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && is(whitespace, c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (not(whitespace, c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (is(whitespace, c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (is(whitespace, c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (isMatch(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (is(whitespace, c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (is(whitespace, c)) {
            continue
          } else if (is(quote, c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (is(whitespace, c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (not(attribEnd, c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (is(whitespace, c)) {
              continue
            } else if (notMatch(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (not(whitespace, c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (is(whitespace, c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  /* istanbul ignore next */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})( false ? this.sax = {} : exports)

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/squash-xml-json/lib/flatten-xml.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenXML = flattenXML;

var _sax = __webpack_require__("./node_modules/sax/lib/sax.js");

var _sax2 = _interopRequireDefault(_sax);

var _utils = __webpack_require__("./node_modules/squash-xml-json/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var strict = true;
var parser = _sax2.default.parser(strict, { xmlns: true });

var SID = ">";

// OPTIONS
var options = {
  // Skip empty text nodes (TODO: but respect xml:space="preserve")
  skipSpace: false
};

function flattenXML(xmlstring) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var output = {};
  var before_root = output[">before_root"] = [];

  var stacks = {
    text: [],
    elements: [],
    others: []
  };

  parser.onerror = function (e) {
    // an error happened.
    throw e;
  };
  parser.ontext = function (t) {

    if (!options.skipSpace || t.trim()) {
      var id = SID + "t" + (0, _utils.generateUUID)();

      // add id to parent
      var parent = null;
      if (stacks.elements.length > 0) {
        parent = stacks.elements[stacks.elements.length - 1];
        output[parent].children.push(id);
      } else {
        before_root.push(id);
      }

      output[id] = { t: t, parent: parent };
    }
  };
  parser.onopentag = function (node) {
    var id = SID + "e" + (0, _utils.generateUUID)();
    if ("xml:id" in node.attributes) {
      id = node.attributes["xml:id"].value;
    } else {
      var _id = SID + "e" + (0, _utils.generateUUID)();
    }

    // add id to parent
    var parent = null;
    if (stacks.elements.length > 0) {
      parent = stacks.elements[stacks.elements.length - 1];
      output[parent].children.push(id);
    }

    // add to stack
    stacks.elements.push(id);

    // collect attributes
    var attributes = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(node.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var att = _step.value;

        attributes[att] = node.attributes[att].value;
      }

      // Namespace: when there are multiple namespaces, remove the default ns
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (Object.keys(node.ns).length > 1) {
      delete node.ns[""];
    }

    output[id] = {
      name: node.name,
      children: [],
      "@": attributes,
      ns: node.ns,
      parent: parent,
      id: id
    };
  };
  parser.onclosetag = function () {
    // pull from stack
    stacks.elements.pop();
  };

  parser.oncomment = function (c) {
    var id = SID + "c" + (0, _utils.generateUUID)();

    // add id to parent
    var parent = null;
    if (stacks.elements.length > 0) {
      parent = stacks.elements[stacks.elements.length - 1];
      output[parent].children.push(id);
    } else {
      // noop because this would be not well-formed XML.
    }

    output[id] = { c: c };
  };

  parser.onprocessinginstruction = function (pi) {
    var id = SID + "c" + (0, _utils.generateUUID)();

    // add id to parent
    var parent = null;
    if (stacks.elements.length > 0) {
      parent = stacks.elements[stacks.elements.length - 1];
      output[parent].children.push(id);
    } else {
      before_root.push(id);
    }

    output[id] = { pi: pi };
  };

  parser.onsgmldeclaration = function (decl) {
    console.log("SGML Declaration not supported");
  };

  parser.ondoctype = function (decl) {
    console.log("Doctype not supported");
  };

  parser.onopencdata = function () {};
  parser.cdata = function () {
    console.log("CDATA not supported");
  };

  parser.onopennamespace = function () {};
  parser.onclosenamespace = function () {};

  parser.write(xmlstring).close();

  // console.log(output)

  return output;
}

/***/ }),

/***/ "./node_modules/squash-xml-json/lib/hydrate-xml.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateXML = hydrateXML;
function hydrateXML(json) {

  var xmlstring = "";

  var walkNodes = function walkNodes(node) {
    if (node.name) {
      xmlstring += "<" + node.name;

      var attrs = node["@"];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(attrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var att = _step.value;

          var value = attrs[att];
          var q = value.indexOf('"') > -1 ? "'" : '"';

          xmlstring += " " + att + "=" + (q + value + q);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (node.children.length > 0) {
        xmlstring += ">";

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            var childNode = json[child];
            walkNodes(childNode);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        xmlstring += "</" + node.name + ">";
      } else {
        xmlstring += "/>";
      }
    } else if (node.t) {
      xmlstring += node.t;
    } else if (node.c) {
      xmlstring += "<!--" + node.c + "-->";
    } else if (node.pi) {
      xmlstring += "<?" + node.pi.name + " " + node.pi.body + "?>";
    } else {
      throw "unexpected token";
    }
  };

  // Start with "nodes" before the root element
  // Only text nodes and instructions should be there.
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = json[">before_root"][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var id = _step3.value;

      var node = json[id];
      if (node.t) {
        xmlstring += node.t;
      } else if (node.pi) {
        xmlstring += "<?" + node.pi.name + " " + node.pi.body + "?>";
      }
    }

    // locate root node
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var root = Object.keys(json).reduce(function (acc, key) {
    if (!json[key].parent && json[key].name) {
      acc.push(json[key]);
    }
    return acc;
  }, [])[0];

  walkNodes(root);

  return xmlstring;
}

/***/ }),

/***/ "./node_modules/squash-xml-json/lib/squash-xml-json.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenXml = __webpack_require__("./node_modules/squash-xml-json/lib/flatten-xml.js");

Object.defineProperty(exports, 'flattenXML', {
  enumerable: true,
  get: function get() {
    return _flattenXml.flattenXML;
  }
});

var _hydrateXml = __webpack_require__("./node_modules/squash-xml-json/lib/hydrate-xml.js");

Object.defineProperty(exports, 'hydrateXML', {
  enumerable: true,
  get: function get() {
    return _hydrateXml.hydrateXML;
  }
});

/***/ }),

/***/ "./node_modules/squash-xml-json/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateUUID = generateUUID;
function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
}

/***/ }),

/***/ "./node_modules/stackframe/stackframe.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.StackFrame = factory();
    }
}(this, function () {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) {
            this.setFunctionName(functionName);
        }
        if (args !== undefined) {
            this.setArgs(args);
        }
        if (fileName !== undefined) {
            this.setFileName(fileName);
        }
        if (lineNumber !== undefined) {
            this.setLineNumber(lineNumber);
        }
        if (columnNumber !== undefined) {
            this.setColumnNumber(columnNumber);
        }
        if (source !== undefined) {
            this.setSource(source);
        }
    }

    StackFrame.prototype = {
        getFunctionName: function () {
            return this.functionName;
        },
        setFunctionName: function (v) {
            this.functionName = String(v);
        },

        getArgs: function () {
            return this.args;
        },
        setArgs: function (v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function () {
            return this.fileName;
        },
        setFileName: function (v) {
            this.fileName = String(v);
        },

        getLineNumber: function () {
            return this.lineNumber;
        },
        setLineNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
            }
            this.lineNumber = Number(v);
        },

        getColumnNumber: function () {
            return this.columnNumber;
        },
        setColumnNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
            }
            this.columnNumber = Number(v);
        },

        getSource: function () {
            return this.source;
        },
        setSource: function (v) {
            this.source = String(v);
        },

        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    return StackFrame;
}));


/***/ }),

/***/ "./node_modules/stream-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__("./node_modules/events/events.js").EventEmitter;
var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");

inherits(Stream, EE);
Stream.Readable = __webpack_require__("./node_modules/readable-stream/readable-browser.js");
Stream.Writable = __webpack_require__("./node_modules/readable-stream/writable-browser.js");
Stream.Duplex = __webpack_require__("./node_modules/readable-stream/duplex-browser.js");
Stream.Transform = __webpack_require__("./node_modules/readable-stream/transform.js");
Stream.PassThrough = __webpack_require__("./node_modules/readable-stream/passthrough.js");

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__("./node_modules/style-loader/fixUrls.js");

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/fixUrls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _actions = __webpack_require__("./actions/index.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Helper functions
var getCurrentModules = function getCurrentModules() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Get the keys of current moduleRefs
  var odd = state.customization.json;
  return Object.keys(odd).reduce(function (acc, node_id) {
    if (odd[node_id].name == "moduleRef") {
      acc.push(odd[node_id]["@"]["key"]);
    }
    return acc;
  }, []);
};

var generateUUID = function generateUUID() {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};

function selectedOdd() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.SELECT_ODD:
      return action.odd_url;
    default:
      return state;
  }
}

function odd() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var currentModules = void 0,
      odd = void 0,
      schemaSpec = void 0;
  switch (action.type) {
    case _actions.RECEIVE_ODD:
    case _actions.REQUEST_ODD:
    case _actions.PARSE_ODD:
      return Object.assign({}, state, customization(state[action.odd], action));
    case _actions.RECEIVE_P5:
    case _actions.REQUEST_P5:
      return Object.assign({}, state, p5(state[action.odd], action));
    case _actions.INCLUDE_MODULES:
      currentModules = getCurrentModules(state);
      // Find modules that need inclusion
      var modulesToInclude = action.modules.filter(function (x) {
        return currentModules.indexOf(x) == -1;
      });
      // Create elements
      odd = state.customization.json;

      // find (first) schemaSpec first, then loop on modules to include
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(odd)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node_id = _step.value;

          var node = odd[node_id];
          if (node.name == "schemaSpec" && !schemaSpec) {
            schemaSpec = node_id;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = modulesToInclude[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          module = _step2.value;

          // Create a new node and add to parent
          var id = ">e" + generateUUID();
          var new_node = {
            name: "moduleRef",
            "@": {
              key: module
            },
            parent: schemaSpec,
            children: []
          };
          odd[id] = new_node;
          odd[schemaSpec].children.unshift(id);
        }
        // Update state
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (modulesToInclude.length > 0) {
        return Object.assign({}, state, updateOdd(state[customization], odd));
      } else {
        return state;
      }
    case _actions.EXCLUDE_MODULES:
      odd = state.customization.json;
      // Remove moduleRefs

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(odd)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _node_id = _step3.value;

          var _node = odd[_node_id];
          if (_node.name == "moduleRef" && action.modules.indexOf(_node["@"].key) > -1) {
            // remove from parent
            var parent = odd[_node.parent];
            parent.children.splice(parent.children.indexOf(_node_id), 1);
            delete odd[_node_id];
          }
        }

        // Update state
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return Object.assign({}, state, updateOdd(state[customization], odd));

    case _actions.INCLUDE_ELEMENTS:

      odd = state.customization.json;
      var matchingMR = false;
      schemaSpec = "";

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(odd)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _node_id2 = _step4.value;

          var _node2 = odd[_node_id2];
          if (_node2.name == "moduleRef" && _node2["@"].key == action.module) {
            matchingMR = true;
            // try to remove from @except
            if (_node2["@"].except) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = action.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var el = _step5.value;

                  var excludes = _node2["@"].except.split(" ");
                  var el_pos = excludes.indexOf(el);
                  if (el_pos > -1) {
                    excludes.splice(el_pos, 1);
                    if (excludes.length > 0) {
                      _node2["@"].except = excludes.join(" ");
                    } else {
                      // remove @except last element in @except was removed.
                      delete _node2["@"].except;
                    }
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            } else if (_node2["@"].include) {
              // if there's @include, add the element to the list
              var includes = new Set((_node2["@"].include || "").split(" "));
              includes.add(action.elements);
              _node2["@"].include = Array.from(includes).join(" ");
            } else {
              // noop
            }
          }
          // remove matching elementSpec[@mode='delete']
          else if (_node2.name == "elementSpec") {
              if (action.elements.indexOf(_node2["@"].ident) > -1 && _node2["@"].mode == "delete") {
                delete _node2["@"].mode;
              }
            }
            // store schemaSpec id
            else if (_node2.name == "schemaSpec") {
                if (!schemaSpec) schemaSpec = _node_id2;
              }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (!matchingMR) {
        //create new moduleref
        var _id = ">e" + generateUUID();
        var _new_node = {
          name: "moduleRef",
          "@": {
            key: action.module,
            include: action.elements.join(" ")
          },
          parent: schemaSpec,
          children: []
        };
        odd[_id] = _new_node;
        odd[schemaSpec].children.unshift(_id);
      }

      // Update state
      return Object.assign({}, state, updateOdd(state[customization], odd));

    case _actions.EXCLUDE_ELEMENTS:

      odd = state.customization.json;

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = Object.keys(odd)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _node_id3 = _step6.value;

          var _node3 = odd[_node_id3];
          if (_node3.name == "moduleRef" && _node3["@"].key == action.module) {
            if (_node3["@"].include) {
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = action.elements[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var _el = _step7.value;

                  var _includes = _node3["@"].include.split(" ");
                  var _el_pos = _includes.indexOf(_el);
                  if (_el_pos > -1) {
                    _includes.splice(_el_pos, 1);
                    if (_includes.length > 0) {
                      _node3["@"].include = _includes.join(" ");
                    } else {
                      // remove module if the last element in @include was excluded.
                      var _parent = odd[_node3.parent];
                      _parent.children.splice(_parent.children.indexOf(_node_id3), 1);
                      delete odd[_node_id3];
                    }
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            } else {
              // otherwise add to @except
              var _excludes = new Set((_node3["@"].except || "").split(" "));
              var except = new Set([].concat(_toConsumableArray(_excludes), _toConsumableArray(new Set(action.elements))));
              _node3["@"].except = Array.from(except).join(" ");
            }
          }
          // remove matching elementRefs is present
          else if (_node3.name == "elementRef" && action.elements.indexOf(_node3["@"].key) > -1) {
              var _parent2 = odd[_node3.parent];
              _parent2.children.splice(_parent2.children.indexOf(_node_id3), 1);
              delete odd[_node_id3];
            }
            // finally look for a matching elementSpec
            // and switch it to @mode='delete'
            else if (_node3.name == "elementSpec") {
                if (action.elements.indexOf(_node3["@"].ident) > -1) {
                  _node3["@"].mode = "delete";
                }
              }
        }

        // Update state
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return Object.assign({}, state, updateOdd(state[customization], odd));
    default:
      return state;
  }
}

function updateOdd() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    customization: { isFetching: false }
  };
  var odd = arguments[1];

  return Object.assign({}, state, {
    customization: {
      isFetching: false,
      json: odd
    }
  });
}

function customization() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    customization: { isFetching: false }
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.PARSE_ODD:
      return Object.assign({}, state, {
        customization: {
          isFetching: false,
          xml: action.xml,
          json: action.json
        }
      });
    case _actions.REQUEST_ODD:
      return Object.assign({}, state, {
        customization: { isFetching: true }
      });
    case _actions.RECEIVE_ODD:
      return Object.assign({}, state, {
        customization: {
          isFetching: false,
          xml: action.xml,
          json: action.json,
          lastUpdated: action.receivedAt
        }
      });
    default:
      return state;
  }
}

function p5() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    localsource: { isFetching: false }
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_P5:
      return Object.assign({}, state, {
        localsource: { isFetching: true }
      });
    case _actions.RECEIVE_P5:
      return Object.assign({}, state, {
        localsource: {
          isFetching: false,
          xml: action.xml,
          json: action.json,
          lastUpdated: action.receivedAt
        }
      });
    default:
      return state;
  }
}

var romajsApp = (0, _redux.combineReducers)({
  selectedOdd: selectedOdd,
  odd: odd
});

exports.default = romajsApp;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./scss/romajs.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/index.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./scss/romajs.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/index.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./scss/romajs.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/index.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./scss/romajs.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./selectors/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementsForModule = undefined;

var _reselect = __webpack_require__("./node_modules/reselect/lib/index.js");

var _squashXmlJson = __webpack_require__("./node_modules/squash-xml-json/lib/squash-xml-json.js");

var getCustomization = function getCustomization(state) {
  return state.odd.customization.json;
};
var getLocalSourceElements = function getLocalSourceElements(state) {
  return state.odd.localsource.json.members;
};

var getElementsForModule = exports.getElementsForModule = function getElementsForModule(state, params) {
  var sel = (0, _reselect.createSelector)([getCustomization, getLocalSourceElements], function (customization, localSourceElements) {
    var includedElements = [];
    var excludedElements = [];

    // Populate from moduleRef
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(customization)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node_id = _step.value;

        var node = customization[node_id];
        if (node.name == "moduleRef" && node["@"].key == params.module) {
          if (node["@"].except) {
            excludedElements = excludedElements.concat(node["@"].except.split(" "));
          } else if (node["@"].include) {
            includedElements = includedElements.concat(node["@"].include.split(" "));
          }
          // when neither attributes are present, all elements are included
          else {
              includedElements = "all";
            }
        }
        // Populate from elementRef
        else if (node.name == "elementRef") {
            includedElements.push(node["@"].key);
          }
          // from elementSpec[@mode='delete']
          else if (node.name == "elementSpec" && node["@"].mode == "delete") {
              excludedElements.push(node["@"].ident);
            }
      }

      // Go through all elements for this module and determine whether
      // they're selected or not.
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var elements = localSourceElements.reduce(function (acc, member) {
      if (member.type == "elementSpec" && member.module == params.module) {
        var selected = params.module_selected;
        if (includedElements == "all") {
          selected = true;
        } else {
          if (includedElements.length > 0) {
            selected = includedElements.indexOf(member.ident) > -1 ? true : false;
          }
        }
        if (excludedElements.indexOf(member.ident) > -1) {
          selected = false;
        }
        var element = Object.assign({}, member, { selected: selected });
        acc.push(element);
      }
      return acc;
    }, []);

    return elements;
  });
  return sel(state);
};

exports.default = getElementsForModule;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},["./index.js"]);
//# sourceMappingURL=app-fa9d6853922455bf99d1.js.map