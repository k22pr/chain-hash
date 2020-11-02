"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha3_1 = require("sha3");
var KeySize = [224, 256, 384, 512];
var ChainHash = /** @class */ (function () {
    function ChainHash(hashString, size) {
        if (size === void 0) { size = 512; }
        this.sha = new sha3_1.SHA3();
        this.sha = new sha3_1.SHA3(size);
        if (hashString.length != size / 8)
            hashString = this.makeHash(hashString);
        this.chainHash = [hashString];
        for (var i = 0; i < 5; i++) {
            this.chainHash.push(this.makeHash(this.chainHash[this.chainHash.length - 1]));
        }
        this.subKey = new sha3_1.Keccak().update(this.chainHash[1]).digest("hex");
    }
    ChainHash.prototype.makeHash = function (hash) {
        return this.sha
            .reset()
            .update(hash)
            .digest("hex");
    };
    Object.defineProperty(ChainHash.prototype, "GetKey", {
        /**
         * please do not save this value.
         */
        get: function () {
            return this.chainHash[2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChainHash.prototype, "GetValidate", {
        /*
         *  save this value and checking validation.
         */
        get: function () {
            return this.chainHash[3];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChainHash.prototype, "GetUnique", {
        /*
         * safty show value.
         */
        get: function () {
            return this.chainHash[4];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChainHash.prototype, "SubKey", {
        get: function () {
            return this.subKey;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * check validate  save key value
     * @param {string} saveHash
     * @returns {boolean}
     */
    ChainHash.prototype.isValidate = function (saveHash) {
        return this.GetValidate == saveHash;
    };
    return ChainHash;
}());
exports.default = ChainHash;
