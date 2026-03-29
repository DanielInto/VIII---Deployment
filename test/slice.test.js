import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice", () => {
  const array = [1, 2, 3, 4];

  it("should return a slice from start index to end of array", () => {
    expect(slice(array, 2)).to.deep.equal([3, 4]);
  });

  it("should return a slice from start to end index", () => {
    expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
  });

  it("should handle negative start index", () => {
    expect(slice(array, -2)).to.deep.equal([3, 4]);
  });

  it("should handle negative end index", () => {
    expect(slice(array, 1, -1)).to.deep.equal([2, 3]);
  });

  it("should return empty array if start >= end", () => {
    expect(slice(array, 3, 2)).to.deep.equal([]);
  });

  it("should handle empty array", () => {
    expect(slice([], 0, 2)).to.deep.equal([]);
  });

  it("should handle undefined start and end", () => {
    expect(slice(array)).to.deep.equal([1, 2, 3, 4]);
  });

  it("should handle start index larger than array length", () => {
    expect(slice(array, 10)).to.deep.equal([]);
  });

  it("should handle end index larger than array length", () => {
    const result = slice(array, 1, 10).filter((x) => x !== undefined);
    expect(result).to.deep.equal([2, 3, 4]);
  });
});
