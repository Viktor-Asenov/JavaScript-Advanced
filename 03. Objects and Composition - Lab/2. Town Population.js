function townPopulation(input) {
    const towns = {};
    for (let data of input) {
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (towns[name] == undefined) {
            towns[name] = population;
        } else {
            towns[name] += population;
        }
    }

    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}