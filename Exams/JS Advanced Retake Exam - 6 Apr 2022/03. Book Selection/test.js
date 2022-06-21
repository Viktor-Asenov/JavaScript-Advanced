const bookSelection = require("./bookSelection");
const { expect } = require("chai");

describe("Tests", function () {
  describe("isGenreSuitable", function () {
    it("should return it is suitable", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 18)).to.equals(
        "Those books are suitable"
      );
    });

    it("should return it is suitable when genre differs from horror and thriller", function () {
      expect(bookSelection.isGenreSuitable("Comedy", 18)).to.equals(
        "Those books are suitable"
      );
    });

    it("should return it is not suitable when age is lower than 12", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 9)).to.equals(
        `Books with ${genre} genre are not suitable for kids at ${age} age`
      );
    });

    it("should return it is not suitable when age is 12", function () {
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.equals(
        `Books with ${genre} genre are not suitable for kids at ${age} age`
      );
    });
  });

  describe("isItAffordable", function () {
    it("should return book bought when price is lower than budget", function () {
      expect(
        bookSelection
          .isItAffordable(20, 100)
          .to.equals(`Book bought. You have ${result}$ left`)
      );
    });

    it("should return you don't have enough money when budget is lower than price", function () {
      expect(
        bookSelection
          .isItAffordable(100, 20)
          .to.equals("You don't have enough money")
      );
    });

    it("should throw error when price or budget is NaN", function () {
      expect(bookSelection.isItAffordable("string", 20)).to.throw(
        "Invalid input"
      );
      expect(bookSelection.isItAffordable(10, "string")).to.throw(
        "Invalid input"
      );
    });
  });

  describe("suitableTitles", function () {
    it("should throw error when input is not of type array or genre is not string", function () {
      expect(bookSelection.suitableTitles("something", "Horror")).to.throw(
        "Invalid input"
      );
      expect(
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Thriller" }],
          10
        )
      ).to.throw("Invalid input");
    });
  });
});
