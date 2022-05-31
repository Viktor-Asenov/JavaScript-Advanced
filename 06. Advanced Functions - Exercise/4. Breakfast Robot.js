function solution() {
    let proteinInStock = 0;
    let carbohydrateInStock = 0;
    let fatInStock = 0;
    let flavourInStock = 0;

    function manager(input) {
        const tokens = Array.from(input.split(' '));
        let command = tokens[0];

        let message = '';

        if (command === 'restock') {
            let microelement = tokens[1];
            let quantity = Number(tokens[2]);

            switch (microelement) {
                case 'protein': proteinInStock += quantity; message = 'Success'; break;
                case 'carbohydrate': carbohydrateInStock += quantity; message = 'Success'; break;
                case 'fat': fatInStock += quantity; message = 'Success'; break;
                case 'flavour': flavourInStock += quantity; message = 'Success'; break;
            }

        } else if (command === 'prepare') {
            let recipe = tokens[1];
            let quantity = Number(tokens[2]);

            let neededCarbohydrate = 0;
            let neededFlavour = 0;
            let neededFat = 0;
            let neededProtein = 0;

            switch (recipe) {
                case 'apple':
                    neededCarbohydrate = quantity * 1;
                    neededFlavour = quantity * 2;
                    
                    if (neededCarbohydrate > carbohydrateInStock) {
                        message = `Error: not enough carbohydrate in stock`;
                    } else if (neededFlavour > flavourInStock) {
                        message = `Error: not enough flavour in stock`;
                    } else {
                        carbohydrateInStock -= neededCarbohydrate;
                        flavourInStock -= neededFlavour;

                        message = 'Success';
                    }
                    break;
                case 'lemonade':
                    neededCarbohydrate = quantity * 10;
                    neededFlavour = quantity * 20;
                    
                    if (neededCarbohydrate > carbohydrateInStock) {
                        message = `Error: not enough carbohydrate in stock`;
                    } else if (neededFlavour > flavourInStock) {
                        message = `Error: not enough flavour in stock`;
                    } else {
                        carbohydrateInStock -= neededCarbohydrate;
                        flavourInStock -= neededFlavour;

                        message = 'Success';
                    }
                    break;
                case 'burger':
                    neededCarbohydrate = quantity * 5;
                    neededFat = quantity * 7;
                    neededFlavour = quantity * 3;

                    if (neededCarbohydrate > carbohydrateInStock) {
                        message = `Error: not enough carbohydrate in stock`;
                    } else if (neededFat > fatInStock) {
                        message = `Error: not enough fat in stock`;
                    } else if (neededFlavour > flavourInStock) {
                        message = `Error: not enough flavour in stock`;
                    } else {
                        carbohydrateInStock -= neededCarbohydrate;
                        flavourInStock -= neededFlavour;
                        fatInStock -= neededFat;

                        message = 'Success';
                    }
                    break;
                case 'eggs':
                    neededProtein = quantity * 5;
                    neededFat = quantity * 1;
                    neededFlavour = quantity * 1;

                    if (neededProtein > proteinInStock) {
                        message = `Error: not enough protein in stock`;
                    } else if (neededFat > fatInStock) {
                        message = `Error: not enough fat in stock`;
                    } else if (neededFlavour > flavourInStock) {
                        message = `Error: not enough flavour in stock`;
                    } else {
                        proteinInStock -= neededProtein;
                        flavourInStock -= neededFlavour;
                        fatInStock -= neededFat;

                        message = 'Success';
                    }
                    break;
                case 'turkey':
                    neededProtein = quantity * 10;
                    neededCarbohydrate = quantity * 10;
                    neededFat = quantity * 10;
                    neededFlavour = quantity * 10;

                    if (neededProtein > proteinInStock) {
                        message = `Error: not enough protein in stock`;
                    } else if (neededCarbohydrate > carbohydrateInStock) {
                        message = `Error: not enough carbohydrate in stock`;
                    } else if (neededFat > fatInStock) {
                        message = `Error: not enough fat in stock`;
                    } else if (neededFlavour > flavourInStock) {
                        message = `Error: not enough flavour in stock`;
                    } else {
                        carbohydrateInStock -= neededCarbohydrate;
                        proteinInStock -= neededProtein;
                        flavourInStock -= neededFlavour;
                        fatInStock -= neededFat;

                        message = 'Success';
                    }
                    break;
            }

        } else if (command === 'report') {
            message = `protein=${proteinInStock} carbohydrate=${carbohydrateInStock} fat=${fatInStock} flavour=${flavourInStock}`;
        }

        return message;
    }

    return manager;
}

let manager = solution (); 
console.log (manager('prepare turkey 1'));
console.log (manager('restock protein 10'));
console.log (manager('prepare turkey 1'));
console.log (manager('restock carbohydrate 10'));
console.log (manager('prepare turkey 1'));
console.log (manager('restock fat 10'));
console.log (manager('prepare turkey 1'));
console.log (manager('restock flavour 10'));
console.log (manager('prepare turkey 1'));
console.log(manager('report'));