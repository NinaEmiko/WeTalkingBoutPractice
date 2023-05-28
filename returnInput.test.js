const returnInput = require('./returnInput')

test('should return a value given to it', () =>{
    expect(returnInput(17)).toBe(17)
})