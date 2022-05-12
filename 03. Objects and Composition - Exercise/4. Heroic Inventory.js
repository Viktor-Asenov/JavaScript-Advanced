function heroicInventory(input) {
    let heroes = [];
    let separators = [' / ', ', ']    
    for (let i = 0; i < input.length; i++) {
        let hero = {};
        let tokensCurrentHero = input[i].split(new RegExp(separators.join('|'), 'g'));
        let heroName = tokensCurrentHero[0];
        let heroLevel = Number(tokensCurrentHero[1]);

        hero.name = heroName;
        hero.level = heroLevel;
        hero.items = [];

        for (let j = 2; j <= tokensCurrentHero.length - 1; j++) {
            let item = tokensCurrentHero[j];
            hero.items.push(item);
        }

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}