/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todolist=[];
  }

  add(todo){
    this.todolist.push(todo);
  }
  remove(indexOfTodo){
    this.todolist = this.todolist.filter((item, index) => index !== indexOfTodo);
  }
  update(index,updatedTodo){
    if(index>=0 && index<=this.todolist.length-1){
      this.todolist[index]=updatedTodo;
    }
  }
  getAll(){
    return this.todolist;
  }
  get(indexOfTodo){
    if(indexOfTodo>=0 && indexOfTodo<=this.todolist.length-1){
      return this.todolist[indexOfTodo];
    }
    else{
      return null;
    }
  }
  clear(){
    this.todolist.length=0;
  }

  // display(){
  //   for(let i=0;i<this.todolist.length;i++){
  //     console.log(this.todolist[i]);
  //   }
  // }
 

}

module.exports = Todo;

// let todoList=new Todo();
// todoList.add("hi")
// todoList.add("my name is")
// todoList.add("aman")

// todoList.remove(0);
// todoList.update(1,"Hey There!")
// console.log(todoList.get(0));
// todoList.display();



