export default class ChainHash {
    private chainHash;
    private sha;
    constructor(hashString: string, size?: 224 | 256 | 384 | 512);
    private makeHash;
    /**
     * please do not save this value.
     */
    readonly GetKey: string;
    readonly GetValidate: string;
    readonly GetUniqueString: string;
    /**
     * check validate  save key value
     * @param {string} saveHash
     * @returns {boolean}
     */
    isValidate(saveHash: string): boolean;
}
