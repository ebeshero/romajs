webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./src/scss/romajs.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/* Set Roma theme colors */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-chip {\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 32px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: 16px;\n  background-color: #dedede;\n  display: inline-block;\n  color: rgba(0,0,0, 0.87);\n  margin: 2px 0;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.mdl-chip__text {\n  font-size: 13px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.mdl-chip__action {\n  height: 24px;\n  width: 24px;\n  background: transparent;\n  opacity: 0.54;\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0;\n  margin: 0 0 0 4px;\n  font-size: 13px;\n  text-decoration: none;\n  color: rgba(0,0,0, 0.87);\n  border: none;\n  outline: none;\n  overflow: hidden;\n}\n\n.mdl-chip__contact {\n  height: 32px;\n  width: 32px;\n  border-radius: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n  overflow: hidden;\n  text-align: center;\n  font-size: 18px;\n  line-height: 32px;\n}\n\n.mdl-chip:focus {\n  outline: 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-chip:active {\n  background-color: #d6d6d6;\n}\n\n.mdl-chip--deletable {\n  padding-right: 4px;\n}\n\n.mdl-chip--contact {\n  padding-left: 0;\n}\n\n.mdc-animation-deceleration-curve {\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-animation-standard-curve {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-animation-acceleration-curve {\n  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.mdc-animation-sharp-curve {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-button {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 4px;\n  box-sizing: border-box;\n  outline: none;\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  -webkit-appearance: none;\n}\n\n.mdc-button:not(.mdc-ripple-upgraded):hover::before, .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button::before {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button:active {\n  outline: none;\n}\n\n.mdc-button:hover {\n  cursor: pointer;\n}\n\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-button:not(.mdc-ripple-upgraded) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);\n}\n\n.mdc-button--theme-dark .mdc-button,\n.mdc-theme--dark .mdc-button {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--theme-dark .mdc-button::before,\n.mdc-theme--dark .mdc-button::before {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button::after,\n.mdc-theme--dark .mdc-button::after {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded),\n.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded) {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.18);\n}\n\n.mdc-button--raised {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: black;\n}\n\n.mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--raised::before {\n  background-color: rgba(255, 255, 255, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--raised.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--raised::after {\n  background-color: rgba(255, 255, 255, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--raised.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--raised:hover, .mdc-button--raised:focus {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--raised:active {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-button--theme-dark .mdc-button--raised,\n.mdc-theme--dark .mdc-button--raised {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  background-color: white;\n}\n\n.mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--theme-dark .mdc-button--raised::before,\n.mdc-theme--dark .mdc-button--raised::before {\n  background-color: rgba(0, 0, 0, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--raised::after,\n.mdc-theme--dark .mdc-button--raised::after {\n  background-color: rgba(0, 0, 0, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded),\n.mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18);\n}\n\n.mdc-button--compact {\n  padding: 0 8px;\n}\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: .8125rem;\n  line-height: 32px;\n}\n\n.mdc-button--primary {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--primary::before {\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--primary.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--primary::after {\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--primary.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--theme-dark .mdc-button--primary,\n.mdc-theme--dark .mdc-button--primary {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--theme-dark .mdc-button--primary::before,\n.mdc-theme--dark .mdc-button--primary::before {\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--primary::after,\n.mdc-theme--dark .mdc-button--primary::after {\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--primary.mdc-button--raised, .mdc-button--primary.mdc-button--unelevated {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):active::after, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--primary.mdc-button--raised::before, .mdc-button--primary.mdc-button--unelevated::before {\n  background-color: rgba(255, 255, 255, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--background-focused::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--unbounded::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--primary.mdc-button--raised::after, .mdc-button--primary.mdc-button--unelevated::after {\n  background-color: rgba(255, 255, 255, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--unbounded::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--accent {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #d2aa28;\n  color: var(--mdc-theme-secondary, #d2aa28);\n}\n\n.mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--accent::before {\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--accent.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--accent::after {\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--accent.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--theme-dark .mdc-button--accent,\n.mdc-theme--dark .mdc-button--accent {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #d2aa28;\n  color: var(--mdc-theme-secondary, #d2aa28);\n}\n\n.mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):active::after,\n.mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):hover::before,\n.mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before,\n.mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--theme-dark .mdc-button--accent::before,\n.mdc-theme--dark .mdc-button--accent::before {\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--theme-dark .mdc-button--accent::after,\n.mdc-theme--dark .mdc-button--accent::after {\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-button--accent.mdc-button--raised, .mdc-button--accent.mdc-button--unelevated {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  background-color: #d2aa28;\n  background-color: var(--mdc-theme-secondary, #d2aa28);\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-secondary, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):active::after, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-button--accent.mdc-button--raised::before, .mdc-button--accent.mdc-button--unelevated::before {\n  background-color: rgba(0, 0, 0, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--background-focused::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--unbounded::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-button--accent.mdc-button--raised::after, .mdc-button--accent.mdc-button--unelevated::after {\n  background-color: rgba(0, 0, 0, 0.32);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--unbounded::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\nfieldset:disabled .mdc-button, .mdc-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-button--theme-dark fieldset:disabled .mdc-button,\n.mdc-theme--dark fieldset:disabled .mdc-button, .mdc-button--theme-dark .mdc-button:disabled,\n.mdc-theme--dark .mdc-button:disabled {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\nfieldset:disabled .mdc-button--raised, .mdc-button--raised:disabled {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\n.mdc-button--theme-dark fieldset:disabled .mdc-button--raised,\n.mdc-theme--dark fieldset:disabled .mdc-button--raised, .mdc-button--theme-dark .mdc-button--raised:disabled,\n.mdc-theme--dark .mdc-button--raised:disabled {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-card {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0;\n  box-sizing: border-box;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.mdc-card__primary {\n  padding: 16px;\n}\n\n.mdc-card__primary .mdc-card__title--large {\n  padding-top: 8px;\n}\n\n.mdc-card__primary:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__supporting-text {\n  padding: 8px 16px;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-card--theme-dark .mdc-card__supporting-text,\n.mdc-theme--dark .mdc-card__supporting-text {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__primary + .mdc-card__supporting-text {\n  margin-top: -8px;\n  padding-top: 0;\n}\n\n.mdc-card__supporting-text:last-child {\n  padding-bottom: 24px;\n}\n\n.mdc-card__actions {\n  display: flex;\n  padding: 8px;\n  box-sizing: border-box;\n}\n\n.mdc-card--theme-dark .mdc-card__actions,\n.mdc-theme--dark .mdc-card__actions {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__actions .mdc-card__action {\n  margin: 0 8px 0 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action, .mdc-card__actions .mdc-card__action[dir=\"rtl\"] {\n  margin: 0 0 0 8px;\n}\n\n.mdc-card__actions .mdc-card__action:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__actions .mdc-card__action:last-child, .mdc-card__actions .mdc-card__action:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-card__actions--vertical {\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.mdc-card__actions--vertical .mdc-card__action {\n  margin: 0 0 4px;\n}\n\n.mdc-card__actions--vertical .mdc-card__action:last-child {\n  margin-bottom: 0;\n}\n\n.mdc-card__media {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.mdc-card__media-item {\n  display: inline-block;\n  width: auto;\n  height: 80px;\n  margin: 16px 0 0;\n  padding: 0;\n}\n\n.mdc-card__media-item--1dot5x {\n  width: auto;\n  height: 120px;\n}\n\n.mdc-card__media-item--2x {\n  width: auto;\n  height: 160px;\n}\n\n.mdc-card__media-item--3x {\n  width: auto;\n  height: 240px;\n}\n\n.mdc-card__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__title,\n.mdc-theme--dark .mdc-card__title {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__title--large {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin: 0;\n}\n\n.mdc-card__subtitle {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  margin: -.063rem 0;\n}\n\n.mdc-card--theme-dark .mdc-card__subtitle,\n.mdc-theme--dark .mdc-card__subtitle {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-card__horizontal-block {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: 0;\n  padding-right: 16px;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block, .mdc-card__horizontal-block[dir=\"rtl\"] {\n  padding-left: 16px;\n  padding-right: 0;\n}\n\n.mdc-card__horizontal-block .mdc-card__actions--vertical {\n  margin: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-card__horizontal-block .mdc-card__media-item, .mdc-card__horizontal-block .mdc-card__media-item[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 16px;\n}\n\n.mdc-card__horizontal-block .mdc-card__media-item--3x {\n  margin-bottom: 16px;\n}\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* Manual calculation done on SVG */\n/* Manual calculation done on SVG */\n@keyframes mdc-checkbox-fade-in-background {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n  50% {\n    /* @alternate */\n    border-color: #225688;\n    border-color: var(--mdc-theme-primary, #225688);\n    /* @alternate */\n    background-color: #225688;\n    background-color: var(--mdc-theme-primary, #225688);\n  }\n}\n\n@keyframes mdc-checkbox-fade-out-background {\n  0%,\n  80% {\n    /* @alternate */\n    border-color: #225688;\n    border-color: var(--mdc-theme-primary, #225688);\n    /* @alternate */\n    background-color: #225688;\n    background-color: var(--mdc-theme-primary, #225688);\n  }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent;\n  }\n}\n\n@keyframes mdc-checkbox-fade-in-background-dark {\n  0% {\n    border-color: white;\n    background-color: transparent;\n  }\n  50% {\n    /* @alternate */\n    border-color: #225688;\n    border-color: var(--mdc-theme-primary, #225688);\n    /* @alternate */\n    background-color: #225688;\n    background-color: var(--mdc-theme-primary, #225688);\n  }\n}\n\n@keyframes mdc-checkbox-fade-out-background-dark {\n  0%,\n  80% {\n    /* @alternate */\n    border-color: #225688;\n    border-color: var(--mdc-theme-primary, #225688);\n    /* @alternate */\n    background-color: #225688;\n    background-color: var(--mdc-theme-primary, #225688);\n  }\n  100% {\n    border-color: white;\n    background-color: transparent;\n  }\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%,\n  50% {\n    stroke-dashoffset: 29.78334;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%,\n  68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.78334;\n  }\n}\n\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    transform: rotate(0deg);\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    transform: rotate(45deg);\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    transform: rotate(-45deg);\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    transform: rotate(0deg);\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    transform: scaleX(1);\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  32.8%,\n  100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n\n.mdc-checkbox {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  box-sizing: content-box;\n  flex: 0 0 18px;\n  width: 18px;\n  height: 18px;\n  padding: 11px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n}\n\n.mdc-checkbox:not(.mdc-ripple-upgraded):hover::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus::before, .mdc-checkbox:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-checkbox::before {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-checkbox::before {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-checkbox.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-checkbox::after {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-checkbox::after {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-checkbox.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-checkbox:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-checkbox::before, .mdc-checkbox::after {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__background::before {\n  content: none;\n}\n\n.mdc-checkbox__background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  left: 11px;\n  right: initial;\n  display: inline-flex;\n  top: 11px;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  pointer-events: none;\n  width: 45%;\n  height: 45%;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  border-radius: 2px;\n  background-color: transparent;\n  will-change: background-color, border-color;\n}\n\n[dir=\"rtl\"] .mdc-checkbox .mdc-checkbox__background,\n.mdc-checkbox[dir=\"rtl\"] .mdc-checkbox__background {\n  left: initial;\n  right: 11px;\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox__background {\n  border-color: white;\n}\n\n.mdc-checkbox__background::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n  content: \"\";\n  opacity: 0;\n  pointer-events: none;\n  will-change: opacity, transform;\n  /* @alternate */\n  background: #225688;\n  background: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-checkbox__native-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: inherit;\n  opacity: 0;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  opacity: 0;\n  fill: white;\n}\n\n.mdc-checkbox__checkmark__path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: white !important;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.78334;\n  stroke-dasharray: 29.78334;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0) rotate(0deg);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: white;\n  opacity: 0;\n}\n\n.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {\n  transform: scale(2.75, 2.75);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .26;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background {\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  /* @alternate */\n  border-color: #225688;\n  border-color: var(--mdc-theme-primary, #225688);\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  /* @alternate */\n  border-color: #225688;\n  border-color: var(--mdc-theme-primary, #225688);\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  opacity: 0;\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n.mdc-checkbox__native-control:disabled,\nfieldset:disabled .mdc-checkbox__native-control,\n[aria-disabled=\"true\"] .mdc-checkbox__native-control {\n  cursor: default;\n}\n\n.mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background,\nfieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n[aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\nfieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-theme--dark\nfieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background, .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background,\nfieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\nfieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\nfieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-theme--dark\nfieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\nfieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n.mdc-theme--dark\nfieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark__path,\n.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  transition: none !important;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background {\n  animation: mdc-checkbox-fade-in-background 180ms linear;\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-in-background-dark;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation: mdc-checkbox-fade-out-background 180ms linear;\n}\n\n.mdc-checkbox--theme-dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background,\n.mdc-theme--dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-name: mdc-checkbox-fade-out-background-dark;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark__path {\n  animation: 180ms linear 0s :local(mdc-checkbox-unchecked-checked-checkmark-path);\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s :local(mdc-checkbox-unchecked-indeterminate-mixedmark);\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark__path {\n  animation: 90ms linear 0s :local(mdc-checkbox-checked-unchecked-checkmark-path);\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: 90ms linear 0s :local(mdc-checkbox-checked-indeterminate-checkmark);\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s :local(mdc-checkbox-checked-indeterminate-mixedmark);\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: 500ms linear 0s :local(mdc-checkbox-indeterminate-checked-checkmark);\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: 500ms linear 0s :local(mdc-checkbox-indeterminate-checked-mixedmark);\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: 300ms linear 0s :local(mdc-checkbox-indeterminate-unchecked-mixedmark);\n  transition: none;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030;\n}\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  z-index: 2;\n}\n\n.mdc-dialog__backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  /* @alternate */\n  background-color: rgba(0, 0, 0, 0.87);\n  background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  opacity: 0;\n  z-index: -1;\n}\n\n.mdc-dialog__surface {\n  display: inline-flex;\n  flex-direction: column;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  width: calc(100% - 30px);\n  min-width: 640px;\n  max-width: 865px;\n  transform: translateY(150px) scale(0.8);\n  border-radius: 2px;\n  /* @alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  opacity: 0;\n}\n\n.mdc-dialog--theme-dark .mdc-dialog__surface,\n.mdc-theme--dark .mdc-dialog__surface {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: #303030;\n  background-color: var(--mdc-dialog-dark-theme-bg-color, #303030);\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n  text-align: right;\n}\n\n.mdc-dialog__header {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 0;\n}\n\n.mdc-dialog__header__empty {\n  padding: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n.mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n  text-align: right;\n}\n\n.mdc-dialog__header__title {\n  flex: 1;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-dialog__body {\n  margin-top: 20px;\n  padding: 0 24px 24px;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-dialog--theme-dark.mdc-dialog__body,\n.mdc-theme--dark .mdc-dialog__body {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-dialog__body--scrollable {\n  max-height: 195px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-y: scroll;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdc-dialog__footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n}\n\n.mdc-dialog__footer__button {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button, .mdc-dialog__footer__button[dir=\"rtl\"] {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__button:last-child {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-dialog__footer__button:last-child, .mdc-dialog__footer__button:last-child[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mdc-dialog__footer__action {\n  /* @alternate */\n  color: #d2aa28;\n  color: var(--mdc-theme-secondary, #d2aa28);\n}\n\n@media (max-width: 640px) {\n  .mdc-dialog {\n    min-width: 280px;\n  }\n  .mdc-dialog__surface {\n    min-width: 280px;\n  }\n  .mdc-dialog__body {\n    line-height: 24px;\n  }\n}\n\n.mdc-dialog--animating {\n  visibility: visible;\n}\n\n.mdc-dialog--animating .mdc-dialog__backdrop {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog--open .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--animating .mdc-dialog__surface {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-dialog--open {\n  visibility: visible;\n}\n\n.mdc-dialog--open .mdc-dialog__backdrop {\n  opacity: .3;\n}\n\n.mdc-dialog--open .mdc-dialog__surface {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n\n.mdc-dialog-scroll-lock {\n  height: 100vh;\n  overflow: hidden;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n:root {\n  --mdc-persistent-drawer-dark-theme-bg-color: #212121;\n}\n\n.mdc-persistent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  width: 0;\n}\n\n.mdc-persistent-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: flex-center;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-persistent-drawer__toolbar-spacer--theme-dark .mdc-persistent-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-persistent-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n@media (min-width: 600px) {\n  .mdc-persistent-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-persistent-drawer__header {\n  position: relative;\n}\n\n.mdc-persistent-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-persistent-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.mdc-persistent-drawer .mdc-list-group,\n.mdc-persistent-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-persistent-drawer .mdc-list-item {\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-persistent-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-persistent-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-persistent-drawer .mdc-list-item__start-detail--theme-dark .mdc-persistent-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-persistent-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-persistent-drawer--selected.mdc-list-item,\n.mdc-persistent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-persistent-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  content: \"\";\n  opacity: 0;\n}\n\n.mdc-persistent-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-persistent-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-persistent-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-persistent-drawer__drawer {\n  /* @alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  border-left: 0;\n  border-right: 1px solid #e4e4e4;\n  left: 0;\n  right: initial;\n  height: 100%;\n  transform: translateX(-107%);\n  transform: translateX(calc(-100% - 20px));\n  will-change: transform;\n  display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 240px;\n  overflow: hidden;\n  touch-action: none;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  border-left: 1px solid #e4e4e4;\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-persistent-drawer__drawer--theme-dark,\n.mdc-theme--dark .mdc-persistent-drawer__drawer {\n  background-color: #212121;\n  background-color: var(--mdc-persistent-drawer-dark-theme-bg-color, #212121);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-left: 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer__drawer--theme-dark, .mdc-persistent-drawer__drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-persistent-drawer__drawer,\n.mdc-theme--dark .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n  border-left: 1px solid rgba(255, 255, 255, 0.12);\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer .mdc-persistent-drawer__drawer,\n.mdc-persistent-drawer[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n  transform: translateX(107%);\n  transform: translateX(calc(100% + 20px));\n}\n\n.mdc-persistent-drawer--animating .mdc-persistent-drawer__drawer {\n  transition: transform 0.195s 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-persistent-drawer--animating.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n  transition: transform 0.225s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-persistent-drawer--open {\n  width: 240px;\n  pointer-events: auto;\n}\n\n.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n  transform: none;\n}\n\n[dir=\"rtl\"] .mdc-persistent-drawer--open .mdc-persistent-drawer__drawer, .mdc-persistent-drawer--open[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n  transform: none;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-permanent-drawer-dark-theme-bg-color: #212121;\n}\n\n.mdc-permanent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  /* @alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  border-left: 0;\n  border-right: 1px solid #e4e4e4;\n  left: 0;\n  right: initial;\n  display: inline-flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 240px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.mdc-permanent-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: flex-center;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-permanent-drawer__toolbar-spacer--theme-dark .mdc-permanent-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-permanent-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n@media (min-width: 600px) {\n  .mdc-permanent-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-permanent-drawer__header {\n  position: relative;\n}\n\n.mdc-permanent-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-permanent-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.mdc-permanent-drawer .mdc-list-group,\n.mdc-permanent-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-permanent-drawer .mdc-list-item {\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-permanent-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-permanent-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-permanent-drawer .mdc-list-item__start-detail--theme-dark .mdc-permanent-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-permanent-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-permanent-drawer--selected.mdc-list-item,\n.mdc-permanent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-permanent-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  content: \"\";\n  opacity: 0;\n}\n\n.mdc-permanent-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-permanent-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-permanent-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n  border-left: 1px solid #e4e4e4;\n  border-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-permanent-drawer--theme-dark,\n.mdc-theme--dark .mdc-permanent-drawer {\n  background-color: #212121;\n  background-color: var(--mdc-permanent-drawer-dark-theme-bg-color, #212121);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-left: 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--theme-dark, .mdc-permanent-drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-permanent-drawer,\n.mdc-theme--dark .mdc-permanent-drawer[dir=\"rtl\"] {\n  border-left: 1px solid rgba(255, 255, 255, 0.12);\n  border-right: 0;\n}\n\n.mdc-permanent-drawer--floating {\n  background: none;\n  border-left: 0;\n  border-right: none;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--floating, .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n  border-left: none;\n  border-right: 0;\n}\n\n.mdc-permanent-drawer--floating--theme-dark,\n.mdc-theme--dark .mdc-permanent-drawer--floating {\n  background: none;\n  border-left: 0;\n  border-right: none;\n}\n\n[dir=\"rtl\"] .mdc-permanent-drawer--floating--theme-dark, .mdc-permanent-drawer--floating--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n.mdc-theme--dark .mdc-permanent-drawer--floating,\n.mdc-theme--dark .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n  border-left: none;\n  border-right: 0;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-temporary-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  box-sizing: border-box;\n  contain: strict;\n  z-index: 5;\n  /* Shaded background */\n}\n\n.mdc-temporary-drawer__toolbar-spacer {\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  flex-shrink: 0;\n  align-items: flex-center;\n  height: 56px;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n.mdc-temporary-drawer__toolbar-spacer--theme-dark .mdc-temporary-drawer__toolbar-spacer,\n.mdc-theme--dark .mdc-temporary-drawer__toolbar-spacer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n@media (min-width: 600px) {\n  .mdc-temporary-drawer__toolbar-spacer {\n    height: 64px;\n  }\n}\n\n.mdc-temporary-drawer__header {\n  position: relative;\n}\n\n.mdc-temporary-drawer__header::before {\n  display: block;\n  padding-top: 56.25%;\n  content: \"\";\n}\n\n.mdc-temporary-drawer__header-content {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: flex-end;\n  padding: 16px;\n  box-sizing: border-box;\n}\n\n.mdc-temporary-drawer .mdc-list-group,\n.mdc-temporary-drawer .mdc-list {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.mdc-temporary-drawer .mdc-list-item {\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-temporary-drawer .mdc-list-item.mdc-ripple-upgraded {\n  left: 0;\n}\n\n.mdc-temporary-drawer .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-temporary-drawer .mdc-list-item__start-detail--theme-dark .mdc-temporary-drawer .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-temporary-drawer .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-temporary-drawer--selected.mdc-list-item,\n.mdc-temporary-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-temporary-drawer .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: inherit;\n  background: currentColor;\n  content: \"\";\n  opacity: 0;\n}\n\n.mdc-temporary-drawer .mdc-list-item:focus::before {\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .12;\n}\n\n.mdc-temporary-drawer .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .18;\n}\n\n.mdc-temporary-drawer .mdc-list-item:active:focus::before {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer::before {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  content: \"\";\n  opacity: 0;\n  opacity: var(--mdc-temporary-drawer-opacity, 0);\n  will-change: opacity;\n  box-sizing: border-box;\n}\n\n.mdc-temporary-drawer__drawer {\n  /* @alternate */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  left: 0;\n  right: initial;\n  height: 100%;\n  transform: translateX(-107%);\n  transform: translateX(calc(-100% - 20px));\n  will-change: transform;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  width: calc(100% - 56px);\n  max-width: 280px;\n  box-sizing: border-box;\n  overflow: hidden;\n  touch-action: none;\n  /* TODO(sgomes): replace with global breakpoints when we have them */\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer__drawer, .mdc-temporary-drawer__drawer[dir=\"rtl\"] {\n  left: initial;\n  right: 0;\n}\n\n.mdc-temporary-drawer--theme-dark .mdc-temporary-drawer__drawer,\n.mdc-theme--dark .mdc-temporary-drawer__drawer {\n  background: #303030;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer .mdc-temporary-drawer__drawer,\n.mdc-temporary-drawer[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n  transform: translateX(107%);\n  transform: translateX(calc(100% + 20px));\n}\n\n@media (min-width: 600px) {\n  .mdc-temporary-drawer__drawer {\n    width: calc(100% - 64px);\n    max-width: 320px;\n  }\n}\n\n.mdc-temporary-drawer__content {\n  flex-grow: 1;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  touch-action: pan-y;\n}\n\n.mdc-temporary-drawer__footer {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  flex-shrink: 0;\n}\n\n.mdc-temporary-drawer--animating::before {\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer--animating.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n  transition: transform 0.225s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-temporary-drawer--animating .mdc-temporary-drawer__drawer {\n  transition: transform 0.195s 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.mdc-temporary-drawer--open {\n  pointer-events: auto;\n}\n\n.mdc-temporary-drawer--open::before {\n  opacity: 1;\n  opacity: var(--mdc-temporary-drawer-opacity, 1);\n}\n\n.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n  transform: none;\n}\n\n[dir=\"rtl\"] .mdc-temporary-drawer--open .mdc-temporary-drawer__drawer, .mdc-temporary-drawer--open[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n  transform: none;\n}\n\n.mdc-drawer-scroll-lock {\n  height: 100vh;\n  overflow: hidden;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-fab {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  box-sizing: border-box;\n  fill: currentColor;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  /* @alternate */\n  background-color: #d2aa28;\n  background-color: var(--mdc-theme-secondary, #d2aa28);\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-secondary, rgba(0, 0, 0, 0.87));\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded):hover::before, .mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-fab::before {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-fab.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-fab.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-fab.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab::after {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-fab.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-fab.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-fab.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-fab:not(.mdc-ripple-upgraded) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18);\n}\n\n.mdc-fab--mini {\n  width: 40px;\n  height: 40px;\n}\n\n.mdc-fab--plain {\n  background-color: white;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-fab--plain::before {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-fab--plain::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-fab--plain:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-fab--plain.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-fab:active, .mdc-fab:focus {\n  outline: none;\n}\n\n.mdc-fab:active {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-fab:hover {\n  cursor: pointer;\n}\n\n.mdc-fab::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\n.mdc-fab > svg {\n  width: 100%;\n}\n\nfieldset:disabled .mdc-fab, .mdc-fab:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-fab__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* stylelint-disable selector-max-type */\n.mdc-form-field {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.mdc-form-field--theme-dark,\n.mdc-theme--dark .mdc-form-field {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-form-field > label {\n  order: 0;\n  margin-right: auto;\n  padding-left: 4px;\n}\n\n[dir=\"rtl\"] .mdc-form-field > label, .mdc-form-field[dir=\"rtl\"] > label {\n  margin-left: auto;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label {\n  order: -1;\n  margin-left: auto;\n  padding-right: 4px;\n}\n\n[dir=\"rtl\"] .mdc-form-field--align-end > label, .mdc-form-field--align-end[dir=\"rtl\"] > label {\n  margin-right: auto;\n  padding-left: 4px;\n}\n\n/* stylelint-enable selector-max-type */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-grid-list .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1);\n}\n\n.mdc-grid-list .mdc-grid-tile {\n  margin: 2px 0;\n  padding: 0 2px;\n}\n\n.mdc-grid-list .mdc-grid-tile__secondary {\n  left: 2px;\n  width: calc(100% - 4px);\n}\n\n.mdc-grid-list .mdc-grid-list__tiles {\n  margin: 2px auto;\n}\n\n.mdc-grid-list__tiles {\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile {\n  margin: 0.5px 0;\n  padding: 0 0.5px;\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary {\n  left: 0.5px;\n  width: calc(100% - 1px);\n}\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles {\n  margin: 0.5px auto;\n}\n\n.mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.77778);\n}\n\n.mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.5);\n}\n\n.mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.66667);\n}\n\n.mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.33333);\n}\n\n.mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.75);\n}\n\n.mdc-grid-list--twoline-caption .mdc-grid-tile__secondary {\n  height: 68px;\n}\n\n.mdc-grid-list--header-caption .mdc-grid-tile__secondary {\n  top: 0;\n  bottom: auto;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 8px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 8px;\n  padding-right: 56px;\n}\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 16px;\n  padding-right: 56px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 16px;\n}\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n  font-size: 24px;\n}\n\n[dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon,\n.mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n}\n\n.mdc-grid-tile {\n  display: block;\n  position: relative;\n  /* @alternate */\n  width: 200px;\n  width: var(--mdc-grid-list-tile-width, 200px);\n}\n\n.mdc-grid-tile__primary {\n  position: relative;\n  height: 0;\n  /* @alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-grid-tile__primary-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.mdc-grid-tile__secondary {\n  position: absolute;\n  box-sizing: border-box;\n  bottom: 0;\n  height: 48px;\n  padding: 16px;\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-grid-tile__title {\n  display: block;\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-grid-tile__support-text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  margin-top: 4px;\n  padding: 0;\n}\n\n.mdc-grid-tile__icon {\n  position: absolute;\n  top: calc(50% - 24px / 2);\n  font-size: 0;\n}\n\n/** postcss-bem-linter: define icon-toggle */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-icon-toggle {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  will-change: initial;\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  user-select: none;\n}\n\n.mdc-icon-toggle:not(.mdc-ripple-upgraded):hover::before, .mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-icon-toggle::before {\n  background-color: rgba(0, 0, 0, 0.062);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle::after {\n  background-color: rgba(0, 0, 0, 0.062);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle::before,\n.mdc-theme--dark .mdc-icon-toggle::before {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle::after,\n.mdc-theme--dark .mdc-icon-toggle::after {\n  background-color: rgba(255, 255, 255, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-icon-toggle::after {\n  position: absolute;\n  border-radius: 50%;\n  content: \"\";\n  opacity: 0;\n  pointer-events: none;\n}\n\n.mdc-icon-toggle--theme-dark,\n.mdc-theme--dark .mdc-icon-toggle {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-icon-toggle--primary {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-icon-toggle--primary::before {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-icon-toggle--primary::before {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--primary::after {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-icon-toggle--primary::after {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-icon-toggle--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-icon-toggle--accent {\n  /* @alternate */\n  color: #d2aa28;\n  color: var(--mdc-theme-secondary, #d2aa28);\n}\n\n.mdc-icon-toggle--accent::before {\n  /* @alternate */\n  background-color: rgba(210, 170, 40, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-icon-toggle--accent::before {\n    background-color: color(var(--mdc-theme-secondary, #d2aa28) a(14%));\n  }\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-icon-toggle--accent::after {\n  /* @alternate */\n  background-color: rgba(210, 170, 40, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-icon-toggle--accent::after {\n    background-color: color(var(--mdc-theme-secondary, #d2aa28) a(14%));\n  }\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-icon-toggle--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-icon-toggle--disabled {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  pointer-events: none;\n}\n\n.mdc-icon-toggle--theme-dark.mdc-icon-toggle--disabled,\n.mdc-theme--dark .mdc-icon-toggle--disabled {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n/** postcss-bem-linter: end */\n:root {\n  --mdc-layout-grid-margin-desktop: 24px;\n  --mdc-layout-grid-gutter-desktop: 24px;\n  --mdc-layout-grid-column-width-desktop: 72px;\n  --mdc-layout-grid-margin-tablet: 16px;\n  --mdc-layout-grid-gutter-tablet: 16px;\n  --mdc-layout-grid-column-width-tablet: 72px;\n  --mdc-layout-grid-margin-phone: 16px;\n  --mdc-layout-grid-gutter-phone: 16px;\n  --mdc-layout-grid-column-width-phone: 72px;\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 24px;\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\n  }\n}\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\n  }\n}\n\n@media (max-width: 479px) {\n  .mdc-layout-grid {\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 16px;\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      grid-gap: 24px;\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\n      margin: 0;\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\n      margin: 0;\n      grid-template-columns: repeat(8, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__inner {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    margin: -8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__inner {\n      display: grid;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\n      margin: 0;\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid__cell {\n    box-sizing: border-box;\n    margin: 12px;\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\n    width: calc(33.33333% - 24px);\n    width: calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-desktop {\n    width: calc(8.33333% - 24px);\n    width: calc(8.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-desktop {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-desktop {\n    width: calc(16.66667% - 24px);\n    width: calc(16.66667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-desktop {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-desktop {\n    width: calc(25% - 24px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-desktop {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-desktop {\n    width: calc(33.33333% - 24px);\n    width: calc(33.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-desktop {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-desktop {\n    width: calc(41.66667% - 24px);\n    width: calc(41.66667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-desktop {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-desktop {\n    width: calc(50% - 24px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-desktop {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-desktop {\n    width: calc(58.33333% - 24px);\n    width: calc(58.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-desktop {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-desktop {\n    width: calc(66.66667% - 24px);\n    width: calc(66.66667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-desktop {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-desktop {\n    width: calc(75% - 24px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-desktop {\n      width: auto;\n      grid-column-end: span 9;\n    }\n  }\n  .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-desktop {\n    width: calc(83.33333% - 24px);\n    width: calc(83.33333% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-desktop {\n      width: auto;\n      grid-column-end: span 10;\n    }\n  }\n  .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-desktop {\n    width: calc(91.66667% - 24px);\n    width: calc(91.66667% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-desktop {\n      width: auto;\n      grid-column-end: span 11;\n    }\n  }\n  .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-desktop {\n    width: calc(100% - 24px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-desktop {\n      width: auto;\n      grid-column-end: span 12;\n    }\n  }\n}\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid__cell {\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-tablet {\n    width: calc(12.5% - 16px);\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-tablet {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-tablet {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-tablet {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-tablet {\n    width: calc(37.5% - 16px);\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-tablet {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-tablet {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-tablet {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-tablet {\n    width: calc(62.5% - 16px);\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-tablet {\n      width: auto;\n      grid-column-end: span 5;\n    }\n  }\n  .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-tablet {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-tablet {\n      width: auto;\n      grid-column-end: span 6;\n    }\n  }\n  .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-tablet {\n    width: calc(87.5% - 16px);\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-tablet {\n      width: auto;\n      grid-column-end: span 7;\n    }\n  }\n  .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n  .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-tablet {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-tablet {\n      width: auto;\n      grid-column-end: span 8;\n    }\n  }\n}\n\n@media (max-width: 479px) {\n  .mdc-layout-grid__cell {\n    box-sizing: border-box;\n    margin: 8px;\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0;\n    }\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-phone {\n    width: calc(25% - 16px);\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-phone {\n      width: auto;\n      grid-column-end: span 1;\n    }\n  }\n  .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-phone {\n    width: calc(50% - 16px);\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-phone {\n      width: auto;\n      grid-column-end: span 2;\n    }\n  }\n  .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-phone {\n    width: calc(75% - 16px);\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-phone {\n      width: auto;\n      grid-column-end: span 3;\n    }\n  }\n  .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n  .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-phone {\n    width: calc(100% - 16px);\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\n  }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-phone {\n      width: auto;\n      grid-column-end: span 4;\n    }\n  }\n}\n\n.mdc-layout-grid__cell--order-1 {\n  order: 1;\n}\n\n.mdc-layout-grid__cell--order-2 {\n  order: 2;\n}\n\n.mdc-layout-grid__cell--order-3 {\n  order: 3;\n}\n\n.mdc-layout-grid__cell--order-4 {\n  order: 4;\n}\n\n.mdc-layout-grid__cell--order-5 {\n  order: 5;\n}\n\n.mdc-layout-grid__cell--order-6 {\n  order: 6;\n}\n\n.mdc-layout-grid__cell--order-7 {\n  order: 7;\n}\n\n.mdc-layout-grid__cell--order-8 {\n  order: 8;\n}\n\n.mdc-layout-grid__cell--order-9 {\n  order: 9;\n}\n\n.mdc-layout-grid__cell--order-10 {\n  order: 10;\n}\n\n.mdc-layout-grid__cell--order-11 {\n  order: 11;\n}\n\n.mdc-layout-grid__cell--order-12 {\n  order: 12;\n}\n\n.mdc-layout-grid__cell--align-top {\n  align-self: flex-start;\n}\n\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-top {\n    align-self: start;\n  }\n}\n\n.mdc-layout-grid__cell--align-middle {\n  align-self: center;\n}\n\n.mdc-layout-grid__cell--align-bottom {\n  align-self: flex-end;\n}\n\n@supports (display: grid) {\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: end;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 1176px;\n    width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2);\n  }\n}\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 720px;\n    width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2);\n  }\n}\n\n@media (max-width: 479px) {\n  .mdc-layout-grid--fixed-column-width {\n    width: 368px;\n    width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2);\n  }\n}\n\n.mdc-layout-grid--align-left {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n.mdc-layout-grid--align-right {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px 0;\n  line-height: 1.5rem;\n  list-style-type: none;\n}\n\n.mdc-list--theme-dark,\n.mdc-theme--dark .mdc-list {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list--dense {\n  padding-top: 4px;\n  font-size: .812rem;\n}\n\n.mdc-list-item {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px;\n}\n\n.mdc-list-item__start-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n  margin-right: 32px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n  margin-left: 32px;\n  margin-right: 0;\n}\n\n.mdc-list-item__end-detail {\n  width: 24px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-list-item__text {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.mdc-list-item__text__secondary {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-list-item__text__secondary--theme-dark,\n.mdc-theme--dark .mdc-list-item__text__secondary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-list--dense .mdc-list-item__text__secondary {\n  font-size: inherit;\n}\n\n.mdc-list--dense .mdc-list-item {\n  height: 40px;\n}\n\n.mdc-list--dense .mdc-list-item__start-detail {\n  width: 20px;\n  height: 20px;\n  margin-left: 0;\n  margin-right: 36px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n  margin-left: 36px;\n  margin-right: 0;\n}\n\n.mdc-list--dense .mdc-list-item__end-detail {\n  width: 20px;\n  height: 20px;\n}\n\n.mdc-list--avatar-list .mdc-list-item {\n  height: 56px;\n}\n\n.mdc-list--avatar-list .mdc-list-item__start-detail {\n  width: 40px;\n  height: 40px;\n  margin-left: 0;\n  margin-right: 16px;\n  border-radius: 50%;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n  margin-left: 16px;\n  margin-right: 0;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n  height: 48px;\n}\n\n.mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  width: 36px;\n  height: 36px;\n  margin-left: 0;\n  margin-right: 20px;\n}\n\n[dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n.mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.mdc-list--two-line .mdc-list-item {\n  height: 72px;\n}\n\n.mdc-list--two-line.mdc-list--dense .mdc-list-item {\n  height: 60px;\n}\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none;\n}\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  left: -16px;\n  right: initial;\n  position: relative;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-list-item.mdc-ripple-upgraded::before {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n[dir=\"rtl\"] .mdc-list-item.mdc-ripple-upgraded, .mdc-list-item.mdc-ripple-upgraded[dir=\"rtl\"] {\n  left: initial;\n  right: -16px;\n}\n\n.mdc-list-item.mdc-ripple-upgraded:focus {\n  outline: none;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before {\n  background-color: rgba(255, 255, 255, 0.12);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.12);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mdc-list--theme-dark .mdc-list-divider,\n.mdc-theme--dark .mdc-list-divider {\n  border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px);\n}\n\n[dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n.mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n  margin-left: 0;\n  margin-right: 56px;\n}\n\n.mdc-list-group {\n  padding: 0 16px;\n}\n\n.mdc-list-group__subheader {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0.75rem 0;\n}\n\n.mdc-list-group__subheader--theme-dark,\n.mdc-theme--dark .mdc-list-group__subheader {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-list-group .mdc-list {\n  padding: 0;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* postcss-bem-linter: define simple-menu */\n.mdc-simple-menu {\n  display: none;\n  position: absolute;\n  min-width: 170px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  margin: 0;\n  padding: 0;\n  transform: scale(0);\n  transform-origin: top left;\n  border-radius: 2px;\n  background-color: white;\n  white-space: nowrap;\n  opacity: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  will-change: transform, opacity;\n  z-index: 4;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable plugin/selector-bem-pattern */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  /* stylelint-enable plugin/selector-bem-pattern */\n}\n\n.mdc-simple-menu--theme-dark,\n.mdc-theme--dark .mdc-simple-menu {\n  background-color: #424242;\n}\n\n.mdc-simple-menu:focus {\n  outline: none;\n}\n\n.mdc-simple-menu--open {\n  display: inline-block;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.mdc-simple-menu--animating {\n  display: inline-block;\n  transition: opacity 0.2s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-simple-menu__items {\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  will-change: transform;\n  /* stylelint-disable plugin/selector-bem-pattern, selector-no-universal */\n  /* stylelint-enable plugin/selector-bem-pattern, selector-no-universal */\n}\n\n.mdc-simple-menu__items > * {\n  opacity: 0;\n}\n\n.mdc-simple-menu__items > .mdc-list-item {\n  cursor: pointer;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items {\n  overflow-y: hidden;\n}\n\n.mdc-simple-menu--animating .mdc-simple-menu__items > * {\n  transition-duration: 0.3s;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-simple-menu--open .mdc-simple-menu__items > * {\n  opacity: 1;\n  will-change: opacity;\n}\n\n[dir=\"rtl\"] .mdc-simple-menu {\n  transform-origin: top right;\n}\n\n.mdc-simple-menu--open-from-top-left {\n  transform-origin: top left !important;\n}\n\n.mdc-simple-menu--open-from-top-right {\n  transform-origin: top right !important;\n}\n\n.mdc-simple-menu--open-from-bottom-left {\n  transform-origin: bottom left !important;\n}\n\n.mdc-simple-menu--open-from-bottom-right {\n  transform-origin: bottom right !important;\n}\n\n.mdc-simple-menu .mdc-list-group,\n.mdc-simple-menu .mdc-list {\n  padding: 8px 0;\n}\n\n.mdc-simple-menu .mdc-list-item {\n  position: relative;\n  padding: 0 16px;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  user-select: none;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item {\n  color: white;\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-divider,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-divider {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item__start-detail,\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item__start-detail {\n  color: rgba(255, 255, 255, 0.54);\n}\n\n.mdc-simple-menu--selected.mdc-list-item,\n.mdc-simple-menu--selected.mdc-list-item .mdc-list-item__start-detail {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-simple-menu .mdc-list-item::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: inherit;\n  background: currentColor;\n  content: \"\";\n  opacity: 0;\n}\n\n.mdc-simple-menu .mdc-list-item:focus::before {\n  opacity: .12;\n}\n\n.mdc-simple-menu .mdc-list-item:active::before {\n  /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n  opacity: .18;\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  cursor: default;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-select--theme-dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"],\n.mdc-theme--dark .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"] {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:focus::before, .mdc-simple-menu .mdc-list-item[aria-disabled=\"true\"]:active::before {\n  opacity: 0;\n}\n\n/* postcss-bem-linter: end */\n.mdc-menu-anchor {\n  position: relative;\n  overflow: visible;\n}\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-radio {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, background-color, color;\n}\n\n.mdc-radio:not(.mdc-ripple-upgraded):hover::before, .mdc-radio:not(.mdc-ripple-upgraded):focus::before, .mdc-radio:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-radio::before {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-radio::before {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-radio.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-radio.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-radio.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-radio.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-radio::after {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.14);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-radio::after {\n    background-color: color(var(--mdc-theme-primary, #225688) a(14%));\n  }\n}\n\n.mdc-radio.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-radio:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-radio.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-radio.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-radio::before, .mdc-radio::after {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before {\n  content: none;\n}\n\n.mdc-radio__background {\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  width: 50%;\n  height: 50%;\n  box-sizing: border-box;\n}\n\n.mdc-radio__background::before {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n  content: \"\";\n  opacity: 0;\n  pointer-events: none;\n}\n\n.mdc-radio__outer-circle {\n  /* @alternate */\n  border-color: rgba(0, 0, 0, 0.54);\n  border-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  box-sizing: border-box;\n}\n\n.mdc-radio--theme-dark .mdc-radio__outer-circle,\n.mdc-theme--dark .mdc-radio__outer-circle {\n  /* @alternate */\n  border-color: rgba(255, 255, 255, 0.7);\n  border-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-radio__inner-circle {\n  /* @alternate */\n  background-color: rgba(0, 0, 0, 0.54);\n  background-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0, 0);\n  transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), background-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-radius: 50%;\n  box-sizing: border-box;\n}\n\n.mdc-radio--theme-dark .mdc-radio__inner-circle,\n.mdc-theme--dark .mdc-radio__inner-circle {\n  /* @alternate */\n  background-color: rgba(255, 255, 255, 0.7);\n  background-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-radio__native-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: inherit;\n  opacity: 0;\n  z-index: 1;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background,\n.mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {\n  transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  /* @alternate */\n  border-color: #225688;\n  border-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  transform: scale(0.5);\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background,\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background {\n  cursor: default;\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle, .mdc-radio--theme-dark\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle, .mdc-radio--theme-dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle, .mdc-radio--theme-dark\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-theme--dark\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle, .mdc-radio--theme-dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n.mdc-theme--dark\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(2, 2);\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .26;\n}\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  outline: none;\n  overflow: hidden;\n}\n\n.mdc-ripple-surface:not(.mdc-ripple-upgraded):hover::before, .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-ripple-surface::before {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface::after {\n  background-color: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-ripple-surface:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded] {\n  overflow: visible;\n}\n\n.mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-ripple-surface--primary::before {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-ripple-surface--primary::before {\n    background-color: color(var(--mdc-theme-primary, #225688) a(16%));\n  }\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface--primary::after {\n  /* @alternate */\n  background-color: rgba(34, 86, 136, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-ripple-surface--primary::after {\n    background-color: color(var(--mdc-theme-primary, #225688) a(16%));\n  }\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-ripple-surface--accent::before {\n  /* @alternate */\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-ripple-surface--accent::before {\n    background-color: color(var(--mdc-theme-secondary, #d2aa28) a(16%));\n  }\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before {\n  opacity: .99999;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-active-fill::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded::before {\n  /* @alternate */\n  top: calc(50% - 50%);\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @alternate */\n  left: calc(50% - 50%);\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  transform: scale(0);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-ripple-surface--accent::after {\n  /* @alternate */\n  background-color: rgba(210, 170, 40, 0.16);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n@supports (background-color: color(green a(10%))) {\n  .mdc-ripple-surface--accent::after {\n    background-color: color(var(--mdc-theme-secondary, #d2aa28) a(16%));\n  }\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-select {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  padding-left: 0;\n  padding-right: 24px;\n  appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  max-width: calc(100% - 24px);\n  height: 32px;\n  transition: border-bottom-color 150ms 0ms cubic-bezier(0.4, 0, 0.6, 1), background-color 150ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 0;\n  background: none;\n  background-repeat: no-repeat;\n  background-position: right center;\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  font-family: Roboto, sans-serif;\n  font-size: .936rem;\n  cursor: pointer;\n}\n\n[dir=\"rtl\"] .mdc-select, .mdc-select[dir=\"rtl\"] {\n  padding-left: 24px;\n  padding-right: 0;\n}\n\n.mdc-select::-ms-expand {\n  display: none;\n}\n\n.mdc-select:focus {\n  /* @alternate */\n  border-bottom-color: #225688;\n  border-bottom-color: var(--mdc-theme-primary, #225688);\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.06);\n}\n\n[dir=\"rtl\"] .mdc-select, .mdc-select[dir=\"rtl\"] {\n  background-position: left center;\n}\n\n.mdc-select--theme-dark,\n.mdc-theme--dark .mdc-select {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.mdc-select--theme-dark:focus,\n.mdc-theme--dark .mdc-select:focus {\n  /* @alternate */\n  border-bottom-color: #225688;\n  border-bottom-color: var(--mdc-theme-primary, #225688);\n  background-color: rgba(255, 255, 255, 0.09);\n}\n\n.mdc-select__menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  max-height: 100%;\n  transform-origin: center center;\n  overflow-y: scroll;\n  z-index: 4;\n}\n\n.mdc-select__selected-text {\n  transition: opacity 125ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 125ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-select--open .mdc-select__selected-text {\n  transform: translateY(8px);\n  transition: opacity 125ms 125ms cubic-bezier(0, 0, 0.2, 1), transform 125ms 125ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n.mdc-select--disabled,\n.mdc-select[disabled] {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom-style: dotted;\n  cursor: default;\n  pointer-events: none;\n  user-select: none;\n}\n\n.mdc-select--theme-dark.mdc-select--disabled,\n.mdc-theme--dark .mdc-select--disabled {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38);\n}\n\n.mdc-select--theme-dark.mdc-select[disabled],\n.mdc-theme--dark .mdc-select[disabled] {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38);\n}\n\n.mdc-select__menu .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-item,\n.mdc-theme--dark .mdc-select__menu .mdc-list-item {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"],\n.mdc-theme--dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-select__menu .mdc-list-group,\n.mdc-select__menu .mdc-list-group > .mdc-list-item:first-child {\n  margin-top: 12px;\n}\n\n.mdc-select__menu .mdc-list-group {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  font-weight: normal;\n}\n\n.mdc-select__menu .mdc-list-group .mdc-list-item {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-group,\n.mdc-theme--dark .mdc-select__menu .mdc-list-group {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-group .mdc-list-item,\n.mdc-theme--dark .mdc-select__menu .mdc-list-group .mdc-list-item {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select {\n  appearance: none;\n  width: 250px;\n  padding: 0;\n  border: 1px solid;\n  /* @alternate */\n  border-color: rgba(0, 0, 0, 0.38);\n  border-color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  outline: none;\n}\n\n.mdc-multi-select--theme-dark,\n.mdc-theme--dark .mdc-multi-select {\n  /* @alternate */\n  border-color: rgba(255, 255, 255, 0.5);\n  border-color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-multi-select .mdc-list-group {\n  margin: 16px 0 0;\n  padding: 0 0 0 16px;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  font-weight: normal;\n}\n\n.mdc-multi-select .mdc-list-group--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-group {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-multi-select .mdc-list-group:last-child {\n  margin-bottom: 16px;\n}\n\n.mdc-multi-select .mdc-list-group .mdc-list-divider {\n  margin-left: -16px;\n}\n\n.mdc-multi-select .mdc-list-item {\n  margin: 0 0 0 -16px;\n  padding: 0 16px;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-multi-select .mdc-list-item--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-item {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select .mdc-list-item:first-child {\n  margin-top: 12px;\n}\n\n.mdc-multi-select .mdc-list-item:last-child {\n  margin-bottom: 8px;\n}\n\n.mdc-multi-select .mdc-list-item:checked {\n  background-color: rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n}\n\n.mdc-multi-select .mdc-list-item:checked--theme-dark,\n.mdc-theme--dark .mdc-multi-select .mdc-list-item:checked {\n  /* @alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-multi-select .mdc-list-divider {\n  margin-bottom: 8px;\n  padding-top: 8px;\n  font-size: 0;\n}\n\n.mdc-multi-select:focus .mdc-list-item:checked {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-multi-select:focus .mdc-list-item:checked--theme-dark,\n.mdc-theme--dark .mdc-multi-select:focus .mdc-list-item:checked {\n  /* @alternate */\n  background-color: white;\n  background-color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* postcss-bem-linter: define snackbar */\n.mdc-snackbar {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  align-items: center;\n  justify-content: flex-start;\n  padding-right: 24px;\n  padding-left: 24px;\n  transform: translate(-50%, 100%);\n  transition: transform 0.25s 0ms cubic-bezier(0.4, 0, 1, 1);\n  background-color: #323232;\n  will-change: transform;\n  pointer-events: none;\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable plugin/selector-bem-pattern */\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar,\n.mdc-theme--dark .mdc-snackbar {\n  background-color: #fafafa;\n}\n\n@media (max-width: 599px) {\n  .mdc-snackbar {\n    left: 0;\n    width: calc(100% - 48px);\n    transform: translate(0, 100%);\n  }\n}\n\n@media (min-width: 600px) {\n  .mdc-snackbar {\n    min-width: 288px;\n    max-width: 568px;\n    border-radius: 2px;\n  }\n}\n\n@media (min-width: 600px) {\n  .mdc-snackbar--align-start {\n    bottom: 24px;\n    left: 24px;\n    right: initial;\n    transform: translate(0, 200%);\n  }\n  [dir=\"rtl\"] .mdc-snackbar--align-start, .mdc-snackbar--align-start[dir=\"rtl\"] {\n    left: initial;\n    right: 24px;\n  }\n}\n\n@media (max-width: 599px) {\n  .mdc-snackbar--align-start {\n    bottom: 0;\n    left: 0;\n    width: calc(100% - 48px);\n    transform: translate(0, 100%);\n  }\n}\n\n.mdc-snackbar--active {\n  transform: translate(0);\n  pointer-events: auto;\n  transition: transform 0.25s 0ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n  transform: translate(-50%, 0);\n}\n\n@media (max-width: 599px) {\n  .mdc-snackbar--active:not(.mdc-snackbar--align-start) {\n    bottom: 0;\n    left: 0;\n    width: calc(100% - 48px);\n    transform: translate(0);\n  }\n}\n\n.mdc-snackbar--action-on-bottom {\n  flex-direction: column;\n}\n\n.mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n  margin-right: inherit;\n}\n\n.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper {\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-top: -12px;\n  margin-bottom: 8px;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n[dir=\"rtl\"] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper, .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir=\"rtl\"] {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.mdc-snackbar__text {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-left: 0;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n  height: 48px;\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  color: white;\n  opacity: 0;\n}\n\n[dir=\"rtl\"] .mdc-snackbar .mdc-snackbar__text,\n.mdc-snackbar[dir=\"rtl\"] .mdc-snackbar__text {\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar__text,\n.mdc-theme--dark .mdc-snackbar__text {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n}\n\n.mdc-snackbar--multiline .mdc-snackbar__text {\n  height: 80px;\n}\n\n.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n  margin: 0;\n}\n\n.mdc-snackbar__action-button {\n  /* @alternate */\n  color: #d2aa28;\n  color: var(--mdc-theme-secondary, #d2aa28);\n  margin-left: 0;\n  margin-right: -16px;\n  min-width: auto;\n  height: inherit;\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  opacity: 0;\n  visibility: hidden;\n}\n\n.mdc-snackbar--theme-dark .mdc-snackbar__action-button,\n.mdc-theme--dark .mdc-snackbar__action-button {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n[dir=\"rtl\"] .mdc-snackbar .mdc-snackbar__action-button,\n.mdc-snackbar[dir=\"rtl\"] .mdc-snackbar__action-button {\n  margin-left: -16px;\n  margin-right: 0;\n}\n\n.mdc-snackbar__action-button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdc-snackbar__action-button:not([aria-hidden]) {\n  visibility: inherit;\n}\n\n.mdc-snackbar--active .mdc-snackbar__text,\n.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]) {\n  transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n  opacity: 1;\n}\n\n/* postcss-bem-linter: end */\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n.mdc-switch {\n  display: inline-block;\n  position: relative;\n}\n\n.mdc-switch__native-control {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 14px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2;\n}\n\n.mdc-switch__background {\n  display: block;\n  position: relative;\n  width: 34px;\n  height: 14px;\n  border-radius: 7px;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  user-select: none;\n}\n\n.mdc-switch--theme-dark .mdc-switch__background,\n.mdc-theme--dark .mdc-switch__background {\n  background-color: transparent;\n}\n\n.mdc-switch__background::before {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 7px;\n  background-color: #000;\n  content: \"\";\n  opacity: .38;\n}\n\n.mdc-switch--theme-dark .mdc-switch__background::before,\n.mdc-theme--dark .mdc-switch__background::before {\n  background-color: #fff;\n  opacity: .3;\n}\n\n.mdc-switch__background .mdc-switch__knob {\n  display: block;\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  transform: translateX(0);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 10px;\n  background-color: #fafafa;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  z-index: 1;\n}\n\n.mdc-switch--theme-dark .mdc-switch__background .mdc-switch__knob,\n.mdc-theme--dark .mdc-switch__background .mdc-switch__knob {\n  background-color: #bdbdbd;\n}\n\n.mdc-switch__background .mdc-switch__knob::before {\n  position: absolute;\n  top: -14px;\n  left: -14px;\n  width: 48px;\n  height: 48px;\n  transform: scale(0);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n  background-color: transparent;\n  content: \"\";\n  opacity: .2;\n}\n\n.mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  transform: scale(1);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n  background-color: #9e9e9e;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before,\n.mdc-theme--dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n  background-color: #f1f1f1;\n  opacity: .14;\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background::before {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  opacity: .5;\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob {\n  transform: translateX(14px);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  opacity: .15;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before,\n.mdc-theme--dark .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-switch__native-control:disabled {\n  cursor: initial;\n}\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n  background-color: #000;\n  opacity: .12;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before,\n.mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n  background-color: #fff;\n  opacity: .1;\n}\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #bdbdbd;\n}\n\n.mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob,\n.mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #424242;\n}\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-textfield {\n  display: inline-block;\n  margin-bottom: 8px;\n  will-change: opacity, transform, color;\n}\n\n.mdc-textfield__input {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  letter-spacing: 0.04em;\n  width: 100%;\n  padding: 0 0 8px;\n  border: none;\n  background: none;\n  font-size: inherit;\n  appearance: none;\n}\n\n.mdc-textfield__input::placeholder {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  transition: color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-textfield__input:focus {\n  outline: none;\n}\n\n.mdc-textfield__input:focus::placeholder {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n}\n\n.mdc-textfield__input:invalid {\n  box-shadow: none;\n}\n\n.mdc-textfield__input--theme-dark,\n.mdc-theme--dark .mdc-textfield__input {\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n}\n\n.mdc-textfield__input--theme-dark::placeholder,\n.mdc-theme--dark .mdc-textfield__input::placeholder {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield__input--theme-dark:focus::placeholder,\n.mdc-theme--dark .mdc-textfield__input:focus::placeholder {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-textfield__label {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  transform-origin: left top;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: text;\n}\n\n[dir=\"rtl\"] .mdc-textfield .mdc-textfield__label,\n.mdc-textfield[dir=\"rtl\"] .mdc-textfield__label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n}\n\n.mdc-textfield--theme-dark .mdc-textfield__label,\n.mdc-theme--dark .mdc-textfield__label {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield__label--float-above {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-textfield__input:-webkit-autofill + .mdc-textfield__label {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-textfield--box {\n  display: inline-flex;\n  position: relative;\n  height: 56px;\n  border-radius: 4px 4px 0 0;\n  background-color: rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box,\n.mdc-theme--dark .mdc-textfield--box {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mdc-textfield--box::before, .mdc-textfield--box::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: inherit;\n  content: \"\";\n  opacity: 0;\n  pointer-events: none;\n}\n\n.mdc-textfield--box::before {\n  transition: opacity 17ms linear, transform 0ms 85ms linear;\n}\n\n.mdc-textfield--box:hover::before {\n  transition: opacity 83ms linear 17ms, transform 250ms cubic-bezier(0, 0, 0.2, 1) 17ms;\n  opacity: 1;\n}\n\n.mdc-textfield--box .mdc-textfield__input {\n  align-self: flex-end;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 20px 16px 0;\n}\n\n.mdc-textfield--box .mdc-textfield__label {\n  left: 16px;\n  right: initial;\n  position: absolute;\n  bottom: 20px;\n  color: rgba(0, 0, 0, 0.6);\n  pointer-events: none;\n  will-change: transform;\n}\n\n[dir=\"rtl\"] .mdc-textfield--box .mdc-textfield__label, .mdc-textfield--box .mdc-textfield__label[dir=\"rtl\"] {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--box .mdc-textfield__label,\n.mdc-theme--dark .mdc-textfield--box .mdc-textfield__label {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-textfield--box .mdc-textfield__label--float-above {\n  transform: translateY(-50%) scale(0.75, 0.75);\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded::after {\n  background-color: rgba(0, 0, 0, 0.04);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded::before {\n  top: calc(50% - var(--mdc-ripple-fg-size, 100%) / 2);\n  left: calc(50% - var(--mdc-ripple-fg-size, 100%) / 2);\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0.8);\n}\n\n.mdc-textfield--box.mdc-ripple-upgraded:hover::before {\n  transform: scale(calc(var(--mdc-ripple-fg-scale, 1) + .1));\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded::after {\n  background-color: rgba(255, 255, 255, 0.05);\n  position: absolute;\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n  top: 0;\n  left: 0;\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n  opacity: 0;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n  transform-origin: center center;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n  /* @alternate */\n  top: 0;\n  top: var(--mdc-ripple-top, 0);\n  /* @alternate */\n  left: 0;\n  left: var(--mdc-ripple-left, 0);\n  /* @alternate */\n  width: 100%;\n  width: var(--mdc-ripple-fg-size, 100%);\n  /* @alternate */\n  height: 100%;\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n  animation: 300ms :local(mdc-ripple-fg-radius-in) forwards, 83ms :local(mdc-ripple-fg-opacity-in) forwards;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after,\n.mdc-theme--dark .mdc-textfield--box.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  animation: 83ms :local(mdc-ripple-fg-opacity-out);\n}\n\n.mdc-textfield--box.mdc-textfield--disabled {\n  border-bottom: none;\n  background-color: rgba(0, 0, 0, 0.02);\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--box.mdc-textfield--disabled,\n.mdc-theme--dark .mdc-textfield--box.mdc-textfield--disabled {\n  border-bottom: none;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.mdc-textfield--box.mdc-textfield--disabled .mdc-textfield__label {\n  bottom: 20px;\n}\n\n.mdc-textfield--box.mdc-textfield--disabled .mdc-textfield__input {\n  padding-bottom: 0;\n}\n\n.mdc-textfield--box .mdc-textfield__bottom-line {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  transform: scaleY(1);\n  transform-origin: center bottom;\n  transition: background-color 33ms cubic-bezier(0.4, 0, 0.2, 1), transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(0, 0, 0, 0.42);\n  pointer-events: none;\n}\n\n.mdc-textfield--box .mdc-textfield__bottom-line::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #d50000;\n  content: \"\";\n  opacity: 0;\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--box .mdc-textfield__bottom-line,\n.mdc-theme--dark .mdc-textfield--box .mdc-textfield__bottom-line {\n  /* @alternate */\n  background-color: rgba(255, 255, 255, 0.5);\n  background-color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--box .mdc-textfield__bottom-line::after,\n.mdc-theme--dark .mdc-textfield--box .mdc-textfield__bottom-line::after {\n  background-color: #ff6e6e;\n}\n\n.mdc-textfield--box.mdc-textfield--focused .mdc-textfield__bottom-line {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  transform: scaleY(2);\n}\n\n.mdc-textfield--box.mdc-textfield--disabled .mdc-textfield__bottom-line {\n  display: none;\n}\n\n.mdc-textfield--box.mdc-textfield--invalid .mdc-textfield__bottom-line::after {\n  opacity: 1;\n}\n\n.mdc-textfield--box.mdc-textfield--dense {\n  height: 44px;\n}\n\n.mdc-textfield--box.mdc-textfield--dense .mdc-textfield__input {\n  padding: 12px 12px 0;\n}\n\n.mdc-textfield--box.mdc-textfield--dense .mdc-textfield__label {\n  left: 12px;\n  right: initial;\n  bottom: 12px;\n}\n\n[dir=\"rtl\"] .mdc-textfield--box.mdc-textfield--dense .mdc-textfield__label, .mdc-textfield--box.mdc-textfield--dense .mdc-textfield__label[dir=\"rtl\"] {\n  left: initial;\n  right: 12px;\n}\n\n.mdc-textfield--box.mdc-textfield--dense .mdc-textfield__label--float-above {\n  transform: translateY(calc(-75% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box) {\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  align-items: flex-end;\n  margin-top: 16px;\n}\n\n.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box):not(.mdc-textfield--multiline) {\n  height: 48px;\n}\n\n.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box):not(.mdc-textfield--multiline)::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  transform: translateY(50%) scaleY(1);\n  transform-origin: center bottom;\n  transition: background-color 180ms cubic-bezier(0.4, 0, 0.2, 1), transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(0, 0, 0, 0.12);\n  content: \"\";\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box):not(.mdc-textfield--multiline)::after,\n.mdc-theme--dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box):not(.mdc-textfield--multiline)::after {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--box) .mdc-textfield__label {\n  pointer-events: none;\n}\n\n.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):not(.mdc-textfield--box)::after {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  transform: translateY(100%) scaleY(2);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):not(.mdc-textfield--box)::after,\n.mdc-theme--dark .mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):not(.mdc-textfield--box)::after {\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  transform: translateY(100%) scaleY(2);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-textfield--focused .mdc-textfield__label {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--focused .mdc-textfield__label,\n.mdc-theme--dark .mdc-textfield--focused .mdc-textfield__label {\n  /* @alternate */\n  color: #225688;\n  color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-textfield--dense {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: .813rem;\n}\n\n.mdc-textfield--dense .mdc-textfield__label--float-above {\n  transform: translateY(calc(-100% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-textfield--invalid:not(.mdc-textfield--focused):not(.mdc-textfield--box)::after, .mdc-textfield--invalid:not(.mdc-textfield--focused):not(.mdc-textfield--box).mdc-textfield--upgraded::after {\n  background-color: #d50000;\n}\n\n.mdc-textfield--invalid:not(.mdc-textfield--focused):not(.mdc-textfield--box) .mdc-textfield__label {\n  color: #d50000;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused)::after, .mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused).mdc-textfield--upgraded::after,\n.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused)::after,\n.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused).mdc-textfield--upgraded::after {\n  background-color: #ff6e6e;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label,\n.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label {\n  color: #ff6e6e;\n}\n\n.mdc-textfield--disabled {\n  pointer-events: none;\n  border-bottom: 1px dotted rgba(35, 31, 32, 0.26);\n}\n\n.mdc-textfield--disabled::after {\n  display: none;\n}\n\n.mdc-textfield--disabled .mdc-textfield__input {\n  padding-bottom: 7px;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--disabled,\n.mdc-theme--dark .mdc-textfield--disabled {\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);\n}\n\n.mdc-textfield--disabled .mdc-textfield__input,\n.mdc-textfield--disabled .mdc-textfield__label,\n.mdc-textfield--disabled + .mdc-textfield-helptext {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__input,\n.mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__input, .mdc-textfield--theme-dark\n.mdc-textfield--disabled .mdc-textfield__label,\n.mdc-theme--dark\n.mdc-textfield--disabled .mdc-textfield__label {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--disabled + .mdc-textfield-helptext,\n.mdc-theme--dark .mdc-textfield--disabled + .mdc-textfield-helptext {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield--disabled .mdc-textfield__label {\n  bottom: 7px;\n  cursor: default;\n}\n\n.mdc-textfield__input:required + .mdc-textfield__label::after {\n  margin-left: 1px;\n  content: \"*\";\n}\n\n.mdc-textfield--focused .mdc-textfield__input:required + .mdc-textfield__label::after {\n  color: #d50000;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--focused .mdc-textfield__input:required + .mdc-textfield__label::after,\n.mdc-theme--dark .mdc-textfield--focused .mdc-textfield__input:required + .mdc-textfield__label::after {\n  color: #ff6e6e;\n}\n\n.mdc-textfield--multiline {\n  display: flex;\n  height: initial;\n  transition: none;\n}\n\n.mdc-textfield--multiline::after {\n  content: initial;\n}\n\n.mdc-textfield--multiline .mdc-textfield__input {\n  padding: 4px;\n  transition: border-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input,\n.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-textfield--multiline .mdc-textfield__input:focus {\n  /* @alternate */\n  border-color: #225688;\n  border-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus),\n.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-textfield--multiline .mdc-textfield__label {\n  top: 6px;\n  bottom: initial;\n  left: 4px;\n}\n\n[dir=\"rtl\"] .mdc-textfield--multiline .mdc-textfield--multiline .mdc-textfield__label,\n.mdc-textfield--multiline[dir=\"rtl\"] .mdc-textfield--multiline .mdc-textfield__label {\n  right: 4px;\n  left: auto;\n}\n\n.mdc-textfield--multiline .mdc-textfield__label--float-above {\n  transform: translateY(calc(-100% - 6px)) scale(0.923, 0.923);\n}\n\n.mdc-textfield--multiline.mdc-textfield--disabled {\n  border-bottom: none;\n}\n\n.mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input {\n  border: 1px dotted rgba(35, 31, 32, 0.26);\n}\n\n.mdc-textfield--theme-dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input,\n.mdc-theme--dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-textfield--fullwidth {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  outline: none;\n}\n\n.mdc-textfield--fullwidth:not(.mdc-textfield--multiline) {\n  height: 56px;\n}\n\n.mdc-textfield--fullwidth.mdc-textfield--multiline {\n  padding: 20px 0 0;\n}\n\n.mdc-textfield--fullwidth.mdc-textfield--dense:not(.mdc-textfield--multiline) {\n  height: 48px;\n}\n\n.mdc-textfield--fullwidth.mdc-textfield--dense.mdc-textfield--multiline {\n  padding: 16px 0 0;\n}\n\n.mdc-textfield--fullwidth.mdc-textfield--disabled, .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline {\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.12);\n}\n\n.mdc-textfield--fullwidth--theme-dark,\n.mdc-theme--dark .mdc-textfield--fullwidth {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled, .mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled.mdc-textfield--multiline,\n.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled,\n.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline {\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.12);\n}\n\n.mdc-textfield--fullwidth .mdc-textfield__input {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  resize: none;\n  border: none !important;\n}\n\n.mdc-textfield:not(.mdc-textfield--upgraded):not(.mdc-textfield--multiline) .mdc-textfield__input {\n  transition: border-bottom-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus {\n  /* @alternate */\n  border-color: #225688;\n  border-color: var(--mdc-theme-primary, #225688);\n}\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  border-style: dotted;\n  border-color: rgba(35, 31, 32, 0.26);\n}\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus),\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled,\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus),\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-textfield--box:not(.mdc-textfield--upgraded) {\n  height: 36px;\n}\n\n.mdc-textfield--box:not(.mdc-textfield--upgraded)::before, .mdc-textfield--box:not(.mdc-textfield--upgraded)::after {\n  border-radius: 0;\n}\n\n.mdc-textfield--box:not(.mdc-textfield--upgraded) .mdc-textfield__input {\n  padding-top: 0;\n}\n\n.mdc-textfield-helptext {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  margin: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: .75rem;\n  opacity: 0;\n  will-change: opacity;\n}\n\n.mdc-textfield-helptext--theme-dark,\n.mdc-theme--dark .mdc-textfield-helptext {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-textfield + .mdc-textfield-helptext {\n  margin-bottom: 8px;\n}\n\n.mdc-textfield--dense + .mdc-textfield-helptext {\n  margin-bottom: 4px;\n}\n\n.mdc-textfield--focused + .mdc-textfield-helptext:not(.mdc-textfield-helptext--validation-msg) {\n  opacity: 1;\n}\n\n.mdc-textfield--box + .mdc-textfield-helptext {\n  margin-right: 16px;\n  margin-left: 16px;\n}\n\n.mdc-textfield-helptext--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial;\n}\n\n.mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg {\n  color: #d50000;\n  opacity: 1;\n}\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg,\n.mdc-theme--dark .mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg {\n  color: #ff6e6e;\n}\n\n.mdc-form-field > .mdc-textfield + label {\n  align-self: flex-start;\n}\n\n:root {\n  --mdc-theme-primary: #225688;\n  --mdc-theme-primary-light: #307ac1;\n  --mdc-theme-primary-dark: #14324f;\n  --mdc-theme-secondary: #d2aa28;\n  --mdc-theme-secondary-light: #e1c361;\n  --mdc-theme-secondary-dark: #96791d;\n  --mdc-theme-background: #fff;\n  --mdc-theme-text-primary-on-primary: white;\n  --mdc-theme-text-secondary-on-primary: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-primary-light: white;\n  --mdc-theme-text-secondary-on-primary-light: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-primary-dark: white;\n  --mdc-theme-text-secondary-on-primary-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-secondary: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-secondary: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-secondary: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-secondary: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-secondary: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-secondary-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-secondary-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-secondary-dark: white;\n  --mdc-theme-text-secondary-on-secondary-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-dark: white;\n  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);\n}\n\n.mdc-theme--background {\n  /* @alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff);\n}\n\n.mdc-theme--primary {\n  /* @alternate */\n  color: #225688 !important;\n  color: var(--mdc-theme-primary, #225688) !important;\n}\n\n.mdc-theme--primary-light {\n  /* @alternate */\n  color: #307ac1 !important;\n  color: var(--mdc-theme-primary-light, #307ac1) !important;\n}\n\n.mdc-theme--primary-dark {\n  /* @alternate */\n  color: #14324f !important;\n  color: var(--mdc-theme-primary-dark, #14324f) !important;\n}\n\n.mdc-theme--secondary {\n  /* @alternate */\n  color: #d2aa28 !important;\n  color: var(--mdc-theme-secondary, #d2aa28) !important;\n}\n\n.mdc-theme--secondary-light {\n  /* @alternate */\n  color: #e1c361 !important;\n  color: var(--mdc-theme-secondary-light, #e1c361) !important;\n}\n\n.mdc-theme--secondary-dark {\n  /* @alternate */\n  color: #96791d !important;\n  color: var(--mdc-theme-secondary-dark, #96791d) !important;\n}\n\n.mdc-theme--text-primary-on-primary {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary, white) !important;\n}\n\n.mdc-theme--text-secondary-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-primary-on-primary-light {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary-light, white) !important;\n}\n\n.mdc-theme--text-secondary-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary-light, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary-light, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary-light, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary-light, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-primary-on-primary-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary-dark, white) !important;\n}\n\n.mdc-theme--text-secondary-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary-dark, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-primary-on-secondary {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-secondary, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-secondary {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-secondary {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-secondary, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-secondary {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-secondary {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-secondary, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-secondary-light, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary-light, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-secondary-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-secondary-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-secondary-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-secondary-dark, white) !important;\n}\n\n.mdc-theme--text-secondary-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary-dark, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-primary-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important;\n}\n\n.mdc-theme--text-secondary-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important;\n}\n\n.mdc-theme--text-hint-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-disabled-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-icon-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important;\n}\n\n.mdc-theme--text-primary-on-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-dark, white) !important;\n}\n\n.mdc-theme--text-secondary-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important;\n}\n\n.mdc-theme--text-hint-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-disabled-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--text-icon-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important;\n}\n\n.mdc-theme--primary-bg {\n  /* @alternate */\n  background-color: #225688 !important;\n  background-color: var(--mdc-theme-primary, #225688) !important;\n}\n\n.mdc-theme--primary-light-bg {\n  /* @alternate */\n  background-color: #307ac1 !important;\n  background-color: var(--mdc-theme-primary-light, #307ac1) !important;\n}\n\n.mdc-theme--primary-dark-bg {\n  /* @alternate */\n  background-color: #14324f !important;\n  background-color: var(--mdc-theme-primary-dark, #14324f) !important;\n}\n\n.mdc-theme--secondary-bg {\n  /* @alternate */\n  background-color: #d2aa28 !important;\n  background-color: var(--mdc-theme-secondary, #d2aa28) !important;\n}\n\n.mdc-theme--secondary-light-bg {\n  /* @alternate */\n  background-color: #e1c361 !important;\n  background-color: var(--mdc-theme-secondary-light, #e1c361) !important;\n}\n\n.mdc-theme--secondary-dark-bg {\n  /* @alternate */\n  background-color: #96791d !important;\n  background-color: var(--mdc-theme-secondary-dark, #96791d) !important;\n}\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Applies styles to the different types of icons that can exist in toolbars.\n * Both .mdc-toolbar__icon and .mdc-toolbar__icon--menu share all styles except for\n * horizontal padding.\n */\n.mdc-toolbar {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  /* @alternate */\n  background-color: #225688;\n  background-color: var(--mdc-theme-primary, #225688);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n}\n\n.mdc-toolbar__row {\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  min-height: 64px;\n  box-sizing: border-box;\n}\n\n@media (max-width: 959px) and (orientation: landscape) {\n  .mdc-toolbar__row {\n    min-height: 48px;\n  }\n}\n\n@media (max-width: 599px) {\n  .mdc-toolbar__row {\n    min-height: 56px;\n  }\n}\n\n.mdc-toolbar__section {\n  display: inline-flex;\n  flex: 1;\n  align-items: flex-start;\n  justify-content: center;\n  min-width: 0;\n  height: 100%;\n  z-index: 1;\n}\n\n.mdc-toolbar__section--align-start {\n  justify-content: flex-start;\n  order: -1;\n}\n\n.mdc-toolbar__section--align-end {\n  justify-content: flex-end;\n  order: 1;\n}\n\n.mdc-toolbar__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  align-self: center;\n  margin: 0;\n  margin-left: 24px;\n  padding: 16px 0;\n  line-height: 1.5rem;\n  z-index: 1;\n}\n\n.mdc-toolbar__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 8px;\n  border: none;\n  background-color: inherit;\n  color: inherit;\n  text-decoration: none;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  cursor: pointer;\n}\n\n@media (min-width: 599px) {\n  .mdc-toolbar__icon:last-of-type {\n    margin-right: 8px;\n  }\n}\n\n.mdc-toolbar__icon--menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border: none;\n  background-color: inherit;\n  color: inherit;\n  text-decoration: none;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white);\n  padding: 16px 24px;\n  cursor: pointer;\n}\n\n.mdc-toolbar__icon--menu + .mdc-toolbar__title {\n  margin-left: 8px;\n}\n\n@media (max-width: 599px) {\n  .mdc-toolbar__icon--menu {\n    padding: 16px;\n  }\n  .mdc-toolbar__title {\n    margin-left: 16px !important;\n  }\n}\n\n.mdc-toolbar--fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 4;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar--flexible {\n  --mdc-toolbar-ratio-to-extend-flexible: 4;\n}\n\n.mdc-toolbar--flexible .mdc-toolbar__row:first-child {\n  height: 256px;\n  height: calc(64px * var(--mdc-toolbar-ratio-to-extend-flexible, 4));\n}\n\n@media (max-width: 599px) {\n  .mdc-toolbar--flexible .mdc-toolbar__row:first-child {\n    height: 224px;\n    height: calc(56px * var(--mdc-toolbar-ratio-to-extend-flexible, 4));\n  }\n}\n\n.mdc-toolbar--flexible .mdc-toolbar__row:first-child::after {\n  position: absolute;\n  content: \"\";\n}\n\n.mdc-toolbar--flexible-default-behavior .mdc-toolbar__title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n  align-self: flex-end;\n  line-height: 1.5rem;\n}\n\n.mdc-toolbar--flexible-default-behavior .mdc-toolbar__row:first-child::after {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity .2s ease;\n  opacity: 1;\n}\n\n.mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__row:first-child::after {\n  opacity: 0;\n}\n\n.mdc-toolbar--flexible-default-behavior.mdc-toolbar--flexible-space-minimized .mdc-toolbar__title {\n  font-weight: 500;\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--flexible-space-minimized {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--flexible-space-minimized {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar--waterfall.mdc-toolbar--fixed.mdc-toolbar--fixed-lastrow-only.mdc-toolbar--fixed-at-last-row {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mdc-toolbar-fixed-adjust {\n  margin-top: 64px;\n}\n\n@media (max-width: 959px) and (orientation: landscape) {\n  .mdc-toolbar-fixed-adjust {\n    margin-top: 48px;\n  }\n}\n\n@media (max-width: 599px) {\n  .mdc-toolbar-fixed-adjust {\n    margin-top: 56px;\n  }\n}\n\n.mdc-toolbar__section--shrink-to-fit {\n  flex: none;\n}\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-typography {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\n.mdc-typography--display4 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 7rem;\n  font-weight: 300;\n  letter-spacing: -0.04em;\n  line-height: 7rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--display4 {\n  margin: -1rem 0 3.5rem -0.085em;\n}\n\n.mdc-typography--display3 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 3.5rem;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  line-height: 3.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--display3 {\n  margin: -8px 0 64px -0.07em;\n}\n\n.mdc-typography--display2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.813rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 3rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--display2 {\n  margin: -0.5rem 0 4rem -0.07em;\n}\n\n.mdc-typography--display1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--display1 {\n  margin: -0.5rem 0 4rem -0.07em;\n}\n\n.mdc-typography--headline {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--headline {\n  margin: -0.5rem 0 1rem -0.06em;\n}\n\n.mdc-typography--title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--title {\n  margin: -0.5rem 0 1rem -0.05em;\n}\n\n.mdc-typography--subheading2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--subheading2 {\n  margin: -0.5rem 0 1rem -0.06em;\n}\n\n.mdc-typography--subheading1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.938rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--subheading1 {\n  margin: -0.313rem 0 0.813rem -0.06em;\n}\n\n.mdc-typography--body2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--body2 {\n  margin: -0.25rem 0 0.75rem 0;\n}\n\n.mdc-typography--body1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--body1 {\n  margin: -0.25rem 0 0.75rem 0;\n}\n\n.mdc-typography--caption {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--caption {\n  margin: -0.5rem 0 1rem -0.04em;\n}\n\n.mdc-typography--button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.mdc-typography--adjust-margin.mdc-typography--button {\n  margin: inherit;\n}\n\n/* COLORS */\n.romajs-color-no {\n  color: #802900;\n}\n\n.romajs-color-yes {\n  color: #1b8c64;\n}\n\n/* Ensure layout covers the entire screen. */\nhtml {\n  height: 100%;\n}\n\n/* Place drawer and content side by side. */\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n\n#romajs > div {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Stack toolbar and main on top of each other. */\n.romajs-content {\n  display: inline-flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n  box-sizing: border-box;\n  margin: 130px 0 0 0;\n}\n\n.romajs-main {\n  padding-left: 16px;\n}\n\n/* TOOLBAR */\n.romajs-toolbar .mdc-toolbar__section--align-end .material-icons {\n  padding-right: 20px;\n  cursor: pointer;\n}\n\n/* SECONDARY TOOLBAR */\n.romajs-toolbar2 {\n  padding: 10px 20px 20px 30px;\n}\n\n.romajs-toolbar2 .mdl-chip {\n  margin-right: 10px;\n}\n\n.romajs-toolbar2 .romajs-itemtype-selected {\n  background-color: #d2aa28;\n}\n\n/* SEARCHBAR */\n.romajs-searchbar .mdl-chip__action {\n  margin: 0 0 10px 0;\n}\n\n/* ITEMS */\n.romajs-itemlist .mdc-list-item__text {\n  padding-right: 20px;\n  width: 85%;\n}\n\n.romajs-itemlist .mdc-list-item__end-detail {\n  margin-right: 15px;\n  width: 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* CARDS */\n.romajs-card {\n  max-height: 300px;\n  min-height: 300px;\n  justify-content: flex-start;\n}\n\n.romajs-card .mdc-card__supporting-text {\n  overflow-y: auto;\n  margin-bottom: 24px;\n}\n\n.romajs-card .mdc-card__title--large {\n  padding-top: 3px;\n}\n\n.romajs-card h1 {\n  float: left;\n}\n\n.romajs-card .mdc-form-field {\n  float: right;\n}\n\n.romajs-card .romajs-elementIdent {\n  padding-top: 20px;\n}\n", ""]);

// exports
exports.locals = {
	"mdl-chip": "mdl-chip",
	"mdl-chip__text": "mdl-chip__text",
	"mdl-chip__action": "mdl-chip__action",
	"mdl-chip__contact": "mdl-chip__contact",
	"mdl-chip--deletable": "mdl-chip--deletable",
	"mdl-chip--contact": "mdl-chip--contact",
	"mdc-animation-deceleration-curve": "mdc-animation-deceleration-curve",
	"mdc-animation-standard-curve": "mdc-animation-standard-curve",
	"mdc-animation-acceleration-curve": "mdc-animation-acceleration-curve",
	"mdc-animation-sharp-curve": "mdc-animation-sharp-curve",
	"mdc-button": "mdc-button",
	"mdc-ripple-upgraded": "mdc-ripple-upgraded",
	"mdc-ripple-upgraded--background-focused": "mdc-ripple-upgraded--background-focused",
	"mdc-ripple-upgraded--background-active-fill": "mdc-ripple-upgraded--background-active-fill",
	"mdc-ripple-upgraded--unbounded": "mdc-ripple-upgraded--unbounded",
	"mdc-ripple-upgraded--foreground-activation": "mdc-ripple-upgraded--foreground-activation",
	"mdc-ripple-upgraded--foreground-deactivation": "mdc-ripple-upgraded--foreground-deactivation",
	"mdc-button--theme-dark": "mdc-button--theme-dark",
	"mdc-theme--dark": "mdc-theme--dark",
	"mdc-button--raised": "mdc-button--raised",
	"mdc-button--compact": "mdc-button--compact",
	"mdc-button--dense": "mdc-button--dense",
	"mdc-button--primary": "mdc-button--primary",
	"mdc-button--unelevated": "mdc-button--unelevated",
	"mdc-button--accent": "mdc-button--accent",
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
	"mdc-checkbox--disabled": "mdc-checkbox--disabled",
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
	"mdc-dialog__backdrop": "mdc-dialog__backdrop",
	"mdc-dialog__surface": "mdc-dialog__surface",
	"mdc-dialog--theme-dark": "mdc-dialog--theme-dark",
	"mdc-dialog__header": "mdc-dialog__header",
	"mdc-dialog__header__empty": "mdc-dialog__header__empty",
	"mdc-dialog__header__title": "mdc-dialog__header__title",
	"mdc-dialog__body": "mdc-dialog__body",
	"mdc-dialog__body--scrollable": "mdc-dialog__body--scrollable",
	"mdc-dialog__footer": "mdc-dialog__footer",
	"mdc-dialog__footer__button": "mdc-dialog__footer__button",
	"mdc-dialog__footer__action": "mdc-dialog__footer__action",
	"mdc-dialog--animating": "mdc-dialog--animating",
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
	"mdc-drawer-scroll-lock": "mdc-drawer-scroll-lock",
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
	"mdc-layout-grid__inner": "mdc-layout-grid__inner",
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
	"mdc-layout-grid--fixed-column-width": "mdc-layout-grid--fixed-column-width",
	"mdc-layout-grid--align-left": "mdc-layout-grid--align-left",
	"mdc-layout-grid--align-right": "mdc-layout-grid--align-right",
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
	"mdc-select--theme-dark": "mdc-select--theme-dark",
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
	"mdc-select__menu": "mdc-select__menu",
	"mdc-select__selected-text": "mdc-select__selected-text",
	"mdc-select--open": "mdc-select--open",
	"mdc-select--disabled": "mdc-select--disabled",
	"mdc-multi-select": "mdc-multi-select",
	"mdc-multi-select--theme-dark": "mdc-multi-select--theme-dark",
	"mdc-list-group--theme-dark": "mdc-list-group--theme-dark",
	"mdc-list-item--theme-dark": "mdc-list-item--theme-dark",
	"mdc-snackbar": "mdc-snackbar",
	"mdc-snackbar--theme-dark": "mdc-snackbar--theme-dark",
	"mdc-snackbar--align-start": "mdc-snackbar--align-start",
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
	"mdc-textfield--box": "mdc-textfield--box",
	"mdc-textfield--disabled": "mdc-textfield--disabled",
	"mdc-textfield__bottom-line": "mdc-textfield__bottom-line",
	"mdc-textfield--focused": "mdc-textfield--focused",
	"mdc-textfield--invalid": "mdc-textfield--invalid",
	"mdc-textfield--dense": "mdc-textfield--dense",
	"mdc-textfield--upgraded": "mdc-textfield--upgraded",
	"mdc-textfield--fullwidth": "mdc-textfield--fullwidth",
	"mdc-textfield--multiline": "mdc-textfield--multiline",
	"mdc-textfield-helptext": "mdc-textfield-helptext",
	"mdc-textfield--fullwidth--theme-dark": "mdc-textfield--fullwidth--theme-dark",
	"mdc-textfield-helptext--theme-dark": "mdc-textfield-helptext--theme-dark",
	"mdc-textfield-helptext--validation-msg": "mdc-textfield-helptext--validation-msg",
	"mdc-textfield-helptext--persistent": "mdc-textfield-helptext--persistent",
	"mdc-theme--background": "mdc-theme--background",
	"mdc-theme--primary": "mdc-theme--primary",
	"mdc-theme--primary-light": "mdc-theme--primary-light",
	"mdc-theme--primary-dark": "mdc-theme--primary-dark",
	"mdc-theme--secondary": "mdc-theme--secondary",
	"mdc-theme--secondary-light": "mdc-theme--secondary-light",
	"mdc-theme--secondary-dark": "mdc-theme--secondary-dark",
	"mdc-theme--text-primary-on-primary": "mdc-theme--text-primary-on-primary",
	"mdc-theme--text-secondary-on-primary": "mdc-theme--text-secondary-on-primary",
	"mdc-theme--text-hint-on-primary": "mdc-theme--text-hint-on-primary",
	"mdc-theme--text-disabled-on-primary": "mdc-theme--text-disabled-on-primary",
	"mdc-theme--text-icon-on-primary": "mdc-theme--text-icon-on-primary",
	"mdc-theme--text-primary-on-primary-light": "mdc-theme--text-primary-on-primary-light",
	"mdc-theme--text-secondary-on-primary-light": "mdc-theme--text-secondary-on-primary-light",
	"mdc-theme--text-hint-on-primary-light": "mdc-theme--text-hint-on-primary-light",
	"mdc-theme--text-disabled-on-primary-light": "mdc-theme--text-disabled-on-primary-light",
	"mdc-theme--text-icon-on-primary-light": "mdc-theme--text-icon-on-primary-light",
	"mdc-theme--text-primary-on-primary-dark": "mdc-theme--text-primary-on-primary-dark",
	"mdc-theme--text-secondary-on-primary-dark": "mdc-theme--text-secondary-on-primary-dark",
	"mdc-theme--text-hint-on-primary-dark": "mdc-theme--text-hint-on-primary-dark",
	"mdc-theme--text-disabled-on-primary-dark": "mdc-theme--text-disabled-on-primary-dark",
	"mdc-theme--text-icon-on-primary-dark": "mdc-theme--text-icon-on-primary-dark",
	"mdc-theme--text-primary-on-secondary": "mdc-theme--text-primary-on-secondary",
	"mdc-theme--text-secondary-on-secondary": "mdc-theme--text-secondary-on-secondary",
	"mdc-theme--text-hint-on-secondary": "mdc-theme--text-hint-on-secondary",
	"mdc-theme--text-disabled-on-secondary": "mdc-theme--text-disabled-on-secondary",
	"mdc-theme--text-icon-on-secondary": "mdc-theme--text-icon-on-secondary",
	"mdc-theme--text-primary-on-secondary-light": "mdc-theme--text-primary-on-secondary-light",
	"mdc-theme--text-secondary-on-secondary-light": "mdc-theme--text-secondary-on-secondary-light",
	"mdc-theme--text-hint-on-secondary-light": "mdc-theme--text-hint-on-secondary-light",
	"mdc-theme--text-disabled-on-secondary-light": "mdc-theme--text-disabled-on-secondary-light",
	"mdc-theme--text-icon-on-secondary-light": "mdc-theme--text-icon-on-secondary-light",
	"mdc-theme--text-primary-on-secondary-dark": "mdc-theme--text-primary-on-secondary-dark",
	"mdc-theme--text-secondary-on-secondary-dark": "mdc-theme--text-secondary-on-secondary-dark",
	"mdc-theme--text-hint-on-secondary-dark": "mdc-theme--text-hint-on-secondary-dark",
	"mdc-theme--text-disabled-on-secondary-dark": "mdc-theme--text-disabled-on-secondary-dark",
	"mdc-theme--text-icon-on-secondary-dark": "mdc-theme--text-icon-on-secondary-dark",
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
	"mdc-theme--primary-light-bg": "mdc-theme--primary-light-bg",
	"mdc-theme--primary-dark-bg": "mdc-theme--primary-dark-bg",
	"mdc-theme--secondary-bg": "mdc-theme--secondary-bg",
	"mdc-theme--secondary-light-bg": "mdc-theme--secondary-light-bg",
	"mdc-theme--secondary-dark-bg": "mdc-theme--secondary-dark-bg",
	"mdc-toolbar": "mdc-toolbar",
	"mdc-toolbar__row": "mdc-toolbar__row",
	"mdc-toolbar__section": "mdc-toolbar__section",
	"mdc-toolbar__section--align-start": "mdc-toolbar__section--align-start",
	"mdc-toolbar__section--align-end": "mdc-toolbar__section--align-end",
	"mdc-toolbar__title": "mdc-toolbar__title",
	"mdc-toolbar__icon": "mdc-toolbar__icon",
	"mdc-toolbar__icon--menu": "mdc-toolbar__icon--menu",
	"mdc-toolbar--fixed": "mdc-toolbar--fixed",
	"mdc-toolbar--flexible": "mdc-toolbar--flexible",
	"mdc-toolbar--flexible-default-behavior": "mdc-toolbar--flexible-default-behavior",
	"mdc-toolbar--flexible-space-minimized": "mdc-toolbar--flexible-space-minimized",
	"mdc-toolbar--waterfall": "mdc-toolbar--waterfall",
	"mdc-toolbar--fixed-lastrow-only": "mdc-toolbar--fixed-lastrow-only",
	"mdc-toolbar--fixed-at-last-row": "mdc-toolbar--fixed-at-last-row",
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
	"mdc-typography--button": "mdc-typography--button",
	"romajs-color-no": "romajs-color-no",
	"romajs-color-yes": "romajs-color-yes",
	"romajs": "romajs",
	"romajs-content": "romajs-content",
	"romajs-main": "romajs-main",
	"romajs-toolbar": "romajs-toolbar",
	"material-icons": "material-icons",
	"romajs-toolbar2": "romajs-toolbar2",
	"romajs-itemtype-selected": "romajs-itemtype-selected",
	"romajs-searchbar": "romajs-searchbar",
	"romajs-itemlist": "romajs-itemlist",
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
/***/ (function(module, exports) {

/*
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

	if (useSourceMap && typeof btoa === 'function') {
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
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/global/window.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


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

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


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

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


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

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


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

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


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

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


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

/***/ "./node_modules/react-deep-force-update/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Constant to identify a React Component. It's been extracted from ReactTypeOfWork
// (https://github.com/facebook/react/blob/master/src/shared/ReactTypeOfWork.js#L20)


exports.__esModule = true;
exports['default'] = getForceUpdate;
var ReactClassComponent = 2;

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

function deepForceUpdateStack(instance, React) {
  var internalInstance = instance._reactInternalInstance;
  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
}

function deepForceUpdate(instance, React) {
  var root = instance._reactInternalFiber || instance._reactInternalInstance;
  if (typeof root.tag !== 'number') {
    // Traverse stack-based React tree.
    return deepForceUpdateStack(instance, React);
  }

  var node = root;
  while (true) {
    if (node.tag === ReactClassComponent) {
      var publicInstance = node.stateNode;
      var updater = publicInstance.updater;

      if (typeof publicInstance.forceUpdate === 'function') {
        publicInstance.forceUpdate();
      } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
        updater.enqueueForceUpdate(publicInstance);
      }
    }
    if (node.child) {
      node.child['return'] = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return undefined;
    }
    while (!node.sibling) {
      if (!node['return'] || node['return'] === root) {
        return undefined;
      }
      node = node['return'];
    }
    node.sibling['return'] = node['return'];
    node = node.sibling;
  }
}

function getForceUpdate(React) {
  return function (instance) {
    deepForceUpdate(instance, React);
  };
}

module.exports = exports['default'];

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

/***/ "./node_modules/redbox-react/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _sourcemappedStacktrace = __webpack_require__("./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedBoxError = exports.RedBoxError = function (_get__2) {
  _inherits(RedBoxError, _get__2);

  function RedBoxError(props) {
    _classCallCheck(this, RedBoxError);

    var _this = _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).call(this, props));

    _this.state = {
      error: null,
      mapped: false
    };

    _this.mapOnConstruction(props.error);
    return _this;
  }

  // State is used to store the error mapped to the source map.


  _createClass(RedBoxError, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.mapped) this.mapError(this.props.error);
    }

    // Try to map the error when the component gets constructed, this is possible
    // in some cases like evals.

  }, {
    key: 'mapOnConstruction',
    value: function mapOnConstruction(error) {
      var stackLines = error.stack.split('\n');

      // There's no stack, only the error message.
      if (stackLines.length < 2) {
        this.state = { error: error, mapped: true };
        return;
      }

      // Using the “eval” setting on webpack already gives the correct location.
      var isWebpackEval = stackLines[1].search(/\(webpack:\/{3}/) !== -1;
      if (isWebpackEval) {
        // No changes are needed here.
        this.state = { error: error, mapped: true };
        return;
      }

      // Other eval follow a specific pattern and can be easily parsed.
      var isEval = stackLines[1].search(/\(eval at/) !== -1;
      if (!isEval) {
        // mapping will be deferred until `componentDidMount`
        this.state = { error: error, mapped: false };
        return;
      }

      // The first line is the error message.
      var fixedLines = [stackLines.shift()];
      // The rest needs to be fixed.
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stackLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var stackLine = _step.value;

          var evalStackLine = stackLine.match(/(.+)\(eval at (.+) \(.+?\), .+(\:[0-9]+\:[0-9]+)\)/);
          if (evalStackLine) {
            var _evalStackLine = _slicedToArray(evalStackLine, 4),
                atSomething = _evalStackLine[1],
                file = _evalStackLine[2],
                rowColumn = _evalStackLine[3];

            fixedLines.push(atSomething + ' (' + file + rowColumn + ')');
          } else {
            // TODO: When stack frames of different types are detected, try to load the additional source maps
            fixedLines.push(stackLine);
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

      error.stack = fixedLines.join('\n');
      this.state = { error: error, mapped: true };
    }
  }, {
    key: 'mapError',
    value: function mapError(error) {
      var _this2 = this;

      _get__('mapStackTrace')(error.stack, function (mappedStack) {
        error.stack = mappedStack.join('\n');
        _this2.setState({ error: error, mapped: true });
      });
    }
  }, {
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
      // The error is received as a property to initialize state.error, which may
      // be updated when it is mapped to the source map.
      var error = this.state.error;
      var className = this.props.className;

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
  useColumns: true };

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

    case 'mapStackTrace':
      return _sourcemappedStacktrace.mapStackTrace;

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

/***/ "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sourceMappedStackTrace"] = factory();
	else
		root["sourceMappedStackTrace"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * sourcemapped-stacktrace.js
	 * created by James Salter <iteration@gmail.com> (2014)
	 *
	 * https://github.com/novocaine/sourcemapped-stacktrace
	 *
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	/*global define */

	// note we only include source-map-consumer, not the whole source-map library,
	// which includes gear for generating source maps that we don't need
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(source_map_consumer) {

	  var global_mapForUri = {};

	  /**
	   * Re-map entries in a stacktrace using sourcemaps if available.
	   *
	   * @param {Array} stack - Array of strings from the browser's stack
	   *                        representation. Currently only Chrome
	   *                        format is supported.
	   * @param {function} done - Callback invoked with the transformed stacktrace
	   *                          (an Array of Strings) passed as the first
	   *                          argument
	   * @param {Object} [opts] - Optional options object.
	   * @param {Function} [opts.filter] - Filter function applied to each stackTrace line.
	   *                                   Lines which do not pass the filter won't be processesd.
	   * @param {boolean} [opts.cacheGlobally] - Whether to cache sourcemaps globally across multiple calls.
	   */
	  var mapStackTrace = function(stack, done, opts) {
	    var lines;
	    var line;
	    var mapForUri = {};
	    var rows = {};
	    var fields;
	    var uri;
	    var expected_fields;
	    var regex;

	    var fetcher = new Fetcher(function() {
	      var result = processSourceMaps(lines, rows, fetcher.mapForUri);
	      done(result);
	    }, opts);

	    if (isChromeOrEdge() || isIE11Plus()) {
	      regex = /^ +at.+\((.*):([0-9]+):([0-9]+)/;
	      expected_fields = 4;
	      // (skip first line containing exception message)
	      skip_lines = 1;
	    } else if (isFirefox() || isSafari()) {
	      regex = /@(.*):([0-9]+):([0-9]+)/;
	      expected_fields = 4;
	      skip_lines = 0;
	    } else {
	      throw new Error("unknown browser :(");
	    }

	    lines = stack.split("\n").slice(skip_lines);

	    for (var i=0; i < lines.length; i++) {
	      line = lines[i];
	      if ( opts && opts.filter && !opts.filter(line) ) continue;
	      
	      fields = line.match(regex);
	      if (fields && fields.length === expected_fields) {
	        rows[i] = fields;
	        uri = fields[1];
	        if (!uri.match(/<anonymous>/)) {
	          fetcher.fetchScript(uri);
	        }
	      }
	    }

	    // if opts.cacheGlobally set, all maps could have been cached already,
	    // thus we need to call done callback right away
	    if ( fetcher.sem === 0 ) {
	      fetcher.done(fetcher.mapForUri);
	    }
	  };

	  var isChromeOrEdge = function() {
	    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	  };

	  var isFirefox = function() {
	    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	  };  

	  var isSafari = function() {
	    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	  };
			
	  var isIE11Plus = function() {
	   	return document.documentMode && document.documentMode >= 11;
	  };

	  var Fetcher = function(done, opts) {
	    this.sem = 0;
	    this.mapForUri = opts && opts.cacheGlobally ? global_mapForUri : {};
	    this.done = done;
	  };

	  Fetcher.prototype.fetchScript = function(uri) {
	    if (!(uri in this.mapForUri)) {
	      this.sem++;
	      this.mapForUri[uri] = null;
	    } else {
	      return;
	    }

	    var xhr = createXMLHTTPObject();
	    var that = this;
	    xhr.onreadystatechange = function(e) {
	      that.onScriptLoad.call(that, e, uri);
	    };
	    xhr.open("GET", uri, true);
	    xhr.send();
	  };

	  var absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

	  Fetcher.prototype.onScriptLoad = function(e, uri) {
	    if (e.target.readyState !== 4) {
	      return;
	    }

	    if (e.target.status === 200 ||
	      (uri.slice(0, 7) === "file://" && e.target.status === 0))
	    {
	      // find .map in file.
	      //
	      // attempt to find it at the very end of the file, but tolerate trailing
	      // whitespace inserted by some packers.
	      var match = e.target.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");
	      if (match && match.length === 2) {
	        // get the map
	        var mapUri = match[1];

	        var embeddedSourceMap = mapUri.match("data:application/json;(charset=[^;]+;)?base64,(.*)");

	        if (embeddedSourceMap && embeddedSourceMap[2]) {
	          this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(atob(embeddedSourceMap[2]));
	          this.done(this.mapForUri);
	        } else {
	          if (!absUrlRegex.test(mapUri)) {
	            // relative url; according to sourcemaps spec is 'source origin'
	            var origin;
	            var lastSlash = uri.lastIndexOf('/');
	            if (lastSlash !== -1) {
	              origin = uri.slice(0, lastSlash + 1);
	              mapUri = origin + mapUri;
	              // note if lastSlash === -1, actual script uri has no slash
	              // somehow, so no way to use it as a prefix... we give up and try
	              // as absolute
	            }
	          }

	          var xhrMap = createXMLHTTPObject();
	          var that = this;
	          xhrMap.onreadystatechange = function() {
	            if (xhrMap.readyState === 4) {
	              that.sem--;
	              if (xhrMap.status === 200 ||
	                (mapUri.slice(0, 7) === "file://" && xhrMap.status === 0)) {
	                that.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(xhrMap.responseText);
	              }
	              if (that.sem === 0) {
	                that.done(that.mapForUri);
	              }
	            }
	          };

	          xhrMap.open("GET", mapUri, true);
	          xhrMap.send();
	        }
	      } else {
	        // no map
	        this.sem--;
	      }
	    } else {
	      // HTTP error fetching uri of the script
	      this.sem--;
	    }

	    if (this.sem === 0) {
	      this.done(this.mapForUri);
	    }
	  };

	  var processSourceMaps = function(lines, rows, mapForUri) {
	    var result = [];
	    var map;
	    for (var i=0; i < lines.length; i++) {
	      var row = rows[i];
	      if (row) {
	        var uri = row[1];
	        var line = parseInt(row[2], 10);
	        var column = parseInt(row[3], 10);
	        map = mapForUri[uri];

	        if (map) {
	          // we think we have a map for that uri. call source-map library
	          var origPos = map.originalPositionFor(
	            { line: line, column: column });
	          result.push(formatOriginalPosition(origPos.source,
	            origPos.line, origPos.column, origPos.name || origName(lines[i])));
	        } else {
	          // we can't find a map for that url, but we parsed the row.
	          // reformat unchanged line for consistency with the sourcemapped
	          // lines.
	          result.push(formatOriginalPosition(uri, line, column, origName(lines[i])));
	        }
	      } else {
	        // we weren't able to parse the row, push back what we were given
	        result.push(lines[i]);
	      }
	    }

	    return result;
	  };

	  function origName(origLine) {
	    var match = String(origLine).match((isChromeOrEdge() || isIE11Plus()) ?
	      / +at +([^ ]*).*/ :
	      /([^@]*)@.*/);
	    return match && match[1];
	  }

	  var formatOriginalPosition = function(source, line, column, name) {
	    // mimic chrome's format
	    return "    at " + (name ? name : "(unknown)") +
	      " (" + source + ":" + line + ":" + column + ")";
	  };

	  // xmlhttprequest boilerplate
	  var XMLHttpFactories = [
		function () {return new XMLHttpRequest();},
		function () {return new ActiveXObject("Msxml2.XMLHTTP");},
		function () {return new ActiveXObject("Msxml3.XMLHTTP");},
		function () {return new ActiveXObject("Microsoft.XMLHTTP");}
	  ];

	  function createXMLHTTPObject() {
	      var xmlhttp = false;
	      for (var i=0;i<XMLHttpFactories.length;i++) {
	          try {
	              xmlhttp = XMLHttpFactories[i]();
	          }
	          catch (e) {
	              continue;
	          }
	          break;
	      }
	      return xmlhttp;
	  }

	  return {
	    mapStackTrace: mapStackTrace
	  }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(2);
	var binarySearch = __webpack_require__(3);
	var ArraySet = __webpack_require__(4).ArraySet;
	var base64VLQ = __webpack_require__(5);
	var quickSort = __webpack_require__(7).quickSort;

	function SourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  return sourceMap.sections != null
	    ? new IndexedSourceMapConsumer(sourceMap)
	    : new BasicSourceMapConsumer(sourceMap);
	}

	SourceMapConsumer.fromSourceMap = function(aSourceMap) {
	  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
	}

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	SourceMapConsumer.prototype._version = 3;

	// `__generatedMappings` and `__originalMappings` are arrays that hold the
	// parsed mapping coordinates from the source map's "mappings" attribute. They
	// are lazily instantiated, accessed via the `_generatedMappings` and
	// `_originalMappings` getters respectively, and we only parse the mappings
	// and create these arrays once queried for a source location. We jump through
	// these hoops because there can be many thousands of mappings, and parsing
	// them is expensive, so we only want to do it if we must.
	//
	// Each object in the arrays is of the form:
	//
	//     {
	//       generatedLine: The line number in the generated code,
	//       generatedColumn: The column number in the generated code,
	//       source: The path to the original source file that generated this
	//               chunk of code,
	//       originalLine: The line number in the original source that
	//                     corresponds to this chunk of generated code,
	//       originalColumn: The column number in the original source that
	//                       corresponds to this chunk of generated code,
	//       name: The name of the original symbol which generated this chunk of
	//             code.
	//     }
	//
	// All properties except for `generatedLine` and `generatedColumn` can be
	// `null`.
	//
	// `_generatedMappings` is ordered by the generated positions.
	//
	// `_originalMappings` is ordered by the original positions.

	SourceMapConsumer.prototype.__generatedMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
	  get: function () {
	    if (!this.__generatedMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__generatedMappings;
	  }
	});

	SourceMapConsumer.prototype.__originalMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
	  get: function () {
	    if (!this.__originalMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__originalMappings;
	  }
	});

	SourceMapConsumer.prototype._charIsMappingSeparator =
	  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
	    var c = aStr.charAt(index);
	    return c === ";" || c === ",";
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	SourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    throw new Error("Subclasses must implement _parseMappings");
	  };

	SourceMapConsumer.GENERATED_ORDER = 1;
	SourceMapConsumer.ORIGINAL_ORDER = 2;

	SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
	SourceMapConsumer.LEAST_UPPER_BOUND = 2;

	/**
	 * Iterate over each mapping between an original source/line/column and a
	 * generated line/column in this source map.
	 *
	 * @param Function aCallback
	 *        The function that is called with each mapping.
	 * @param Object aContext
	 *        Optional. If specified, this object will be the value of `this` every
	 *        time that `aCallback` is called.
	 * @param aOrder
	 *        Either `SourceMapConsumer.GENERATED_ORDER` or
	 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
	 *        iterate over the mappings sorted by the generated file's line/column
	 *        order or the original's source/line/column order, respectively. Defaults to
	 *        `SourceMapConsumer.GENERATED_ORDER`.
	 */
	SourceMapConsumer.prototype.eachMapping =
	  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
	    var context = aContext || null;
	    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

	    var mappings;
	    switch (order) {
	    case SourceMapConsumer.GENERATED_ORDER:
	      mappings = this._generatedMappings;
	      break;
	    case SourceMapConsumer.ORIGINAL_ORDER:
	      mappings = this._originalMappings;
	      break;
	    default:
	      throw new Error("Unknown order of iteration.");
	    }

	    var sourceRoot = this.sourceRoot;
	    mappings.map(function (mapping) {
	      var source = mapping.source === null ? null : this._sources.at(mapping.source);
	      if (source != null && sourceRoot != null) {
	        source = util.join(sourceRoot, source);
	      }
	      return {
	        source: source,
	        generatedLine: mapping.generatedLine,
	        generatedColumn: mapping.generatedColumn,
	        originalLine: mapping.originalLine,
	        originalColumn: mapping.originalColumn,
	        name: mapping.name === null ? null : this._names.at(mapping.name)
	      };
	    }, this).forEach(aCallback, context);
	  };

	/**
	 * Returns all generated line and column information for the original source,
	 * line, and column provided. If no column is provided, returns all mappings
	 * corresponding to a either the line we are searching for or the next
	 * closest line that has any mappings. Otherwise, returns all mappings
	 * corresponding to the given line and either the column we are searching for
	 * or the next closest column that has any offsets.
	 *
	 * The only argument is an object with the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: Optional. the column number in the original source.
	 *
	 * and an array of objects is returned, each with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	SourceMapConsumer.prototype.allGeneratedPositionsFor =
	  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
	    var line = util.getArg(aArgs, 'line');

	    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
	    // returns the index of the closest mapping less than the needle. By
	    // setting needle.originalColumn to 0, we thus find the last mapping for
	    // the given line, provided such a mapping exists.
	    var needle = {
	      source: util.getArg(aArgs, 'source'),
	      originalLine: line,
	      originalColumn: util.getArg(aArgs, 'column', 0)
	    };

	    if (this.sourceRoot != null) {
	      needle.source = util.relative(this.sourceRoot, needle.source);
	    }
	    if (!this._sources.has(needle.source)) {
	      return [];
	    }
	    needle.source = this._sources.indexOf(needle.source);

	    var mappings = [];

	    var index = this._findMapping(needle,
	                                  this._originalMappings,
	                                  "originalLine",
	                                  "originalColumn",
	                                  util.compareByOriginalPositions,
	                                  binarySearch.LEAST_UPPER_BOUND);
	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (aArgs.column === undefined) {
	        var originalLine = mapping.originalLine;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we found. Since
	        // mappings are sorted, this is guaranteed to find all mappings for
	        // the line we found.
	        while (mapping && mapping.originalLine === originalLine) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      } else {
	        var originalColumn = mapping.originalColumn;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we were searching for.
	        // Since mappings are sorted, this is guaranteed to find all mappings for
	        // the line we are searching for.
	        while (mapping &&
	               mapping.originalLine === line &&
	               mapping.originalColumn == originalColumn) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      }
	    }

	    return mappings;
	  };

	exports.SourceMapConsumer = SourceMapConsumer;

	/**
	 * A BasicSourceMapConsumer instance represents a parsed source map which we can
	 * query for information about the original file positions by giving it a file
	 * position in the generated source.
	 *
	 * The only parameter is the raw source map (either as a JSON string, or
	 * already parsed to an object). According to the spec, source maps have the
	 * following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - sources: An array of URLs to the original source files.
	 *   - names: An array of identifiers which can be referrenced by individual mappings.
	 *   - sourceRoot: Optional. The URL root from which all sources are relative.
	 *   - sourcesContent: Optional. An array of contents of the original source files.
	 *   - mappings: A string of base64 VLQs which contain the actual mappings.
	 *   - file: Optional. The generated file this source map is associated with.
	 *
	 * Here is an example source map, taken from the source map spec[0]:
	 *
	 *     {
	 *       version : 3,
	 *       file: "out.js",
	 *       sourceRoot : "",
	 *       sources: ["foo.js", "bar.js"],
	 *       names: ["src", "maps", "are", "fun"],
	 *       mappings: "AA,AB;;ABCDE;"
	 *     }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
	 */
	function BasicSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sources = util.getArg(sourceMap, 'sources');
	  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
	  // requires the array) to play nice here.
	  var names = util.getArg(sourceMap, 'names', []);
	  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
	  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
	  var mappings = util.getArg(sourceMap, 'mappings');
	  var file = util.getArg(sourceMap, 'file', null);

	  // Once again, Sass deviates from the spec and supplies the version as a
	  // string rather than a number, so we use loose equality checking here.
	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  sources = sources
	    .map(String)
	    // Some source maps produce relative source paths like "./foo.js" instead of
	    // "foo.js".  Normalize these first so that future comparisons will succeed.
	    // See bugzil.la/1090768.
	    .map(util.normalize)
	    // Always ensure that absolute sources are internally stored relative to
	    // the source root, if the source root is absolute. Not doing this would
	    // be particularly problematic when the source root is a prefix of the
	    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
	    .map(function (source) {
	      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
	        ? util.relative(sourceRoot, source)
	        : source;
	    });

	  // Pass `true` below to allow duplicate names and sources. While source maps
	  // are intended to be compressed and deduplicated, the TypeScript compiler
	  // sometimes generates source maps with duplicates in them. See Github issue
	  // #72 and bugzil.la/889492.
	  this._names = ArraySet.fromArray(names.map(String), true);
	  this._sources = ArraySet.fromArray(sources, true);

	  this.sourceRoot = sourceRoot;
	  this.sourcesContent = sourcesContent;
	  this._mappings = mappings;
	  this.file = file;
	}

	BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

	/**
	 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
	 *
	 * @param SourceMapGenerator aSourceMap
	 *        The source map that will be consumed.
	 * @returns BasicSourceMapConsumer
	 */
	BasicSourceMapConsumer.fromSourceMap =
	  function SourceMapConsumer_fromSourceMap(aSourceMap) {
	    var smc = Object.create(BasicSourceMapConsumer.prototype);

	    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
	    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
	    smc.sourceRoot = aSourceMap._sourceRoot;
	    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
	                                                            smc.sourceRoot);
	    smc.file = aSourceMap._file;

	    // Because we are modifying the entries (by converting string sources and
	    // names to indices into the sources and names ArraySets), we have to make
	    // a copy of the entry or else bad things happen. Shared mutable state
	    // strikes again! See github issue #191.

	    var generatedMappings = aSourceMap._mappings.toArray().slice();
	    var destGeneratedMappings = smc.__generatedMappings = [];
	    var destOriginalMappings = smc.__originalMappings = [];

	    for (var i = 0, length = generatedMappings.length; i < length; i++) {
	      var srcMapping = generatedMappings[i];
	      var destMapping = new Mapping;
	      destMapping.generatedLine = srcMapping.generatedLine;
	      destMapping.generatedColumn = srcMapping.generatedColumn;

	      if (srcMapping.source) {
	        destMapping.source = sources.indexOf(srcMapping.source);
	        destMapping.originalLine = srcMapping.originalLine;
	        destMapping.originalColumn = srcMapping.originalColumn;

	        if (srcMapping.name) {
	          destMapping.name = names.indexOf(srcMapping.name);
	        }

	        destOriginalMappings.push(destMapping);
	      }

	      destGeneratedMappings.push(destMapping);
	    }

	    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

	    return smc;
	  };

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	BasicSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    return this._sources.toArray().map(function (s) {
	      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
	    }, this);
	  }
	});

	/**
	 * Provide the JIT with a nice shape / hidden class.
	 */
	function Mapping() {
	  this.generatedLine = 0;
	  this.generatedColumn = 0;
	  this.source = null;
	  this.originalLine = null;
	  this.originalColumn = null;
	  this.name = null;
	}

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	BasicSourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    var generatedLine = 1;
	    var previousGeneratedColumn = 0;
	    var previousOriginalLine = 0;
	    var previousOriginalColumn = 0;
	    var previousSource = 0;
	    var previousName = 0;
	    var length = aStr.length;
	    var index = 0;
	    var cachedSegments = {};
	    var temp = {};
	    var originalMappings = [];
	    var generatedMappings = [];
	    var mapping, str, segment, end, value;

	    while (index < length) {
	      if (aStr.charAt(index) === ';') {
	        generatedLine++;
	        index++;
	        previousGeneratedColumn = 0;
	      }
	      else if (aStr.charAt(index) === ',') {
	        index++;
	      }
	      else {
	        mapping = new Mapping();
	        mapping.generatedLine = generatedLine;

	        // Because each offset is encoded relative to the previous one,
	        // many segments often have the same encoding. We can exploit this
	        // fact by caching the parsed variable length fields of each segment,
	        // allowing us to avoid a second parse if we encounter the same
	        // segment again.
	        for (end = index; end < length; end++) {
	          if (this._charIsMappingSeparator(aStr, end)) {
	            break;
	          }
	        }
	        str = aStr.slice(index, end);

	        segment = cachedSegments[str];
	        if (segment) {
	          index += str.length;
	        } else {
	          segment = [];
	          while (index < end) {
	            base64VLQ.decode(aStr, index, temp);
	            value = temp.value;
	            index = temp.rest;
	            segment.push(value);
	          }

	          if (segment.length === 2) {
	            throw new Error('Found a source, but no line and column');
	          }

	          if (segment.length === 3) {
	            throw new Error('Found a source and line, but no column');
	          }

	          cachedSegments[str] = segment;
	        }

	        // Generated column.
	        mapping.generatedColumn = previousGeneratedColumn + segment[0];
	        previousGeneratedColumn = mapping.generatedColumn;

	        if (segment.length > 1) {
	          // Original source.
	          mapping.source = previousSource + segment[1];
	          previousSource += segment[1];

	          // Original line.
	          mapping.originalLine = previousOriginalLine + segment[2];
	          previousOriginalLine = mapping.originalLine;
	          // Lines are stored 0-based
	          mapping.originalLine += 1;

	          // Original column.
	          mapping.originalColumn = previousOriginalColumn + segment[3];
	          previousOriginalColumn = mapping.originalColumn;

	          if (segment.length > 4) {
	            // Original name.
	            mapping.name = previousName + segment[4];
	            previousName += segment[4];
	          }
	        }

	        generatedMappings.push(mapping);
	        if (typeof mapping.originalLine === 'number') {
	          originalMappings.push(mapping);
	        }
	      }
	    }

	    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
	    this.__generatedMappings = generatedMappings;

	    quickSort(originalMappings, util.compareByOriginalPositions);
	    this.__originalMappings = originalMappings;
	  };

	/**
	 * Find the mapping that best matches the hypothetical "needle" mapping that
	 * we are searching for in the given "haystack" of mappings.
	 */
	BasicSourceMapConsumer.prototype._findMapping =
	  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
	                                         aColumnName, aComparator, aBias) {
	    // To return the position we are searching for, we must first find the
	    // mapping for the given position and then return the opposite position it
	    // points to. Because the mappings are sorted, we can use binary search to
	    // find the best mapping.

	    if (aNeedle[aLineName] <= 0) {
	      throw new TypeError('Line must be greater than or equal to 1, got '
	                          + aNeedle[aLineName]);
	    }
	    if (aNeedle[aColumnName] < 0) {
	      throw new TypeError('Column must be greater than or equal to 0, got '
	                          + aNeedle[aColumnName]);
	    }

	    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
	  };

	/**
	 * Compute the last column for each generated mapping. The last column is
	 * inclusive.
	 */
	BasicSourceMapConsumer.prototype.computeColumnSpans =
	  function SourceMapConsumer_computeColumnSpans() {
	    for (var index = 0; index < this._generatedMappings.length; ++index) {
	      var mapping = this._generatedMappings[index];

	      // Mappings do not contain a field for the last generated columnt. We
	      // can come up with an optimistic estimate, however, by assuming that
	      // mappings are contiguous (i.e. given two consecutive mappings, the
	      // first mapping ends where the second one starts).
	      if (index + 1 < this._generatedMappings.length) {
	        var nextMapping = this._generatedMappings[index + 1];

	        if (mapping.generatedLine === nextMapping.generatedLine) {
	          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
	          continue;
	        }
	      }

	      // The last mapping for each line spans the entire line.
	      mapping.lastGeneratedColumn = Infinity;
	    }
	  };

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	BasicSourceMapConsumer.prototype.originalPositionFor =
	  function SourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._generatedMappings,
	      "generatedLine",
	      "generatedColumn",
	      util.compareByGeneratedPositionsDeflated,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._generatedMappings[index];

	      if (mapping.generatedLine === needle.generatedLine) {
	        var source = util.getArg(mapping, 'source', null);
	        if (source !== null) {
	          source = this._sources.at(source);
	          if (this.sourceRoot != null) {
	            source = util.join(this.sourceRoot, source);
	          }
	        }
	        var name = util.getArg(mapping, 'name', null);
	        if (name !== null) {
	          name = this._names.at(name);
	        }
	        return {
	          source: source,
	          line: util.getArg(mapping, 'originalLine', null),
	          column: util.getArg(mapping, 'originalColumn', null),
	          name: name
	        };
	      }
	    }

	    return {
	      source: null,
	      line: null,
	      column: null,
	      name: null
	    };
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function BasicSourceMapConsumer_hasContentsOfAllSources() {
	    if (!this.sourcesContent) {
	      return false;
	    }
	    return this.sourcesContent.length >= this._sources.size() &&
	      !this.sourcesContent.some(function (sc) { return sc == null; });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	BasicSourceMapConsumer.prototype.sourceContentFor =
	  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    if (!this.sourcesContent) {
	      return null;
	    }

	    if (this.sourceRoot != null) {
	      aSource = util.relative(this.sourceRoot, aSource);
	    }

	    if (this._sources.has(aSource)) {
	      return this.sourcesContent[this._sources.indexOf(aSource)];
	    }

	    var url;
	    if (this.sourceRoot != null
	        && (url = util.urlParse(this.sourceRoot))) {
	      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
	      // many users. We can help them out when they expect file:// URIs to
	      // behave like it would if they were running a local HTTP server. See
	      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
	      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
	      if (url.scheme == "file"
	          && this._sources.has(fileUriAbsPath)) {
	        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
	      }

	      if ((!url.path || url.path == "/")
	          && this._sources.has("/" + aSource)) {
	        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
	      }
	    }

	    // This function is used recursively from
	    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
	    // don't want to throw if we can't find the source - we just want to
	    // return null, so we provide a flag to exit gracefully.
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	BasicSourceMapConsumer.prototype.generatedPositionFor =
	  function SourceMapConsumer_generatedPositionFor(aArgs) {
	    var source = util.getArg(aArgs, 'source');
	    if (this.sourceRoot != null) {
	      source = util.relative(this.sourceRoot, source);
	    }
	    if (!this._sources.has(source)) {
	      return {
	        line: null,
	        column: null,
	        lastColumn: null
	      };
	    }
	    source = this._sources.indexOf(source);

	    var needle = {
	      source: source,
	      originalLine: util.getArg(aArgs, 'line'),
	      originalColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._originalMappings,
	      "originalLine",
	      "originalColumn",
	      util.compareByOriginalPositions,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (mapping.source === needle.source) {
	        return {
	          line: util.getArg(mapping, 'generatedLine', null),
	          column: util.getArg(mapping, 'generatedColumn', null),
	          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	        };
	      }
	    }

	    return {
	      line: null,
	      column: null,
	      lastColumn: null
	    };
	  };

	exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

	/**
	 * An IndexedSourceMapConsumer instance represents a parsed source map which
	 * we can query for information. It differs from BasicSourceMapConsumer in
	 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
	 * input.
	 *
	 * The only parameter is a raw source map (either as a JSON string, or already
	 * parsed to an object). According to the spec for indexed source maps, they
	 * have the following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - file: Optional. The generated file this source map is associated with.
	 *   - sections: A list of section definitions.
	 *
	 * Each value under the "sections" field has two fields:
	 *   - offset: The offset into the original specified at which this section
	 *       begins to apply, defined as an object with a "line" and "column"
	 *       field.
	 *   - map: A source map definition. This source map could also be indexed,
	 *       but doesn't have to be.
	 *
	 * Instead of the "map" field, it's also possible to have a "url" field
	 * specifying a URL to retrieve a source map from, but that's currently
	 * unsupported.
	 *
	 * Here's an example source map, taken from the source map spec[0], but
	 * modified to omit a section which uses the "url" field.
	 *
	 *  {
	 *    version : 3,
	 *    file: "app.js",
	 *    sections: [{
	 *      offset: {line:100, column:10},
	 *      map: {
	 *        version : 3,
	 *        file: "section.js",
	 *        sources: ["foo.js", "bar.js"],
	 *        names: ["src", "maps", "are", "fun"],
	 *        mappings: "AAAA,E;;ABCDE;"
	 *      }
	 *    }],
	 *  }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
	 */
	function IndexedSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sections = util.getArg(sourceMap, 'sections');

	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  this._sources = new ArraySet();
	  this._names = new ArraySet();

	  var lastOffset = {
	    line: -1,
	    column: 0
	  };
	  this._sections = sections.map(function (s) {
	    if (s.url) {
	      // The url field will require support for asynchronicity.
	      // See https://github.com/mozilla/source-map/issues/16
	      throw new Error('Support for url field in sections not implemented.');
	    }
	    var offset = util.getArg(s, 'offset');
	    var offsetLine = util.getArg(offset, 'line');
	    var offsetColumn = util.getArg(offset, 'column');

	    if (offsetLine < lastOffset.line ||
	        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
	      throw new Error('Section offsets must be ordered and non-overlapping.');
	    }
	    lastOffset = offset;

	    return {
	      generatedOffset: {
	        // The offset fields are 0-based, but we use 1-based indices when
	        // encoding/decoding from VLQ.
	        generatedLine: offsetLine + 1,
	        generatedColumn: offsetColumn + 1
	      },
	      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
	    }
	  });
	}

	IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	IndexedSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    var sources = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
	        sources.push(this._sections[i].consumer.sources[j]);
	      }
	    }
	    return sources;
	  }
	});

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	IndexedSourceMapConsumer.prototype.originalPositionFor =
	  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    // Find the section containing the generated position we're trying to map
	    // to an original position.
	    var sectionIndex = binarySearch.search(needle, this._sections,
	      function(needle, section) {
	        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
	        if (cmp) {
	          return cmp;
	        }

	        return (needle.generatedColumn -
	                section.generatedOffset.generatedColumn);
	      });
	    var section = this._sections[sectionIndex];

	    if (!section) {
	      return {
	        source: null,
	        line: null,
	        column: null,
	        name: null
	      };
	    }

	    return section.consumer.originalPositionFor({
	      line: needle.generatedLine -
	        (section.generatedOffset.generatedLine - 1),
	      column: needle.generatedColumn -
	        (section.generatedOffset.generatedLine === needle.generatedLine
	         ? section.generatedOffset.generatedColumn - 1
	         : 0),
	      bias: aArgs.bias
	    });
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
	    return this._sections.every(function (s) {
	      return s.consumer.hasContentsOfAllSources();
	    });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	IndexedSourceMapConsumer.prototype.sourceContentFor =
	  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      var content = section.consumer.sourceContentFor(aSource, true);
	      if (content) {
	        return content;
	      }
	    }
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	IndexedSourceMapConsumer.prototype.generatedPositionFor =
	  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      // Only consider this section if the requested source is in the list of
	      // sources of the consumer.
	      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
	        continue;
	      }
	      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
	      if (generatedPosition) {
	        var ret = {
	          line: generatedPosition.line +
	            (section.generatedOffset.generatedLine - 1),
	          column: generatedPosition.column +
	            (section.generatedOffset.generatedLine === generatedPosition.line
	             ? section.generatedOffset.generatedColumn - 1
	             : 0)
	        };
	        return ret;
	      }
	    }

	    return {
	      line: null,
	      column: null
	    };
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	IndexedSourceMapConsumer.prototype._parseMappings =
	  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    this.__generatedMappings = [];
	    this.__originalMappings = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];
	      var sectionMappings = section.consumer._generatedMappings;
	      for (var j = 0; j < sectionMappings.length; j++) {
	        var mapping = sectionMappings[j];

	        var source = section.consumer._sources.at(mapping.source);
	        if (section.consumer.sourceRoot !== null) {
	          source = util.join(section.consumer.sourceRoot, source);
	        }
	        this._sources.add(source);
	        source = this._sources.indexOf(source);

	        var name = section.consumer._names.at(mapping.name);
	        this._names.add(name);
	        name = this._names.indexOf(name);

	        // The mappings coming from the consumer for the section have
	        // generated positions relative to the start of the section, so we
	        // need to offset them to be relative to the start of the concatenated
	        // generated file.
	        var adjustedMapping = {
	          source: source,
	          generatedLine: mapping.generatedLine +
	            (section.generatedOffset.generatedLine - 1),
	          generatedColumn: mapping.generatedColumn +
	            (section.generatedOffset.generatedLine === mapping.generatedLine
	            ? section.generatedOffset.generatedColumn - 1
	            : 0),
	          originalLine: mapping.originalLine,
	          originalColumn: mapping.originalColumn,
	          name: name
	        };

	        this.__generatedMappings.push(adjustedMapping);
	        if (typeof adjustedMapping.originalLine === 'number') {
	          this.__originalMappings.push(adjustedMapping);
	        }
	      }
	    }

	    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
	    quickSort(this.__originalMappings, util.compareByOriginalPositions);
	  };

	exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	/**
	 * This is a helper function for getting values from parameter/options
	 * objects.
	 *
	 * @param args The object we are extracting values from
	 * @param name The name of the property we are getting.
	 * @param defaultValue An optional value to return if the property is missing
	 * from the object. If this is not specified and the property is missing, an
	 * error will be thrown.
	 */
	function getArg(aArgs, aName, aDefaultValue) {
	  if (aName in aArgs) {
	    return aArgs[aName];
	  } else if (arguments.length === 3) {
	    return aDefaultValue;
	  } else {
	    throw new Error('"' + aName + '" is a required argument.');
	  }
	}
	exports.getArg = getArg;

	var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
	var dataUrlRegexp = /^data:.+\,.+$/;

	function urlParse(aUrl) {
	  var match = aUrl.match(urlRegexp);
	  if (!match) {
	    return null;
	  }
	  return {
	    scheme: match[1],
	    auth: match[2],
	    host: match[3],
	    port: match[4],
	    path: match[5]
	  };
	}
	exports.urlParse = urlParse;

	function urlGenerate(aParsedUrl) {
	  var url = '';
	  if (aParsedUrl.scheme) {
	    url += aParsedUrl.scheme + ':';
	  }
	  url += '//';
	  if (aParsedUrl.auth) {
	    url += aParsedUrl.auth + '@';
	  }
	  if (aParsedUrl.host) {
	    url += aParsedUrl.host;
	  }
	  if (aParsedUrl.port) {
	    url += ":" + aParsedUrl.port
	  }
	  if (aParsedUrl.path) {
	    url += aParsedUrl.path;
	  }
	  return url;
	}
	exports.urlGenerate = urlGenerate;

	/**
	 * Normalizes a path, or the path portion of a URL:
	 *
	 * - Replaces consecutive slashes with one slash.
	 * - Removes unnecessary '.' parts.
	 * - Removes unnecessary '<dir>/..' parts.
	 *
	 * Based on code in the Node.js 'path' core module.
	 *
	 * @param aPath The path or url to normalize.
	 */
	function normalize(aPath) {
	  var path = aPath;
	  var url = urlParse(aPath);
	  if (url) {
	    if (!url.path) {
	      return aPath;
	    }
	    path = url.path;
	  }
	  var isAbsolute = exports.isAbsolute(path);

	  var parts = path.split(/\/+/);
	  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
	    part = parts[i];
	    if (part === '.') {
	      parts.splice(i, 1);
	    } else if (part === '..') {
	      up++;
	    } else if (up > 0) {
	      if (part === '') {
	        // The first part is blank if the path is absolute. Trying to go
	        // above the root is a no-op. Therefore we can remove all '..' parts
	        // directly after the root.
	        parts.splice(i + 1, up);
	        up = 0;
	      } else {
	        parts.splice(i, 2);
	        up--;
	      }
	    }
	  }
	  path = parts.join('/');

	  if (path === '') {
	    path = isAbsolute ? '/' : '.';
	  }

	  if (url) {
	    url.path = path;
	    return urlGenerate(url);
	  }
	  return path;
	}
	exports.normalize = normalize;

	/**
	 * Joins two paths/URLs.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be joined with the root.
	 *
	 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
	 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
	 *   first.
	 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
	 *   is updated with the result and aRoot is returned. Otherwise the result
	 *   is returned.
	 *   - If aPath is absolute, the result is aPath.
	 *   - Otherwise the two paths are joined with a slash.
	 * - Joining for example 'http://' and 'www.example.com' is also supported.
	 */
	function join(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }
	  if (aPath === "") {
	    aPath = ".";
	  }
	  var aPathUrl = urlParse(aPath);
	  var aRootUrl = urlParse(aRoot);
	  if (aRootUrl) {
	    aRoot = aRootUrl.path || '/';
	  }

	  // `join(foo, '//www.example.org')`
	  if (aPathUrl && !aPathUrl.scheme) {
	    if (aRootUrl) {
	      aPathUrl.scheme = aRootUrl.scheme;
	    }
	    return urlGenerate(aPathUrl);
	  }

	  if (aPathUrl || aPath.match(dataUrlRegexp)) {
	    return aPath;
	  }

	  // `join('http://', 'www.example.com')`
	  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
	    aRootUrl.host = aPath;
	    return urlGenerate(aRootUrl);
	  }

	  var joined = aPath.charAt(0) === '/'
	    ? aPath
	    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

	  if (aRootUrl) {
	    aRootUrl.path = joined;
	    return urlGenerate(aRootUrl);
	  }
	  return joined;
	}
	exports.join = join;

	exports.isAbsolute = function (aPath) {
	  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
	};

	/**
	 * Make a path relative to a URL or another path.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be made relative to aRoot.
	 */
	function relative(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }

	  aRoot = aRoot.replace(/\/$/, '');

	  // It is possible for the path to be above the root. In this case, simply
	  // checking whether the root is a prefix of the path won't work. Instead, we
	  // need to remove components from the root one by one, until either we find
	  // a prefix that fits, or we run out of components to remove.
	  var level = 0;
	  while (aPath.indexOf(aRoot + '/') !== 0) {
	    var index = aRoot.lastIndexOf("/");
	    if (index < 0) {
	      return aPath;
	    }

	    // If the only part of the root that is left is the scheme (i.e. http://,
	    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
	    // have exhausted all components, so the path is not relative to the root.
	    aRoot = aRoot.slice(0, index);
	    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
	      return aPath;
	    }

	    ++level;
	  }

	  // Make sure we add a "../" for each component we removed from the root.
	  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
	}
	exports.relative = relative;

	var supportsNullProto = (function () {
	  var obj = Object.create(null);
	  return !('__proto__' in obj);
	}());

	function identity (s) {
	  return s;
	}

	/**
	 * Because behavior goes wacky when you set `__proto__` on objects, we
	 * have to prefix all the strings in our set with an arbitrary character.
	 *
	 * See https://github.com/mozilla/source-map/pull/31 and
	 * https://github.com/mozilla/source-map/issues/30
	 *
	 * @param String aStr
	 */
	function toSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return '$' + aStr;
	  }

	  return aStr;
	}
	exports.toSetString = supportsNullProto ? identity : toSetString;

	function fromSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return aStr.slice(1);
	  }

	  return aStr;
	}
	exports.fromSetString = supportsNullProto ? identity : fromSetString;

	function isProtoString(s) {
	  if (!s) {
	    return false;
	  }

	  var length = s.length;

	  if (length < 9 /* "__proto__".length */) {
	    return false;
	  }

	  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
	      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
	      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
	      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 9) !== 95  /* '_' */) {
	    return false;
	  }

	  for (var i = length - 10; i >= 0; i--) {
	    if (s.charCodeAt(i) !== 36 /* '$' */) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Comparator between two mappings where the original positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same original source/line/column, but different generated
	 * line and column the same. Useful when searching for a mapping with a
	 * stubbed out mapping.
	 */
	function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
	  var cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0 || onlyCompareOriginal) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByOriginalPositions = compareByOriginalPositions;

	/**
	 * Comparator between two mappings with deflated source and name indices where
	 * the generated positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same generated line and column, but different
	 * source/name/original line and column the same. Useful when searching for a
	 * mapping with a stubbed out mapping.
	 */
	function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0 || onlyCompareGenerated) {
	    return cmp;
	  }

	  cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

	function strcmp(aStr1, aStr2) {
	  if (aStr1 === aStr2) {
	    return 0;
	  }

	  if (aStr1 > aStr2) {
	    return 1;
	  }

	  return -1;
	}

	/**
	 * Comparator between two mappings with inflated source and name strings where
	 * the generated positions are compared.
	 */
	function compareByGeneratedPositionsInflated(mappingA, mappingB) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = strcmp(mappingA.source, mappingB.source);
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return strcmp(mappingA.name, mappingB.name);
	}
	exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	exports.GREATEST_LOWER_BOUND = 1;
	exports.LEAST_UPPER_BOUND = 2;

	/**
	 * Recursive implementation of binary search.
	 *
	 * @param aLow Indices here and lower do not contain the needle.
	 * @param aHigh Indices here and higher do not contain the needle.
	 * @param aNeedle The element being searched for.
	 * @param aHaystack The non-empty array being searched.
	 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 */
	function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
	  // This function terminates when one of the following is true:
	  //
	  //   1. We find the exact element we are looking for.
	  //
	  //   2. We did not find the exact element, but we can return the index of
	  //      the next-closest element.
	  //
	  //   3. We did not find the exact element, and there is no next-closest
	  //      element than the one we are searching for, so we return -1.
	  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
	  var cmp = aCompare(aNeedle, aHaystack[mid], true);
	  if (cmp === 0) {
	    // Found the element we are looking for.
	    return mid;
	  }
	  else if (cmp > 0) {
	    // Our needle is greater than aHaystack[mid].
	    if (aHigh - mid > 1) {
	      // The element is in the upper half.
	      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // The exact needle element was not found in this haystack. Determine if
	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return aHigh < aHaystack.length ? aHigh : -1;
	    } else {
	      return mid;
	    }
	  }
	  else {
	    // Our needle is less than aHaystack[mid].
	    if (mid - aLow > 1) {
	      // The element is in the lower half.
	      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return mid;
	    } else {
	      return aLow < 0 ? -1 : aLow;
	    }
	  }
	}

	/**
	 * This is an implementation of binary search which will always try and return
	 * the index of the closest element if there is no exact hit. This is because
	 * mappings between original and generated line/col pairs are single points,
	 * and there is an implicit region between each of them, so a miss just means
	 * that you aren't on the very start of a region.
	 *
	 * @param aNeedle The element you are looking for.
	 * @param aHaystack The array that is being searched.
	 * @param aCompare A function which takes the needle and an element in the
	 *     array and returns -1, 0, or 1 depending on whether the needle is less
	 *     than, equal to, or greater than the element, respectively.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
	 */
	exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
	  if (aHaystack.length === 0) {
	    return -1;
	  }

	  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
	                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
	  if (index < 0) {
	    return -1;
	  }

	  // We have found either the exact element, or the next-closest element than
	  // the one we are searching for. However, there may be more than one such
	  // element. Make sure we always return the smallest of these.
	  while (index - 1 >= 0) {
	    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
	      break;
	    }
	    --index;
	  }

	  return index;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(2);
	var has = Object.prototype.hasOwnProperty;

	/**
	 * A data structure which is a combination of an array and a set. Adding a new
	 * member is O(1), testing for membership is O(1), and finding the index of an
	 * element is O(1). Removing elements from the set is not supported. Only
	 * strings are supported for membership.
	 */
	function ArraySet() {
	  this._array = [];
	  this._set = Object.create(null);
	}

	/**
	 * Static method for creating ArraySet instances from an existing array.
	 */
	ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
	  var set = new ArraySet();
	  for (var i = 0, len = aArray.length; i < len; i++) {
	    set.add(aArray[i], aAllowDuplicates);
	  }
	  return set;
	};

	/**
	 * Return how many unique items are in this ArraySet. If duplicates have been
	 * added, than those do not count towards the size.
	 *
	 * @returns Number
	 */
	ArraySet.prototype.size = function ArraySet_size() {
	  return Object.getOwnPropertyNames(this._set).length;
	};

	/**
	 * Add the given string to this set.
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
	  var sStr = util.toSetString(aStr);
	  var isDuplicate = has.call(this._set, sStr);
	  var idx = this._array.length;
	  if (!isDuplicate || aAllowDuplicates) {
	    this._array.push(aStr);
	  }
	  if (!isDuplicate) {
	    this._set[sStr] = idx;
	  }
	};

	/**
	 * Is the given string a member of this set?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.has = function ArraySet_has(aStr) {
	  var sStr = util.toSetString(aStr);
	  return has.call(this._set, sStr);
	};

	/**
	 * What is the index of the given string in the array?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
	  var sStr = util.toSetString(aStr);
	  if (has.call(this._set, sStr)) {
	    return this._set[sStr];
	  }
	  throw new Error('"' + aStr + '" is not in the set.');
	};

	/**
	 * What is the element at the given index?
	 *
	 * @param Number aIdx
	 */
	ArraySet.prototype.at = function ArraySet_at(aIdx) {
	  if (aIdx >= 0 && aIdx < this._array.length) {
	    return this._array[aIdx];
	  }
	  throw new Error('No element indexed by ' + aIdx);
	};

	/**
	 * Returns the array representation of this set (which has the proper indices
	 * indicated by indexOf). Note that this is a copy of the internal array used
	 * for storing the members so that no one can mess with internal state.
	 */
	ArraySet.prototype.toArray = function ArraySet_toArray() {
	  return this._array.slice();
	};

	exports.ArraySet = ArraySet;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 *
	 * Based on the Base 64 VLQ implementation in Closure Compiler:
	 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
	 *
	 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *  * Redistributions of source code must retain the above copyright
	 *    notice, this list of conditions and the following disclaimer.
	 *  * Redistributions in binary form must reproduce the above
	 *    copyright notice, this list of conditions and the following
	 *    disclaimer in the documentation and/or other materials provided
	 *    with the distribution.
	 *  * Neither the name of Google Inc. nor the names of its
	 *    contributors may be used to endorse or promote products derived
	 *    from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	var base64 = __webpack_require__(6);

	// A single base 64 digit can contain 6 bits of data. For the base 64 variable
	// length quantities we use in the source map spec, the first bit is the sign,
	// the next four bits are the actual value, and the 6th bit is the
	// continuation bit. The continuation bit tells us whether there are more
	// digits in this value following this digit.
	//
	//   Continuation
	//   |    Sign
	//   |    |
	//   V    V
	//   101011

	var VLQ_BASE_SHIFT = 5;

	// binary: 100000
	var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

	// binary: 011111
	var VLQ_BASE_MASK = VLQ_BASE - 1;

	// binary: 100000
	var VLQ_CONTINUATION_BIT = VLQ_BASE;

	/**
	 * Converts from a two-complement value to a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
	 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
	 */
	function toVLQSigned(aValue) {
	  return aValue < 0
	    ? ((-aValue) << 1) + 1
	    : (aValue << 1) + 0;
	}

	/**
	 * Converts to a two-complement value from a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
	 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
	 */
	function fromVLQSigned(aValue) {
	  var isNegative = (aValue & 1) === 1;
	  var shifted = aValue >> 1;
	  return isNegative
	    ? -shifted
	    : shifted;
	}

	/**
	 * Returns the base 64 VLQ encoded value.
	 */
	exports.encode = function base64VLQ_encode(aValue) {
	  var encoded = "";
	  var digit;

	  var vlq = toVLQSigned(aValue);

	  do {
	    digit = vlq & VLQ_BASE_MASK;
	    vlq >>>= VLQ_BASE_SHIFT;
	    if (vlq > 0) {
	      // There are still more digits in this value, so we must make sure the
	      // continuation bit is marked.
	      digit |= VLQ_CONTINUATION_BIT;
	    }
	    encoded += base64.encode(digit);
	  } while (vlq > 0);

	  return encoded;
	};

	/**
	 * Decodes the next base 64 VLQ value from the given string and returns the
	 * value and the rest of the string via the out parameter.
	 */
	exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
	  var strLen = aStr.length;
	  var result = 0;
	  var shift = 0;
	  var continuation, digit;

	  do {
	    if (aIndex >= strLen) {
	      throw new Error("Expected more digits in base 64 VLQ value.");
	    }

	    digit = base64.decode(aStr.charCodeAt(aIndex++));
	    if (digit === -1) {
	      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
	    }

	    continuation = !!(digit & VLQ_CONTINUATION_BIT);
	    digit &= VLQ_BASE_MASK;
	    result = result + (digit << shift);
	    shift += VLQ_BASE_SHIFT;
	  } while (continuation);

	  aOutParam.value = fromVLQSigned(result);
	  aOutParam.rest = aIndex;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

	/**
	 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
	 */
	exports.encode = function (number) {
	  if (0 <= number && number < intToCharMap.length) {
	    return intToCharMap[number];
	  }
	  throw new TypeError("Must be between 0 and 63: " + number);
	};

	/**
	 * Decode a single base 64 character code digit to an integer. Returns -1 on
	 * failure.
	 */
	exports.decode = function (charCode) {
	  var bigA = 65;     // 'A'
	  var bigZ = 90;     // 'Z'

	  var littleA = 97;  // 'a'
	  var littleZ = 122; // 'z'

	  var zero = 48;     // '0'
	  var nine = 57;     // '9'

	  var plus = 43;     // '+'
	  var slash = 47;    // '/'

	  var littleOffset = 26;
	  var numberOffset = 52;

	  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
	  if (bigA <= charCode && charCode <= bigZ) {
	    return (charCode - bigA);
	  }

	  // 26 - 51: abcdefghijklmnopqrstuvwxyz
	  if (littleA <= charCode && charCode <= littleZ) {
	    return (charCode - littleA + littleOffset);
	  }

	  // 52 - 61: 0123456789
	  if (zero <= charCode && charCode <= nine) {
	    return (charCode - zero + numberOffset);
	  }

	  // 62: +
	  if (charCode == plus) {
	    return 62;
	  }

	  // 63: /
	  if (charCode == slash) {
	    return 63;
	  }

	  // Invalid base64 digit.
	  return -1;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	// It turns out that some (most?) JavaScript engines don't self-host
	// `Array.prototype.sort`. This makes sense because C++ will likely remain
	// faster than JS when doing raw CPU-intensive sorting. However, when using a
	// custom comparator function, calling back and forth between the VM's C++ and
	// JIT'd JS is rather slow *and* loses JIT type information, resulting in
	// worse generated code for the comparator function than would be optimal. In
	// fact, when sorting with a comparator, these costs outweigh the benefits of
	// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
	// a ~3500ms mean speed-up in `bench/bench.html`.

	/**
	 * Swap the elements indexed by `x` and `y` in the array `ary`.
	 *
	 * @param {Array} ary
	 *        The array.
	 * @param {Number} x
	 *        The index of the first item.
	 * @param {Number} y
	 *        The index of the second item.
	 */
	function swap(ary, x, y) {
	  var temp = ary[x];
	  ary[x] = ary[y];
	  ary[y] = temp;
	}

	/**
	 * Returns a random integer within the range `low .. high` inclusive.
	 *
	 * @param {Number} low
	 *        The lower bound on the range.
	 * @param {Number} high
	 *        The upper bound on the range.
	 */
	function randomIntInRange(low, high) {
	  return Math.round(low + (Math.random() * (high - low)));
	}

	/**
	 * The Quick Sort algorithm.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 * @param {Number} p
	 *        Start index of the array
	 * @param {Number} r
	 *        End index of the array
	 */
	function doQuickSort(ary, comparator, p, r) {
	  // If our lower bound is less than our upper bound, we (1) partition the
	  // array into two pieces and (2) recurse on each half. If it is not, this is
	  // the empty array and our base case.

	  if (p < r) {
	    // (1) Partitioning.
	    //
	    // The partitioning chooses a pivot between `p` and `r` and moves all
	    // elements that are less than or equal to the pivot to the before it, and
	    // all the elements that are greater than it after it. The effect is that
	    // once partition is done, the pivot is in the exact place it will be when
	    // the array is put in sorted order, and it will not need to be moved
	    // again. This runs in O(n) time.

	    // Always choose a random pivot so that an input array which is reverse
	    // sorted does not cause O(n^2) running time.
	    var pivotIndex = randomIntInRange(p, r);
	    var i = p - 1;

	    swap(ary, pivotIndex, r);
	    var pivot = ary[r];

	    // Immediately after `j` is incremented in this loop, the following hold
	    // true:
	    //
	    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
	    //
	    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
	    for (var j = p; j < r; j++) {
	      if (comparator(ary[j], pivot) <= 0) {
	        i += 1;
	        swap(ary, i, j);
	      }
	    }

	    swap(ary, i + 1, j);
	    var q = i + 1;

	    // (2) Recurse on each half.

	    doQuickSort(ary, comparator, p, q - 1);
	    doQuickSort(ary, comparator, q + 1, r);
	  }
	}

	/**
	 * Sort the given array in-place with the given comparator function.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 */
	exports.quickSort = function (ary, comparator) {
	  doQuickSort(ary, comparator, 0, ary.length - 1);
	};


/***/ }
/******/ ])
});
;

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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
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

