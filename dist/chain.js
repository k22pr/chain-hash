"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha3_1 = __importDefault(require("sha3"));
var KeySize = [224, 256, 384, 512];
var ChainHash = /** @class */ (function () {
    function ChainHash(hashString, size) {
        if (size === void 0) { size = 512; }
        this.sha = new sha3_1.default();
        this.sha = new sha3_1.default(size);
        if (hashString.length != size / 8)
            hashString = this.makeHash(hashString);
        this.chainHash = [hashString];
        for (var i = 0; i < 4; i++) {
            this.chainHash.push(this.makeHash(this.chainHash[this.chainHash.length - 1]));
        }
        console.log(this.chainHash);
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
            return this.chainHash[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChainHash.prototype, "GetValidate", {
        /*
         *  save this value and checking validation.
         */
        get: function () {
            return this.chainHash[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChainHash.prototype, "GetUniqueString", {
        /*
         * safty show value.
         */
        get: function () {
            return this.chainHash[3];
        },
        enumerable: true,
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
