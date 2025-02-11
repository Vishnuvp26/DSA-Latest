class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += curr.value + ' ';
                curr = curr.next;
            }
            console.log(listValues.trim());
        }
    }

    removeEven() {
        let curr = this.head
        while (curr.next) {
            if (curr.next.value % 2 === 0) {
                curr.next = curr.next.next
                this.size--
            } else {
                curr = curr.next
            }
        }
        if (this.head.value % 2 === 0) {
            this.head = this.head.next
            this.size--
        }
    }
}


const list = new LinkedList();
list.append(5);
list.append(8);
list.append(10);
list.append(3);
list.append(4);
list.append(7);
list.append(12);
list.append(15);
list.print();