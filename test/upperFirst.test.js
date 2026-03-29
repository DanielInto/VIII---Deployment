import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
  it("should capitalize the first letter of a lowercase string", () => {
    expect(upperFirst("fred")).to.equal("Fred");
  });

  it("should leave the first letter capitalized if already uppercase", () => {
    expect(upperFirst("Fred")).to.equal("Fred");
  });

  it("should handle an empty string", () => {
    expect(upperFirst("")).to.equal("");
  });

  it("should not change the rest of the string", () => {
    expect(upperFirst("fRED")).to.equal("FRED");
  });

  it("should handle single character strings", () => {
    expect(upperFirst("a")).to.equal("A");
  });
});
