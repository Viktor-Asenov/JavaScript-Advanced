function townsToJson(data) {
    let towns = [];
    for (let i = 1; i <= data.length - 1; i++) {
        let townInfoRaw = data[i].split('|');

        for (let j = 0; j < townInfoRaw.length; j++) {
            townInfoRaw[j] = townInfoRaw[j].trim();
        }
        
        let tokens = townInfoRaw.filter(x => x !== '');
        let name = tokens[0];
        let latitude = Math.round(Number(tokens[1]) * 100) / 100;
        let longitude = Math.round(Number(tokens[2]) * 100) / 100;

        let town = {
            Town: name,
            Latitude: latitude,
            Longitude: longitude
        };

        towns.push(town);
    }

    console.log(JSON.stringify(towns))
}