export default class LinkList {

    constructor(values = []) {
        this.head = null;
        this.current = null;
        this.tail = null;
        this.length = 0;

        for (let i = 0; i < values.length; i++) {
            this.add(values[i])

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
                    current = current.next;
                    return {
                        done: false,
                        value: value,
                    }
                }
            }
        }
    }

    /*remove(node) {
        if (!this.length) {
            return undefined
        }
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else if (this.tail === node) {
            node.prev.next = null;
            this.tail = node.prev;
        } else if (this.head === node) {
            this.head = node.next;
            node.next.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;

        }

        this.length--;
        return node;

    }*/


    add(value) {
        const newNode = new Node(null, null, value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;

        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        this.length++;
        return this.tail;
    }


    next() {
        if (this.current) {
            if (this.current.next) {
                this.current = this.current.next
                return this.current;
            }
        }
        return null;
    }

    prev() {
        if (this.current) {
            if (this.current.prev) {
                this.current = this.current.prev;
                return this.current
            }
        }
        return null;
    }


}

class Node {
    constructor(prev, next, value) {
        this.prev = prev;
        this.next = next;
        this.value = value;
    }
}