/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

contacts = __webpack_require__(1);
console.log(contacts);

// build ul and li in load
function init() {
	var ul = document.createElement('ul');
	ul.setAttribute('class', 'list_contacts');
	contacts.forEach(function (entry) {
		var li = document.createElement('li');
		li.setAttribute('id', entry.id);
		li.setAttribute('type', entry.type);
		li.innerHTML += entry.name;
		if (entry.type == "Group") {
			li.setAttribute('onclick', 'BuildChildren(this)');
			li.setAttribute('class', 'close');
		}
		ul.appendChild(li);
	});
	document.getElementById("ph").appendChild(ul);
}

// get Object
function getObjects(obj, key, val) {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (_typeof(obj[i]) == 'object') {
			objects = objects.concat(getObjects(obj[i], key, val));
		} else if (i == key && obj[key] == val) {
			objects.push(obj);
		}
	}
	return objects;
}

// build children if exists
function BuildChildren(build_children) {
	var obj = getObjects(contacts, 'id', build_children.id); // Returns an array of matching objects
	if (obj[0].type == "Group") {
		if (build_children.getAttribute('class') == "open") {
			var elem = document.getElementsByClassName(build_children.id);
			build_children.parentNode.removeChild(elem[0]);
			build_children.setAttribute('class', 'close');
			return;
		} else {
			build_children.setAttribute('class', 'open');
			var ul = document.createElement('ul');
			ul.setAttribute('class', build_children.id);
			obj[0].contacts.forEach(function (entry2) {
				var li = document.createElement('li');
				li.setAttribute('id', entry2.id);
				if (entry2.type == "Group") {
					li.setAttribute('onclick', 'BuildChildren(this)');
				}
				li.setAttribute('type', entry2.type);
				li.innerHTML += entry2.name;
				ul.appendChild(li);
			});
			var link = document.getElementById(build_children.id);
			link.parentNode.insertBefore(ul, link.nextSibling);
			return;
		}
	}
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contacts = [{
	id: 1,
	name: "Friends",
	type: "Group",
	contacts: [{ id: 2, name: "Udi", type: "Contact" }, { id: 3, name: "Tommy", type: "Contact" }, {
		id: 6,
		name: "Old Friends",
		type: "Group",
		contacts: [{ id: 7, name: "Itay", type: "Contact" }]
	}]
}, {
	id: 4,
	name: "Family",
	type: "Group",
	contacts: [{ id: 5, name: "Roni", type: "Contact" }]
}, { id: 8, name: "Ori", type: "Contact" }];
module.exports = contacts;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map