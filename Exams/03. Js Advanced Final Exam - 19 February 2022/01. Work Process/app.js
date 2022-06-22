function solve() {
  document.getElementById("add-worker").addEventListener("click", addWorker);

  const tableBody = document.getElementById("tbody");

  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let birthday = document.getElementById("birth");
  let position = document.getElementById("position");
  let salary = document.getElementById("salary");

  let messageSpan = document.getElementById("sum");

  let budget = 0;

  function addWorker() {
    document
      .querySelector(".form")
      .addEventListener("click", (ev) => ev.preventDefault());

    if (
      firstName.value != "" &&
      lastName.value != "" &&
      email.value != "" &&
      birthday.value != "" &&
      position.value != "" &&
      salary.value != ""
    ) {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td>${firstName.value}</td>
                <td>${lastName.value}</td>
                <td>${email.value}</td>
                <td>${birthday.value}</td>
                <td>${position.value}</td>
                <td>${salary.value}</td>
                <td>
                    <button class"fired">Fired</button>
                    <button class="edit">Edit</button>
                </td>`;

      budget += Number(salary.value);

      tableBody.appendChild(tableRow);

      tableRow.lastElementChild.children[0].addEventListener(
        "click",
        fired.bind(null, tableRow)
      );
      tableRow.lastElementChild.children[1].addEventListener(
        "click",
        edit.bind(null, tableRow)
      );

      messageSpan.textContent = Number(budget).toFixed(2);
    }

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    birthday.value = "";
    position.value = "";
    salary.value = "";
  }

  function fired(element) {
    let firedEmployeeSalary = element.children[5].textContent;
    budget -= Number(firedEmployeeSalary);
    messageSpan.textContent = Number(budget).toFixed(2);

    tableBody.removeChild(element);
  }

  function edit(element) {
    let editFirstName = element.children[0].textContent;
    let editLastName = element.children[1].textContent;
    let editEmail = element.children[2].textContent;
    let editBirthday = element.children[3].textContent;
    let editPosition = element.children[4].textContent;
    let editSalary = element.children[5].textContent;

    firstName.value = editFirstName;
    lastName.value = editLastName;
    email.value = editEmail;
    birthday.value = editBirthday;
    position.value = editPosition;
    salary.value = editSalary;

    budget -= editSalary;
    messageSpan.textContent = Number(budget).toFixed(2);

    tableBody.removeChild(element);
  }
}
solve();