/***/ "./node_modules/xmldom/dom-parser.js":
/***/ (function(module, exports, __webpack_require__) {

function DOMParser(options){
	this.options = options ||{locator:{}};
	
}
DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var entityMap = {'lt':'<','gt':'>','amp':'&','quot':'"','apos':"'"}
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}
	
	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(/\/x?html?$/.test(mimeType)){
		entityMap.nbsp = '\xa0';
		entityMap.copy = '\xa9';
		defaultNSMap['']= 'http://www.w3.org/1999/xhtml';
	}
	defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
	if(source){
		sax.parse(source,defaultNSMap,entityMap);
	}else{
		sax.errorHandler.error("invalid doc source");
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler 
 * 
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */ 
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;
	    
		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},
	
	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},
	
	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		console.error('[xmldom fatalError]\t'+error,_locator(this.locator));
	    throw error;
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

//if(typeof require == 'function'){
	var XMLReader = __webpack_require__("./node_modules/xmldom/sax.js").XMLReader;
	var DOMImplementation = exports.DOMImplementation = __webpack_require__("./node_modules/xmldom/dom.js").DOMImplementation;
	exports.XMLSerializer = __webpack_require__("./node_modules/xmldom/dom.js").XMLSerializer ;
	exports.DOMParser = DOMParser;
