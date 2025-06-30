class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    };

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    };

    prefix(word) {
        let current = this.root;
        for(let char of word) {
            if(!current.children[char]){
                return false;
            }
            current = current.children[char]
        }
        return true;
    }

    longestCommonPrefix() {
        let prefix = "";
        let current = this.root;

        while (current && !current.isEndOfWord && Object.keys(current.children).length === 1) {
            let char = Object.keys(current.children)[0];
            prefix += char;
            current = current.children[char];
        }
        return prefix;
    };

    autocomplete(prefix) {
        let node = this.root;

        for (let ch of prefix) {
            if (!node.children[ch]) return [];
            node = node.children[ch];
        }

        let result = [];

        const collect = (n, word) => {
            if (n.isEndOfWord) result.push(word);
            for (let ch in n.children) {
                collect(n.children[ch], word + ch);
            }
        };

        collect(node, prefix);
        return result;
    }

}

const trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
console.log(trie.search("flower"));
console.log(trie.search("fl"));
console.log(trie.search("flo"));
console.log(trie.prefix("flo"));
console.log(trie.prefix("fli"));

console.log('Longest common prefix :', trie.longestCommonPrefix());

console.log(trie.autocomplete("fl"));