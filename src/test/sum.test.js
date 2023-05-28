const sum = require('../main/sum')

test('should return 12 when given 7 and 5 as a parameter', () =>{
    expect(sum(7, 5)).toBe(12)
})

test('should return 20 when given 3 and 17 as a parameter', () =>{
    expect(sum(3, 17)).toBe(20)
})

test('should return 5 when given 10 and -5 as a parameter', () =>{
    expect(sum(10, -5)).toBe(5)
})