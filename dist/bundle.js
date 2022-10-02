/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\nbody {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  caret-color: transparent;\n}\n/* the whole page */\n.content {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  min-width: 320px;\n}\n/* auto loads on each page */\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: rgb(181, 181, 228);\n  padding: 20px;\n}\n\n.nav {\n  display: flex;\n  gap: 10px;\n  padding-right: 10px;\n}\n\n.navLink {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.navLink:hover {\n  transform: translateY(-3px);\n}\n/* the main page content, loads under the header */\n.mainContent {\n  flex: 1;\n  background-color: rgb(245, 245, 220);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n  animation: fadeIn 1.5s;\n}\n\n/* home page */\n.welcomeTextBox {\n  display: flex;\n  flex-direction: column;\n  padding-top: 50px;\n}\n\n/* menu page */\n\n.menu {\n  padding: 50px;\n  align-items: flex-start;\n}\n\n.items {\n  padding: 50px;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.topRow {\n  display: flex;\n  gap: 15px;\n}\n\n.menuItemBox {\n  width: 300px;\n}\n\n.subText {\n  max-width: 500px;\n  min-width: 300px;\n}\n\n.menuItemBox {\n  width: 300px;\n  padding: 15px;\n  border: 1px solid black;\n}\n\n/* contact page */\n.contact {\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n\n.phoneInfo {\n  display: flex;\n  gap: 5px;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,wBAAwB;AAC1B;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;AACA,4BAA4B;AAC5B;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,oCAAoC;EACpC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;AAC7B;AACA,kDAAkD;AAClD;EACE,OAAO;EACP,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA,eAAe;;AAEf;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["*,\nbody {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  caret-color: transparent;\n}\n/* the whole page */\n.content {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  min-width: 320px;\n}\n/* auto loads on each page */\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: rgb(181, 181, 228);\n  padding: 20px;\n}\n\n.nav {\n  display: flex;\n  gap: 10px;\n  padding-right: 10px;\n}\n\n.navLink {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.navLink:hover {\n  transform: translateY(-3px);\n}\n/* the main page content, loads under the header */\n.mainContent {\n  flex: 1;\n  background-color: rgb(245, 245, 220);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n  animation: fadeIn 1.5s;\n}\n\n/* home page */\n.welcomeTextBox {\n  display: flex;\n  flex-direction: column;\n  padding-top: 50px;\n}\n\n/* menu page */\n\n.menu {\n  padding: 50px;\n  align-items: flex-start;\n}\n\n.items {\n  padding: 50px;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.topRow {\n  display: flex;\n  gap: 15px;\n}\n\n.menuItemBox {\n  width: 300px;\n}\n\n.subText {\n  max-width: 500px;\n  min-width: 300px;\n}\n\n.menuItemBox {\n  width: 300px;\n  padding: 15px;\n  border: 1px solid black;\n}\n\n/* contact page */\n.contact {\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n\n.phoneInfo {\n  display: flex;\n  gap: 5px;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/headerBuilder.js":
/*!*****************************************!*\
  !*** ./src/components/headerBuilder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu */ "./src/menu.js");




function createTitle() {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Poolside Restaurant';
  return title;
}

function createNavLink(title, link) {
  const navLink = document.createElement('a');
  const textNode = document.createTextNode(`${title}`);
  navLink.addEventListener('click', link);
  navLink.appendChild(textNode);
  navLink.classList.add('navLink');
  return navLink;
}

function createNavBar() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.appendChild(createNavLink('home', _home__WEBPACK_IMPORTED_MODULE_1__["default"]));
  nav.appendChild(createNavLink('menu', _menu__WEBPACK_IMPORTED_MODULE_2__.buildMenu));
  nav.appendChild(createNavLink('contact', _contact__WEBPACK_IMPORTED_MODULE_0__["default"]));
  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(createTitle());
  header.appendChild(createNavBar());
  return header;
}

function buildHeader() {
  const content = document.querySelector('.content');
  content.innerHTML = '';  
  content.appendChild(createHeader());
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);


/***/ }),

/***/ "./src/components/mainBuilder.js":
/*!***************************************!*\
  !*** ./src/components/mainBuilder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildMain() {
    const content = document.querySelector('.content');
    const main = document.createElement('main');
    main.classList.add('mainContent');
    content.appendChild(main);
    return main;
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMain);

/***/ }),

