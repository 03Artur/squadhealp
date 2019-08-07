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
                    current = current._nextNode;
                    return {
                        done: false,
                        value: value,
                    }
                }
            }
        }
    }


    add(value) {
        let newNode = new MyNode(null, null, value);
        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode;

        } else if(this.length) {
            newNode._prevNode = this.tail;
            this.tail._nextNode = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this.tail;
    }

    _add(value) {
        let node = new MyNode(value);

        if (this.length) {
            this.tail._nextNode = node;
            node._prevNode = this.tail;
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
    constructor( value) {
        this._prevNode = null;
        this._nextNode = null;
        this.value = value;
    }
}