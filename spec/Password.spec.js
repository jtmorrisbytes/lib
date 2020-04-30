const PASSWORD = require("../dist/User/Password");

describe("Class Password", () => {
  it("Should be able to be converted into a string", (done) => {
    try {
      let pass = new PASSWORD.Password("abcd");
      console.log(
        "instance of password convertend into string",
        pass.toString()
      );
      console.dir(pass);
      done();
    } catch (e) {
      // console.error(e);
      done(e);
    }
  });
});
