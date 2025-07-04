class Queue {
    constructor() {
        this.items = [];
    };
    
    isEmpty() {
        return this.items.length == 0;
    };
    
    enqueue(element) {
        this.items.push(element);
    }; 
    
    dequeue() {
        return this.items.shift();
    };
    
    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    };

    removeAt(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items.splice(index, 1)[0];
        }
        return null;
    };
    
    size() {
        return this.items.length;
    };
    
    print() {
        console.log(this.items.toString());
    };

    middle() {
        if (this.isEmpty()) return null
        let middle = Math.floor(this.size() / 2)
        return this.items[middle]
    };

}

const queue = new Queue();

console.log('enqueue: added to tail');
queue.enqueue(40);
queue.enqueue(20);
queue.enqueue(90);
queue.enqueue(50);
queue.enqueue(10);
queue.print();

console.log('queue size: ' + queue.size());
console.log('peek: ' + queue.peek());

console.log('dequeue: remove from front: ' + queue.dequeue());
queue.print();

console.log('remove at index 1: ' + queue.removeAt(1));
queue.print();

console.log('queue size: ' + queue.size());
console.log('peek: ' + queue.peek());

console.log('Find middle: ' + queue.middle());