/***/ "./src/components/menuObject.js":
/*!**************************************!*\
  !*** ./src/components/menuObject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu */ "./src/menu.js");


const menu = {
  eggs: [
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Two eggs any style`, `add ham bacon or sausage 5.25`, 4.25),
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(
      `Eggs and hash`,
      `2 eggs served any style over house made corned beef hash`,
      725,
    ),
  ],
  omlettes: [
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Cheese`, `your choice of american swiss or cheddar`, 4.50),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Ham and cheddar`, `diced ham and cheddar`, 5.25),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Western`, `ham, green peppers, and onion`, 5.25),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Vegetarian`, `tomato, onion, green pepper, and mushroom`, 5.00)
  ],
  sweeterSide: [
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`3 Buttermilk pancakes or french toast`, `add ham, bacon, or sausage 6.75`, 6.00),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`2 Buttermilk pancakes or french toast`, `add ham, bacon, or sausage 5.75`, 5.00),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Belgian waffle`, `add ham, bacon, or sausage 7.75`, 7.00)

  ], 
  sides: [
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Bagel`, ``, 2.00),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Toast`, ``,1.25 ),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`House made English muffin`, ``, 1.50),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`House made muffin`, ``,2.25 ),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Homefries`, ``,2.25 ),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Ham, bacon, or sausage`, ``,1.00 ),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Corned beef hash`, ``,3.00 ),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Single pancake or slice of french toast`, ``,2.50 ),
  ],
  cereal: [
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Oatmeal`, ``, 2.50),
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(`Cold cereal`, ``, 1.75)
  ]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headerBuilder */ "./src/components/headerBuilder.js");
/* harmony import */ var _components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainBuilder */ "./src/components/mainBuilder.js");
/* harmony import */ var _assets_mapPhoto_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/mapPhoto.png */ "./src/assets/mapPhoto.png");




function contactContent() {
  const mainContent = document.querySelector('.mainContent');
  mainContent.classList.add('contact');
  const phone = createPhoneInfo();
  const location = createLocationInfo();
  const map = createMapImage();
  mainContent.appendChild(phone);
  mainContent.appendChild(location);
  mainContent.appendChild(map);
}

function createPhoneInfo() {
  const phone = document.createElement('div');
  phone.classList.add('phoneInfo');
  const phoneInfoText = document.createElement('p');
  phoneInfoText.textContent = `Call here for more information, or to make a reservation:`;
  const phoneElement = document.createElement('a');
  const phoneElementTextNode = document.createTextNode('(508) 255-4000');
  phoneElement.href = 'tel:+15082554000';
  phoneElement.appendChild(phoneElementTextNode);
  phone.appendChild(phoneInfoText);
  phone.appendChild(phoneElement);
  return phone;
}

function createLocationInfo() {
  const location = document.createElement('p');
  location.textContent = `We're located at 3620 State Hwy, Eastham, MA 02642`;
  return location;
}

function createMapImage() {
  const mapImage = new Image(900, 500);
  mapImage.src = _assets_mapPhoto_png__WEBPACK_IMPORTED_MODULE_2__;
  mapImage.alt = 'Image of location on map';
  return mapImage;
}

function buildContact() {
  (0,_components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])();
  contactContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headerBuilder */ "./src/components/headerBuilder.js");
/* harmony import */ var _components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainBuilder */ "./src/components/mainBuilder.js");
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/restaurant.jpg */ "./src/assets/restaurant.jpg");




function homeContent() {
  const mainContent = document.querySelector('.mainContent');
  mainContent.appendChild(createWelcomeText());
  mainContent.appendChild(createHomeImage());
  mainContent.classList.add('home')
}

