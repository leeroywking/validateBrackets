/* test/validateParens.js */

const { validateParens } = require("../validateParens.js");
const expect = require("chai").expect;

describe("#validateParens()", function () {
  context("without arguments", function () {
    it("Should return True by default", function () {
      expect(validateParens("")).to.equal(true);
    });
  });

  context("With Simple string '()' ", function () {
    it("should return true with short valid string", function () {
      expect(validateParens("()")).to.equal(true);
    });

    it("should return false with short invalid string", function () {
      expect(validateParens(")(")).to.equal(false);
    });
  });

  context("with Long strings ", function () {
    it('should return true with long valid string "()()()()()()()()()"', function () {
      expect(validateParens("()()()()()()()()()")).to.equal(true);
    });
    it('should return true with another long valid string "((((((()))))))"', function () {
      expect(validateParens("((((((()))))))")).to.equal(true);
    });
    it('should return false with a long invalid string "(()()()()()()()()()"', function () {
      expect(validateParens("(()()()()()()()()()")).to.equal(false);
    });
    it('should return false with another long invalid string "(((((((()))))))"', function () {
      expect(validateParens("(((((((()))))))")).to.equal(false);
    });
  });
  context("with sneaky string ", function () {
    it('should return true with long sneaky valid string "((()()()(())))"', function () {
      expect(validateParens("((()()()(())))")).to.equal(true);
    });
    it('should return true with another long sneaky valid string "((((((((())))))()()()()((())))))"', function () {
      expect(validateParens("((((((((())))))()()()()((())))))")).to.equal(true);
    });
    it('should return false with a long sneaky invalid string ")))))))((((((("', function () {
      expect(validateParens(")))))))(((((((")).to.equal(false);
    });
    it('should return false with another long sneaky invalid string "()())))))))((((((("', function () {
      expect(validateParens("()())))))))(((((((")).to.equal(false);
    });
  });
});
