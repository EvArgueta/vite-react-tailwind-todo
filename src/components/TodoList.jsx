import TodoItem from "./TodoItem";

const TodoList = ({ todos ,remoreTodo,updateTodo}) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} remoreTodo={remoreTodo} updateTodo={updateTodo}/>
            ))}
        </div>
    );
};

export default TodoList;
