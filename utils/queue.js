class Queue{

  constructor(){
    this.items = [];
  }

  isEmpty(){
    return !(this.items.length > 0);
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue(){
    if(!this.isEmpty())
      return this.items.shift();
    else
      return null;
  }

  front(){
    if(!this.isEmpty())
      return this.items[0];
    else
      return null;
  }

  viewQueue(){
    return this.items;
  }
}

module.exports = Queue;