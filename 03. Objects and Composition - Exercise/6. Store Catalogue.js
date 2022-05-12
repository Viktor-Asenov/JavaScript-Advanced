function storeCatalogue(data) {
    let products = [];
    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split(' : ');
        let productName = tokens[0];
        let productPrice = Number(tokens[1]);

        let product = {
            productName,
            productPrice
        };

        products.push(product);
    }

    const sortedProducts = products.sort((a, b) => a.productName.localeCompare(b.productName));

    let letters = [];
    for (let product of sortedProducts) {
        let firstLetter = product.productName.charAt(0);
        letters.push(firstLetter);
    }

    const uniqueLetters = letters.filter((v, i, a) => a.indexOf(v) === i);

    for (let letter of uniqueLetters) {
        console.log(letter);
        sortedProducts
            .filter(x => x.productName.charAt(0) === letter)
            .forEach(x => console.log(`  ${x.productName}: ${x.productPrice}`))
    }
}