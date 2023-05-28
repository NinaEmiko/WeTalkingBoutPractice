const returnInput = require('./returnInput')

test('should return 17 when given 17 as a parameter', () =>{
    expect(returnInput(17)).toBe(17)
})

test('should return "Happy" when given "Happy" as a parameter', () =>{
    expect(returnInput("Happy")).toBe("Happy")
})

test('should return true when given true as a parameter', () =>{
    expect(returnInput(true)).toBe(true)
})