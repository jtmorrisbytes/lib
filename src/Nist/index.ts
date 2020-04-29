export namespace NIST {
  export class ENist {
    readonly MESSAGE: string =
      "That password is not allowed as it has been compromised elsewhere";
    readonly REASON: string = "PASSWORD_COMPROMISED";
  }

  export class NIST {
    readonly URL: string = "https://api.badpasswordcheck.com/check/";
    readonly INFOLINK: string = "https://pages.nist.gov/800-63-3/";
  }
}
