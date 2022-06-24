const flowerShop = require("./flowerShop");
const { expect } = require("chai");

describe("Tests", function () {
  describe("calcPriceOfFlowers", function () {
    it("should calculate needed sum correct", function () {
      expect(flowerShop.calcPriceOfFlowers("Tulip", 3, 5)).to.equal(
        "You need $15.00 to buy Tulip!"
      );
    });

    it("should should throw error if any or all params are not correct", function () {
      expect(flowerShop.calcPriceOfFlowers(false, 3, 5)).to.throw(
        "Invalid input!"
      );

      expect(flowerShop.calcPriceOfFlowers("Tulip", undefined, 5)).to.throw(
        "Invalid input!"
      );

      expect(flowerShop.calcPriceOfFlowers("Tulip", 3, undefined)).to.throw(
        "Invalid input!"
      );

      expect(
        flowerShop.calcPriceOfFlowers(undefined, undefined, undefined)
      ).to.throw("Invalid input!");

      expect(flowerShop.calcPriceOfFlowers(false, false, false)).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("checkFlowersAvailable", function () {
    it("should return that flower is available", function () {
        expect(flowerShop.checkFlowersAvailable('Tulips', ['Mint', 'Tulips']))
        .to.equal(`The Tulips are available!`);
    });

    it("should return that flower is sold", function () {
        expect(flowerShop.checkFlowersAvailable('Tulips', ['Mint', 'Rose']))
        .to.equal(`The Tulips are sold! You need to purchase more!`);
    });
  });

  describe("sellFlowers", function () {
    it("should return shop correctly", function () {
        expect(flowerShop.sellFlowers(['Mint', 'Rose', 'Tulip'], 2))
        .to.equal('Mint / Rose');
    });

    it("should throw error if any of the params is incorrect", () => {
        expect(flowerShop('', 3)).to.equal('Invalid input!');

        expect(flowerShop(['Mint', 'Rose'], NaN)).to.equal('Invalid input!');

        expect(flowerShop(['Mint', 'Rose'], -3)).to.equal('Invalid input!');

        expect(flowerShop(['Mint', 'Rose'], 4)).to.equal('Invalid input!');

        expect(flowerShop(['Mint', 'Rose'], 2)).to.equal('Invalid input!');
    })
  });
});
