function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            Math.floor(this.treasury += this.population * this.taxRate); 
        },
        applyGrowth(percentage) {
            Math.floor(this.population += this.population * percentage / 100);
        },
        applyRecession(percentage) {
            Math.ceil(this.treasury -= this.treasury * percentage / 100);
        }
    }

    return city;
}