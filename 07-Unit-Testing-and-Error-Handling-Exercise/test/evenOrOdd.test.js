const { expect } = requre('chai');
const isOddOrEven = require('../evenOrOdd');

describe('Even or odd checker', () => {
    it('should return even when string length is even', () => {
        let result = isOddOrEven('someString');

        expect(result).to.be.equal('even');
    });

    it('should return odd when string length is odd', () => {
        let result = isOddOrEven('oddString');

        expect(result).to.be.equal('odd');
    });

    it('should throw undefined when type of input is different', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
})