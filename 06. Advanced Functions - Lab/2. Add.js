function solution(a) {
    let counter = a;

    function add(b) {
        return counter + b;
    }

    return add;
}

