import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  const arr = [1, 2, 3, 4, 5];

  it("should split array into chunks of given size", () => {
    expect(chunk(arr, 2)).to.deep.equal([[1, 2], [3, 4], [5]]);
  });

  it("should handle size larger than array length", () => {
    expect(chunk(arr, 10)).to.deep.equal([[1, 2, 3, 4, 5]]);
  });

  it("should handle size 0 or negative", () => {
    expect(chunk(arr, 0)).to.deep.equal([]);
    expect(chunk(arr, -1)).to.deep.equal([]);
  });

  it("should handle empty array", () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });
});
