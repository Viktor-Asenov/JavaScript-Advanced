function solve() {
	let generateButton = document.getElementById('exercise').children[2];
	generateButton.addEventListener('click', generate);

	let buyButton = document.getElementById('exercise').children[5];
	buyButton.addEventListener('click', buy);

	function generate(ev) {
		let furnituresAsJson = ev.target.parentNode.children[1].value;
		let furnitures = JSON.parse(furnituresAsJson);

		let tableBody = document.getElementsByTagName('tbody')[0];
		
		for (let key in furnitures) {
			let tableRow = document.createElement('tr');

			let tdImageCell = document.createElement('td');
			let source = furnitures[key].img;
			let image = document.createElement('img');
			image.setAttribute('src', source);

			tdImageCell.appendChild(image);
			tableRow.appendChild(tdImageCell);

			let nameCell = document.createElement('td');
			nameCell.textContent = furnitures[key].name;
			tableRow.appendChild(nameCell);

			let priceCell = document.createElement('td');
			priceCell.textContent = furnitures[key].price;
			tableRow.appendChild(priceCell);

			let decorFactorCell = document.createElement('td');
			decorFactorCell.textContent = furnitures[key].decFactor;
			tableRow.appendChild(decorFactorCell);

			let checkboxCell = document.createElement('td');
			let input = document.createElement('input');
			input.setAttribute('type', 'checkbox');
			input.disabled = false;

			checkboxCell.appendChild(input);
			tableRow.appendChild(checkboxCell);

			tableBody.appendChild(tableRow);
		}
	}

	function buy(ev) {
		let checkedProducts = 
			Array.from(document.getElementsByTagName('tbody')[0].children)
			.filter(tr => tr.children[4].children[0].checked === true);

		let boughtProductsNames = [];
		let total = 0;
		let sumDecFactor = 0;

		for (let key in checkedProducts) {
			let name = checkedProducts[key].children[1].textContent;
			let price = Number(checkedProducts[key].children[2].textContent);
			let decFactor = Number(checkedProducts[key].children[3].textContent)

			total += price;
			sumDecFactor += decFactor;

			boughtProductsNames.push(name);
		}
		
		let checkoutTextArea = ev.target.parentNode.children[4];
		checkoutTextArea.textContent = '';

		if (checkedProducts.length > 0) {
			let averageDecFactor = sumDecFactor / checkedProducts.length;
			checkoutTextArea.textContent += `Bought furniture: ${boughtProductsNames.join(', ')}\n`;
			checkoutTextArea.textContent += `Total price: ${total.toFixed(2)}\n`;
			checkoutTextArea.textContent += `Average decoration factor: ${averageDecFactor}`;
		}
	}
}