//}


/***/ }),

/***/ "./node_modules/xmldom/dom.js":
/***/ (function(module, exports) {

/*
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 */

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(Object.create){
		var ppt = Object.create(Super.prototype)
		pt.__proto__ = ppt;
	}
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknow Class:"+Class)
		}
		pt.constructor = Class
	}
}
var htmlns = 'http://www.w3.org/1999/xhtml' ;
// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);


function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	}
};
function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
}

_extends(LiveNodeList,NodeList);
/**
 * 
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};
/**
 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
 */
function DOMImplementation(/* Object */ features) {
	this._features = {};
	if (features) {
		for (var feature in features) {
			 this._features = features[feature];
		}
	}
};

DOMImplementation.prototype = {
	hasFeature: function(/* string */ feature, /* string */ version) {
		var versions = this._features[feature.toLowerCase()];
		if (versions && (!version || version in versions)) {
			return true;
		} else {
			return false;
		}
	},
	// Introduced in DOM Level 2:
	createDocument:function(namespaceURI,  qualifiedName, doctype){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype;
		if(doctype){
			doc.appendChild(doctype);
		}
		if(qualifiedName){
			var root = doc.createElementNS(namespaceURI,qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	// Introduced in DOM Level 2:
	createDocumentType:function(qualifiedName, publicId, systemId){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId;
		node.systemId = systemId;
		// Introduced in DOM Level 2:
		//readonly attribute DOMString        internalSubset;
		
		//TODO:..
		//  readonly attribute NamedNodeMap     entities;
		//  readonly attribute NamedNodeMap     notations;
		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}
function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}
function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}
function _onUpdateChild(doc,el,newChild){
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if(newChild){
			cs[cs.length++] = newChild;
		}else{
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while(child){
				cs[i++] = child;
				child =child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode,child){
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if(previous){
		previous.nextSibling = next;
	}else{
		parentNode.firstChild = next
	}
	if(next){
		next.previousSibling = previous;
	}else{
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument,parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else{
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else{
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode,newChild){
	var cp = newChild.parentNode;
	if(cp){
		var pre = parentNode.lastChild;
		cp.removeChild(newChild);//remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if(pre){
		pre.nextSibling = newChild;
	}else{
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	doctype :  null,
	documentElement :  null,
	_inc : 1,
	
	insertBefore :  function(newChild, refChild){//raises 
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
			this.documentElement = newChild;
		}
		
		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},
	
	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
			
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9?this.documentElement:this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;
	
	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}
function needNamespaceDefine(node,isHTML, visibleNamespaces) {
	var prefix = node.prefix||'';
	var uri = node.namespaceURI;
	if (!prefix && !uri){
		return false;
	}
	if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" 
		|| uri == 'http://www.w3.org/2000/xmlns/'){
		return false;
	}
	
	var i = visibleNamespaces.length 
	//console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		//console.log(node.nodeType,node.tagName,ns.prefix,prefix)
		if (ns.prefix == prefix){
			return ns.namespace != uri;
		}
	}
	//console.log(isHTML,uri,prefix=='')
	//if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
	//	return false;
	//}
	//node.flag = '11111'
	//console.error(3,true,node.flag,node.prefix,node.namespaceURI)
	return true;
}
function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}
	switch(node.nodeType){
	case ELEMENT_NODE:
		if (!visibleNamespaces) visibleNamespaces = [];
		var startVisibleNamespaces = visibleNamespaces.length;
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		
		isHTML =  (htmlns === node.namespaceURI) ||isHTML 
		buf.push('<',nodeName);
		
		
		
		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}
		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				var ns = prefix ? ' xmlns:' + prefix : " xmlns";
				buf.push(ns, '="' , uri , '"');
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}
		// add namespace for current node		
		if (needNamespaceDefine(node,isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			var ns = prefix ? ' xmlns:' + prefix : " xmlns";
			buf.push(ns, '="' , uri , '"');
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}
		
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
					child = child.nextSibling;
				}
			}
			buf.push('</',nodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return buf.push(' ',node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');
	case TEXT_NODE:
		return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC "',pubid);
			if (sysid && sysid!='.') {
				buf.push( '" "',sysid);
			}
			buf.push('">');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM "',sysid,'">');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});
		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},
			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;
				default:
					//TODO:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})
		
		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}
		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DOMImplementation = DOMImplementation;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/xmldom/sax.js":
/***/ (function(module, exports) {

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring 
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

function XMLReader(){
	
}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if(k in entityMap){
			return entityMap[k]; 
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;
	
	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart+2,end);
				var config = parseStack.pop();
				if(end<0){
					
	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		//console.error('#@@@@@@'+tagName)
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				//console.error(parseStack.length,parseStack)
				//console.error(config);
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for(var prefix in localNSMap){
							domBuilder.endPrefixMapping(prefix) ;
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName );
					}
		        }else{
		        	parseStack.push(config)
		        }
				
				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;
				
				
				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					//}catch(e){console.error('@@@@@'+e)}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}
				
				
				
				if(el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed){
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				}else{
					end++;
				}
			}
		}catch(e){
			errorHandler.error('element parse error: '+e)
			//errorHandler.error('element parse error: '+e);
			end = -1;
			//throw e;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName');
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					el.add(attrName,value,start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
				//console.log(attrName,value,start,p)
				el.add(attrName,value,start);
				//console.dir(el)
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="');
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
			case S_ATTR_SPACE:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')")
			}
			break;
		case ''://end document
			//throw new Error('unexpected end of input')
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start)
				}else{
					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					el.add(value,value,start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value,start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					el.add(attrName,attrName,start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute 
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = 'http://www.w3.org/2000/xmlns/'
			domBuilder.startPrefixMapping(nsPrefix, value) 
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = 'http://www.w3.org/XML/1998/namespace';
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']
				
				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix) 
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}
			
		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//} 
}
function _copy(source,target){
	for(var n in source){target[n] = source[n]}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA() 
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = len>3 && /^public$/i.test(matchs[2][0]) && matchs[3][0]
			var sysid = len>4 && matchs[4][0];
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name,pubid && pubid.replace(/^(['"])(.*?)\1$/,'$2'),
					sysid && sysid.replace(/^(['"])(.*?)\1$/,'$2'));
			domBuilder.endDTD();
			
			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

/**
 * @param source
 */
function ElementAttributes(source){
	
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	add:function(qName,value,offset){
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//			
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}




function _set_proto_(thiz,parent){
	thiz.__proto__ = parent;
	return thiz;
}
if(!(_set_proto_({},_set_proto_.prototype) instanceof _set_proto_)){
	_set_proto_ = function(thiz,parent){
		function p(){};
		p.prototype = parent;
		p = new p();
		for(parent in thiz){
			p[parent] = thiz[parent];
		}
		return p;
	}
}

function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;



/***/ }),

/***/ "./src/actions/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXPORT_ODD = exports.UPDATE_CUSTOMIZATION_ODD = exports.RECEIVE_FROM_OXGARAGE = exports.REQUEST_OXGARAGE_TRANSFORM = exports.RECEIVE_LOCAL_SOURCE = exports.REQUEST_LOCAL_SOURCE = exports.SELECT_ODD = exports.RECEIVE_ODD = exports.REQUEST_ODD = undefined;
exports.selectOdd = selectOdd;
exports.updateCustomizationOdd = updateCustomizationOdd;
exports.fetchOdd = fetchOdd;
exports.fetchLocalSource = fetchLocalSource;
exports.postToOxGarage = postToOxGarage;

var _isomorphicFetch = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_ODD = exports.REQUEST_ODD = 'REQUEST_ODD';
var RECEIVE_ODD = exports.RECEIVE_ODD = 'RECEIVE_ODD';
var SELECT_ODD = exports.SELECT_ODD = 'SELECT_ODD';
var REQUEST_LOCAL_SOURCE = exports.REQUEST_LOCAL_SOURCE = 'REQUEST_LOCAL_SOURCE';
var RECEIVE_LOCAL_SOURCE = exports.RECEIVE_LOCAL_SOURCE = 'RECEIVE_LOCAL_SOURCE';
var REQUEST_OXGARAGE_TRANSFORM = exports.REQUEST_OXGARAGE_TRANSFORM = 'REQUEST_OXGARAGE_TRANSFORM';
var RECEIVE_FROM_OXGARAGE = exports.RECEIVE_FROM_OXGARAGE = 'RECEIVE_FROM_OXGARAGE';

var UPDATE_CUSTOMIZATION_ODD = exports.UPDATE_CUSTOMIZATION_ODD = 'UPDATE_CUSTOMIZATION_ODD';
var EXPORT_ODD = exports.EXPORT_ODD = 'EXPORT_ODD';

function selectOdd(oddUrl) {
  return {
    type: SELECT_ODD,
    oddUrl: oddUrl
  };
}

function requestOdd(odd) {
  return {
    type: REQUEST_ODD,
    odd: odd
  };
}

function receiveOdd(string) {
  return {
    type: RECEIVE_ODD,
    xml: string,
    receivedAt: Date.now()
  };
}

function requestLocalSource(url) {
  return {
    type: REQUEST_LOCAL_SOURCE,
    url: url
  };
}

function receiveLocalSource(json) {
  return {
    type: RECEIVE_LOCAL_SOURCE,
    json: json,
    receivedAt: Date.now()
  };
}

function receiveFromOxGarage(json) {
  return {
    type: RECEIVE_FROM_OXGARAGE,
    json: json,
    receivedAt: Date.now()
  };
}

function requestOxGarageTransform(input, endpoint) {
  return {
    type: REQUEST_OXGARAGE_TRANSFORM,
    input: input,
    endpoint: endpoint
  };
}

function updateCustomizationOdd() {
  return {
    type: UPDATE_CUSTOMIZATION_ODD
  };
}

/** ********
 * thunks *
 ******** **/
function fetchOdd(odd) {
  return function (dispatch) {
    dispatch(requestOdd(odd));
    return new Promise(function (res) {
      (0, _isomorphicFetch2.default)(odd).then(function (response) {
        return response.text();
      }).then(function (xml) {
        res(dispatch(receiveOdd(xml)));
      });
    });
  };
}

function fetchLocalSource(url) {
  return function (dispatch) {
    dispatch(requestLocalSource(url));
    return (0, _isomorphicFetch2.default)(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveLocalSource(json));
    });
  };
}

function postToOxGarage(input, endpoint) {
  return function (dispatch) {
    dispatch(requestOxGarageTransform(input, endpoint));
    var fd = new FormData();
    fd.append('fileToConvert', new Blob([input], { 'type': 'application\/octet-stream' }), 'file.odd');
    return new Promise(function (res) {
      (0, _isomorphicFetch2.default)(endpoint, {
        mode: 'cors',
        method: 'post',
        body: fd
      }).then(function (response) {
        return response.text();
      }).then(function (json) {
        return res(dispatch(receiveFromOxGarage(JSON.parse(json))));
      });
    });
  };
}

/***/ }),

/***/ "./src/actions/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includeModules = includeModules;
exports.excludeModules = excludeModules;
exports.includeElements = includeElements;
exports.excludeElements = excludeElements;
var INCLUDE_MODULES = exports.INCLUDE_MODULES = 'INCLUDE_MODULES';
var EXCLUDE_MODULES = exports.EXCLUDE_MODULES = 'EXCLUDE_MODULES';
var INCLUDE_ELEMENTS = exports.INCLUDE_ELEMENTS = 'INCLUDE_ELEMENTS';
var EXCLUDE_ELEMENTS = exports.EXCLUDE_ELEMENTS = 'EXCLUDE_ELEMENTS';

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

function includeElements(elements) {
  return {
    type: INCLUDE_ELEMENTS,
    elements: elements
  };
}

function excludeElements(elements) {
  return {
    type: EXCLUDE_ELEMENTS,
    elements: elements
  };
}

/***/ }),

