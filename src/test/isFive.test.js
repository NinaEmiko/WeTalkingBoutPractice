const isFive = require('../main/isFive')

test('should return true when given 5', () =>{
    expect(isFive(5)).toBe(true)
})

test('should return false when given 8', () =>{
    expect(isFive(8)).toBe(false)
})

test('should return false when given a string', () =>{
    expect(isFive("Happy")).toBe(false)
})