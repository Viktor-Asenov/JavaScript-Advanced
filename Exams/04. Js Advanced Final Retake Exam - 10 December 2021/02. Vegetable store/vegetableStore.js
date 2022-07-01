class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    for (let vegetableArgs of vegetables) {
      let vegetableTokens = vegetableArgs.split(" ");
      let vegetableType = vegetableTokens[0];
      let quantity = Number(vegetableTokens[1]);
      let price = Number(vegetableTokens[2]);

      if (!this.availableProducts.some((v) => v.type == vegetableType)) {
        let vegetable = {
          type: vegetableType,
          quantity,
          price,
        };

        this.availableProducts.push(vegetable);
      } else {
        let veggieToUpdate = this.availableProducts.find(
          (v) => v.type == vegetableType
        );
        veggieToUpdate.quantity += quantity;

        if (price > veggieToUpdate.price) {
          veggieToUpdate.price = price;
        }
      }
    }

    return (
      "Successfully added " +
      this.availableProducts
        .map((v) => v.type)
        .join(", ")
        .trim()
    );
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let productArgs of selectedProducts) {
      let productTokens = productArgs.split(" ");
      let type = productTokens[0];
      let quantity = Number(productTokens[1]);

      let product = this.availableProducts.find((v) => v.type == type);
      if (product == undefined) {
        return new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else if (quantity > product.quantity) {
        return new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      let priceForGivenProduct = product.price * quantity;
      product.quantity -= quantity;

      totalPrice += priceForGivenProduct;
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let product = this.availableProducts.find((v) => v.type == type);
    if (product == undefined) {
      return new Error(`${type} is not available in the store.`);
    } else if (quantity > product.quantity) {
      product.quantity = 0;

      return `The entire quantity of the ${type} has been removed.`;
    }

    product.quantity -= quantity;

    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let revision = [];
    revision.push("Available vegetables:");

    const sortedVeggies = this.availableProducts.sort(
      (a, b) => a.price - b.price
    );
    for (let veggie of sortedVeggies) {
      revision.push(`${veggie.type}-${veggie.quantity}-$${veggie.price}`);
    }

    revision.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );

    return revision.join("\n");
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
