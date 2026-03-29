import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello world")).to.equal("Hello world");
  });

  it("should leave first letter capitalized if already uppercase", () => {
    expect(capitalize("Hello")).to.equal("Hello");
  });

  it("should handle empty string", () => {
    expect(capitalize("")).to.equal("");
  });
});
