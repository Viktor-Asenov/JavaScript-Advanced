class Stringer {
    constructor(string, length = 0) {
        this.initalString = string;
        this.initialLength = string.length;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length){
        if (this.innerLength -  length < 0) {
            length = this.innerLength;
        }

        let remainCharsCount = this.innerLength - length;
        this.innerString = this.innerString.substring(0, remainCharsCount);
        this.innerLength = remainCharsCount;
    }

    toString(){
        if (this.initialLength > this.innerLength) {
            //this.innerString = this.initialString.substring(0, this.innerLength)
            return this.innerString + '...';
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test