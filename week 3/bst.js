class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };
    
    isEmpty() {
        return this.root === null;
    };
    
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    };
    
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    };
    
    search(root, value) {
        if(!root) {
            return false;
        }
        else {
            if(root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    };

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    
    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    };
    
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    };

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    };

    min(root) {
        if (!root.left) {
            return root.value; 
        } else {
            return this.min(root.left)
        }
    };

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right)
        }
    };

    isValidBst(node = this.root, min = -Infinity, max = Infinity) {
        if (node === null) return true

        if (node.value <= min || node.value >= max) return false
        
        return (
            this.isValidBst(node.left, min, node.value) &&
            this.isValidBst(node.right, node.value, max)
        )
    };

    closestMinValue(target) {
        let current = this.root
        let closest = null

        while (current) {
            if (current.value <= target) {
                closest = current.value
                current = current.next
            } else {
                current = current.next
            }
        }
        return closest ?? 'No values less than or equal to target found'
    };

    reverse(root) {
        if (root) {
            [root.left, root.right] = [root.right, root.left]
            this.reverse(root.left)
            this.reverse(root.right)
        }
    };

    findHeight(root) {
        if (!root) return -1
        let leftHeight = this.findHeight(root.left)
        let rightHeight = this.findHeight(root.right)
        return Math.max(leftHeight, rightHeight) + 1
    };

    findDegree(root) {
        if (!root) return 0

        let degree = 0
        if (root.left) degree++
        if (root.righ) degree++
        
        let leftDegree = this.findDegree(root.left)
        let rightDegree = this.findDegree(root.righ)
        return Math.max(degree, leftDegree, rightDegree)
    };

    leafNode(root){
        if(!root) return null
        if(root.left === null && root.right === null){
            console.log(root.value)
        }
        this.leafNode(root.left)
        this.leafNode(root.right)
    };

    leafNodeCount(root) {
        if (!root) return 0;
        if (!root.left && !root.right) return 1;
        return this.leafNodeCount(root.left) + this.leafNodeCount(root.right);
    };

    secondLargest() {
        if (!this.root) return null;
        
        let current = this.root;
        let parent = null;
        
        while (current.right) {
            parent = current;
            current = current.right;
        }
        
        if (current.left) {
            return this.max(current.left);
        }
        
        return parent ? parent.value : null;
    };

    secondSmallest() {
        if (!this.root) return null;
        
        let current = this.root;
        let parent = null;
        
        while (current.left) {
            parent = current;
            current = current.left;
        }
        
        if (current.right) {
            return this.min(current.right);
        }
        
        return parent ? parent.value : null;
    };

    isBalanced(node = this.root) {
        const check = (node) => {
            if (!node) return 0;

            const left = check(node.left);
            const right = check(node.right);

            if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

            return 1 + Math.max(left, right);
        };

        return check(node) !== -1;
    }
};

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log('Tree is empty?', bst.isEmpty())

console.log('Search for 10:', bst.search(bst.root, 10))

console.log('Search for 60:', bst.search(bst.root, 60))

console.log('Pre-Order Traversal:')
bst.preOrder(bst.root)

console.log('In-Order Traversal:')
bst.inOrder(bst.root)

console.log('Post-Order Traversal:');
bst.postOrder(bst.root)

console.log('BFS:')
bst.levelOrder()

console.log('Maximum value : ' + bst.max(bst.root));
console.log('Minimum value : ' + bst.min(bst.root));

console.log('Tree is a valid BST?', bst.isValidBst());

console.log('closest value to 90 is :', bst.closestMinValue(90))

console.log('before reverse');
bst.levelOrder(bst.root)

console.log('after reverse');
bst.reverse(bst.root)
bst.levelOrder()

console.log('Height of the tree:', bst.findHeight(bst.root));

console.log('Degree of node');
bst.findDegree(bst.root)

console.log('Leaf node count:', bst.leafNodeCount(bst.root));

console.log("Second Largest :", bst.secondLargest());
console.log("Second Smallest :", bst.secondSmallest());

console.log('is balanced:', bst.isBalanced());