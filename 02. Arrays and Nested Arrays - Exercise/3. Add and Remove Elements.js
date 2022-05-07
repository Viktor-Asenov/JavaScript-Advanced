function addAndRemoveElements(commands) {
    let array = [];
    let number = 0;
    for (const command of commands) {
        if (command === 'add') {
            number++;
            array.push(number);
        } else {
            number++;
            array.pop();
        }
    }

    console.log(array.length === 0 ? 'Empty' : array.join('\r\n'))
}