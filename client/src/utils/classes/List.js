export default class MyList {

    constructor(values = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let i = 0; i < values.length; i++) {
            this._add(values[i])

        }
    }


    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current === null) {
                    return {
                        done: true
                    }
                } else {
                    const value = current.value;
                    console.log("Iterator next");
                    current = current.next;
                    return {
                        done: false,
                        value: value,
                    }
                }
            }
        }
    }

    insert(nextNode, value) {
        const node = new MyNode(value);

        nextNode.prev.next = node;
        node.prev = nextNode.prev;
        nextNode.prev = node;
        node.next = nextNode;
        return node;

    }


    insertByIndex(index, value) {
        if (index < 0 || index > this.length - 1) {
            return null
        }
        if ((!this.length && index === 0) || (index === this.length - 1)) {
            return this.add(value);
        }
        if (index === 0) {
            const node = new MyNode(value);
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        if (index > this.length / 2) {
            let nextNode = this.tail;
            for (let i = this.length - 1; i > index && nextNode.prev; i--) {
                nextNode = nextNode.prev;
            }
            return this.insert(nextNode, value);

        } else {
            let nextNode = this.head;
            for (let i = 0; i < index && nextNode.next; i--) {
                nextNode = nextNode.next;
            }
            return this.insert(nextNode, value);
        }
    }

    add(value) {
        let newNode = new MyNode(null, null, value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else if (this.length) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this.tail;
    }

    _add(value) {
        let node = new MyNode(value);

        if (this.length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.length++;

        return node;
    };


}

class MyNode {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}