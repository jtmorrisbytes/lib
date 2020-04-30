const NAME = require("../dist/Name");
describe("Class Name", () => {
  it("Should exist on namespace NAME", () => {
    expect(NAME.Name).toBeDefined("Namespace NAME must have class Name");
  });
  it("Should be able to recieve undefined in the constructor without crashing ", (done) => {
    try {
      let name = new NAME.Name(undefined);
      done();
    } catch (e) {
      fail(e);
    }
  });
  it("should be able to recieve null in the constructor without crashing", (done) => {
    try {
      let name = new NAME.Name(null);
      done();
    } catch (e) {
      fail(e);
    }
  });
  it("should should set its value to an empty string when explicity set to null", (done) => {
    let name = new NAME.Name("");
    name.value = null;
    if (name.value === null) {
      fail("Name should set its value to an empty string when set to null");
    } else done();
  });
  it("should set its value to an empty string when explicitly set to undefined", (done) => {
    let name = new NAME.Name("");
    name.value = undefined;
    if (name.value === undefined) {
      fail(
        "Name should set its value to an empty string when set to undefined"
      );
    } else done();
  });
  it("should have a function called validate", (done) => {
    let name = new NAME.Name("");
    expect(name.validate).toBeDefined();
    expect(name.validate).toBeInstanceOf(Function);
    done();
  });

  it("should have function validate return false when given a number", () => {
    let name = new NAME.Name("");
    for (let i = -1; i <= 2; i++) {
      expect(name.validate(i)).toBeFalse();
    }
  });

  it("should be able to call validate without throwing", () => {
    let name = new NAME.Name("");

    try {
      name.validate("");
      name.validate(undefined);
      name.validate(null);
      name.validate(-1);
      name.validate(1);
    } catch (e) {
      fail("calling validate on name should not throw");
    }
  });
});
