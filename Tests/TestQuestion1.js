const chai = window.chai
const expect = chai.expect

describe('returnInput', () => {
    it('should return a value given to it', () => {
        expect(returnInput(17).to.deep.equal(17))
    })
})