/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/headerBuilder.js":
/*!*****************************************!*\
  !*** ./src/components/headerBuilder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTitle() {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Poolside Restaurant';
  return title;
}

function createNavLink(title, link) {
  const navLink = document.createElement('a');
  const textNode = document.createTextNode(`${title}`);
  navLink.href = link;
  navLink.appendChild(textNode);
  return navLink;
}

function createNavBar() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.appendChild(createNavLink('home'));
  nav.appendChild(createNavLink('menu'));
  nav.appendChild(createNavLink('contact'));
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
    const main = document.createElement('div');
    main.classList.add('mainContent');
    content.appendChild(main);
    return main;
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMain);

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



function homeContent() {
  const mainContent = document.querySelector('.mainContent');
  mainContent.appendChild(createWelcomeText());
}

function createWelcomeText() {
  const welcomeTextBox = document.createElement('div');

  const heading = document.createElement('h2');
  const headingSubText = document.createElement('p');

  welcomeTextBox.classList.add('welcomeTextBox');
  heading.classList.add('mainHeading');
  headingSubText.classList.add('headingSubText');

  heading.textContent = 'Welcome to the Poolside Restaurant';
  headingSubText.textContent = 'at the Town Crier Motel';

  welcomeTextBox.appendChild(heading);
  welcomeTextBox.appendChild(headingSubText);

  return welcomeTextBox;
}



function buildHome() {
  (0,_components_headerBuilder__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_mainBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])();
  homeContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSMkI7QUFDSjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0EsRUFBRSxxRUFBVztBQUNiLEVBQUUsbUVBQVM7QUFDWDtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQ25DekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIsaURBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9oZWFkZXJCdWlsZGVyLmpzIiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9tYWluQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb29sc2lkZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9vbHNpZGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bvb2xzaWRlLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnUG9vbHNpZGUgUmVzdGF1cmFudCc7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2TGluayh0aXRsZSwgbGluaykge1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfWApO1xuICBuYXZMaW5rLmhyZWYgPSBsaW5rO1xuICBuYXZMaW5rLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgcmV0dXJuIG5hdkxpbms7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkxpbmsoJ2hvbWUnKSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVOYXZMaW5rKCdtZW51JykpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2TGluaygnY29udGFjdCcpKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhlYWRlcjtcbiIsImZ1bmN0aW9uIGJ1aWxkTWFpbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBidWlsZE1haW47IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJCdWlsZGVyJztcbmltcG9ydCBidWlsZE1haW4gZnJvbSAnLi9jb21wb25lbnRzL21haW5CdWlsZGVyJztcblxuZnVuY3Rpb24gaG9tZUNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250ZW50Jyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWVUZXh0KCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lVGV4dCgpIHtcbiAgY29uc3Qgd2VsY29tZVRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgaGVhZGluZ1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgd2VsY29tZVRleHRCb3guY2xhc3NMaXN0LmFkZCgnd2VsY29tZVRleHRCb3gnKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtYWluSGVhZGluZycpO1xuICBoZWFkaW5nU3ViVGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nU3ViVGV4dCcpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgUG9vbHNpZGUgUmVzdGF1cmFudCc7XG4gIGhlYWRpbmdTdWJUZXh0LnRleHRDb250ZW50ID0gJ2F0IHRoZSBUb3duIENyaWVyIE1vdGVsJztcblxuICB3ZWxjb21lVGV4dEJveC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgd2VsY29tZVRleHRCb3guYXBwZW5kQ2hpbGQoaGVhZGluZ1N1YlRleHQpO1xuXG4gIHJldHVybiB3ZWxjb21lVGV4dEJveDtcbn1cblxuXG5cbmZ1bmN0aW9uIGJ1aWxkSG9tZSgpIHtcbiAgYnVpbGRIZWFkZXIoKTtcbiAgYnVpbGRNYWluKCk7XG4gIGhvbWVDb250ZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSG9tZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tICcuL2hvbWUnXG5cbmJ1aWxkSG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==