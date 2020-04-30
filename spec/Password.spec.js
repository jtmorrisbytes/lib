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