/***/ "./src/components/AppBody.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__("./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Members = __webpack_require__("./src/containers/Members.js");

var _Members2 = _interopRequireDefault(_Members);

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
  filename: '/home/rviglian/Projects/romajs/src/components/AppBody.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/AppBody.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}
// import { Route } from 'react-router-dom'


// import FilterSearch from '../containers/FilterSearch'
// import ElementPage from '../containers/ElementPage'

var AppBody = _wrapComponent('AppBody')(function (_Component) {
  _inherits(AppBody, _Component);

  function AppBody() {
    _classCallCheck(this, AppBody);

    return _possibleConstructorReturn(this, (AppBody.__proto__ || Object.getPrototypeOf(AppBody)).apply(this, arguments));
  }

  _createClass(AppBody, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_Header2.default, { uploadCustomization: this.props.uploadCustomization, onDownloadClick: this.props.onDownloadClick, odd: this.props.odd }),
        _react3.default.createElement(
          'div',
          { className: 'romajs-content' },
          _react3.default.createElement(
            'main',
            { className: 'romajs-main' },
            _react3.default.createElement(_Members2.default, null)
          )
        )
      );
    }
  }]);

  return AppBody;
}(_react2.Component));

AppBody.propTypes = {
  uploadCustomization: _propTypes2.default.func.isRequired,
  onDownloadClick: _propTypes2.default.func.isRequired,
  odd: _propTypes2.default.object
};

