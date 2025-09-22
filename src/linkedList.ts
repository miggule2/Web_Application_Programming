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