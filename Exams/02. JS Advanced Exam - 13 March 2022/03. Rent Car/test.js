const rentCar = require('./rentCar');
const { expect } = require('chai');

describe("Tests", function() {
    describe("searchCar", function() {
        it("should find the model", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"))
                .to
                .equal(`There is 1 car of model Audi in the catalog!`);
        });

        it("should throw error when shop or model are not valid", function() {
            expect(rentCar.searchCar(4, "Audi"))
                .to
                .throw('Invalid input!');

            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 4))
                .to
                .throw('Invalid input!');
        });

        it("should throw error when model does not exist in shop", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Trabant"))
                .to
                .throw('There are no such models in the catalog!');
        });
     });
     
     describe("calculatePriceOfCar", function() {
        it("should calculate price correct", function() {
            expect(rentCar.calculatePriceOfCar("Audi", 3))
                .to.equal(`You choose Audi and it will cost $108!`);
        });

        it("should throw error when model does not exist in catalog", function() {
            expect(rentCar.calculatePriceOfCar("Fiat", 3))
                .to.throw('No such model in the catalog!');
        });

        it("should throw error when one of the input values is not correct", function() {
            expect(rentCar.calculatePriceOfCar(3, 3))
                .to.throw('Invalid input!');

            expect(rentCar.calculatePriceOfCar('Audi', undefined))
                .to.throw('Invalid input!');

            expect(rentCar.calculatePriceOfCar(undefined, undefined))
                .to.throw('Invalid input!');
        });
     });

     describe("checkBudget", function() {
        it("should return that car was rented when budget is greater than cost", function() {
            expect(rentCar.checkBudget(1, 2, 20))
                .to.equal("You rent a car!");
        });

        it("should return that you need bigger budget when it's lower than cost", function() {
            expect(rentCar.checkBudget(3, 10, 10))
                .to.equal("You need a bigger budget!");
        });

        it("should throw error if any of the parameters is NaN", function() {
            expect(rentCar.checkBudget("something", 10, 10))
                .to.throw("Invalid input!");

            expect(rentCar.checkBudget(3, "something", 10))
                .to.throw("Invalid input!");

            expect(rentCar.checkBudget(3, 10, "something"))
                .to.throw("Invalid input!");

            expect(rentCar.checkBudget("something", "something", "something"))
                .to.throw("Invalid input!");
        });
     });
});