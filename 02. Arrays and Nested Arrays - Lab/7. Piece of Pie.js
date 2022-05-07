function pieceOfPie(flavors, firstFlavor, secondFlavor) {
    let startIndex = flavors.indexOf(firstFlavor);
    let endIndex = flavors.indexOf(secondFlavor);

    const newArray = flavors.slice(startIndex, endIndex + 1);
    
    return newArray;
}