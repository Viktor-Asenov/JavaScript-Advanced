class List {
    #numbers = [];
    
    add(element) {
        this.#numbers.push(element);
        this.#numbers.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index <= this.#numbers.length - 1) {
            this.#numbers.splice(index, 1);
            this.#numbers.sort((a, b) => a - b);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index <= this.#numbers.length - 1) {
            return this.#numbers[index];
        }
    }

    size = this.#numbers.length;
}

var myList = new List();
myList.add(5);
//expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
//expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
//expect(myList.get(0)).to.equal(5, "Element wasn't removed");
//expect(myList.size).to.equal(1, "Element wasn't removed");