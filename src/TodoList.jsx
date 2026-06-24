
/*import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4() }
  ]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
  //   setTodos([...todos, { task: newTodo, id: uuidv4() }]);
  //   setNewTodo("");
  // };
  setTodos((prevTodos)=>{
    return [...prevTodos,{task:newTodo,id:uuidv4()}];
  });
  setNewTodo("");
  };


  let updateTodovalue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo =(id)=>{
    setTodos((prevTodos) =>todos.filter((todo)=> todo.id != id));

  };
let uppperCaseAll= ()=>{
  setTodos((prevTodos)=>{
  prevTodos.map((todo)=>{
    return {
      ...todo,
      task:todo.task.toUpperCase(),
    };
    })
  );
  

};
  

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodovalue}
      />

      <br />

      <button onClick={addNewTask}>Add Task</button>

      <hr />

      <h4>Task Todo</h4>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
        ))}
      </ol>
      <button onClick={uppperCaseAll}>upperclick</button>
    </div>
  );
}*/
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4() }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4() }
    ]);

    setNewTodo("");
  };

  const updateTodovalue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };
  // let UpperCaseOne =(id)=>{
  //   setTodos((prevTodos)=>
  //     prevTodos.map((todo)=>{
  //       if(todo.id == id){
  //         return {
  //           ...todo,
  //           task:todo.task.toUpperCase(),
  //         };
  //       }else{
  //         return todo;
  //       }
  //     })
  //   );
    
  // };
const UpperCaseOne = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: todo.task.toUpperCase(),
          }
        : todo
    )
  );
};
  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodovalue}
      />

      <br />
      <br />

      <button onClick={addNewTask}>Add Task</button>

      <hr />

      <h4>Task Todo</h4>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
             <button onClick={()=> UpperCaseOne(todo.id)}>UpperCaseOne</button>
          </li>
        ))}
      </ol>

      <button onClick={upperCaseAll}>
        Upper Case All Tasks
      </button>
     
    </div>
  );
}