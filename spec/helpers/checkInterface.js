module.exports = function checkInterface(module, interface) {
  describe("Module Error", () => {
    it("Should should have an interface", () => {
      expect(interface).toBeDefined();
      expect(interface).toEqual(jasmine.any(Object));
    });
    it("Should have its children conform to the interface", () => {
      for (property in module) {
        if (module[property] != interface) {
          Object.keys(interface).forEach((key) => {
            expect(module[property].hasOwnProperty(key)).toBeTruthy();
            expect(typeof interface[key]).toEqual(typeof module[property][key]);
          });
        }
      }
    });
  });
};
