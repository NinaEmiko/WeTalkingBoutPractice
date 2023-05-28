const containsEven = require('../main/containsEven')

test('should return false when given [1, 3, 5]', () =>{
    expect(containsEven([1, 3, 5])).toBe(false)
})

test('should return true when given [2, 4, 6]', () =>{
    expect(containsEven([2, 4, 6])).toBe(true)
})

test('should return false when given an empty array', () =>{
    expect(containsEven([])).toBe(false)
})