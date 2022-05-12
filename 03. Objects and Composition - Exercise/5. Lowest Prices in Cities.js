function lowestPricesInCities(data) {
    let products = [];

    for (let i = 0; i < data.length; i++) {
        let currentCityInfo = data[i].split(' | ');
        let cityName = currentCityInfo[0];
        let productName = currentCityInfo[1];
        let productPrice = Number(currentCityInfo[2]);

        let product = {
            name: '',
            minPrice: Number.MIN_VALUE,
            cityOfMinPrice: '',
        };

        if (products.some(product => product.name === productName)) {
            product = products.find(product => product.name === productName);

            if (productPrice < product.minPrice) {
                product.minPrice = productPrice;
                product.cityOfMinPrice = cityName;
            }

        } else {
            product.name = productName;
            product.minPrice = productPrice;
            product.cityOfMinPrice = cityName;
            products.push(product);
        }  
    }

    products.forEach(p => console.log(p.name + ' -> ' + p.minPrice + ' (' + p.cityOfMinPrice + ')'));
}