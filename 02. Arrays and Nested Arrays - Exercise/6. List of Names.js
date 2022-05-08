function listOfNames(names) {
    const sortedNames = names.sort((a, b) => a.localeCompare(b));
    let counter = 0;
    for (let name of sortedNames) {
        counter++;
        console.log(counter + '.' + name);
    }
}