const PASSWORD = require("../src/Password");
const sha1 = require("sha1");
describe("Class Password", () => {
  it("Should set itself to an empty string when its constructor recieves undefined or null", (done) => {
    try {
      pass = PASSWORD.Password(undefined);
      pass = PASSWORD.Password(null);
      done();
    } catch (e) {
      fail("Password should be able to recieve undefined without throwing");
      done(e);
    }
  });
  it("Should be able to be added to another string using the + operator", (done) => {
    try {
      let passStr = "a password";
      let addStr = " end of password";
      pass = PASSWORD.Password(passStr);
      let newString = pass + addStr;
      expect(newString).toEqual(passStr + addStr);

      //explicitly call pass.valueOf()
      expect(pass.valueOf()).toBeDefined();
      // explicitly use the +expr;
      expect(+pass).toBeDefined();
      done();
    } catch (e) {
      fail("Password.valueof() should now throw");
      done(e);
    }
  });
  it("Should be able to be converted into a buffer", (done) => {
    try {
      let buf = Buffer.from(PASSWORD.Password("abcd"));
      done();
    } catch (e) {
      fail(
        "Password should be able to converted into a buffer without throwing"
      );
      done(e);
    }
  });
  it("Should be able to have its value property converted into a buffer", (done) => {
    try {
      let buf = Buffer.from(PASSWORD.Password("efgh").value);
      done();
    } catch (e) {
      fail(
        "Password should be able to converted into a buffer without throwing"
      );
      done(e);
    }
  });
  it("Should be able to be converted into a string", (done) => {
    try {
      pass = PASSWORD.Password("abcd");
      expect(pass.toString()).toEqual(jasmine.any(String));
      pass = PASSWORD.Password(undefined);
      expect(pass.toString()).toEqual(jasmine.any(String));
      done();
    } catch (e) {
      // console.error(e);
      done(e);
    }
  });
  it("Should be able to be converted into a sha1 hash without throwing", (done) => {
    try {
      pass = PASSWORD.Password("ABCD");
      sha1Hash = sha1(pass);
      done();
    } catch (e) {
      done(e);
    }
  });
  it("Should be able to be converted into a base64 string from a buffer", (done) => {
    try {
      hash = Buffer.from(PASSWORD.Password("abcd")).toString("base64");
      done();
    } catch (e) {
      fail("converting class password to base64 should not throw");
      done(e);
    }
  });
  it("Should correctly validate the password", () => {
    tooShort = PASSWORD.Password("abcd");
    tooLong = PASSWORD.Password(
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcda"
    );
    valid = PASSWORD.Password(";|M3<jhQ(~dE");
    expect(tooShort.isValid).toBeFalse();
    expect(tooLong.isValid).toBeFalse();
    expect(valid.isValid).toBeTrue();
    expect(PASSWORD.Password("@d3!,EQ;+G68;E").isValid).toBeTrue();
    // you should be able to change an invalid password to a valid password
    tooShort.value = ";|M3<jhQ(~dE";
    expect(tooShort.isValid).toBeTrue();
  });
});
