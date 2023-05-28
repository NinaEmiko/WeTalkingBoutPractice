const areaOfSquare = require('../main/areaOfSquare')

test('should return 25 * 25', () =>{
    expect(areaOfSquare(25)).toBe(625)
})

test('should return 25 when given 5', () =>{
    expect(areaOfSquare(5)).toBe(25)
})