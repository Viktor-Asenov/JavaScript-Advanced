function solve(input) {
    let state = [];

    for (let str of input) {
        const tokens = str.split(' ');
        if (tokens.length == 2) {
            let command = tokens[0];
            let value = tokens[1];

            if (command == 'add') {
                add(value);
            } else if (command == 'remove') {
                remove(value);
            }
        } else {
            print()
        }        
    }

    function add(value) {
        state.push(value);
    }

    function remove(value) {
        const index = state.indexOf(value);
        if (index > -1) {
            state.splice(index, 1);
        }
    }

    function print() {
        console.log(state.join(','));
    }
}