exports.default = AppBody;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Header.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Header: {
    displayName: 'Header'
  }
};

var _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Header.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Header.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Header = _wrapComponent('Header')(function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'header',
        { className: 'mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed romajs-toolbar' },
        _react3.default.createElement(
          'div',
          { className: 'mdc-toolbar__row' },
          _react3.default.createElement(
            'section',
            { className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
            _react3.default.createElement(
              'span',
              { className: 'mdc-toolbar__title' },
              'Roma js - ODD customization'
            )
          ),
          _react3.default.createElement(
            'section',
            { className: 'mdc-toolbar__section mdc-toolbar__section--align-end' },
            _react3.default.createElement('input', { type: 'file', id: 'files' }),
            _react3.default.createElement(
              'a',
              { className: 'material-icons', title: 'Upload ODD', onClick: this.props.uploadCustomization },
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
        ),
        _react3.default.createElement(
          'div',
          { className: 'mdc-toolbar__row romajs-toolbar2' },
          _react3.default.createElement(
            'section',
            { className: 'mdc-toolbar__section mdc-toolbar__section--align-start' },
            _react3.default.createElement(
              'span',
              { className: 'mdl-chip mdl-chip--deletable romajs-itemtype-selected' },
              _react3.default.createElement(
                'span',
                { className: 'mdl-chip__text' },
                'Elements'
              ),
              _react3.default.createElement(
                'button',
                { type: 'button', className: 'mdl-chip__action' },
                _react3.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'cancel'
                )
              )
            ),
            _react3.default.createElement(
              'span',
              { className: 'mdl-chip mdl-chip--deletable' },
              _react3.default.createElement(
                'span',
                { className: 'mdl-chip__text' },
                'Classes'
              ),
              _react3.default.createElement(
                'button',
                { type: 'button', className: 'mdl-chip__action' },
                _react3.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'add_circle'
                )
              )
            ),
            _react3.default.createElement(
              'span',
              { className: 'mdl-chip mdl-chip--deletable' },
              _react3.default.createElement(
                'span',
                { className: 'mdl-chip__text' },
                'Datatypes'
              ),
              _react3.default.createElement(
                'button',
                { type: 'button', className: 'mdl-chip__action' },
                _react3.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'add_circle'
                )
              )
            )
          ),
          _react3.default.createElement('section', { className: 'mdc-toolbar__section mdc-toolbar__section--align-end' })
        )
      );
    }
  }]);

  return Header;
}(_react2.Component));

