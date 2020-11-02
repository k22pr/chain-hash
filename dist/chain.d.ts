export default class ChainHash {
    private chainHash;
    private subKey;
    private sha;
    constructor(hashString: string, size?: 224 | 256 | 384 | 512);
    private makeHash;
    /**
     * please do not save this value.
     */
    get GetKey(): string;
    get GetValidate(): string;
    get GetUnique(): string;
    get SubKey(): string;
    /**
     * check validate  save key value
     * @param {string} saveHash
     * @returns {boolean}
     */
    isValidate(saveHash: string): boolean;
}
