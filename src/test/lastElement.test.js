const lastElement = require('../main/lastElement')

test('should return 16 when given ["Hi", 5, false, "Pasadena", 16]', () =>{
    expect(lastElement(["Hi", 5, false, "Pasadena", 16])).toBe(16)
})

test('should return 7 when given [1, 2, 3, 4, 5, 6, 7]', () =>{
    expect(lastElement([1, 2, 3, 4, 5, 6, 7])).toBe(7)
})

test('should return true when given [1, true, "NeanBean", 4, false, 6, true]', () =>{
    expect(lastElement([1, true, "NeanBean", 4, false, 6, true])).toBe(true)
})