const PASSWORD = require("../dist/User/Password");
const sha1 = require("sha1");
describe("Class Password", () => {
  it("Should set itself to an empty string when its constructor recieves undefined or null", (done) => {
    try {
      pass = new PASSWORD.Password(undefined);
      pass = new PASSWORD.Password(null);
      done();
    } catch (e) {
      fail("Password should be able to recieve undefined without throwing");
      done(e);
    }
  });
  it("Should be able to be added to another string using the + operator", (done) => {
    try {
      let passStr = "a new password";
      let addStr = " end of password";
      pass = new PASSWORD.Password(passStr);
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
      let buf = Buffer.from(new PASSWORD.Password("abcd"));
      console.log(buf);
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
      let buf = Buffer.from(new PASSWORD.Password("efgh").value);
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
      pass = new PASSWORD.Password("abcd");
      expect(pass.toString()).toEqual(jasmine.any(String));
      pass = new PASSWORD.Password(undefined);
      expect(pass.toString()).toEqual(jasmine.any(String));
      done();
    } catch (e) {
      // console.error(e);
      done(e);
    }
  });
  it("Should be able to be converted into a sha1 hash without throwing", (done) => {
    try {
      pass = new PASSWORD.Password("ABCD");
      sha1Hash = sha1(pass);
      done();
    } catch (e) {
      done(e);
    }
  });
});
