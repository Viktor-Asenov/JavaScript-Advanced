const sum = require('../sumNumbers');
const { expect } = require('chai');

describe('Sum checker', () => {
    it('should return the sum', () => {
        expect(sum([1, 2, 3, 4])).to.be.equal(10);
    });

    it('sum should be zero when array is empty', () => {
        expect(sum([])).to.be.equal(0);
    });
});
