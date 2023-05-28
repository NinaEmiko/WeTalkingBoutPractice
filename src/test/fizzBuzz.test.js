const fizzBuzz = require('../main/fizzBuzz')

test('should return [1, 2, Fizz, 4, Buzz] when given 5', () =>{
    expect(fizzBuzz(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"])
})

test('should return [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17] when given 17', () =>{
    expect(fizzBuzz(17)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17])
})