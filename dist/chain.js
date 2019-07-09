"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sha = require("sha3");

var KeySize = [224, 256, 384, 512];

var ChainHash =
/*#__PURE__*/
function () {
  function ChainHash(hashString) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 512;
    (0, _classCallCheck2["default"])(this, ChainHash);
    (0, _defineProperty2["default"])(this, "chainHash", void 0);
    (0, _defineProperty2["default"])(this, "subKey", void 0);
    (0, _defineProperty2["default"])(this, "sha", new _sha.SHA3());
    this.sha = new _sha.SHA3(size);
    if (hashString.length != size / 8) hashString = this.makeHash(hashString);
    this.chainHash = [hashString];

    for (var i = 0; i < 5; i++) {
      this.chainHash.push(this.makeHash(this.chainHash[this.chainHash.length - 1]));
    }

    this.subKey = new _sha.Keccak().update(this.chainHash[1]).digest("hex");
  }

  (0, _createClass2["default"])(ChainHash, [{
    key: "makeHash",
    value: function makeHash(hash) {
      return this.sha.reset().update(hash).digest("hex");
    }
    /**
     * please do not save this value.
     */

  }, {
    key: "isValidate",

    /**
     * check validate  save key value
     * @param {string} saveHash
     * @returns {boolean}
     */
    value: function isValidate(saveHash) {
      return this.GetValidate == saveHash;
    }
  }, {
    key: "GetKey",
    get: function get() {
      return this.chainHash[2];
    }
    /*
     *  save this value and checking validation.
     */

  }, {
    key: "GetValidate",
    get: function get() {
      return this.chainHash[3];
    }
    /*
     * safty show value.
     */

  }, {
    key: "GetUnique",
    get: function get() {
      return this.chainHash[4];
    }
  }, {
    key: "SubKey",
    get: function get() {
      return this.subKey;
    }
  }]);
  return ChainHash;
}();

exports["default"] = ChainHash;
module.exports = exports.default;