function createWelcomeText() {
  const welcomeTextBox = document.createElement('div');

  const heading = document.createElement('h2');
  const headingSubText = document.createElement('p');

  welcomeTextBox.classList.add('welcomeTextBox');
  heading.classList.add('mainHeading');
  headingSubText.classList.add('headingSubText');

  heading.textContent = 'Welcome to the Poolside Restaurantt';
  headingSubText.textContent = 'at the Town Crier Motel';

  welcomeTextBox.appendChild(heading);
  welcomeTextBox.appendChild(headingSubText);

  return welcomeTextBox;
}

function createHomeImage() {
  const homeImage = new Image(600, 400);
  homeImage.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__;
  homeImage.alt = 'Image of restaurant interior'
  return homeImage;
}

createHomeImage();

function buildHome() {  
  (0,_components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])();
  homeContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMenu": () => (/* binding */ buildMenu),
/* harmony export */   "createMenuItem": () => (/* binding */ createMenuItem)
/* harmony export */ });
/* harmony import */ var _components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headerBuilder */ "./src/components/headerBuilder.js");
/* harmony import */ var _components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainBuilder */ "./src/components/mainBuilder.js");
/* harmony import */ var _components_menuObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuObject */ "./src/components/menuObject.js");




//individual menu items
function createMenuItem(name, description, price) {
  //creating the elements for display
  const item = document.createElement('div');
  //rows used for styling purposes
  const topRow = document.createElement('div');
  const bottomRow = document.createElement('div');
  //create the elements
  const itemName = document.createElement('h3');
  const itemDescription = document.createElement('p');
  const itemPrice = document.createElement('h3');
  //add class to style/format in css
  topRow.classList.add('topRow');
  //set the text for each element
  itemName.innerText = name;
  itemPrice.innerText = price;
  itemDescription.innerText = description;
  //append the elements to the rows
  topRow.appendChild(itemName);
  topRow.appendChild(itemPrice);
  bottomRow.appendChild(itemDescription);
  //append the rows to the item div
  item.appendChild(topRow);
  item.appendChild(bottomRow);
  return item;
}

function createMenuSection(sectionName, sectionSubText, menuItems) {
  const section = document.createElement('div');
  const name = document.createElement('h2');
  const subText = document.createElement('p');
  const items = document.createElement('div');

  section.classList.add('section');
  items.classList.add('items');
  subText.classList.add('subText');

  name.innerText = sectionName;
  subText.innerText = sectionSubText;
  section.appendChild(name);
  section.appendChild(subText);
  section.appendChild(items);

  menuItems.forEach((item) => items.appendChild(item));
  menuItems.forEach((item) => item.classList.add('menuItemBox'));
  return section;
}

function menuContent() {
  const mainContent = document.querySelector('.mainContent');

  mainContent.classList.add('menu');

  mainContent.appendChild(
    createMenuSection(
      'Eggs',
      `All eggs are served with homefries and your choice of toast or house made english muffin.`,
      _components_menuObject__WEBPACK_IMPORTED_MODULE_2__["default"].eggs,
    ),
  );
  mainContent.appendChild(
    createMenuSection(
      `Omelettes`,
      `All omelettes are served with homefries and your choice of toast or house made english muffin.`,
      _components_menuObject__WEBPACK_IMPORTED_MODULE_2__["default"].omlettes,
    ),
  );
  mainContent.appendChild(
    createMenuSection(`The sweeter side`, ``, _components_menuObject__WEBPACK_IMPORTED_MODULE_2__["default"].sweeterSide),
  );
  mainContent.appendChild(createMenuSection(`Sides`, ``, _components_menuObject__WEBPACK_IMPORTED_MODULE_2__["default"].sides));

  mainContent.appendChild(createMenuSection(`Hot or cold cereal`, ``, _components_menuObject__WEBPACK_IMPORTED_MODULE_2__["default"].cereal));

  return mainContent;
}

function buildMenu() {
  (0,_components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])();
  menuContent();
}



//in menu content, grab the main content div so that you can build your menu on top of it


/***/ }),

