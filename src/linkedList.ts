export class LinkedList<T> {
    head : Node<T> | null;
    tail : Node<T> | null;
    
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value : T){
        let node = new Node<T>(value);
        
        if(this.head == null || this.tail == null){
            this.head = node;
            this.tail = node;
            return;
        } 

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.tail.next = null;
    }

    delete(value : T){
        let current = this.head;
        while(current != null){
            if(current.value == value){
                break;
            }
            current = current.next;
        }

        if(current == null) return;
        
        if(this.size() == 1 || 0){
            this.head = null;
            this.tail = null;
            return;
        }

        if(current == this.head){
            this.head = this.head.next;
            if(this.head != null){
                this.head.prev = null;
            }
            return;
        }

        if(current == this.tail){
            this.tail = this.tail.prev;
            if(this.tail != null){
                this.tail.next = null;
            }
            return;
        }

        if(current.prev != null && current.next != null){
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        return;
    }

    search(value : T) : (number|null) {
        let index : number = 1;
        let current = this.head;

        while(current != null){
            if(current.value == value){
                return index;
            }
            index++;
            current = current.next;
        }

        return null;
    }

    getFirst() : (T|null) {
        if(this.head == null) return null;
        else return this.head.value;
    }
    
    getLast() : (T|null) {
        if(this.tail == null) return null;
        else return this.tail.value;
    }

    size() : number{
        let size = 0;
        let current = this.head;
        while(current != null){
            size++;
            current = current.next;
        }
        return size;
    }

    printList() : T []{
        let array:Array<T> = [];
        let current = this.head;
        while(current != null){
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}

class Node<T>{
    value : T;
    prev : Node<T> | null;
    next : Node<T> | null;

    constructor(value : T){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}