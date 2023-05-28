const fifthElement = require('../main/fifthElement')

test('should return 16 when given ["Hi", 5, false, "Pasadena", 16]', () =>{
    expect(fifthElement(["Hi", 5, false, "Pasadena", 16])).toBe(16)
})

test('should return 5 when given [1, 2, 3, 4, 5, 6, 7]', () =>{
    expect(fifthElement([1, 2, 3, 4, 5, 6, 7])).toBe(5)
})

test('should return false when given [1, true, "NeanBean", 4, false, 6, true]', () =>{
    expect(fifthElement([1, true, "NeanBean", 4, false, 6, true])).toBe(false)
})