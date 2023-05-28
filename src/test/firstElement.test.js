const firstElement = require('../main/firstElement')

test('should return "Hi" when given ["Hi", 5, false, "Pasadena", 16]', () =>{
    expect(firstElement(["Hi", 5, false, "Pasadena", 16])).toBe("Hi")
})

test('should return 1 when given [1, 2, 3, 4, 5, 6, 7]', () =>{
    expect(firstElement([1, 2, 3, 4, 5, 6, 7])).toBe(1)
})

test('should return 1 when given [1, true, "NeanBean", 4, false, 6, true]', () =>{
    expect(firstElement([1, true, "NeanBean", 4, false, 6, true])).toBe(1)
})