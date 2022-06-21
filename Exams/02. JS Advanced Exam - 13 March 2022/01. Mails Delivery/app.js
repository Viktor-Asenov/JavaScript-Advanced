function solve() {
  document.getElementById("add").addEventListener("click", add);

  function add() {
    document
      .getElementsByTagName("form")[0]
      .addEventListener("click", (ev) => ev.preventDefault());

    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");

    let liElement = document.createElement("li");
    liElement.innerHTML = `<h4>Title: ${title.value}</h4>
            <h4>Recipient Name: ${recipient.value}</h4>
            <span>${message.value}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`;

    const ulListOfEmails = document.getElementById("list");
    ulListOfEmails.appendChild(liElement);

    let receiver = recipient.value;
    let heading = title.value;

    document.getElementById("reset").addEventListener("click", reset);
    document
      .getElementById("send")
      .addEventListener("click", send.bind(null, liElement, receiver, heading));
    document
      .getElementById("delete")
      .addEventListener(
        "click",
        deleteElement.bind(null, liElement, receiver, heading)
      );

    document.getElementById("recipientName").value = "";
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";

    function reset() {
      recipient.value = "";
      title.value = "";
      message.value = "";
    }
  }

  function send(element, recipient, title) {
    element.innerHTML = `<span>To: ${recipient.value}</span>
        <span>Title: ${title.value}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>`;

    element
      .querySelector(".delete")
      .addEventListener("click", deleteElement.bind(null, element));

    let sentEmails = document.querySelector(".sent-list");
    sentEmails.appendChild(element);
  }

  function deleteElement(element, recipient, title) {
    if (element.parentNode.classList.contains("sent-list")) {
      element.removeChild(element.querySelector(".btn"));
    } else {
      element.innerHTML = `<span>To: ${recipient.value}</span>
            <span>Title: ${title.value}</span>`;
    }

    let deleteList = document.querySelector(".delete-list");
    deleteList.appendChild(element);
  }
}
solve();