exports.default = Header;


Header.propTypes = {
  uploadCustomization: _propTypes2.default.func.isRequired,
  onDownloadClick: _propTypes2.default.func.isRequired,
  odd: _propTypes2.default.object
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Member.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SingleModule = __webpack_require__("./src/containers/SingleModule.js");

var _SingleModule2 = _interopRequireDefault(_SingleModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Member: {
    displayName: 'Member'
  }
};

var _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Member.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Member.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Member = _wrapComponent('Member')(function (_Component) {
  _inherits(Member, _Component);

  function Member() {
    _classCallCheck(this, Member);

    return _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).apply(this, arguments));
  }

  _createClass(Member, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'li',
        { className: 'mdc-list-item mdc-elevation--z1' },
        _react3.default.createElement(
          'span',
          { className: 'mdc-checkbox' },
          _react3.default.createElement('input', { type: 'checkbox', id: 'basic-checkbox', className: 'mdc-checkbox__native-control',
            checked: this.props.selected, onChange: function onChange() {
              return _this2.props.toggleItem(_this2.props.ident, _this2.props.selected);
            } }),
          _react3.default.createElement(
            'span',
            { className: 'mdc-checkbox__background' },
            _react3.default.createElement(
              'svg',
              { className: 'mdc-checkbox__checkmark', viewBox: '0 0 24 24' },
              _react3.default.createElement('path', { className: 'mdc-checkbox__checkmark__path', fill: 'none', stroke: 'white', d: 'M1.73,12.91 8.1,19.28 22.79,4.59' })
            ),
            _react3.default.createElement('span', { className: 'mdc-checkbox__mixedmark' })
          )
        ),
        _react3.default.createElement(
          'span',
          { className: 'mdc-list-item__text' },
          this.props.ident,
          _react3.default.createElement(
            'span',
            { className: 'mdc-list-item__text__secondary' },
            this.props.desc
          )
        ),
        _react3.default.createElement(
          'span',
          { className: 'mdc-list-item__end-detail' },
          _react3.default.createElement(_SingleModule2.default, {
            selected: this.props.module_selected,
            ident: this.props.module })
        )
      );
    }
  }]);

  return Member;
}(_react2.Component));

