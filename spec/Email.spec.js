const EMAIL = require("../src/Email");
describe("Email", () => {
  let goodEmail = "abc@gmail.com";
  let badEmail = "warble";
  it("Should be able to be created without crashing", () => {
    try {
      email = EMAIL.Email("jthecybertinkerer@gmail.com");
      expect(email).toBeDefined();
    } catch (e) {
      fail("Creating Email threw");
    }
  });
  it("Should have boolean property isValid", () => {
    email = EMAIL.Email(goodEmail);
    expect(email.hasOwnProperty("isValid")).toBeTruthy();
    expect(email.isValid).toEqual(jasmine.any(Boolean));
  });
  it("Should correctly validate the email", () => {
    valid = EMAIL.Email(goodEmail);
    invalid = EMAIL.Email(badEmail);
    number = EMAIL.Email(3);
    expect(valid.isValid).toBeTrue();
    expect(invalid.isValid).toBeFalse();
    expect(number.isValid).toBeFalse();
  });
  it("Should be able to be converted into a string without crashing", () => {
    try {
      EMAIL.Email(goodEmail).toString();
    } catch (e) {
      fail("converting an email into a string threw");
    }
  });
  it("Should call valueOf without crashing", () => {
    try {
      EMAIL.Email(goodEmail).toString();
    } catch (e) {
      fail("converting an email into a string threw");
    }
  });
});
