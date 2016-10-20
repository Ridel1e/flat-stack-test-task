/******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	var _applicationController = __webpack_require__(1);

	var _applicationController2 = _interopRequireDefault(_applicationController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_applicationController2.default); /**
	                                               * Created by ridel1e on 20/10/2016.
	                                               */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(2);

	var _core2 = _interopRequireDefault(_core);

	var _dom = __webpack_require__(5);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by ridel1e on 20/10/2016.
	 */

	(0, _dom2.default)(_core2.default);

	exports.default = _core2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sandbox = __webpack_require__(3);

	var _sandbox2 = _interopRequireDefault(_sandbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {

	  var moduleData = {};

	  return {
	    extend: extend,
	    register: register,
	    start: start,
	    startAll: startAll,
	    stop: stop,
	    stopAll: stopAll
	  };

	  /**
	   * Extends application controller
	   * @param name
	   * @param extension
	   */
	  function extend(name, extension) {
	    if (typeof name === 'string' && extension instanceof Object) {
	      this[name] = extension;
	    } else {}
	  }

	  /**
	   * Register module in application controller
	   * @param moduleName
	   * @param creator
	   */
	  function register(moduleName, creator) {
	    if (typeof moduleName === 'string' && creator instanceof Function) {
	      moduleData[moduleName] = {
	        creator: creator,
	        instance: null
	      };
	    } else {}
	  }

	  /**
	   * Start concrete module
	   * @param moduleName
	   */
	  function start(moduleName) {
	    if (typeof moduleName === 'string') {
	      moduleData[moduleName].instance = moduleData[moduleName].creator(new _sandbox2.default(this, moduleName));

	      try {
	        moduleData[moduleName].instance.init();
	      } catch (e) {}
	    } else {}
	  }

	  /**
	   * Start all modules
	   */
	  function startAll() {
	    var _this = this;

	    Object.keys(moduleData).forEach(function (moduleName) {
	      return _this.start(moduleName);
	    });
	  }

	  /**
	   * Stop concrete module
	   * @param moduleName
	   */
	  function stop(moduleName) {
	    if (typeof moduleName === 'string') {

	      try {
	        moduleData[moduleName].instance.destroy();
	        moduleData[moduleName].instance = null;
	      } catch (e) {}
	    } else {}
	  }

	  /**
	   * Stop all modules
	   */
	  function stopAll() {
	    var _this2 = this;

	    Object.keys(moduleData).forEach(function (moduleName) {
	      return _this2.stop(moduleName);
	    });
	  }
	}(); /**
	      * Created by ridel1e on 20/10/2016.
	      */

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sandbox = __webpack_require__(4);

	var _sandbox2 = _interopRequireDefault(_sandbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _sandbox2.default; /**
	                                      * Created by ridel1e on 20/10/2016.
	                                      */

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by ridel1e on 20/10/2016.
	 */

	var Sandbox = function () {
	  /**
	   * Sandbox object constructor
	   * @param ApplicationController
	   * @param moduleName
	   */
	  function Sandbox(ApplicationController, moduleName) {
	    _classCallCheck(this, Sandbox);

	    this.ApplicationController = ApplicationController;
	    this.container = document.querySelector("#" + moduleName);
	  }

	  /**
	   * Initialize container template
	   * @param template
	   */


	  _createClass(Sandbox, [{
	    key: "initializeTemplate",
	    value: function initializeTemplate(template) {
	      this.container.innerHTML = template;
	    }
	  }]);

	  return Sandbox;
	}();

		exports.default = Sandbox;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by ridel1e on 20/10/2016.
	 */

	var EXTENSION_NAME = 'dom';

	var extension = function () {
	  return {
	    findOne: findOne
	  };

	  function findOne() {}
	}();

	exports.default = function (ApplicationController) {
	  return ApplicationController.extend(EXTENSION_NAME, extension);
		};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGIyNjNjZGZlYzg4MGMxZmFhNThhIiwid2VicGFjazovLy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb3JlL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb3JlL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXIvY29yZS5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9hcHAvY29yZS9zYW5kYm94L2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvY29yZS9zYW5kYm94L3NhbmRib3guanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb3JlL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXIvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjI2M2NkZmVjODgwYzFmYWE1OGFcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAyMC8xMC8yMDE2LlxuICovXG5cbmltcG9ydCBBcHBsaWNhdGlvbkNvbnRyb2xsZXIgZnJvbSAnY29yZS9hcHBsaWNhdGlvbi1jb250cm9sbGVyJztcblxuY29uc29sZS5sb2coQXBwbGljYXRpb25Db250cm9sbGVyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAyMC8xMC8yMDE2LlxuICovXG5cbmltcG9ydCBDb3JlIGZyb20gJy4vY29yZSc7XG5cbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuZG9tKENvcmUpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2NvcmUvYXBwbGljYXRpb24tY29udHJvbGxlci9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDIwLzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0IFNhbmRib3ggZnJvbSAnY29yZS9zYW5kYm94JztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuICB2YXIgbW9kdWxlRGF0YSA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZXh0ZW5kLFxuICAgIHJlZ2lzdGVyLFxuICAgIHN0YXJ0LFxuICAgIHN0YXJ0QWxsLFxuICAgIHN0b3AsXG4gICAgc3RvcEFsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmRzIGFwcGxpY2F0aW9uIGNvbnRyb2xsZXJcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGV4dGVuc2lvblxuICAgKi9cbiAgZnVuY3Rpb24gZXh0ZW5kKG5hbWUsIGV4dGVuc2lvbikge1xuICAgIGlmKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBleHRlbnNpb24gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSBleHRlbnNpb247XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG1vZHVsZSBpbiBhcHBsaWNhdGlvbiBjb250cm9sbGVyXG4gICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAqIEBwYXJhbSBjcmVhdG9yXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3Rlcihtb2R1bGVOYW1lLCBjcmVhdG9yKSB7XG4gICAgaWYodHlwZW9mIG1vZHVsZU5hbWUgPT09ICdzdHJpbmcnICYmIGNyZWF0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgbW9kdWxlRGF0YVttb2R1bGVOYW1lXSA9IHtcbiAgICAgICAgY3JlYXRvcjogY3JlYXRvcixcbiAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgY29uY3JldGUgbW9kdWxlXG4gICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBzdGFydChtb2R1bGVOYW1lKSB7XG4gICAgaWYodHlwZW9mIG1vZHVsZU5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVEYXRhW21vZHVsZU5hbWVdLmluc3RhbmNlID1cbiAgICAgICAgbW9kdWxlRGF0YVttb2R1bGVOYW1lXS5jcmVhdG9yKG5ldyBTYW5kYm94KHRoaXMsIG1vZHVsZU5hbWUpKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgbW9kdWxlRGF0YVttb2R1bGVOYW1lXS5pbnN0YW5jZS5pbml0KCk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGFsbCBtb2R1bGVzXG4gICAqL1xuICBmdW5jdGlvbiBzdGFydEFsbCgpIHtcbiAgICBPYmplY3Qua2V5cyhtb2R1bGVEYXRhKS5mb3JFYWNoKChtb2R1bGVOYW1lKSA9PiB0aGlzLnN0YXJ0KG1vZHVsZU5hbWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGNvbmNyZXRlIG1vZHVsZVxuICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gc3RvcChtb2R1bGVOYW1lKSB7XG4gICAgaWYodHlwZW9mIG1vZHVsZU5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIG1vZHVsZURhdGFbbW9kdWxlTmFtZV0uaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBtb2R1bGVEYXRhW21vZHVsZU5hbWVdLmluc3RhbmNlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBhbGwgbW9kdWxlc1xuICAgKi9cbiAgZnVuY3Rpb24gc3RvcEFsbCgpIHtcbiAgICBPYmplY3Qua2V5cyhtb2R1bGVEYXRhKS5mb3JFYWNoKChtb2R1bGVOYW1lKSA9PiB0aGlzLnN0b3AobW9kdWxlTmFtZSkpO1xuICB9XG59KSgpO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9jb3JlL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXIvY29yZS5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDIwLzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0IFNhbmRib3ggZnJvbSAnLi9zYW5kYm94JztcblxuZXhwb3J0IGRlZmF1bHQgU2FuZGJveDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29yZS9zYW5kYm94L2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMjAvMTAvMjAxNi5cbiAqL1xuXG5jbGFzcyBTYW5kYm94IHtcbiAgLyoqXG4gICAqIFNhbmRib3ggb2JqZWN0IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiAgICogQHBhcmFtIG1vZHVsZU5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKEFwcGxpY2F0aW9uQ29udHJvbGxlciwgbW9kdWxlTmFtZSkge1xuICAgIHRoaXMuQXBwbGljYXRpb25Db250cm9sbGVyID0gQXBwbGljYXRpb25Db250cm9sbGVyO1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kdWxlTmFtZX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbnRhaW5lciB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0gdGVtcGxhdGVcbiAgICovXG4gIGluaXRpYWxpemVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhbmRib3g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2NvcmUvc2FuZGJveC9zYW5kYm94LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMjAvMTAvMjAxNi5cbiAqL1xuXG5jb25zdCBFWFRFTlNJT05fTkFNRSA9ICdkb20nO1xuXG5jb25zdCBleHRlbnNpb24gPSAoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbmRPbmVcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGZpbmRPbmUoKSB7XG4gICAgXG4gIH1cbiAgXG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChBcHBsaWNhdGlvbkNvbnRyb2xsZXIpID0+IFxuICBBcHBsaWNhdGlvbkNvbnRyb2xsZXIuZXh0ZW5kKEVYVEVOU0lPTl9OQU1FLCBleHRlbnNpb24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9jb3JlL2FwcGxpY2F0aW9uLWNvbnRyb2xsZXIvZG9tLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQVBBOzs7O0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7Ozs7O0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUE7QUFDQTs7Ozs7QUFLQTtBRkFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FHeEJBOzs7O0FBSUE7QUFDQTtBQUNBO0FIQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=