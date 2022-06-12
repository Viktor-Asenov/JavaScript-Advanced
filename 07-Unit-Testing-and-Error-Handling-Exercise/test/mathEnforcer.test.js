const { expect } = requre('chai');
const mathEnforcer = require('../mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.addFive('num')).to.be.equal(undefined);
        });

        it('should add correct to the num', () => {
            expect(mathEnforcer.addFive(2)).to.be.equal(7);
        });

        it('should add correct when num is negative', () => {
            expect(mathEnforcer.addFive(-2)).to.be.equal(3);
        });

        it('should add correct when num is float', () => {
            expect(mathEnforcer.addFive(2.222)).to.be.equal(7.777);
        });
    });

    describe('subtractTen', () => {
        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.subtractTen('num')).to.be.equal(undefined);
        });

        it('should subtract correct from num', () => {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });

        it('should subtract correct when num is negative', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
    });

    describe('sum', () => {
        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.sum('num', 1)).to.be.equal(undefined);
        });

        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.sum(1, 'someNum')).to.be.equal(undefined);
        });

        it('should return sum of nums', () => {
            expect(mathEnforcer.sum(2, 1)).to.be.equal(3);
        });

        it('should return sum correct when nums are negative', () => {
            expect(mathEnforcer.sum(-10, -2)).to.be.equal(12);
        });

        it('should return correct sum of floating nums', () => {
            expect(mathEnforcer.sum(2.222, 1.111)).to.be.equal(3.333);
        });
    });
});