window.addEventListener("load", solve);

function solve() {
  document
    .getElementsByTagName("form")[0]
    .lastElementChild.addEventListener("click", send);

  let receivedOrders = document.getElementById("received-orders");

  function send() {
    document
      .getElementsByTagName("form")[0]
      .addEventListener("click", (ev) => ev.preventDefault());

    let typeOfProduct = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");

    if (
      typeOfProduct.value == "" ||
      description.value == "" ||
      clientName.value == "" ||
      clientPhone.value == ""
    ) {
      return;
    }

    let productRepairInfo = `<div class="container">
    <h2>Product type for repair: ${typeOfProduct.value}</h2>
        <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
        <h4>Description of the problem: ${description.value}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>
    </div>`;

    receivedOrders.innerHTML += productRepairInfo;

    document
      .getElementsByClassName("start-btn")[0]
      .addEventListener("click", startRepair.bind(null, productRepairInfo));

    typeOfProduct.value = "";
    description.value = "";
    clientName.value = "";
    clientPhone.value = "";
  }

  function startRepair(productRepairInfo, ev) {
    ev.target.disabled = true;
    let finishRepairBtn = document.getElementsByClassName("finish-btn")[0];
    finishRepairBtn.disabled = false;
    finishRepairBtn.addEventListener("click", finishRepair);

    function finishRepair() {
      let divToRemove = document.querySelector(".container");

      let startBtn = document.getElementsByClassName("start-btn")[0];
      divToRemove.removeChild(startBtn);

      divToRemove.removeChild(finishRepairBtn);

      receivedOrders.removeChild(divToRemove);

      const completedOrders = document.getElementById("completed-orders");
      completedOrders.appendChild(divToRemove);

      document
        .getElementsByClassName("clear-btn")[0]
        .addEventListener("click", clearOrders.bind(null, divToRemove));
    }
  }

  function clearOrders(divToRemove) {
    divToRemove.parentNode.removeChild(divToRemove);
  }
}
