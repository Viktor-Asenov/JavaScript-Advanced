class Garden {
	constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (isNaN(Number(spaceRequired))) {
            return;
        }

        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        let newPlant = { plantName, spaceRequired, ripe: false, quantity: 0}
        this.plants.push(newPlant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if (isNaN(Number(quantity))) {
            return;
        }

        let plant = this.plants.find(p => p.plantName == plantName);
        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        
        if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName == plantName);
        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const plantIndex = this.plants.indexOf(plant);
        this.plants.splice(plantIndex, 1);

        this.storage.push({ 
            plantName: plant.plantName,
            quantity: plant.quantity 
        });

        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        const result = [];
        result.push(`The garden has ${ this.spaceAvailable } free space left.`);

        const sortedByNamePlants = this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(p => p.plantName);

        result.push(`Plants in the garden: ${sortedByNamePlants.join(', ')}`);

        if (this.storage.length == 0) {
            result.push(`Plants in storage: The storage is empty.`);
        } else {
            let storageResult = [];
            for (let plant of this.storage) {
                storageResult.push(plant.plantName + ' ' + `(${plant.quantity})`);
            }

            result.push(`Plants in storage: ${storageResult.join(', ')}`);
        }

        return result.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());