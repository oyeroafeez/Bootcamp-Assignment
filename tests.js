var fizzBuzz = require('../fizzBuzz.js');

describe("FizzBuzz", function() {
it("should return 'Fizz' for number divisible by 3", function() {
    expect(fizzBuzz.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return 'Buzz' for number divisible by 5", function() {
    expect(fizzBuzz.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return 'FizzBuzz' for 15", function() {
    expect(fizzBuzz.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return 'FizzBuzz' for 45", function() {
    expect(fizzBuzz.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return 'FizzBuzz' for 90", function() {
    expect(fizzBuzz.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return 'Fizz' for 63", function() {
    expect(fizzBuzz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 'FizzBuzz' for 93", function() {
    expect(fizzBuzz.fizzBuzz(93)).toBe('Fizz');
  });
  })