exports.default = Member;


Member.propTypes = {
  toggleItem: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired,
  ident: _propTypes2.default.string.isRequired,
  desc: _propTypes2.default.string.isRequired,
  module: _propTypes2.default.string.isRequired,
  module_selected: _propTypes2.default.bool.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/MembersList.js":
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Member = __webpack_require__("./src/components/Member.js");

var _Member2 = _interopRequireDefault(_Member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MembersList: {
    displayName: 'MembersList'
  }
};

var _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/MembersList.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/MembersList.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var MembersList = _wrapComponent('MembersList')(function (_Component) {
  _inherits(MembersList, _Component);

  function MembersList() {
    _classCallCheck(this, MembersList);

    return _possibleConstructorReturn(this, (MembersList.__proto__ || Object.getPrototypeOf(MembersList)).apply(this, arguments));
  }

  _createClass(MembersList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        'ul',
        { className: 'mdc-list mdc-list--two-line romajs-itemlist' },
        this.props.elements.map(function (element) {
          if (element.visible) {
            return _react3.default.createElement(_Member2.default, _extends({
              key: element.ident
            }, element, {
              toggleItem: _this2.props.toggleItem
            }));
          }
          return '';
        })
      );
    }
  }]);

  return MembersList;
}(_react2.Component));

