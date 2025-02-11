class Node{
    constructor(value) {
        this.value = value
        this.child1 = null
        this.child2 = null
        this.child3 = null
    }
}

class Ternary{
    constructor() {
        this.root = null
    };

    isEmpty() {
        return this.root === null
    };

    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    };

    insertNode(root, node) {
        if (root.child1 === null) {
            root.child1 = node;
        } else if (root.child2 === null) {
            root.child2 = node;
        } else if (root.child3 === null) {
            root.child3 = node;
        } else {
            this.insertNode(root.child1, node);
        }
    };  

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.child1)
            this.preOrder(root.child2)
            this.preOrder(root.child3)
        }
    };
}

const tree = new Ternary()
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6)
tree.preOrder(tree.root)