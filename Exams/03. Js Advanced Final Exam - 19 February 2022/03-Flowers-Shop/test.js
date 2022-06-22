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
      expect(flowerShop.calcPriceOfFlowers(undefined, 3, 5)).to.throw(
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

      expect(flowerShop.calcPriceOfFlowers(false, "", "")).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("checkFlowersAvailable", function () {
    it("TODO …", function () {});
  });

  describe("sellFlowers", function () {
    it("TODO …", function () {});
  });
});