/***/ "./src/assets/mapPhoto.png":
/*!*********************************!*\
  !*** ./src/assets/mapPhoto.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6c30d288b11da106b80.png";

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7815d37758456e64751.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");



(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNIOztBQUU1QixpREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL21lbnVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi8qIHRoZSB3aG9sZSBwYWdlICovXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG59XFxuLyogYXV0byBsb2FkcyBvbiBlYWNoIHBhZ2UgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAxODEsIDIyOCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmF2TGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hdkxpbms6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cXG4vKiB0aGUgbWFpbiBwYWdlIGNvbnRlbnQsIGxvYWRzIHVuZGVyIHRoZSBoZWFkZXIgKi9cXG4ubWFpbkNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjIwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi8qIGhvbWUgcGFnZSAqL1xcbi53ZWxjb21lVGV4dEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4vKiBtZW51IHBhZ2UgKi9cXG5cXG4ubWVudSB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pdGVtcyB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubWVudUl0ZW1Cb3gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc3ViVGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm1lbnVJdGVtQm94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogY29udGFjdCBwYWdlICovXFxuLmNvbnRhY3Qge1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBob25lSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBQ0EsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0EsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQSxrREFBa0Q7QUFDbEQ7RUFDRSxPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBLGVBQWU7O0FBRWY7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi8qIHRoZSB3aG9sZSBwYWdlICovXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG59XFxuLyogYXV0byBsb2FkcyBvbiBlYWNoIHBhZ2UgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAxODEsIDIyOCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmF2TGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hdkxpbms6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cXG4vKiB0aGUgbWFpbiBwYWdlIGNvbnRlbnQsIGxvYWRzIHVuZGVyIHRoZSBoZWFkZXIgKi9cXG4ubWFpbkNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjIwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi8qIGhvbWUgcGFnZSAqL1xcbi53ZWxjb21lVGV4dEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4vKiBtZW51IHBhZ2UgKi9cXG5cXG4ubWVudSB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pdGVtcyB7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubWVudUl0ZW1Cb3gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc3ViVGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm1lbnVJdGVtQm94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogY29udGFjdCBwYWdlICovXFxuLmNvbnRhY3Qge1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBob25lSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRDb250YWN0IGZyb20gJy4uL2NvbnRhY3QnO1xuaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuLi9ob21lJztcbmltcG9ydCB7YnVpbGRNZW51fSBmcm9tICcuLi9tZW51JztcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnUG9vbHNpZGUgUmVzdGF1cmFudCc7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TGluayh0aXRsZSwgbGluaykge1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfWApO1xuICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGluayk7XG4gIG5hdkxpbmsuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdkxpbmsnKTtcbiAgcmV0dXJuIG5hdkxpbms7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkxpbmsoJ2hvbWUnLCBidWlsZEhvbWUpKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkxpbmsoJ21lbnUnLCBidWlsZE1lbnUpKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkxpbmsoJ2NvbnRhY3QnLCBidWlsZENvbnRhY3QpKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJzsgIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSGVhZGVyO1xuIiwiZnVuY3Rpb24gYnVpbGRNYWluKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBidWlsZE1haW47IiwiaW1wb3J0IHsgY3JlYXRlTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51JztcblxuY29uc3QgbWVudSA9IHtcbiAgZWdnczogW1xuICAgIGNyZWF0ZU1lbnVJdGVtKGBUd28gZWdncyBhbnkgc3R5bGVgLCBgYWRkIGhhbSBiYWNvbiBvciBzYXVzYWdlIDUuMjVgLCA0LjI1KSxcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIGBFZ2dzIGFuZCBoYXNoYCxcbiAgICAgIGAyIGVnZ3Mgc2VydmVkIGFueSBzdHlsZSBvdmVyIGhvdXNlIG1hZGUgY29ybmVkIGJlZWYgaGFzaGAsXG4gICAgICA3MjUsXG4gICAgKSxcbiAgXSxcbiAgb21sZXR0ZXM6IFtcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBDaGVlc2VgLCBgeW91ciBjaG9pY2Ugb2YgYW1lcmljYW4gc3dpc3Mgb3IgY2hlZGRhcmAsIDQuNTApLFxuICAgICAgY3JlYXRlTWVudUl0ZW0oYEhhbSBhbmQgY2hlZGRhcmAsIGBkaWNlZCBoYW0gYW5kIGNoZWRkYXJgLCA1LjI1KSxcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBXZXN0ZXJuYCwgYGhhbSwgZ3JlZW4gcGVwcGVycywgYW5kIG9uaW9uYCwgNS4yNSksXG4gICAgICBjcmVhdGVNZW51SXRlbShgVmVnZXRhcmlhbmAsIGB0b21hdG8sIG9uaW9uLCBncmVlbiBwZXBwZXIsIGFuZCBtdXNocm9vbWAsIDUuMDApXG4gIF0sXG4gIHN3ZWV0ZXJTaWRlOiBbXG4gICAgICBjcmVhdGVNZW51SXRlbShgMyBCdXR0ZXJtaWxrIHBhbmNha2VzIG9yIGZyZW5jaCB0b2FzdGAsIGBhZGQgaGFtLCBiYWNvbiwgb3Igc2F1c2FnZSA2Ljc1YCwgNi4wMCksXG4gICAgICBjcmVhdGVNZW51SXRlbShgMiBCdXR0ZXJtaWxrIHBhbmNha2VzIG9yIGZyZW5jaCB0b2FzdGAsIGBhZGQgaGFtLCBiYWNvbiwgb3Igc2F1c2FnZSA1Ljc1YCwgNS4wMCksXG4gICAgICBjcmVhdGVNZW51SXRlbShgQmVsZ2lhbiB3YWZmbGVgLCBgYWRkIGhhbSwgYmFjb24sIG9yIHNhdXNhZ2UgNy43NWAsIDcuMDApXG5cbiAgXSwgXG4gIHNpZGVzOiBbXG4gICAgICBjcmVhdGVNZW51SXRlbShgQmFnZWxgLCBgYCwgMi4wMCksXG4gICAgICBjcmVhdGVNZW51SXRlbShgVG9hc3RgLCBgYCwxLjI1ICksXG4gICAgICBjcmVhdGVNZW51SXRlbShgSG91c2UgbWFkZSBFbmdsaXNoIG11ZmZpbmAsIGBgLCAxLjUwKSxcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBIb3VzZSBtYWRlIG11ZmZpbmAsIGBgLDIuMjUgKSxcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBIb21lZnJpZXNgLCBgYCwyLjI1ICksXG4gICAgICBjcmVhdGVNZW51SXRlbShgSGFtLCBiYWNvbiwgb3Igc2F1c2FnZWAsIGBgLDEuMDAgKSxcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBDb3JuZWQgYmVlZiBoYXNoYCwgYGAsMy4wMCApLFxuICAgICAgY3JlYXRlTWVudUl0ZW0oYFNpbmdsZSBwYW5jYWtlIG9yIHNsaWNlIG9mIGZyZW5jaCB0b2FzdGAsIGBgLDIuNTAgKSxcbiAgXSxcbiAgY2VyZWFsOiBbXG4gICAgICBjcmVhdGVNZW51SXRlbShgT2F0bWVhbGAsIGBgLCAyLjUwKSxcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGBDb2xkIGNlcmVhbGAsIGBgLCAxLjc1KVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJCdWlsZGVyJztcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9jb21wb25lbnRzL21haW5CdWlsZGVyJztcbmltcG9ydCBtYXBQaG90byBmcm9tICcuL2Fzc2V0cy9tYXBQaG90by5wbmcnO1xuXG5mdW5jdGlvbiBjb250YWN0Q29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICBjb25zdCBwaG9uZSA9IGNyZWF0ZVBob25lSW5mbygpO1xuICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uSW5mbygpO1xuICBjb25zdCBtYXAgPSBjcmVhdGVNYXBJbWFnZSgpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVJbmZvKCkge1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZUluZm8nKTtcbiAgY29uc3QgcGhvbmVJbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmVJbmZvVGV4dC50ZXh0Q29udGVudCA9IGBDYWxsIGhlcmUgZm9yIG1vcmUgaW5mb3JtYXRpb24sIG9yIHRvIG1ha2UgYSByZXNlcnZhdGlvbjpgO1xuICBjb25zdCBwaG9uZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHBob25lRWxlbWVudFRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyg1MDgpIDI1NS00MDAwJyk7XG4gIHBob25lRWxlbWVudC5ocmVmID0gJ3RlbDorMTUwODI1NTQwMDAnO1xuICBwaG9uZUVsZW1lbnQuYXBwZW5kQ2hpbGQocGhvbmVFbGVtZW50VGV4dE5vZGUpO1xuICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZUluZm9UZXh0KTtcbiAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVFbGVtZW50KTtcbiAgcmV0dXJuIHBob25lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkluZm8oKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGBXZSdyZSBsb2NhdGVkIGF0IDM2MjAgU3RhdGUgSHd5LCBFYXN0aGFtLCBNQSAwMjY0MmA7XG4gIHJldHVybiBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFwSW1hZ2UoKSB7XG4gIGNvbnN0IG1hcEltYWdlID0gbmV3IEltYWdlKDkwMCwgNTAwKTtcbiAgbWFwSW1hZ2Uuc3JjID0gbWFwUGhvdG87XG4gIG1hcEltYWdlLmFsdCA9ICdJbWFnZSBvZiBsb2NhdGlvbiBvbiBtYXAnO1xuICByZXR1cm4gbWFwSW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29udGFjdCgpIHtcbiAgYnVpbGRIZWFkZXIoKTtcbiAgYnVpbGRNYWluKCk7XG4gIGNvbnRhY3RDb250ZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ29udGFjdDtcbiIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyQnVpbGRlcic7XG5pbXBvcnQgYnVpbGRNYWluIGZyb20gJy4vY29tcG9uZW50cy9tYWluQnVpbGRlcic7XG5pbXBvcnQgcmVzdGF1cmFudEltYWdlIGZyb20gJy4vYXNzZXRzL3Jlc3RhdXJhbnQuanBnJztcblxuZnVuY3Rpb24gaG9tZUNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Jyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWVUZXh0KCkpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lSW1hZ2UoKSk7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lVGV4dCgpIHtcbiAgY29uc3Qgd2VsY29tZVRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgaGVhZGluZ1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgd2VsY29tZVRleHRCb3guY2xhc3NMaXN0LmFkZCgnd2VsY29tZVRleHRCb3gnKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtYWluSGVhZGluZycpO1xuICBoZWFkaW5nU3ViVGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nU3ViVGV4dCcpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgUG9vbHNpZGUgUmVzdGF1cmFudHQnO1xuICBoZWFkaW5nU3ViVGV4dC50ZXh0Q29udGVudCA9ICdhdCB0aGUgVG93biBDcmllciBNb3RlbCc7XG5cbiAgd2VsY29tZVRleHRCb3guYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHdlbGNvbWVUZXh0Qm94LmFwcGVuZENoaWxkKGhlYWRpbmdTdWJUZXh0KTtcblxuICByZXR1cm4gd2VsY29tZVRleHRCb3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVJbWFnZSgpIHtcbiAgY29uc3QgaG9tZUltYWdlID0gbmV3IEltYWdlKDYwMCwgNDAwKTtcbiAgaG9tZUltYWdlLnNyYyA9IHJlc3RhdXJhbnRJbWFnZTtcbiAgaG9tZUltYWdlLmFsdCA9ICdJbWFnZSBvZiByZXN0YXVyYW50IGludGVyaW9yJ1xuICByZXR1cm4gaG9tZUltYWdlO1xufVxuXG5jcmVhdGVIb21lSW1hZ2UoKTtcblxuZnVuY3Rpb24gYnVpbGRIb21lKCkgeyAgXG4gIGJ1aWxkSGVhZGVyKCk7XG4gIGJ1aWxkTWFpbigpO1xuICBob21lQ29udGVudCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhvbWU7IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJCdWlsZGVyJztcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9jb21wb25lbnRzL21haW5CdWlsZGVyJztcbmltcG9ydCBtZW51IGZyb20gJy4vY29tcG9uZW50cy9tZW51T2JqZWN0JztcblxuLy9pbmRpdmlkdWFsIG1lbnUgaXRlbXNcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAvL2NyZWF0aW5nIHRoZSBlbGVtZW50cyBmb3IgZGlzcGxheVxuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vcm93cyB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzXG4gIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3R0b21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy9jcmVhdGUgdGhlIGVsZW1lbnRzXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAvL2FkZCBjbGFzcyB0byBzdHlsZS9mb3JtYXQgaW4gY3NzXG4gIHRvcFJvdy5jbGFzc0xpc3QuYWRkKCd0b3BSb3cnKTtcbiAgLy9zZXQgdGhlIHRleHQgZm9yIGVhY2ggZWxlbWVudFxuICBpdGVtTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XG4gIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgLy9hcHBlbmQgdGhlIGVsZW1lbnRzIHRvIHRoZSByb3dzXG4gIHRvcFJvdy5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gIHRvcFJvdy5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICBib3R0b21Sb3cuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgLy9hcHBlbmQgdGhlIHJvd3MgdG8gdGhlIGl0ZW0gZGl2XG4gIGl0ZW0uYXBwZW5kQ2hpbGQodG9wUm93KTtcbiAgaXRlbS5hcHBlbmRDaGlsZChib3R0b21Sb3cpO1xuICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oc2VjdGlvbk5hbWUsIHNlY3Rpb25TdWJUZXh0LCBtZW51SXRlbXMpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcbiAgc3ViVGV4dC5jbGFzc0xpc3QuYWRkKCdzdWJUZXh0Jyk7XG5cbiAgbmFtZS5pbm5lclRleHQgPSBzZWN0aW9uTmFtZTtcbiAgc3ViVGV4dC5pbm5lclRleHQgPSBzZWN0aW9uU3ViVGV4dDtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChzdWJUZXh0KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtcyk7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pKTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1Cb3gnKSk7XG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBtZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKTtcblxuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudVNlY3Rpb24oXG4gICAgICAnRWdncycsXG4gICAgICBgQWxsIGVnZ3MgYXJlIHNlcnZlZCB3aXRoIGhvbWVmcmllcyBhbmQgeW91ciBjaG9pY2Ugb2YgdG9hc3Qgb3IgaG91c2UgbWFkZSBlbmdsaXNoIG11ZmZpbi5gLFxuICAgICAgbWVudS5lZ2dzLFxuICAgICksXG4gICk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVTZWN0aW9uKFxuICAgICAgYE9tZWxldHRlc2AsXG4gICAgICBgQWxsIG9tZWxldHRlcyBhcmUgc2VydmVkIHdpdGggaG9tZWZyaWVzIGFuZCB5b3VyIGNob2ljZSBvZiB0b2FzdCBvciBob3VzZSBtYWRlIGVuZ2xpc2ggbXVmZmluLmAsXG4gICAgICBtZW51Lm9tbGV0dGVzLFxuICAgICksXG4gICk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVTZWN0aW9uKGBUaGUgc3dlZXRlciBzaWRlYCwgYGAsIG1lbnUuc3dlZXRlclNpZGUpLFxuICApO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbihgU2lkZXNgLCBgYCwgbWVudS5zaWRlcykpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKGBIb3Qgb3IgY29sZCBjZXJlYWxgLCBgYCwgbWVudS5jZXJlYWwpKTtcblxuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgYnVpbGRIZWFkZXIoKTtcbiAgYnVpbGRNYWluKCk7XG4gIG1lbnVDb250ZW50KCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkTWVudSwgY3JlYXRlTWVudUl0ZW0gfTtcblxuLy9pbiBtZW51IGNvbnRlbnQsIGdyYWIgdGhlIG1haW4gY29udGVudCBkaXYgc28gdGhhdCB5b3UgY2FuIGJ1aWxkIHlvdXIgbWVudSBvbiB0b3Agb2YgaXRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbmJ1aWxkSG9tZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=