exports.default = MembersList;


MembersList.propTypes = {
  elements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    selected: _propTypes2.default.bool.isRequired,
    visible: _propTypes2.default.bool.isRequired,
    ident: _propTypes2.default.string.isRequired,
    desc: _propTypes2.default.string.isRequired,
    module: _propTypes2.default.string.isRequired,
    module_selected: _propTypes2.default.bool.isRequired
  }).isRequired).isRequired,
  toggleItem: _propTypes2.default.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Module.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Module: {
    displayName: 'Module'
  }
};

var _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Module.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/home/rviglian/Projects/romajs/src/components/Module.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeRviglianProjectsRomajsNode_modulesReactTransformHmrLibIndexJs2(_homeRviglianProjectsRomajsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Module = _wrapComponent('Module')(function (_Component) {
  _inherits(Module, _Component);

  function Module() {
    _classCallCheck(this, Module);

    return _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).apply(this, arguments));
  }

  _createClass(Module, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var iconClass = this.props.selected ? 'romajs-color-no' : 'romajs-color-yes';
      var iconType = this.props.selected ? 'cancel' : 'add_circle';
      return _react3.default.createElement(
        'span',
        null,
        _react3.default.createElement(
          'button',
          { type: 'button', className: 'mdl-chip__action',
            onClick: function onClick() {
              return _this2.props.toggleModule(_this2.props.ident, _this2.props.selected);
            } },
          _react3.default.createElement(
            'i',
            { className: 'material-icons ' + iconClass },
            iconType
          )
        ),
        ' (',
        this.props.ident,
        ')'
      );
    }
  }]);

  return Module;
}(_react2.Component));

exports.default = Module;


Module.propTypes = {
  toggleModule: _propTypes2.default.func.isRequired,
  ident: _propTypes2.default.string.isRequired,
  selected: _propTypes2.default.bool.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/containers/App.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__("./src/actions/index.js");

var _AppBody = __webpack_require__("./src/components/AppBody.js");

var _AppBody2 = _interopRequireDefault(_AppBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import saveAs from 'save-as'

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    uploadCustomization: function uploadCustomization() {
      // TODO: this is wrong, find way of passing it to function instead:
      var files = document.getElementById('files').files;
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function (e) {
        dispatch((0, _actions.postToOxGarage)(e.target.result, window.location.protocol + '//www.tei-c.org/ege-webservice//Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml/oddjson%3Aapplication%3Ajson/'));
        dispatch((0, _actions.fetchLocalSource)('fakeData/p5subset.json'));
      };
    },
    onDownloadClick: function onDownloadClick() {
      // saveAs(new Blob([xmlString], {'type': 'text\/xml'}), 'new_odd.xml')
    }
  };
};

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AppBody2.default);

exports.default = App;

/***/ }),

/***/ "./src/containers/Members.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _modules = __webpack_require__("./src/actions/modules.js");

var _MembersList = __webpack_require__("./src/components/MembersList.js");

var _MembersList2 = _interopRequireDefault(_MembersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  console.log('state changed!', state);
  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.customization.isFetching && !state.odd.localsource.isFetching) {
      var customization = state.odd.customization.json;
      var localsource = state.odd.localsource.json;

      // If a filterTerm is set, use it to filter results
      // ACTUALLY I want to do this within the component's state, without using redux
      // const filter = state.ui.filterTerm ? state.ui.filterTerm : false

      var elements = localsource.members.reduce(function (acc, localMember) {
        if (localMember.type === 'elementSpec') {
          var element = Object.assign({}, localMember);
          var customMember = customization.members.filter(function (m) {
            return m.ident === localMember.ident;
          })[0];
          if (customMember) {
            element = Object.assign({}, customMember);
            element.selected = true;
            element.module_selected = true;
          } else {
            element.selected = false;
            if (customization.modules.filter(function (m) {
              return m.ident === element.module;
            })[0]) {
              element.module_selected = true;
            } else {
              element.module_selected = false;
            }
          }
          element.visible = true;
          acc.push(element);
        }
        return acc;
      }, []);
      // Finally, sort alphabetically
      elements.sort(function (a, b) {
        if (a.ident.toLowerCase() > b.ident.toLowerCase()) {
          return 1;
        } else {
          return b.ident.toLowerCase() > a.ident.toLowerCase() ? -1 : 0;
        }
      });
      return { elements: elements };
    } else return { elements: [] };
  } else return { elements: []
    // else return {elements: [], classes: [], datatypes: [], macros: []}
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleItem: function toggleItem(name, selected) {
      if (selected) {
        dispatch((0, _modules.excludeElements)([name]));
      } else {
        dispatch((0, _modules.includeElements)([name]));
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MembersList2.default);

/***/ }),

/***/ "./src/containers/SingleModule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _modules = __webpack_require__("./src/actions/modules.js");

var _Module = __webpack_require__("./src/components/Module.js");

var _Module2 = _interopRequireDefault(_Module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return ownProps;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleModule: function toggleModule(name, selected) {
      if (selected) {
        dispatch((0, _modules.excludeModules)([name]));
      } else {
        dispatch((0, _modules.includeModules)([name]));
      }
    }
  };
};

var SingleModule = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Module2.default);

exports.default = SingleModule;

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./src/scss/romajs.scss");

__webpack_require__("./node_modules/babel-polyfill/lib/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reduxThunk = __webpack_require__("./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _reducers = __webpack_require__("./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__("./src/containers/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('romajs'));

/***/ }),

/***/ "./src/reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__("./src/actions/index.js");

var _modules = __webpack_require__("./src/actions/modules.js");

var _modules2 = __webpack_require__("./src/reducers/modules.js");

var _updateOdd = __webpack_require__("./src/reducers/updateOdd.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

// import { routerReducer } from 'react-router-redux'

function selectedOdd() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.SELECT_ODD:
      return action.oddUrl;
    default:
      return state;
  }
}

function localSource() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_LOCAL_SOURCE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case _actions.RECEIVE_LOCAL_SOURCE:
      return Object.assign({}, state, {
        isFetching: false,
        json: action.json,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function customization() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_ODD:
      return Object.assign({}, state, {
        isFetching: true
      });
    case _actions.RECEIVE_ODD:
      return Object.assign({}, state, {
        isFetching: false,
        xml: action.xml
      });
    case _actions.REQUEST_OXGARAGE_TRANSFORM:
      return Object.assign({}, state, {
        isFetching: true
      });
    case _actions.RECEIVE_FROM_OXGARAGE:
      return Object.assign({}, state, {
        isFetching: false,
        json: action.json,
        receivedAt: action.receivedAt
      });
    default:
      return state;
  }
}

function odd() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.UPDATE_CUSTOMIZATION_ODD:
      var xml = Object.assign({}, state.customization, { xml: (0, _updateOdd.updateOdd)(state.localsource, state.customization) });
      return Object.assign({}, state, { customization: xml });
    case _actions.RECEIVE_LOCAL_SOURCE:
    case _actions.REQUEST_LOCAL_SOURCE:
      return Object.assign({}, state, { localsource: localSource(state.localsource, action) });
    case _actions.REQUEST_ODD:
    case _actions.RECEIVE_ODD:
    case _actions.REQUEST_OXGARAGE_TRANSFORM:
    case _actions.RECEIVE_FROM_OXGARAGE:
      return Object.assign({}, state, { customization: customization(state.customization, action) });
    case _modules.INCLUDE_MODULES:
    case _modules.EXCLUDE_MODULES:
    case _modules.INCLUDE_ELEMENTS:
    case _modules.EXCLUDE_ELEMENTS:
      return Object.assign({}, state, { customization: (0, _modules2.oddModules)(state, action) });
    default:
      return state;
  }
}

var romajsApp = (0, _redux.combineReducers)({
  selectedOdd: selectedOdd,
  odd: odd
});

exports.default = romajsApp;

/***/ }),

/***/ "./src/reducers/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oddModules = oddModules;

var _modules = __webpack_require__("./src/actions/modules.js");

function getElementByIdent(source, ident) {
  return source.members.filter(function (m) {
    return m.type === 'elementSpec' && m.ident === ident;
  })[0];
}

function oddModules(state, action) {
  var customizationObj = Object.assign({}, state.customization);
  var customization = customizationObj.json;
  var localsource = state.localsource.json;
  var currentModules = customization.modules.reduce(function (acc, m) {
    acc.push(m.ident);
    return acc;
  }, []);
  switch (action.type) {
    case _modules.INCLUDE_MODULES:
      var modulesToInclude = action.modules.filter(function (x) {
        return currentModules.indexOf(x) === -1;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var ident = _step.value;

          var localMod = localsource.modules.filter(function (x) {
            return x.ident === ident;
          })[0];
          customization.modules.push({
            ident: ident,
            id: localMod.id,
            desc: localMod.desc
          });
          // Include all elements from this module
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop2 = function _loop2() {
              var m = _step2.value;

              if (m.type === 'elementSpec' && m.module === ident) {
                // if not in custom, add.
                if (!customization.members.filter(function (x) {
                  return x.ident === m.ident;
                })[0]) {
                  customization.members.push(m);
                }
              }
            };

            for (var _iterator2 = localsource.members[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop2();
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
        };

        for (var _iterator = modulesToInclude[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
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

      return Object.assign(state, customizationObj);
    case _modules.EXCLUDE_MODULES:
      customization.modules = customization.modules.filter(function (m) {
        return action.modules.indexOf(m.ident) === -1;
      });
      // Exclude all elements from this module
      customization.members = customization.members.filter(function (m) {
        return action.modules.indexOf(m.module) === -1;
      });
      return Object.assign(state, customizationObj);
    case _modules.INCLUDE_ELEMENTS:
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop3 = function _loop3() {
          var el = _step3.value;

          var localEl = getElementByIdent(localsource, el);
          if (!getElementByIdent(customization, el)) {
            customization.members.push(localEl);
          }
          // If the module for the added element was not selected, do it now.
          if (customization.modules.filter(function (x) {
            return x.ident === localEl.module;
          }).length === 0) {
            var localMod = localsource.modules.filter(function (x) {
              return x.ident === localEl.module;
            })[0];
            customization.modules.push(localMod);
          }
        };

        for (var _iterator3 = action.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop3();
        }
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

      return Object.assign(state, customizationObj);
    case _modules.EXCLUDE_ELEMENTS:
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop4 = function _loop4() {
          var el = _step4.value;

          var localEl = getElementByIdent(localsource, el);
          customization.members = customization.members.reduce(function (acc, m) {
            if (m.ident !== el) {
              acc.push(m);
            }
            return acc;
          }, []);
          // If there are no more elements belonging to the module, remove it
          var moduleElements = customization.members.filter(function (x) {
            return x.type === 'elementSpec' && x.module === localEl.module;
          });
          if (moduleElements.length === 0) {
            customization.modules = customization.modules.reduce(function (acc, m) {
              if (m.ident !== localEl.module) {
                acc.push(m);
              }
              return acc;
            }, []);
          }
        };

        for (var _iterator4 = action.elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop4();
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

      return Object.assign(state, customizationObj);
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/updateOdd.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOdd = updateOdd;

var _xmldom = __webpack_require__("./node_modules/xmldom/dom-parser.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mergeModules(localsource, customization, odd) {
  var schemaSpec = odd.getElementsByTagName('schemaSpec')[0];
  var oddModules = odd.getElementsByTagName('moduleRef');
  var customModuleNames = customization.modules.map(function (m) {
    return m.ident;
  });

  var oddModuleNames = Array.from(oddModules).reduce(function (acc, m) {
    acc.push(m.getAttribute('key'));
    return acc;
  }, []);

  // Determine new modules and add them appropriately
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = customization.modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var m = _step.value;

      if (oddModuleNames.indexOf(m.ident) === -1) {
        // before adding the module, make sure it's meant to be added in full.
        var moduleElementsCount = 0;
        var selectedElementsCount = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = localsource.members[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var mem = _step3.value;

            if (mem.type === 'elementSpec' && mem.module === m.ident) {
              moduleElementsCount++;
            }
          }
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

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = customization.members[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _mem = _step4.value;

            if (_mem.type === 'elementSpec' && _mem.module === m.ident) {
              selectedElementsCount++;
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

        if (moduleElementsCount === selectedElementsCount) {
          var moduleEl = odd.createElement('moduleRef');
          moduleEl.setAttribute('key', m.ident);
          schemaSpec.insertBefore(moduleEl, oddModules[0]);
        }
      }
    }

    // Determine unselected modules, remove them
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
    var _loop = function _loop() {
      var oddModuleName = _step2.value;

      if (customModuleNames.indexOf(oddModuleName) === -1) {
        var nodeToRemove = Array.from(oddModules).filter(function (om) {
          return om.getAttribute('key') === oddModuleName;
        })[0];
        nodeToRemove.parentNode.removeChild(nodeToRemove);
      }
    };

    for (var _iterator2 = oddModuleNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
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

  return odd;
}

function mergeElements(localsource, customization, odd) {
  var schemaSpec = odd.getElementsByTagName('schemaSpec')[0];
  var moduleRefs = schemaSpec.getElementsByTagName('moduleRef');
  var elementSpecs = schemaSpec.getElementsByTagName('elementSpec');
  var elementRefs = schemaSpec.getElementsByTagName('elementRef');

  // Get all elements from the XML ODD
  var allOddElements = Array.from(moduleRefs).reduce(function (includedElements, mod) {
    var moduleName = mod.getAttribute('key');
    var include = mod.getAttribute('include');
    var except = mod.getAttribute('except');
    if (include) {
      includedElements.push.apply(includedElements, _toConsumableArray(include.split(/\s/)));
    } else if (except) {
      var excludedElements = except.split(/\s/);
      localsource.members.map(function (mem) {
        if (mem.type === 'elementSpec' && mem.module === moduleName && excludedElements.indexOf(mem.ident) === -1) {
          includedElements.push(mem.ident);
        }
      });
    } else {
      // the whole module is selected unless there's an elementSpec[@mode='delete']
      var deletedEls = Array.from(elementSpecs).reduce(function (acc, es) {
        if (es.getAttribute('mode') === 'delete') {
          var el = es.getAttribute('ident');
          var elMod = localsource.members.filter(function (x) {
            return x.ident === el;
          })[0].module;
          if (moduleName === elMod) {
            acc.push(el);
          }
        }
        return acc;
      }, []);
      // console.log('full module ', mod.getAttribute('key'))
      localsource.members.map(function (mem) {
        if (mem.type === 'elementSpec' && mem.module === moduleName && deletedEls.indexOf(mem.ident) === -1) {
          includedElements.push(mem.ident);
        }
      });
    }
    return includedElements;
  }, []);
  allOddElements = allOddElements.concat(Array.from(elementRefs).map(function (el) {
    return el.getAttribute('key');
  }));
  // Also pick up any stray elementSpecs
  allOddElements = allOddElements.concat(Array.from(elementSpecs).reduce(function (acc, el) {
    if (el.getAttribute('mode') !== 'delete') {
      acc.push(el.getAttribute('ident'));
    }
    return acc;
  }, []));

  // Get all elemnets from the state for comparison
  var customizationElements = customization.members.reduce(function (acc, x) {
    if (x.type === 'elementSpec') {
      acc.push(x.ident);
    }
    return acc;
  }, []);

  // remove elements
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    var _loop2 = function _loop2() {
      var el = _step5.value;

      if (customizationElements.indexOf(el) === -1) {
        console.log('removing ' + el);
        var mod = localsource.members.filter(function (x) {
          return x.ident === el;
        })[0].module;
        // adjust @include or @except
        var moduleRef = Array.from(moduleRefs).filter(function (m) {
          return m.getAttribute('key') === mod;
        })[0];
        var elementRef = Array.from(elementRefs).filter(function (er) {
          return er.getAttribute('key') === el;
        })[0];
        var elementSpec = Array.from(elementSpecs).filter(function (er) {
          return er.getAttribute('ident') === el;
        })[0];

        if (moduleRef) {
          var include = moduleRef.getAttribute('include');
          var except = moduleRef.getAttribute('except');
          if (include) {
            var includeParts = include.split(/\s/);
            includeParts.splice(includeParts.indexOf(el), 1);
            var includeString = includeParts.join(' ');
            if (includeString) {
              moduleRef.setAttribute('include', includeString);
            } else {
              moduleRef.removeAttribute('include');
            }
          } else if (except) {
            moduleRef.setAttribute('except', except + ' ' + el);
          } else {
            moduleRef.setAttribute('except', el);
          }
        }
        // remove elementRef
        if (elementRef) {
          elementRef.parentNode.removeChild(elementRef);
        }
        // switch elementSpec to @mode='delete'
        if (elementSpec) {
          elementSpec.setAttribute('mode', 'delete');
        }
      }
    };

    for (var _iterator5 = allOddElements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      _loop2();
    }

    // add elements
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

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    var _loop3 = function _loop3() {
      var el = _step6.value;

      if (allOddElements.indexOf(el) === -1) {
        console.log('adding ' + el);
        var mod = localsource.members.filter(function (x) {
          return x.ident === el;
        })[0].module;
        // adjust @include or @except
        var moduleRef = Array.from(moduleRefs).filter(function (m) {
          return m.getAttribute('key') === mod;
        })[0];
        var elementRef = Array.from(elementRefs).filter(function (er) {
          return er.getAttribute('key') === el;
        })[0];
        var elementSpec = Array.from(elementSpecs).filter(function (er) {
          return er.getAttribute('ident') === el;
        })[0];

        if (moduleRef) {
          var include = moduleRef.getAttribute('include');
          var except = moduleRef.getAttribute('except');
          if (include) {
            moduleRef.setAttribute('include', include + ' ' + el);
          } else if (except) {
            var exceptParts = except.split(/\s/);
            exceptParts.splice(exceptParts.indexOf(el), 1);
            var exceptString = exceptParts.join(' ');
            if (exceptString) {
              moduleRef.setAttribute('except', exceptString);
            } else {
              moduleRef.removeAttribute('except');
            }
          } else {
            moduleRef.setAttribute('include', el);
          }
        } else {
          // create moduleRef
          var newModuleRef = odd.createElement('moduleRef');
          newModuleRef.setAttribute('key', mod);
          newModuleRef.setAttribute('include', el);
          schemaSpec.insertBefore(newModuleRef, moduleRefs[0]);
        }
        // remove elementRef
        if (elementRef) {
          elementRef.parentNode.removeChild(elementRef);
        }
        // remove elementSpec[@mode='delete']
        if (elementSpec) {
          if (elementSpec.getAttribute('mode') === 'delete') {
            elementSpec.parentNode.removeChild(elementSpec);
          }
        }
      }
    };

    for (var _iterator6 = customizationElements[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      _loop3();
    }
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

  var elementsToRemove = allOddElements.filter(function (x) {
    return customizationElements.indexOf(x) === -1;
  });
  var elementsToAdd = customizationElements.filter(function (x) {
    return allOddElements.indexOf(x) === -1;
  });
  elementsToRemove;
  elementsToAdd;
  // console.log(elementsToRemove)
  return odd;
}

function updateOdd(localsourceObj, customizationObj) {
  // NB: localsource and customization are READ ONLY
  //     odd XML gets cloned every time to keep sub-routines purpose
  //     and minimize errors. This will slow the export down a bit,
  //     but since it's a one-off operation, it should be ok.
  var localsource = localsourceObj.json;
  var customization = customizationObj.json;
  var odd = new _xmldom.DOMParser().parseFromString(customizationObj.xml);

  // MODULES
  // These operations need to happen synchronously
  odd = mergeModules(localsource, customization, odd.cloneNode(true));
  odd = mergeElements(localsource, customization, odd.cloneNode(true));

  return new _xmldom.XMLSerializer().serializeToString(odd);
}

exports.default = updateOdd;

/***/ }),

/***/ "./src/scss/romajs.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./src/scss/romajs.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./src/scss/romajs.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"importLoaders\":2,\"modules\":true,\"localIdentName\":\"[local]\"}!./node_modules/sass-loader/lib/loader.js?{\"outputStyle\":\"expanded\",\"sourceMap\":true,\"sourceMapContents\":true,\"includePaths\":[\"/home/rviglian/Projects/romajs/node_modules\"]}!./src/scss/romajs.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},["./src/index.js"]);
//# sourceMappingURL=app-2791bff079100d9431a9.js.map