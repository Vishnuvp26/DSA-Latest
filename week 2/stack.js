class Stack {
    constructor() {
        this.items = [];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element)
    };

    pop() {
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.items.pop()
    };

    peek() {
        if (this.isEmpty()) {
            return "stack is empty"
        }
        return this.items[this.items.length - 1];
    };

    removeIndex(index) {
        if(index < 0 || index >= this.size()) {
            return false;
        }
        
        const tempStack = new Stack();
        const target = this.size() - index - 1;
        
        for(let i = 0; i < target; i++) {
            tempStack.push(this.pop());
        }
        this.pop();
        
        while(!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    };

    insertValue(index, value) {
        if (index < 0 || index > this.size()) return
        
        let target = this.size() - index
        let tempStack = new Stack()

        for (let i = 0; i < target; i++){
            tempStack.push(this.pop())
        }
        this.push(value)

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop())
        }
    };

    print() {
        console.log(this.items.toString());
    };
    
    removeMiddle() {
        if (this.size() === 0) {
            return null;
        }
        const midIndex = Math.floor(this.size() / 2);
        const tempStack = new Stack();
        for (let i = 0; i < midIndex; i++) {
            tempStack.push(this.pop());
        }
        this.pop();
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    };

    sort(){
        let tempStack = new Stack()
        
        while(!this.isEmpty()){
            let current = this.pop()
            
            while(!tempStack.isEmpty() && tempStack.peek() < current){
                this.push(tempStack.pop())
            }
            tempStack.push(current)
        }
        while(!tempStack.isEmpty()){
            this.push(tempStack.pop())
        }
    };

    find(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                console.log(`Value ${value} found`);
                return
            }
        }
        console.log(`Value ${value} not found`);
    }

    removeDuplicates() {
        let tempStack = new Stack()
        let set = new Set()

        while (!this.isEmpty()) {
            let curr = this.pop()
            if (!set.has(curr)) {
                set.add(curr)
                tempStack.push(curr)
            }
        }
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop())
        }
    };
};

const stack = new Stack();
l
console.log('Push...')
stack.push(80);
stack.push(40);
stack.push(50);
stack.push(50);
stack.print();

console.log('peek...')
console.log(stack.peek());

// stack.removeIndex(2);
// const middle = Math.floor(stack.items.length / 2);
// console.log(`The middle element is ${middle}`)

// stack.removeMiddle(middle)
// stack.print();

// stack.push(10);
// stack.push(80);
// stack.push(10);
// stack.removeDuplicates()
// stack.print()