function argumentInfo(...args) {
    let obj = {};
    obj.string = 0;
    obj.number = 0;
    obj.function = 0;
    obj.boolean = 0;

    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        console.log(typeof(element) + ': ' + element)

        if (typeof element == 'string') {
            obj.string++;
        } else if (typeof element == 'number') {
            obj.number++;
        } else if (typeof element == 'function') {
            obj.function++;
        } else if (typeof element == 'boolean') {
            obj.boolean++;
        }
    }

    let result = Object.entries(obj);
    result.sort((a, b) => b - a);

    for (let [key, value] of result) {
        if (value > 0) {
            console.log(`${key} = ${value}` );
        }        
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })