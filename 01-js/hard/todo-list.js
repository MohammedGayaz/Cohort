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
  constructor (){
    this.todoList = []
  }

  add(task){
    this.todoList.push(task);
  }

  remove(indexNo){
    this.todoList.splice(indexNo, 1)
  }

  update(IndexNo, updateTask){
    if (IndexNo >= this.todoList.length)
      return
    this.todoList[IndexNo] = updateTask
  }

  getAll(){
    return this.todoList
  }

  get(IndexNo){
    if (IndexNo >= this.todoList.length)
      return null;
    return this.todoList[IndexNo]
  }

  clear(){
    this.todoList = []
  }
}

module.exports = Todo;
