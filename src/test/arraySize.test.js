const arraySize = require('../main/arraySize')

test('should return 0 when given []', () =>{
    expect(arraySize([])).toBe(0)
})

test('should return 3 when given [1, 2, 3]', () =>{
    expect(arraySize([1, 2, 3])).toBe(3)
})

test('should return 7 when given [1, 2, 3, 4, 5, 6, 7]', () =>{
    expect(arraySize([1, 2, 3, 4, 5, 6, 7])).toBe(7)
})