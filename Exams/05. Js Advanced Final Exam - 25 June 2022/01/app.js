window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("form")
    .addEventListener("click", (ev) => ev.preventDefault());

  let makeEl = document.getElementById("make");
  let modelEl = document.getElementById("model");
  let yearEl = document.getElementById("year");
  let fuelEl = document.getElementById("fuel");
  let originalCostEl = document.getElementById("original-cost");
  let sellingPriceEl = document.getElementById("selling-price");

  let publishButton = document.getElementById("publish");
  publishButton.addEventListener("click", addCarToTable);

  function addCarToTable() {
    if (
      isValid(
        makeEl.value,
        modelEl.value,
        yearEl.value,
        fuelEl.value,
        originalCostEl.value,
        sellingPriceEl.value
      ) === false
    ) {
      return;
    }

    let trElement = document.createElement("tr");
    trElement.className = "row";

    let makeTd = document.createElement("td");
    makeTd.textContent = makeEl.value;

    let modelTd = document.createElement("td");
    modelTd.textContent = modelEl.value;

    let yearTd = document.createElement("td");
    yearTd.textContent = yearEl.value;

    let fuelTd = document.createElement("td");
    fuelTd.textContent = fuelEl.value;

    let originalCostTd = document.createElement("td");
    originalCostTd.textContent = originalCostEl.value;

    let sellingPriceTd = document.createElement("td");
    sellingPriceTd.textContent = sellingPriceEl.value;

    let btnsTd = document.createElement("td");

    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", editCar);

    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn");
    sellBtn.classList.add("sell");
    sellBtn.textContent = "Sell";

    sellBtn.addEventListener("click", sellCar);

    btnsTd.appendChild(editBtn);
    btnsTd.appendChild(sellBtn);

    trElement.appendChild(makeTd);
    trElement.appendChild(modelTd);
    trElement.appendChild(yearTd);
    trElement.appendChild(fuelTd);
    trElement.appendChild(originalCostTd);
    trElement.appendChild(sellingPriceTd);
    trElement.appendChild(btnsTd);

    let tableBodyEl = document.getElementById("table-body");
    tableBodyEl.appendChild(trElement);

    makeEl.value = "";
    modelEl.value = "";
    fuelEl.value = "";
    yearEl.value = "";
    originalCostEl.value = "";
    sellingPriceEl.value = "";
  }

  function editCar(event) {
    let editBtnEl = event.target;

    let sellPriceEl = editBtnEl.parentElement.previousSibling;
    let originalPriceEl = sellPriceEl.previousSibling;
    let fuelElem = originalPriceEl.previousSibling;
    let yearElem = fuelElem.previousSibling;
    let modelElem = yearElem.previousSibling;
    let makeElem = modelElem.previousSibling;
    let trElem = makeElem.parentElement;

    makeEl.value = makeElem.textContent;
    modelEl.value = modelElem.textContent;
    fuelEl.value = fuelElem.textContent;
    yearEl.value = yearElem.textContent;
    originalCostEl.value = originalPriceEl.textContent;
    sellingPriceEl.value = sellPriceEl.textContent;

    trElem.remove();
  }

  function sellCar(event) {
    let sellBtnEl = event.target;

    let sellPriceElement = sellBtnEl.parentElement.previousSibling;
    let originalPriceElement = sellPriceElement.previousSibling;
    let fuelElement = originalPriceElement.previousSibling;
    let yearElement = fuelElement.previousSibling;
    let modelElement = yearElement.previousSibling;
    let makeElement = modelElement.previousSibling;
    let tableTrElement = makeElement.parentElement;

    let liEl = document.createElement("li");
    liEl.classList.add("each-list");

    let carMakeModelEl = document.createElement("span");
    carMakeModelEl.textContent =
      makeElement.textContent + " " + modelElement.textContent;

    let yearSpanElement = document.createElement("span");
    yearSpanElement.textContent = yearElement.textContent;

    let earningElement = document.createElement("span");

    let sellPriceAsNum = Number(sellPriceElement.textContent);
    let originalPriceAsNum = Number(originalPriceElement.textContent);
    let earning = sellPriceAsNum - originalPriceAsNum;

    earningElement.textContent = earning;

    let ulCars = document.getElementById("cars-list");

    liEl.appendChild(carMakeModelEl);
    liEl.appendChild(yearSpanElement);
    liEl.appendChild(earningElement);
    ulCars.appendChild(liEl);

    let profitEl = document.getElementById("profit");

    let allLiElements = document.getElementsByClassName("each-list");
    let totalProfit = 0;

    for (i = 0; i < allLiElements.length; i++) {
      let currentProfit = Number(allLiElements[i].lastChild.textContent);
      totalProfit += currentProfit;
    }

    profitEl.textContent = totalProfit.toFixed(2);

    tableTrElement.remove();
  }

  function isValid(make, model, year, fuel, original, selling) {
    if (
      make.trim() === "" ||
      model.trim() === "" ||
      year.trim() == "" ||
      fuel.trim() == "" ||
      original.trim() == "" ||
      selling.trim() == "" ||
      Number(original) > Number(selling)
    ) {
      return false;
    }

    // if (Number(original) > Number(selling)) {
    //   return false;
    // }

    return true;
  }
}
