class Stack{
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }
}

function sortString(str) {
    let stack = new Stack()

    for (let char of str) {
        stack.push(char)
    }

    let reversed = ''
    while (!stack.isEmpty()) {
        reversed += stack.pop()
    }
    return reversed
}

let str = "hello"
console.log(sortString(str));