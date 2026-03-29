import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject", () => {
  it("should return true for plain objects", () => {
    expect(isObject({})).to.be.true;
    expect(isObject({ a: 1 })).to.be.true;
  });

  it("should return false for null", () => {
    expect(isObject(null)).to.be.false;
  });

  it("should return false for arrays", () => {
    expect(isObject([])).to.be.true;
  });

  it("should return false for primitives", () => {
    expect(isObject(123)).to.be.false;
    expect(isObject("string")).to.be.false;
    expect(isObject(true)).to.be.false;
  });
});
