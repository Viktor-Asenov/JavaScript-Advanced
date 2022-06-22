class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model == "" || horsepower <= 0 || price <= 0 || mileage <= 0) {
      throw new Error("Invalid input!");
    }

    const newCar = { model, horsepower, price, mileage };

    this.availableCars.push(newCar);

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const carForSale = this.availableCars.find((c) => c.model == model);
    if (carForSale == undefined) {
      throw new Error(`${model} was not found!`);
    }

    if (carForSale.mileage <= desiredMileage) {
      carForSale.price;
    } else if (carForSale.mileage - desiredMileage <= 40000) {
      carForSale.price -= carForSale.price * 0.05;
    } else {
      carForSale.price -= carForSale.price * 0.1;
    }

    const indexOfCarForSale = this.availableCars.indexOf(carForSale);
    this.availableCars.splice(indexOfCarForSale, 1);

    const soldCar = {
      model: carForSale.model,
      horsepower: carForSale.horsepower,
      soldPrice: carForSale.price,
    };

    this.soldCars.push(soldCar);
    this.totalIncome += soldCar.soldPrice;

    return `${soldCar.model} was sold for ${soldCar.soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    }

    let availableCarsForSale = [];
    availableCarsForSale.push("-Available cars:");

    for (let car of this.availableCars) {
      availableCarsForSale.push(
        `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
          2
        )} km - ${car.price.toFixed(2)}$`
      );
    }

    return availableCarsForSale.join("\n");
  }

  salesReport(criteria) {
    if (criteria != "horsepower" && criteria != "model") {
      return "Invalid criteria!";
    }

    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    let soldCarsReport = [];
    soldCarsReport.push(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    soldCarsReport.push(`-${this.soldCars.length} cars sold:`);

    for (let car of this.soldCars) {
      soldCarsReport.push(
        `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`
      );
    }

    return soldCarsReport.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
