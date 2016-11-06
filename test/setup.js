import { jsdom } from 'jsdom'
import xmldom from 'xmldom'
import * as FormData from 'form-data'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.window.DOMParser = xmldom.DOMParser
global.FormData = FormData.default
global.Blob = function (strings, encoding) {return Buffer.from(strings[0], encoding)}
global.navigator = global.window.navigator
