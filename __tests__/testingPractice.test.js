import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../src/testingPractice";

test("should capitalize the first character of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("should reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers", () => {
      expect(calculator().add(1, 2)).toBe(3);
    });
  });

  describe("subtract", () => {
    test("subtract two numbers", () => {
      expect(calculator().subtract(2, 1)).toBe(1);
    });
  });

  describe("multiply", () => {
    test("multiply two numbers", () => {
      expect(calculator().multiply(4, 2)).toBe(8);
    });
  });

  describe("divide", () => {
    test("divide two numbers", () => {
      expect(calculator().divide(4, 2)).toBe(2);
    });
  });
});

describe("caesarCipher", () => {
  test("should shift the string by the shift factor", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});

describe("analyzeArray", () => {
  test("should return an object with the values average, min, max and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
