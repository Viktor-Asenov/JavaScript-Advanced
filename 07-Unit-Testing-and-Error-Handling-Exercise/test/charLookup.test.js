const { expect } = requre('chai');
const lookupChar = require('../charLookup');

describe('Char index checker', () => {
    it('should return char correctly', () => {
        expect(lookupChar('word', 1)).to.be.equal('o');
    });

    it('should return undefined when first parameter is not string', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
    });

    it('should return undefined when second parameter is not integer', () => {
        expect(lookupChar('someWord', 1.1)).to.be.equal(undefined);
    });

    it('should return incorrect index when index is greater than string length', () => {
        expect(lookupChar('word', 5)).to.be.equal("Incorrect index");
    });

    it('should return incorrect index when index is equal to string length', () => {
        expect(lookupChar('word', 4)).to.be.equal("Incorrect index");
    });

    it('should return incorrect index when index is less than zero', () => {
        expect(lookupChar('word', -1)).to.be.equal("Incorrect index");
    });
});