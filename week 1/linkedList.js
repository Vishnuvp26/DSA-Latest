class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    };

    isEmpty() {
        return this.size === 0;
    };

    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++;
    };

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    };

    delete(index) {
        if (index < 0 || index >= this.size) return false;
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    };

    deleteMiddle() {
        let prev = null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        this.size--;
    };
    
    search(value) {
        if (this.isEmpty()) {
            return false;
        }
        let index = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                console.log(`Value ${value} found at index ${index}`);
                return true;
            }
            curr = curr.next;
            index++;
        }
        console.log(`Value ${value} not found`);
    };

    print() {
        if (this.isEmpty()) {
            return false;
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += curr.value + ' -> ';
                curr = curr.next;
            }
            console.log(listValues);
        }
    };

    fromArray(arr) {
        arr.forEach(value => this.append(value));
    };

    getLength() {
        return this.size;
    };

    removeDuplicates() {
        if (this.isEmpty()) {
            return;
        }
        let curr = this.head
        let prev = null
        let set = new Set()
        while (curr) {
            if (set.has(curr.value)) {
                prev.next = curr.next
            } else {
                set.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    };

    isPaliandrome() {
        let values = []
        let curr = this.head

        while (curr) {
            values.push(curr.value)
            curr = curr.next
        }

        let left = 0
        let right = values.length - 1
        while (left < right) {
            if (values[left] != values[right]) {
                return false
            }
            left++
            right--
        }
        return true
    };

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    };

    sum() {
        let curr = this.head
        let sum = 0

        while (curr) {
            sum += curr.value
            curr = curr.next
        }
        return sum
    };

    smallest() {
        let curr = this.head;
        let min = curr.value

        while (curr) {
            if (curr.value < min) {
                min = curr.value
            }
            curr = curr.next
        }
        return min;
    };

    largest() {
        let curr = this.head;
        let max = curr.value

        while (curr) {
            if (curr.value > max) {
                max = curr.value
            }
            curr = curr.next
        }
        return max;
    };

    secondSmallest() {
        let small = Infinity
        let secSmall = Infinity
        let curr = this.head

        while (curr) {
            if (curr.value < small) {
                secSmall = small;
                small = curr.value
            } else if (curr.value < secSmall && small !== secSmall) {
                secSmall = curr.value
            }
            curr = curr.next
        }
        return secSmall;
    };

    secondLargest() {
        let max = -Infinity
        let secMax = -Infinity
        let curr = this.head

        while (curr) {
            if (curr.value > max) {
                secMax = max
                max = curr.value
            } else if (curr.value > secMax && secMax !== max) {
                secMax = curr.value
            }
            curr = curr.next
        }
        return secMax
    };

    recursiveSum(curr = this.head, sum = 0) {
        if (!curr) return sum
        sum += curr.value
        curr = curr.next
        return this.recursiveSum(curr, sum)
    };

    evenNumbers() {
        let evens = []
        let curr = this.head

        while (curr) {
            if (curr.value % 2 === 0) evens.push(curr.value)
            curr = curr.next
        }
        return evens
    };
};

// Usage example:
let list = new LinkedList();

// Append elements
list.fromArray([10, 88, 20, 30, 6, 40, 50]);
list.print();

// Prepend elements
// console.log("\nPrepending elements 5, 0");
// list.prepend(5);
// list.prepend(0);
// list.print();

// Insert element at a specific position
// console.log("\nInserting element 15 at index 3:");
// list.insert(15, 3);
// list.print();

// Delete middle
// console.log("\nDeleting middle node:");
// list.deleteMiddle();
// list.print();

// Palindrome
// console.log("\nChecking palindrome");
// console.log(list.isPaliandrome())

// Reverse
// console.log("\nReversing list:");
// list.reverse();
// list.print();

// Delete index
// console.log("\nDeleting element at index 4:");
// list.delete(4);
// list.print();

// Search
// console.log("\nSearching for element 20:");
// list.search(20);

// Sum
console.log('sum :', list.sum());

console.log('recursive sum :', list.recursiveSum());

console.log('smallest:', list.smallest());
console.log("Largest:", list.largest());

console.log('second smallest:', list.secondSmallest());
console.log('second largest:', list.secondLargest());

// console.log('Even numbers :', list.evenNumbers());