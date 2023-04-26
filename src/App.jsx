import CrossIcon from "./components/icons/IconCross";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoCompute from "./components/TodoCompute";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos=[
  {id:1,title:"Complete online Javascript bluuweb Curse",completed:true},
  {id:2,title:"go to the gim",completed:false},
  {id:3,title:"10 minutos meditacion",completed:false},
  {id:4,title:"pick up grouceries",completed:true},
  {id:5,title:"Complete todo app on Frontend Mentor",completed:false},
]

const App = () => {
  const [todos,setTodos]=useState(initialStateTodos);
  const createTodo =(title)=>{
    const newTodo={
      id:Date.now(),
      title,
      completed:false,
    }
    setTodos([...todos,newTodo])
  }

  const remoreTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  const updateTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id ? {...todo,completed:!todo.completed}:todo))
  }

  const clearCompleted=()=>{
    setTodos(todos.filter((todo)=>!todo.completed))
  }

  const [filter,setFilter]=useState("all");

  const changeFilter=(filter)=>setFilter(filter);

  const filteredTodo=()=>{
    switch (filter){
      case "all": return todos;
      case "active": return todos.filter((todo)=> !todo.completed);
      case "completed": return todos.filter((todo)=> todo.completed);
      default : return todos;
    }
    
  };

  const computeItemsLeft=todos.filter((todo)=>!todo.completed).length
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            
            <Header/>

            <main className="container mx-auto mt-8 px-4">
              <TodoCreate createTodo={createTodo}/>
              <TodoList todos={filteredTodo()} remoreTodo={remoreTodo} updateTodo={updateTodo}/>
              <TodoCompute computeItemsLeft={computeItemsLeft} clearCompleted={clearCompleted}/>
              <TodoFilter changeFilter={changeFilter} filter={filter}/>
              
            </main>
            <footer className="mt-8 text-center">Drag and Drop</footer>
        </div>
    );
};

export default App;
