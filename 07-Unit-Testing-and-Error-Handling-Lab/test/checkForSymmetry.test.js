const isSymmetric = require('../checkForSymmetry');
const { expect } = require('chai');

describe('Symmetry checker', () => {
    it('should return true if array is symmetrical', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return false if array is not symmetrical', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false if input is not array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('should return false if data type is different in symmetrical array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});