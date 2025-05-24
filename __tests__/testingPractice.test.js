import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../src/testingPractice";

test("should capitalize the first character of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("!hello")).toBe("!hello");
  expect(capitalize("")).toBe("");
  expect(capitalize("h")).toBe("H");
  expect(() => capitalize(123)).toThrow(TypeError);
  expect(() => capitalize(null)).toThrow(TypeError);
  expect(() => capitalize(undefined)).toThrow(TypeError);

});

test("should reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("!hello")).toBe("olleh!");
  expect(reverseString("")).toBe("");
  expect(reverseString("h")).toBe("h");
  expect(() => reverseString(123)).toThrow(TypeError);
  expect(() => reverseString(null)).toThrow(TypeError);
  expect(() => reverseString(undefined)).toThrow(TypeError);
});

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers", () => {
      expect(calculator().add(1, 2)).toBe(3);
      expect(calculator().add(-1, 1)).toBe(0);
      expect(calculator().add(0, 0)).toBe(0);
      expect(calculator().add(1.5, 2.5)).toBe(4);
    });
  });

  describe("subtract", () => {
    test("subtract two numbers", () => {
      expect(calculator().subtract(2, 1)).toBe(1);
      expect(calculator().subtract(1, 2)).toBe(-1);
      expect(calculator().subtract(0, 0)).toBe(0);
      expect(calculator().subtract(2.5, 1.5)).toBe(1);
      expect(calculator().subtract(1.5, 2.5)).toBe(-1);
    });
  });

  describe("multiply", () => {
    test("multiply two numbers", () => {
      expect(calculator().multiply(4, 2)).toBe(8);
      expect(calculator().multiply(-1, 1)).toBe(-1);
      expect(calculator().multiply(0, 5)).toBe(0);
      expect(calculator().multiply(1.5, 2)).toBe(3);
      expect(calculator().multiply(2, 1.5)).toBe(3);
    });
  });

  describe("divide", () => {
    test("divide two numbers", () => {
      expect(calculator().divide(4, 2)).toBe(2);
      expect(calculator().divide(1, 2)).toBe(0.5);
      expect(calculator().divide(0, 5)).toBe(0);
      expect(calculator().divide(1.5, 0.5)).toBe(3);
      expect(() => calculator().divide(1, 0)).toThrow(Error);
      expect(() => calculator().divide(1, "a")).toThrow(TypeError);
    });
  });
});

describe("caesarCipher", () => {
  test("should shift the string by the shift factor", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
    expect(caesarCipher("XYZ", -3)).toBe("UVW");
    expect(caesarCipher("123", 3)).toBe("123");
    expect(caesarCipher("!@#", 3)).toBe("!@#");
    expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!");
    
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
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
    expect(analyzeArray([])).toEqual({});
    expect(() => analyzeArray("not an array")).toThrow(TypeError);
  });
});
