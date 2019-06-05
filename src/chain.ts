import SHA3 from "sha3";

let KeySize = [224, 256, 384, 512];
export default class ChainHash {
  private chainHash: string[];
  private sha: SHA3 = new SHA3();

  constructor(hashString: string, size: 224 | 256 | 384 | 512 = 512) {
    this.sha = new SHA3(size);
    if (hashString.length != size / 8) hashString = this.makeHash(hashString);
    this.chainHash = [hashString];

    for (var i = 0; i < 5; i++) {
      this.chainHash.push(
        this.makeHash(this.chainHash[this.chainHash.length - 1])
      );
    }
  }

  private makeHash(hash: string): string {
    return this.sha
      .reset()
      .update(hash)
      .digest("hex");
  }

  /**
   * please do not save this value.
   */
  get GetKey(): string {
    return this.chainHash[2];
  }
  /*
   *  save this value and checking validation.
   */
  get GetValidate(): string {
    return this.chainHash[3];
  }
  /*
   * safty show value.
   */
  get GetUniqueString(): string {
    return this.chainHash[4];
  }

  /**
   * check validate  save key value
   * @param {string} saveHash
   * @returns {boolean}
   */
  public isValidate(saveHash: string): boolean {
    return this.GetValidate == saveHash;
  }
}
