import { expect } from "chai";
import isSymbol from "../src/isSymbol.js";

describe("isSymbol", () => {
  it("should return true for symbols", () => {
    expect(isSymbol(Symbol())).to.be.true;
    expect(isSymbol(Symbol("foo"))).to.be.true;
  });

  it("should return false for strings, numbers, objects, null, undefined", () => {
    expect(isSymbol("string")).to.be.false;
    expect(isSymbol(123)).to.be.false;
    expect(isSymbol({})).to.be.false;
    expect(isSymbol([])).to.be.false;
    expect(isSymbol(null)).to.be.false;
    expect(isSymbol(undefined)).to.be.false;
  });
});
