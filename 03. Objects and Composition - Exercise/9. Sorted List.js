function createSortedList() {
    class List {
        numbers = [];
        add = function(element){
            this.numbers.push(Number(element));
            this.numbers.sort(function(a, b){return a-b});
            return this.numbers;
        }
    
        remove = function(index){
            if (index > -1 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
            }
            this.numbers.sort(function(a, b){return a-b});
            return this.numbers;
        }
    
        get = function(index){
            if (index > -1 && index < this.numbers.length) {
               return this.numbers[index];
            }
            return;
        }
    
        size = this.numbers.length - 1;
    
    }

    let object = new List();
    
    return object;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.length);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
