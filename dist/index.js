"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chain = _interopRequireDefault(require("./chain"));

//var ChainHash = require("./dist/chain.js");
var chain = new _chain["default"]("test");
console.log(chain.GetKey); //console.log(chain.GetFirst);